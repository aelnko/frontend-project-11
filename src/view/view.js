const render = (path, value) => {
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  form.reset();
  input.focus();
  if (path === 'form.status') {
    if (value === 'invalid') {
      input.style.border = '1px solid red';
    } else if (value === 'valid') {
      input.style.border = 'none';
    }
  }
};

export default render;
