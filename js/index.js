
$(document).ready(function(){

  $("#navbutton").click(function(){
    $("#navtoggle").slideToggle("slow");
  });

  $( window ).resize(function() {
    if ($(window).width() > 890) $("#navtoggle").css("display","flex");
    else $("#navtoggle").css("display","none");
  });

  var header = document.querySelector("#navigation");
    var btns = header.querySelectorAll(".nav-item");

   
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }

    var landing =  document.querySelector("#landing")
    var about = document.querySelector("#about")
    var features = document.querySelector("#features")
    var commands = document.querySelector("#commands")
    var collaborator = document.querySelector("#collaborator")

    const arr = [landing,about,features,commands,collaborator];

    function isInViewport(element) {
        const bounding = element.getBoundingClientRect();
        var myElementHeight = element.offsetHeight;
        var myElementWidth = element.offsetWidth; 
        
        return (
          bounding.top >= 0 
          && bounding.left >= -myElementWidth
          && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
          && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight
        );
    }

    var elem = landing;

    window.onscroll = ()=>{
      arr.forEach((el)=>{
        if(isInViewport(el)) { 
          if(el.offsetHeight-el.offsetHeight-el.getBoundingClientRect().top<100){
            if(elem !== el){ 
              elem === el;
            }
            else {

            }
            // console.log(el,' active');
            // $('.nav-item').each(function () {
            //   $(this).removeClass('active');
            // })
            // el.className += " active";
          }
        }

      })
    }

});










    
//smoothscroll








// function isInViewport(element) {
//   const bounding = element.getBoundingClientRect();
//   var myElementHeight = element.offsetHeight;
//   var myElementWidth = element.offsetWidth;
//   return (
//     bounding.top >= -myElementHeight && 
//     bounding.left >= -myElementWidth &&
//     bounding.right <= window.innerWidth  + myElementWidth && 
//     bounding.bottom <= window.innerHeight +myElementHeight
//   );
// }

// var landing = document.querySelector('#landing');
// var about = document.querySelector('#about');
// var features = document.querySelector('#features');
// var collaborator = document.querySelector('#collaborator');
// var commands = document.querySelector('#commands');

// let arr = [landing, about, features, collaborator, commands];
// let saved = landing;

// window.onscroll =  () => {
//   arr.forEach((el)=>{
//     if(isInViewport(el) && saved==el) {
//       console.log(el, isInViewport(el));
//     }
//     else{ 
//       if(isInViewport(el)) saved = el;
//       console.log(el, isInViewport(el));
//     }
    
//     })
// }
