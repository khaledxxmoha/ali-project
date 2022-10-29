// let list = document.querySelectorAll('.list');
// for(let i=0; i<list.length; i++){
//     list[i].onclick = function(){
//         let j = 0;
//         while(j < list .length){
//             list[j++].className = 'list';
//         }
//         list[i].className = 'active';
//     }
// }

// const main = window.location.pathname;
// const navLinks = document.querySelectorAll('nav-middle a').forEach(link => {
//   if(link.href.includes(`${main}`)){
//     link.classList.add('active');
//     console.log(link);
//   }
// })



// const list = document.querySelectorAll(".list");
//         function activeLink() {
//             list.forEach(item => {
//                 item.classList.remove("active");
//                 this.classList.add("active");
//             });
//         }
//         list.forEach(item => {
//             item.addEventListener("click", activeLink);
// });

var btnContainer = document.getElementById("myDIV");
    
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("ali");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } 
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}



function DarkMode() {
  document.body.classList.toggle("dark");
}


function formdata() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var Message = document.getElementById("Message").value;
  var error = document.getElementById("error");
  
  var text ="";

  if (username.length < 4 ) {

      text="please enter valid username";
      error.innerHTML=text;
      return false;
  }
  else if (email.indexOf("@") == -1 ||  email.length < 6) {

      text="please enter valid email";
      error.innerHTML=text;
      return false;

  }

  else if( Message.length > 500 ){

      text="please enter fewer words ";
      error.innerHTML=text;
      return false;
  }
  else if( Message.length < 30 ){
    text="please enter more words ";
    error.innerHTML=text;
    return false;
  }
  else{
      alert("Thank you for your opinion, the message will be checked by the developers")
      return true;
  }
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);//
   if (this.scrollY >= 1000) {
   span.classList.add("show");
   } else {
     span.classList.remove("show");
   }
  // this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

