(function() {
 console.log();
 $('#styleSwitcherSimple').click(function(){
    if($(this).hasClass('theme-light'))
    {
        $(this).removeClass('theme-light').addClass("theme-dark");
       let xx = $(this).find( "i" )[0];
    //    xx.hasClass('fas fa-moon').addClass('fas fa-sun')
        $('html').addClass('dark');
        console.log("asdasd",xx);
    }
    else{
        $('html').removeClass('dark');
        $(this).removeClass('theme-dark').addClass("theme-light");
    }
 });
 $('.collapse-menu-icon-plus').click(function(){
     if($(this).hasClass('active-minus'))
     {
         $(this).removeClass('active-minus');
         $(this).parent('h2').siblings('.description-section').addClass('d-none');
     }
     else{
        $(this).addClass('active-minus');
        $(this).parent('h2').siblings('.description-section').removeClass('d-none');
     }
 });

 
})();