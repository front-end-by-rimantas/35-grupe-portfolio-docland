// component imports

// components execution

/* header starts here */
/* header ends here */

/* scroll up button starts here */
/* scroll up button ends here */

/*  hero starts here */
/*  hero ends here */

/*  key facts starts here */
/*  key facts ends here */

/*  countdown starts here */
/*  countdown ends here */

/*  course slide starts here */
/*  course slide ends here */

/*  course syllabus starts here */
const syllabusRowDOM = document.querySelectorAll('.syllabus-row');
const syllabusTopDOM = document.querySelectorAll('.syllabus-upper-part');
console.log(syllabusTopDOM.length)
const syllabusListDOM = document.querySelectorAll('.syllabus-list');
const syllabusUpDOM = document.querySelectorAll('.syllabus-angle-up');
const syllabusDownDOM = document.querySelectorAll('.syllabus-angle-down');


for (let i = 0; i < syllabusTopDOM.length; i++){
    
    syllabusRowDOM[i].addEventListener('click', function(){
        syllabusRowDOM[i].classList.toggle('syllabus-list-open');
        if (syllabusRowDOM[i].classList.contains('syllabus-list-open')) {
            console.log('atidaryta')
        } else console.log('uzdaryta')
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
