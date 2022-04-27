// component imports

// components execution

/* header starts here */

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
addEventListener('scroll', scrollFunc);
/* header ends here */

/* scroll up button starts here */
/* scroll up button ends here */

/*  hero starts here */

const heroPlayDOM = document.querySelector('.hero-btn-play');
console.log(heroPlayDOM)
function heroplay () {
 
}

addEventListener('click', hero-play)
/*  hero ends here */

/*  key facts starts here */
/*  key facts ends here */

/*  countdown starts here */
/*  countdown ends here */

/*  course slide starts here */
/*  course slide ends here */

/*  course syllabus starts here */
const syllabusRowDOM = document.querySelectorAll('.syllabus-row');

for (let i = 0; i < syllabusRowDOM.length; i++){
    syllabusRowDOM[i].addEventListener('click', function(){
        for(let a = 0; a < syllabusRowDOM.length; a++) {
            syllabusRowDOM[a].classList.remove('syllabus-list-open');
        }
        syllabusRowDOM[i].classList.toggle('syllabus-list-open');
    });
}

/*  course syllabus ends here */

/*  course benefits starts here */
/*  course benefits ends here */

/*  pricing starts here */
/*  pricing ends here */

/*  reviews starts here */
/*  reviews ends here */

/*  contact form starts here */
/*  contact form ends here */

/*  instructors starts here */
/*  instructors ends here */

/*  footer starts here */
/*  footer ends here */
