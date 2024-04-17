import renderModal from './renderModal';

export default (result, state, i18nextInstance) => {
  const blockTitle = document.querySelector('.posts-title');
  blockTitle.textContent = 'Посты';
  const list = document.querySelector('.posts ul');
  const posts = result.map(({
    postTitle, postURL, postId, description,
  }) => {
    const li = document.createElement('li');
    li.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-start',
      'border-0',
      'border-end-0',
    );
    li.setAttribute('id', postId);

    const title = document.createElement('a');
    title.textContent = postTitle;
    title.setAttribute('href', postURL);
    title.classList.add(state.uiState.read.includes(postId) ? 'fw-normal' : 'fw-bold');

    const button = document.createElement('button');
    button.classList.add(
      'btn',
      'btn-outline-primary',
      'btn-sm',
      'open-modal',
    );
    button.textContent = i18nextInstance.t('form.view');
    button.setAttribute('data-title', postTitle);
    button.setAttribute('data-url', postURL);
    button.setAttribute('id', postId);
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#modal');

    button.addEventListener('click', () => {
      renderModal(postTitle, postURL, description);
      title.classList.remove('fw-bold');
      title.classList.add('fw-normal');
    });

    li.append(title);
    li.append(button);
    return li;
  });
  list.replaceChildren(...posts);
};
