const gtasa = document.getElementById('gtasaimg')
gtasa.addEventListener('mousemove',(e)=>{
    const {clientX,clientY}=e;
    const { clientWidth, clientHeight } = gtasa;
    // console.log(gtasa.offsetHeight)
    // console.log(gtasa.offsetLeft,clientX)
    
    // console.log(gtasa.getBoundingClientRect())
    const center  = {
        centerX:gtasa.getBoundingClientRect().x+gtasa.getBoundingClientRect().width/2,
        centerY:gtasa.getBoundingClientRect().y +gtasa.getBoundingClientRect().height/2,
    };
    // console.log(center.centerY,clientY)
    const xRotation= (clientX-center.centerX)/clientHeight*40;
    const yRotation= (clientY-center.centerY)/clientWidth*40*-1;
    gtasa.style.transform = `rotateX(${yRotation}deg) rotateY(${xRotation}deg) scale(1.1) translateZ(8px)`;
    gtasa.style.opacity=1
    gtasa.style.transition='opacity 0.3s ease-in-out'
    // console.log(gtasa.style.transform)
    
});

gtasa.addEventListener('mouseleave',(e)=>{
    gtasa.style.transform = 'rotateX(0) rotateY(0) translateZ(0px)';
    // console.log(gtasa.style.transform)
    gtasa.style.opacity=0.8
});


// Gta 4
const gta4 = document.getElementById('gta4img')
gta4.addEventListener('mousemove',(e)=>{
    const {clientX,clientY}=e;
    const { clientWidth, clientHeight } = gta4;
    // console.log(gtasa.offsetHeight)
    // console.log(gtasa.offsetLeft,clientX)
    
    // console.log(gtasa.getBoundingClientRect())
    const center  = {
        centerX:gta4.getBoundingClientRect().x+gta4.getBoundingClientRect().width/2,
        centerY:gta4.getBoundingClientRect().y +gta4.getBoundingClientRect().height/2,
    };
    // console.log(center.centerY,clientY)
    const yRotation= (clientX-center.centerX)/clientHeight*40*-1;
    const xRotation= (clientY-center.centerY)/clientWidth*40;
    gta4.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.1) translateZ(8px)`;
    gta4.style.opacity=1
    gta4.style.transition='opacity 0.3s ease-in-out'
    // console.log(gtasa.style.transform)
    
})
;
gta4.addEventListener('mouseleave',(e)=>{
    gta4.style.transform = 'rotateX(0) rotateY(0) translateZ(0px)';
    gta4.style.opacity=0.8

});


//GTA5

const gta5 = document.getElementById('gta5img')
gta5.addEventListener('mousemove',(e)=>{
    const {clientX,clientY}=e;
    const { clientWidth, clientHeight } = gta5;
    // console.log(gtasa.offsetHeight)
    // console.log(gtasa.offsetLeft,clientX)
    
    // console.log(gtasa.getBoundingClientRect())
    const center  = {
        centerX:gta5.getBoundingClientRect().x+gta5.getBoundingClientRect().width/2,
        centerY:gta5.getBoundingClientRect().y +gta5.getBoundingClientRect().height/2,
    };
    // console.log(center.centerY,clientY)
    const yRotation= (clientX-center.centerX)/clientHeight*40;
    const xRotation= (clientY-center.centerY)/clientWidth*40*-1;
    gta5.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.1) translateZ(8px)`;
    gta5.style.opacity=1
    gta5.style.transition='opacity 0.3s ease-in-out'

    
    // console.log(gtasa.style.transform)
    
});
gta5.addEventListener('mouseleave',(e)=>{
    gta5.style.transform = 'rotateX(0) rotateY(0) translateZ(0px)';
    gta5.style.opacity=0.8

});

//Battlefield

const btlfld = document.getElementById('btlfldimg')
btlfld.addEventListener('mousemove',(e)=>{
    const {clientX,clientY}=e;
    const { clientWidth, clientHeight } = btlfld;
    // console.log(gtasa.offsetHeight)
    // console.log(gtasa.offsetLeft,clientX)
    
    // console.log(gtasa.getBoundingClientRect())
    const center  = {
        centerX:btlfld.getBoundingClientRect().x+btlfld.getBoundingClientRect().width/2,
        centerY:btlfld.getBoundingClientRect().y +btlfld.getBoundingClientRect().height/2,
    };
    // console.log(center.centerY,clientY)
    const yRotation= (clientX-center.centerX)/clientHeight*40;
    const xRotation= (clientY-center.centerY)/clientWidth*40*-1;
    btlfld.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.1) translateZ(8px)`;
    btlfld.style.opacity=1
    btlfld.style.transition='opacity 0.3s ease-in-out'

    
    // console.log(gtasa.style.transform)
    
});
btlfld.addEventListener('mouseleave',(e)=>{
    btlfld.style.transform = 'rotateX(0) rotateY(0) translateZ(0px)';
    btlfld.style.opacity=0.8

});

// Factorio
const factorio = document.getElementById('fctrimg')
factorio.addEventListener('mousemove',(e)=>{
    const {clientX,clientY}=e;
    const { clientWidth, clientHeight } = factorio;
    // console.log(gtasa.offsetHeight)
    // console.log(gtasa.offsetLeft,clientX)
    
    // console.log(gtasa.getBoundingClientRect())
    const center  = {
        centerX:factorio.getBoundingClientRect().x+factorio.getBoundingClientRect().width/2,
        centerY:factorio.getBoundingClientRect().y +factorio.getBoundingClientRect().height/2,
    };
    // console.log(center.centerY,clientY)
    const yRotation= (clientX-center.centerX)/clientHeight*40;
    const xRotation= (clientY-center.centerY)/clientWidth*40*-1;
    factorio.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.1) translateZ(8px)`;
    factorio.style.opacity=1
    factorio.style.transition='opacity 0.3s ease-in-out'

    
    // console.log(gtasa.style.transform)
    
});
factorio.addEventListener('mouseleave',(e)=>{
    factorio.style.transform = 'rotateX(0) rotateY(0) translateZ(0px)';
    factorio.style.opacity=0.8

});


