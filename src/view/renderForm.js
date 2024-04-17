export default (state, i18nextInstance) => {
  const label = document.querySelector('label');
  const submitBtn = document.querySelector('.submit');
  const example = document.querySelector('.example');

  label.textContent = i18nextInstance.t('form.label');
  submitBtn.textContent = i18nextInstance.t('form.add');
  example.textContent = i18nextInstance.t('form.example');
};
