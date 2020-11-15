(function () {
    console.log();
    $('#styleSwitcherSimple').click(function () {
        if ($(this).hasClass('theme-light')) {
            $(this).removeClass('theme-light').addClass("theme-dark");
            let xx = $(this).find("i")[0];
            //    xx.hasClass('fas fa-moon').addClass('fas fa-sun')
            $('html').addClass('dark');
            console.log("asdasd", xx);
        }
        else {
            $('html').removeClass('dark');
            $(this).removeClass('theme-dark').addClass("theme-light");
        }
    });
    $('.collapse-menu-icon-plus').click(function () {
        if ($(this).hasClass('active-minus')) {
            $(this).removeClass('active-minus');
            $(this).parent('h2').siblings('.description-section').addClass('d-none');
        }
        else {
            $(this).addClass('active-minus');
            $(this).parent('h2').siblings('.description-section').removeClass('d-none');
        }
    });

    $('div.toggle > .toggle label').click(function () {

        setTimeout(() => {
            if ($(this).parent().hasClass('active')) {
                let imageOne = document.getElementById('toggled-images-1');
                let imageTwo = document.getElementById('toggled-images-2');
                if ($(this).attr('id') == 'laptop-view') {
                   imageOne.classList.remove("toggleFadeOut")
                   imageOne.classList.add("toggleFadeIn")
                   imageTwo.classList.remove("toggleFadeIn")
                   imageTwo.classList.add("toggleFadeOut")
                        
                } else if ($(this).attr('id') == 'desktop-view') {
                    imageTwo.classList.remove("toggleFadeOut")
                    imageTwo.classList.add("toggleFadeIn")
                    imageOne.classList.remove("toggleFadeIn")
                    imageOne.classList.add("toggleFadeOut")
                }

            }
        }, 500);

    });


})();