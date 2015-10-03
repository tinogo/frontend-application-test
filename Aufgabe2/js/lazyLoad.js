(function (window, document) {
    "use strict";

    /**
     * Very minimalistic image lazy loading
     *
     * @constructor
     */
    function LazyLoad() {
        this.className = 'lazy-load';
        this.loadedClassName = 'loaded';

        this.init();
    }

    LazyLoad.prototype.init = function () {
        var that = this,
            images = document.querySelectorAll('.' + this.className);

        for (var i = 0; i < images.length; ++i) {
            images[i].addEventListener('load', function () {
                utilities.addClass(this, that.loadedClassName);
            });
        }
    };

    LazyLoad.prototype.isLoaded = function (elem) {
        return utilities.hasClass(elem, this.loadedClassName);
    };

    LazyLoad.prototype.loadImage = function (elem) {
        var selector = '.' + this.className;
        if (typeof elem == "object") {
            this.unveilImages(elem.querySelectorAll(selector));
        } else {
            this.unveilImages(document.querySelectorAll(selector));
        }
    };

    LazyLoad.prototype.unveilImages = function (images) {
        for (var i = 0; i < images.length; ++i) {
            // Do nothing, if the image is already loaded
            if (this.isLoaded(images[i])) {
                continue;
            }

            images[i].src = images[i].dataset.lazySrc;
        }
    };

    window.LazyLoad = LazyLoad;
}(window, document));