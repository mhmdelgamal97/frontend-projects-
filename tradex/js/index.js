// $(document).ready(function(){

//     console.log("hello world");
//     $("div.sec8 div.container div.row div.col8").hover(function(){
//         $(this).find("div.slider").fadeIn();
//     },function(){
//         $(this).find("div.slider").fadeOut();
//     });

// })
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:2,
        margin:30,
        dots:false,
        loop:true,
        nav:true,
        navText:['<i class="fa-solid fa-arrow-left-long bg-primary p-2 left"></i>','<i class="fa-solid fa-arrow-right-long bg-primary p-2 right"></i>']
    });
    // $(".slideParent").hover(function(){
    //             $(this).find("div.slider").fadeIn(1000);

    //         },function(){
    //             $(this).find("div.slider").fadeOut(1000);
    //             // $(this).find("div.slider").css("opacity",0)
    //         });
    $(".to").click(function(){
        $(window).scrollTop(0);
    })
    $(window).scroll(function(){
        if($(this).scrollTop()>=600){
            $(".to").fadeIn("fast");
            $("nav").slideUp("fast");
        }
        else{
            $(".to").fadeOut("fast");
            $("nav").slideDown("fast");
        }
    })


})