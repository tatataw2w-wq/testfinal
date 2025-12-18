window.addEventListener('DOMContentLoaded', () => {
  const line = document.querySelector('.scroll-line');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollRatio = scrollTop / docHeight;
    const maxWidth = window.innerWidth;

    line.style.width = scrollRatio * maxWidth + 'px';
  });
});
