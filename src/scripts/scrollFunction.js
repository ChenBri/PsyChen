const scrollToId = (id) => {
  let element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

export { scrollToId };
