export default (state, i18nextInstance) => {
  const title = document.querySelector('h1');
  const subtitle = document.querySelector('.lead');

  title.textContent = i18nextInstance.t('title');
  subtitle.textContent = i18nextInstance.t('subtitle');
};
