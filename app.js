

var ul1 = document.getElementById("ul1");

var burger = document.getElementById("burger");
var nav = document.getElementById("navbar");
var a=0;

var anav2 = document.getElementById("ww"); 
var bod = document.getElementById('body');

//change and input
//search bar
const text1 = document.getElementById('text1');
const h1 = document.getElementById('h1');

text1.addEventListener('input',()=>{
    var te = text1.value;
    /* var h1text = h1.textContent; */
    const as = document.querySelectorAll("#h1");
    var i;
    /* console.log(te); */
    /* console.log(h1text); */
    for (i = 0;i<as.length;i++){
        var h1text = as[i].textContent;
        if(h1text.startsWith(te)===true){
            console.log('block');
            as[i].style.display='block';
        }else{
            console.log('none');
            as[i].style.display='none';
    
        }


    }
   /*  if(h1text.startsWith(te)===true){
        console.log('block');
        h1.style.display='block';
    }else{
        console.log('none');
        h1.style.display='none';

    } */

});






/* mouse leave effect
 document.addEventListener("mouseleave",()=>{
    alert("mouse out");
}); */
window.addEventListener('scroll',function(){
    if (window.scrollY >100){
        
        nav.style.opacity="0.92";

    }else{
        nav.style.opacity="1";

    }
});

/* anav2.addEventListener('click',()=>{
    
    ul1.classList.toggle("move");
    
}); */


var count =0;
burger.addEventListener('click',()=>{
    
    ul1.classList.toggle("move");
    if(count===0){
        count=1;
    }else{
        count=0;
    }
    
});

const scroll = new SmoothScroll(' a[href*="#"]',{
    speed:1400
    

});
/* anav2.addEventListener('click',function(){
    
    if(count===1){
        ul1.classList.remove('move');

    }

    

}); */


/* IntersectionObserver */
var sec3 = document.getElementById('o3');
var o4 = document.getElementById('o4');
var o5 = document.getElementById('o5');
var o6 = document.getElementById('o6');
var o7 = document.getElementById('o7');
var o8 = document.getElementById('o8');
var bigtitle = document.getElementById('bigtitle');
var bigphoto = document.getElementById('bigphoto');
var all8sec = document.getElementById('all8sec');

observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `anim1 2s forwards ease-out`;
    
    }
})

observer.observe(sec3);
var observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `anim1 2s forwards ease-out`;
    
    }
})

observer.observe(o6);



//

var observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `test 2s 0.2s forwards ease-out `;

    }
})


observer.observe(o4);
var observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `test 2s forwards ease-out `;

    }
})


observer.observe(o7);
//
var observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `right 2s forwards ease-out `;
    }
})


observer.observe(o5);
var observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `right 2s forwards ease-out `;

    }
})


observer.observe(o8);




//

var observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `anim2 1.4s forwards ease-out`;
        
    
    }
})

observer.observe(bigtitle);

/* var observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `anim3 1.2s forwards ease-out`;
    
    }
}) */

/* observer.observe(bigphoto);

var observer = new IntersectionObserver((entries)=> {
    if (entries[0].intersectionRatio>0){
        entries[0].target.style.animation = `anim4 2s forwards ease-out`;
    
    }
}) */

observer.observe(all8sec);


//images slider
const container = document.getElementById('container');
const imgs  = document.querySelectorAll('.container img');
const left = document.getElementById('left');
const right = document.getElementById('right');

var count = 1;
/* onst startwith = container.clientWidth;
container.style.transform = 'translateX(' + (-startwith) + 'px)'; 

right.addEventListener('click',function(){
    if(count>=imgs.length-1){
        return;
    }
    
    count++;
    container.style.transform = 'translateX(' + (-startwith*count) + 'px)'; 
    container.style.transition = 'transform 0.4s ease-in-out'
    /* imgs.forEach(img=>{
        img.style.animation = `jj 1.5s forwards ease-out`;
    }); 
    imgs[count].style.animation = `jj 1.5s forwards ease-out`; 
    console.log(count);
}); */

/* left.addEventListener('click',function(){
    if(count<=0){
        return;
    }
    count--;
    container.style.transform = 'translateX(' + (-startwith*count) + 'px)'; 
    container.style.transition = 'transform 0.4s ease-in-out';
    
    imgs[count].style.animation = `jj 1.5s  ease-out`; 
    console.log(count);
}); */

/* container.addEventListener('transitionend',()=>{
    if(imgs[count].id ==='last'){
        container.style.transition = 'none'; 
        count=imgs.length - 2 ;
        container.style.transform = 'translateX(' + (-startwith*count) + 'px)'; 

        
    }
    if(imgs[count].id ==='first'){
        container.style.transition = 'none'; 
        count=imgs.length - count;
        container.style.transform = 'translateX(' + (-startwith*count) + 'px)'; 

        
    }

}); */


/* observer = new IntersectionObserver((entries)=> {
    entries.forEach(entry=>{
        if (entry.intersectionRatio>0){
            entry.target.style.animation = `jj 0.5s forwards ease-out`;
        
    
    }})
    
})
imgs.forEach(img=>{
    observer.observe(img);
     
}) */




