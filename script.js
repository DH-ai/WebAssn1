const gtasa = document.getElementById('gtasaimg')
gtasa.addEventListener('mousemove',(e)=>{
    const {clientX,clientY}=e;
    const { clientWidth, clientHeight } = gtasa;
    // console.log(gtasa.offsetHeight)
    // console.log(gtasa.offsetLeft,clientX)
    
    console.log(gtasa.offsetHeight,gtasa.offsetParent.offsetTop,clientY
    )
    const center  = {
        centerX:gtasa.offsetLeft+gtasa.offsetWidth/2,
        centerY:gtasa.offsetTop +gtasa.offsetHeight/2,
    }
    console.log(center)
    const xRotation = ((clientHeight/2 - clientY)/clientHeight)*10+60;
    const yRotation = ((clientX - clientWidth / 2) / clientWidth) * 10 +40;
    gtasa.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    console.log(gtasa.style.transform)
    
})

gtasa.addEventListener('mouseleave',(e)=>{
    gtasa.style.transform = 'rotateX(0) rotateY(0)';
})
