//--------------------------------------------------------------------//
    //-----------------    ISOTOPES    --------------------//
    //--------------------------------------------------------------------//
    function isotopeMasonry() {
        $(".isotope-gutter").isotope({
            itemSelector: '.product__col',
            percentPosition: true
        });
        $(".isotope-no-gutter").isotope({
            itemSelector: '.product__col',
            percentPosition: true,
            masonry: {
                columnWidth: 1
            }
        });

        $(".filter__tabs a").on("click", function () {
            $(".filter__tabs a").removeClass("active");
            $(this).addClass("active");

            // portfolio fiter
            var selector = $(this).attr("data-filter");
            $(".isotope-gutter").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false
                }
            });
            return false;
        });
    }



$(document).ready(function () {
    isotopeMasonry();
    // nint dr Slider
    $('.example-animation').DrSlider();
});