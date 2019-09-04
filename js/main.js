$(document).ready(function() {
    $('#about').click(function() {
        $('html, body').animate({
            scrollTop: $('#about_section').offset().top-150
        }, 'slow')
    })
    $('#projects').click(function() {
        $('html, body').animate({
            scrollTop: $('#project_section').offset().top-65
        }, 'slow')
    })
    $('#talks').click(function() {
        $('html, body').animate({
            scrollTop: $('#talk_section').offset().top-100
        }, 'slow')
    })
    $('#contact').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact_section').offset().top
        }, 'slow')
    })

    // Mobile
    $('#about_mobile').click(function() {
        $('html, body').animate({
            scrollTop: $('#about_section').offset().top-80
        }, 'slow')
        sidebar.classList.remove('active');
        backdrop.style.display = 'none';
    })
    $('#projects_mobile').click(function() {
        $('html, body').animate({
            scrollTop: $('#project_section').offset().top-65
        }, 'slow')
        sidebar.classList.remove('active');
        backdrop.style.display = 'none';
    })
    $('#talks_mobile').click(function() {
        $('html, body').animate({
            scrollTop: $('#talk_section').offset().top-80
        }, 'slow')
        sidebar.classList.remove('active');
        backdrop.style.display = 'none';
    })
    $('#contact_mobile').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact_section').offset().top-80
        }, 'slow')
        sidebar.classList.remove('active');
        backdrop.style.display = 'none';
    })

    // Footer Links
    $('#about_').click(function() {
        $('html, body').animate({
            scrollTop: $('#about_section').offset().top-150
        }, 'slow')
    })
    $('#projects_').click(function() {
        $('html, body').animate({
            scrollTop: $('#project_section').offset().top-65
        }, 'slow')
    })
    $('#talks_').click(function() {
        $('html, body').animate({
            scrollTop: $('#talk_section').offset().top-100
        }, 'slow')
    })
    $('#contact_').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact_section').offset().top
        }, 'slow')
    })

    // Scroll
    $(window).scroll(function() {
        let scrollDistance = $(window).scrollTop();
        
        if($(window).scrollTop() > 400) {
            $('.backToTop').addClass('show');
        } else {
            $('.backToTop').removeClass('show');
        }
        if($(window).scrollTop() > 400) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    })
    $('.backToTop').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    })
})