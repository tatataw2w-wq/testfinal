const img = document.querySelector('.scroll-img');

window.addEventListener('scroll', () => {
  const imgTop = img.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // 이미지가 화면의 80% 지점에 들어오면
  if (imgTop < windowHeight * 0.8) {
    img.classList.add('active');
  }
});
