let prevScroll = 0;
let currScroll= 0;
function scrollFunc(){
    currScroll = scrollY;
  if (currScroll === 0) {
    headerContainerDOM.classList.remove('header-on-scroll-up');
  } else if (currScroll > prevScroll) {
    headerContainerDOM.classList.remove('header-on-scroll-up');
  } else if (prevScroll > currScroll) {
    headerContainerDOM.classList.add('header-on-scroll-up');
  }
  prevScroll = currScroll;
};
const headerContainerDOM = document.querySelector('.header-container');

export { scrollFunc}