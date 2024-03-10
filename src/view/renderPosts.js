export default (result) => {
  const blockTitle = document.querySelector('.posts-title');
  blockTitle.textContent = 'Посты';
  const list = document.querySelector('.posts ul');
  const posts = result.map(({ postTitle, postURL }) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');

    const title = document.createElement('a');
    title.classList.add('fw-bold');
    title.textContent = postTitle;
    title.setAttribute('href', postURL);

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-outline-primary', 'btn-sm');
    button.textContent = 'Просмотр';

    li.append(title);
    li.append(button);
    return li;
  });
  list.replaceChildren(...posts);
};
