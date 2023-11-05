
function scrollConnect(){
    const button = document.querySelector('#connect-btn');
    const section = document.querySelector('#connect');
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
    });
};