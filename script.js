function myMenuFunction() {
    var menuBth = document.getElementById("mynavMenu");

  if (menuBth.className === "4nav-menu"){
   menuBth.className +=" responsive "; 
  } else{
    menuBth.className = " nav-menu ";
  }
}


/*----dark-mode-----*/

const body = document.querySelector("body"),
 toggleSwitch=document.getElementById("toggle-switch");

 toggleSwitch.addEventListener("click" , ()=> {
  body.classList.toggle("dark");
 });


 /*-----Typing Effect---*/



 /*---Scroll animation---*/

 const sr =ScrollReveal({
  origin: "top",
  distance: "80px",
  duration:2000,
  reset: true,
 }); 

 sr.reveal(".featured-name", {dealy:100});
 sr.reveal(".text-info",{ delay:200});
 sr.reveal(".text-btn",{ delay:200});
 sr.reveal(".social_icons",{ delay:200});
 sr.reveal(".featured-image",{ delay:320});

 sr.reveal(".project-box", {interval :200});

 sr.reveal(".top-header", {});


 const srLeft =ScrollReveal({
  origin:"left",
  distance:"80px",
  duration: 2000,
  reset: true,
 })

 srLeft.reveal("about-info",{dealy: 100});
 srLeft.reveal("contact-info",{dealy: 100});


 const srRight =ScrollReveal({
  origin:"left",
  distance:"80px",
  duration: 2000,
  reset: true,
 })

 srRight.reveal("skill",{dealy: 100});
 srRight.reveal("skill-box",{dealy: 100});



