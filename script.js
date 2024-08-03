window.addEventListener('load', ()=>{
    let selectedCircle
  const circles = document.querySelectorAll('.circle')
  circles.forEach(element => {
   element.addEventListener('mousedown', ()=>{
   element.style.position="absolute"
   selectedCircle= element
   window.addEventListener('mousemove',(e)=>{
if(selectedCircle){
    const x = e.pageX
    const y =e.pageY
    selectedCircle.style.left = x-50+"px"
    selectedCircle.style.top = y-50+"px"
}
   
   })

    })

  });
  window.addEventListener('mouseup', ()=>{
    selectedCircle=null;
  })

})