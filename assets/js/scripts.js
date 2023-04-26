let nav = document.queryselector('nav');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 100){
        nav.classList.add('bg-dark');
    } else{
        nav.classList.remove('bg-dark');
    }
});