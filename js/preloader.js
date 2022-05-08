
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0,0);
    setTimeout(() => {
        viewDOC();
    }, 2000);
});

function viewDOC(){
    preloader.classList.add('preloader_hide');
    document.body.className="";
}