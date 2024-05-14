var tg=false;
document.getElementById("toggle-dd").addEventListener("click", ()=>{
   if(tg==false){
      document.getElementById("dd-menu").style.display="block";
      document.getElementById("dd-menu").style.zIndex="100";
      tg=true
   }
   else{
      document.getElementById("dd-menu").style.display="none";
      tg=false
   }
})


document.getElementById("hambar").addEventListener("click", ()=>{
      document.querySelector('.side-menu').style.display="flex"
})
document.getElementById("close").addEventListener("click", ()=>{
   document.querySelector('.side-menu').style.display="none"
})
   function sideBarClose(){
      document.querySelector('.side-menu').style.display="none"
   } 