document.addEventListener("DOMContentLoaded", function() {
var speaker = document.getElementsByClassName('speaker-listing');
var bio = document.getElementsByClassName('bio');

  document.getElementById('navbar').addEventListener('mouseover', function(){
      if (this.classList.contains('default')){
        this.classList.remove('default');
        this.classList.add('nav-expand');
      }
    });

  document.getElementById('navbar').addEventListener('mouseout', function(){
      if (this.classList.contains('nav-expand')){
        this.classList.remove('nav-expand');
        this.classList.add('default');
      }
    });

});




// FOR BOUNCING ARROW ON HOMEPAGE LOAD

// window.setInterval(function bounceArrow(){
// $( "#bounce-arrow" ).effect( "bounce", { times: 3 }, "slow" );
// }, 5000);

