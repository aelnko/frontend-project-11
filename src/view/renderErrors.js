export default (feedback, i18nextInstance) => {
  const feedbackElement = document.querySelector('.feedback');
  const input = document.querySelector('input');
  if (feedback instanceof Error) {
    feedbackElement.textContent = i18nextInstance.t(`form.errors.${feedback.message}`);
    input.classList.add('is-invalid');
  }
};
