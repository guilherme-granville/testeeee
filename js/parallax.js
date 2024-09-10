const page1Image = document.querySelector('.page2-image');
const page1ImageContainer = document.querySelector('.page2-image-container');
const scrollOffset = 1450; // Ajuste o valor conforme necessário

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const containerOffsetTop = page1ImageContainer.offsetTop;
  const containerHeight = page1ImageContainer.offsetHeight;
  const imageHeight = page1Image.offsetHeight;
  const maxScroll = imageHeight - containerHeight;

  if (scrollPosition >= containerOffsetTop + scrollOffset && scrollPosition <= containerOffsetTop + maxScroll + scrollOffset) {
    page1Image.style.transform = `translateY(-${(scrollPosition - containerOffsetTop - scrollOffset)}px)`;
  }
});