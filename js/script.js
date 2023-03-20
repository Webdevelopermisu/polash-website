function openNav(){document.getElementById("myNav").style.width="100%"}function closeNav(){document.getElementById("myNav").style.width="0%"}$(document).ready(function(){$(".js--services-section").waypoint(function(t){"down"==t?$("nav").addClass("sticky"):$("nav").removeClass("sticky")});mixitup(".container");$("a").on("click",function(t){var n;""!==this.hash&&(t.preventDefault(),n=this.hash,$("html,body").animate({scrollTop:$(n).offset().top},400,function(){window.location.hash=n}))})});


$(document).ready(function(){


    // typeing animation

    
    var typed = new Typed(".typing-1",{
        strings:["Digital Marketer","Freelancer"],
        typeSpeed:150,
        backSpeed:100,
        loop:true
    })
    var typed = new Typed(".typing-2",{
        strings:["Digital Marketer","Freelancer"],
        typeSpeed:150,
        backSpeed:100,
        loop:true
    })


});


// active navbar 

