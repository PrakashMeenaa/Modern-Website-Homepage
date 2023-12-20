const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function arrowfollowingcircle(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
    document.querySelector(".circle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px )scale(${xscale},${yscale})`;
    }
)}

function bound(){ 
    const t1=gsap.timeline();
    t1.from(
        '.header',
        {
            y:'100%',
            opacity:0,
            ease: Expo.easeInOut,
            duration:1.5
        }
    )
    t1.to(
        '.boundingelem',
        {
          y:0,
          ease: Expo.easeInOut,
          duration:1.5,
          stagger:.1,
          delay:-1.5
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
function circleScale(){
    // let xscale=1;
    // let yscale=1;
    // let xprev=0;
    // let yprev=0;
    //  let id;
    // window.addEventListener('mousemove', function (dets){
    //     clearTimeout(id);
    //     xscale= gsap.utils.clamp(0.8, 1.2, dets.clientX-xprev);
    //     yscale= gsap.utils.clamp(0.8, 1.2, dets.clientY-yprev);
        
    //     yprev=dets.clientY;
    //     xprev=dets.clientX;

    //     arrowfollowingcircle(xscale,yscale);
    //     id = setTimeout(function(){
    //         document.querySelector(".circle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px )scale(1,1)`
    //     },100);
    // })
    var totalX = 0;
    var totalY = 0;
    var scaleX = 1;
    var scaleY = 1;
    var id;
    document.addEventListener("mousemove", function(ev){
        clearTimeout(id)
        totalX = Math.abs(ev.movementX);
        totalY = Math.abs(ev.movementY);

        if(totalX<150 && totalY>150){
            scaleX=0.8;
            scaleY=1.2;
        }
        else if(totalX>150 && totalY<150){
            scaleY=0.8;
            scaleX=1.2;
        }
        
        arrowfollowingcircle(scaleX,scaleY);
        id = setInterval(function(){
        document.querySelector(".circle").style.transform=`translate(${ev.clientX}px, ${ev.clientY}px )scale(1,1)`
        totalX = totalY = 0;
        scaleX=scaleY=1;
        }, 100);
         }, false);
    }
    function rotateImage(){
        var rotate=0;
        var diffrot=0;
        document.querySelectorAll('.headingelem').forEach(function(elem){
            
            elem.addEventListener('mousemove',function(dets){
                
              var diff=dets.clientY-elem.getBoundingClientRect().top;
                diffrot=dets.clientX-rotate;
                rotate=dets.clientX;

                gsap.to(elem.querySelector('img'),
            {
                autoAlpha:1,
                top:diff,
                left:dets.clientX -elem.getBoundingClientRect().left,
                rotate:gsap.utils.clamp(-15,15,diffrot),
                ease:Power3
            })
            })
            elem.addEventListener('mouseleave',function(dets){
                gsap.to(elem.querySelector('img'),
                {
                    autoAlpha:0,
                    ease:Power3
                })
            })
            
        })
    }
    rotateImage();
circleScale();
bound();
