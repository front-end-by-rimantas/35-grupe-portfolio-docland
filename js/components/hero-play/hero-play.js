const bodyDOM = document.querySelector('body');
const videoEscBoxDOM = document.querySelector('.video-esc-box')


function heroPlay() {
    bodyDOM.classList.add('hero-youtube-on');
    videoEscBoxDOM.innerHTML += `
    <i class="hero-youtube-x fa fa-times"></i>
    <iframe class="hero-youtube" width="560" height="349" src="https://www.youtube.com/embed/8abN2imNoUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    `
  };
  
  function heroPlayOff() {
    videoEscBoxDOM.innerHTML -= `
    <i class="hero-youtube-x fa fa-times"></i>
    <iframe class="hero-youtube" src="https://www.youtube.com/embed/8abN2imNoUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    `
    bodyDOM.classList.remove('hero-youtube-on');
  };

  export { heroPlay, heroPlayOff}

/* OR THIS WAY
 onclick="heroPlay()" -->  add in html next to hero-btn-play
 function heroPlay () {
    bodyDOM.classList.add('hero-youtube-on');

  onclick="turnPlayOff()" --> add in html next to hero-youtube-x
  function turnPlayOff () {
    bodyDOM.classList.remove('hero-youtube-on')
}
*/