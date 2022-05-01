function formsButton() {
    const formsSubmitDOM = document.querySelectorAll('.forms > button');
    let i;
    for (i = 0; i < formsSubmitDOM.length; i++){
        formsSubmitDOM[i].addEventListener('click', (e) => {
            e.preventDefault();
            console.log('labas')})
    }
}
export { formsButton }