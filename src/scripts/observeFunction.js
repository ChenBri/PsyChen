const observe = (section, animated, removeClass) => {
  let obsOptions = {
    root: null,
    threshold: 0.75,
  };

  let obsCallback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animated.classList.remove(removeClass);
        observer.unobserve(section);
      }
    });
  };

  let observer = new IntersectionObserver(obsCallback, obsOptions);
  observer.observe(section);
};

export { observe };
