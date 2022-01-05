$(document).ready(function(){


    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });

    const bars = document.querySelectorAll('.progress_bar');
    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + "%";
        bar.style.width = percentage + "%";
    })

    //image filter

    var $wrapper = $('.portfolio_wrapper');

    //initialize isotope
    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');
    links.forEach(link =>{
        let selector = link.dataset.filter;
        link.addEventListener('click', function(e){
            e.preventDefault();


            $wrapper.isotope({
                filter: 'selector',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });



            links.forEach(link =>{
                link.classList.remove('active');
            })

            e.target.classList.add('active');

        });
    })

    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom : {
            enabled: true
        }
    });

    //slider
     
    $('.slider').slick({
        arrows: false,
        autoplay: true
    });
});