export default (feedback, i18nextInstance) => {
  const feedbackElement = document.querySelector('.feedback');
  const input = document.querySelector('input');
  if (feedback instanceof Error) {
    feedbackElement.textContent = i18nextInstance.t(`form.errors.${feedback.message}`);
    feedbackElement.classList.add('text-danger');
    feedbackElement.classList.remove('text-success');
    input.classList.add('is-invalid');
  } else if (feedback === 'success') {
    feedbackElement.textContent = i18nextInstance.t('form.success');
    input.classList.remove('is-invalid');
    feedbackElement.classList.add('text-success');
    feedbackElement.classList.remove('text-danger');
  }
};
