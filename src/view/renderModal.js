export default (title, url, description) => {
  const modal = document.querySelector('.modal');
  modal.classList.add('show');
  const modalTitle = document.querySelector('.modal-title');
  const modalBody = document.querySelector('.modal-body');
  const linkButton = document.querySelector('.full-article');
  modalTitle.textContent = title;
  modalBody.textContent = description;
  linkButton.href = url;

  const closeModal = modal.querySelector('.close');
  closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
  });
};
