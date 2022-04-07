window.onscroll = () =>{
    if(window.scrollY > 60){
       document.querySelector('.header').classList.add('active');
    } 
    else{
       document.querySelector('.header').classList.remove('active');
    }
 }