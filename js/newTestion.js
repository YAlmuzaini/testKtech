$('.register__form').hide();

$("#someSwitchOptionInfo").change(function () {
    if ($(this).prop("checked") == true) {
        e.preventDefault();
        // $(this).addClass('active');
        // $('.register__button').removeClass('active');
        $('.login__form').show();
        $('.register__form').hide();
    } else {
        e.preventDefault();
        // $(this).addClass('active');
        // $('.sign-in__button').removeClass('active');
        $('.register__form').show();
        $('.login__form').hide();
    }
});

// // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementById("navbar").style.padding = "30px 10px";
//         document.getElementById("logo").style.fontSize = "25px";
//     } else {
//         document.getElementById("navbar").style.padding = "80px 10px";
//         document.getElementById("logo").style.fontSize = "35px";
//     }
// }

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.header-logo .logo-normal').attr('src', 'img/image003.png');
        }
        if ($(this).scrollTop() < 1000) {
            $('.header-logo .logo-normal').attr('src', 'img/logo1.svg');
        }
    })
});


// $('.sign-in__button').click(function (e) {
//     e.preventDefault();
//     $(this).addClass('active');
//     $('.register__button').removeClass('active');
//     $('.login__form').show();
//     $('.register__form').hide();
//     $('#edit-email').focus(); //Should appear after $('.login__form').show(); because if it's before that, the register form doesn't exist in the DOM
// });

// $('.register__button').click(function (e) {
//     e.preventDefault();
//     $(this).addClass('active');
//     $('.sign-in__button').removeClass('active');
//     $('.register__form').show();
//     $('.login__form').hide();
//     $('#edit-firstname').focus(); //Should appear after $('.register__form').show(); because if it's before that, the register form doesn't exist in the DOM
// });