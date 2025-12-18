const lockSections = document.querySelectorAll('.lock-section');

lockSections.forEach((lockSection) => {
  const panels = lockSection.querySelectorAll('.panel');

  let current = 0;
  let isInside = false;
  let isLocked = false;
  let isAnimating = false;


  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !isLocked) {
        isLocked = true;

 
        lockSection.style.height = `${window.innerHeight}px`;

        const rect = lockSection.getBoundingClientRect();
        const y =
          window.scrollY +
          rect.top -
          window.innerHeight * 0.3;

        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });

        setTimeout(() => {
          isInside = true;
          current = 0;

          panels.forEach((p) => p.classList.remove('active'));
          panels[0].classList.add('active');
        }, 600);
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(lockSection);

  window.addEventListener(
    'wheel',
    (e) => {
      if (!isLocked) return;

      const rect = lockSection.getBoundingClientRect();
      const inSection =
        rect.top <= window.innerHeight * 0.3 &&
        rect.bottom >= window.innerHeight * 0.7;

      if (!inSection) return;

   
      e.preventDefault();

      if (!isInside || isAnimating) return;

      if (current === 0 && e.deltaY < 0) {
        isInside = false;
        isLocked = false;

        lockSection.style.height = 'auto';
        return;
      }

      if (current === panels.length - 1 && e.deltaY > 0) {
        isInside = false;
        isLocked = false;


        lockSection.style.height = 'auto';
        return;
      }

      isAnimating = true;

      panels[current].classList.remove('active');
      current += e.deltaY > 0 ? 1 : -1;
      panels[current].classList.add('active');

      setTimeout(() => {
        isAnimating = false;
      }, 700);
    },
    { passive: false }
  );
});
