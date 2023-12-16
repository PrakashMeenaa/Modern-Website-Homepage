const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function arrowfollowingcircle(){
    window.addEventListener("mousemove", function(dets){
    document.querySelector(".circle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px)`;
    }
)}
function bound(){ 
    const t1=gsap.timeline();
    t1.from(
        '.header',
        {
            y:'20',
            opacity:0,
            ease: Expo.easeInOut,
            duration:.5
         }
    )
    t1.to(
        '.boundingelem',
        {
          y:0,
          ease: Expo.easeInOut,
          duration:1.2,
          stagger:.1
        }
    )
    t1.to(
        '.boundingelem1',
        {
            y:0,
            ease: Expo.easeInOut,
            duration:1.2,
            stagger:.2,
            delay:-1
          }
    )
    t1.from(
        '.footer',
        {
           y:'100%',
           opacity:0,
           ease: Expo.easeInOut,
           delay:-.49
           
        }
    )
}
arrowfollowingcircle();
bound();