(function (window, document) {
    "use strict";

    var utilities = {
        hasClass: function (elem, className) {
            return elem.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        },
        removeClass: function (elem, className) {
            if (this.hasClass(elem, className)) {
                var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
                elem.className = elem.className.replace(reg, ' ');
            }
        },
        addClass: function (elem, className) {
            if (!this.hasClass(elem, className)) {
                elem.className += ' ' + className;
            }
        }
    };

    var lazyload = {
        isLoaded: function (elem) {
            return utilities.hasClass(elem, 'loaded');
        },
        loadImage: function (elem) {
            if (typeof elem == "object") {
                var images = elem.querySelectorAll('.lazy-load');

                for (var i = 0; i < images.length; ++i) {
                    if (!this.isLoaded(elem)) {
                        images[i].onload = function() {
                            utilities.addClass(this, 'loaded');
                        };
                        images[i].src = images[i].dataset.lazySrc;
                    }
                }
            }
        }
    };

    function Carousel() {
        this.carousel = document.querySelector('.content');
        this.slides = this.carousel.querySelectorAll('.part');
        this.delay = 5;
        this.currentSlide = -1;

        this.nextSlide();
    }

    Carousel.prototype.nextSlide = function () {
        for (var i = 0; i < this.slides.length; i += 1) {
            utilities.removeClass(this.slides[i], 'visible');
        }

        this.currentSlide = (this.currentSlide + 1) % this.slides.length;

        utilities.addClass(this.slides[this.currentSlide], 'visible');

        lazyload.loadImage(this.slides[this.currentSlide]);

        var that = this;
        setTimeout(function () {
            that.nextSlide();
        }, this.delay * 1000);
    };

    window.Carousel = Carousel;
}(window, document));