const btnEL = document.querySelector(".btn") ;

btnEL.addEventListener("mouseover" , (event)=> {
  const x = (event.pageX - btnEL.offsetLeft)
  const y = (event.pageY - btnEL.offseTop);
  btnEL.style.setProperty("--xpos", x + "px");
  btnEL.style.setProperty("--ypos", y + "px");
});