(function (window, document) {
    "use strict";

    /**
     * Simple pure JavaScript image slider with fade effect
     *
     * @constructor
     */
    function Carousel(lazyLoad) {
        this.carousel = document.querySelector('.content');
        this.slides = this.carousel.querySelectorAll('.part');
        this.visibleClassName = 'visible';
        this.delay = 7;
        this.currentSlide = -1;
        this.lazyLoad = lazyLoad;

        this.start();
    }

    Carousel.prototype.nextSlide = function () {
        for (var i = 0; i < this.slides.length; ++i) {
            utilities.removeClass(this.slides[i], this.visibleClassName);
        }

        this.currentSlide = (this.currentSlide + 1) % this.slides.length;

        this.lazyLoad.loadImage(this.slides[this.currentSlide]);
        utilities.addClass(this.slides[this.currentSlide], this.visibleClassName);
    };

    Carousel.prototype.start = function () {
        this.nextSlide();

        var that = this;
        setTimeout(function () {
            that.start();
        }, this.delay * 1000);
    };

    window.Carousel = Carousel;
}(window, document));