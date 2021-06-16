

// for videos of Yaari with yuvi
function playvideo(file,id)
{
   myvideo.src=file;
  
   var st= document.getElementById(id)
   var c= document.querySelectorAll(".small-img-row");
   for(var i=0;i<c.length;i++)
   {
   c[i].style.backgroundColor="white";
  // c[i].style.color="black";
   }
  // c.style.backgroundColor="white";
   //console.log(c);

   st.style.backgroundColor="rgb(125, 195, 228)";
  // st.style.fontColor="white";
   
}


//for videos of our latest works
var video= document.querySelectorAll("video")
video.forEach(play=>play.addEventListener('click',()=>
{

   play.classList.toggle('active');
   if(play.paused)
   {
       play.play()
   }
   else
   {
       play.pause();
       play.currentTime=0;
   }
}))


//for smmoth scrolling

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });




  //for testimonials carousel
  
  $(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[990,2],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true
    });
});