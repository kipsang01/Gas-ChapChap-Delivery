$(document).ready(function(){
  var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 4000); 
    }
})
document.getElementById("submit").addEventListener(("click"), function () {
  let userName =document.getElementById("name").value
    let email=document.getElementById("email").value
    let  message=document.getElementById("texta").value
    const em= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(userName===null||userName===""){
    alert("Please Write your Name")
    }
    else if(email===""|email===null){
      alert("Please write your email")
   }
    else if (message===""||message===null){
    alert("Please write your message")
    }
    else if(email.match(em) && email!="" && message !="" && userName !=""){
      alert(`${userName} we have received your message. Thank you for reaching out to us.`)
  
    }
  })