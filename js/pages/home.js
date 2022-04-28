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
const heroYoutubeDOM = document.querySelector('.hero-youtube');
const bodyDOM = document.querySelector('body');
const heroBtnPlay = document.querySelector('.hero-btn-play');
const heroVideoContainerDOM = document.querySelector('.hero-video-container')

function heroPlay() {
  bodyDOM.classList.add('hero-youtube-on');
  heroVideoContainerDOM.innerHTML += `
  <i class="hero-youtube-x fa fa-times"></i>
  <iframe class="hero-youtube" src="https://www.youtube.com/embed/8abN2imNoUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
  `
}

function heroPlayOff() {
  heroVideoContainerDOM.innerHTML -= `
  <i class="hero-youtube-x fa fa-times"></i>
  <iframe class="hero-youtube" src="https://www.youtube.com/embed/8abN2imNoUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
  `
  bodyDOM.classList.remove('hero-youtube-on');
}

heroBtnPlay.addEventListener('click', heroPlay)
heroVideoContainerDOM.addEventListener('click', heroPlayOff)


/* OR THIS WAY
 onclick="heroPlay()" -->  add in html next to hero-btn-play
 function heroPlay () {
    bodyDOM.classList.add('hero-youtube-on');

  onclick="turnPlayOff()" --> add in html next to hero-youtube-x
  function turnPlayOff () {
    bodyDOM.classList.remove('hero-youtube-on')
}
*/

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
