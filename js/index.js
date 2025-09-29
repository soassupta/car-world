window.addEventListener("load",function(){
    console.log("welcome to our car World Website");
});
const cards=document.querySelectorAll('.card');
cards.foreach(card=>{
    card.addEventListener('mouseenter',()=>{
        card.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)';
    })
 card.addEventListener('mouseleave',()=>{
        card.style.boxShadow='0 2px 6px rgba(0,0,0,0.1)';
    })
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
        anchor.addEventListener("click",function(e){
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior:"smooth"
            });
        });
    });