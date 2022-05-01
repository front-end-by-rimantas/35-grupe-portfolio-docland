// component imports
import "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
import { topFunction,scrollFunction} from '../components/backtotop.js';
import { slickSliderbr } from '../components/sliderbr.js';
import { heroPlay, heroPlayOff } from '../components/hero-play/hero-play.js';
import { scrollFunc } from '../components/header/header.js';

// components execution
$(() => {
  slickSliderbr("#slickslider");
  $("#backToTopBtn").on("click",topFunction);
});


/* header starts here */
addEventListener('scroll', scrollFunc);
/* header ends here */

/* scroll up button starts here */
/* scroll up button ends here */

/*  hero starts here */

const heroBtnPlay = document.querySelector('.hero-btn-play');
const heroVideoContainerDOM = document.querySelector('.hero-video-container');

heroBtnPlay.addEventListener('click', heroPlay);
heroVideoContainerDOM.addEventListener('click', heroPlayOff);

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
$(() => {
    slickSliderbr("#StudentReviews", 2 ,"#ikaire","#idesine");
    $("#backToTopBtn").on("click",topFunction);
  });
  
/*  reviews ends here */

/*  contact form starts here */
/*  contact form ends here */

/*  instructors starts here */
/*  instructors ends here */

/*  footer starts here */
/*  footer ends here */



window.onscroll = function() {scrollFunction()};
