const observe = (section, animated, removeClass, threshold) => {
  let obsOptions = {
    root: null,
    threshold: threshold,
  };

  let obsCallback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        for (let customClass of removeClass) {
          animated.classList.remove(customClass);
        }
        animated.classList.remove(removeClass);
        observer.unobserve(section);
      }
    });
  };

  let observer = new IntersectionObserver(obsCallback, obsOptions);
  observer.observe(section);
};

export { observe };
