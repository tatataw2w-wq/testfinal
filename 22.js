window.addEventListener("load", () => {
  const imgs = document.querySelectorAll(".red-image img");
  const STEPS = 6;

  if (imgs.length === 0) {
    console.log("이미지를 찾지 못함");
    return;
  }

  window.addEventListener("scroll", () => {
    imgs.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const vh = window.innerHeight;

      let progress = (vh - rect.top) / vh;
      progress = Math.min(Math.max(progress, 0), 1);

      const step = Math.floor(progress * STEPS) / STEPS;

      img.style.filter =
        "grayscale(100%) " +
        `sepia(${step * 100}%) ` +
        `saturate(${1 + step * 3}) ` +
        "hue-rotate(-53deg) " +
        `brightness(${1 - step * 0.1}) ` +
        `contrast(${1 - step * 0.1})`;
    });
  });
});