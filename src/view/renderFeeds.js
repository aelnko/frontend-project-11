export default (result) => {
  const blockTitle = document.querySelector('.feeds-title');
  blockTitle.textContent = 'Фиды';
  const list = document.querySelector('.feeds ul');
  const feeds = result.map(({ title, description }) => {
    const li = document.createElement('li');

    const titleEl = document.createElement('h3');
    titleEl.classList.add('h6', 'm-0');
    titleEl.textContent = title;

    const descriptionEl = document.createElement('p');
    descriptionEl.classList.add('m-0', 'small', 'text-black-50');
    descriptionEl.textContent = description;
    li.classList.add('list-group-item', 'border-0', 'border-end-0');
    li.append(titleEl);
    li.append(descriptionEl);
    return li;
  });
  list.append(...feeds);
};
