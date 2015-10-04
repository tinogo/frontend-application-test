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

    /**
     * Checks, whether the given image is already loaded or not
     *
     * @param elem
     * @returns {*}
     */
    LazyLoad.prototype.isLoaded = function (elem) {
        return utilities.hasClass(elem, this.loadedClassName);
    };

    /**
     * Convenience method to load the images
     *
     * @param elem
     */
    LazyLoad.prototype.loadImage = function (elem) {
        var selector = '.' + this.className;
        if (typeof elem == "object") {
            this.unveilImages(elem.querySelectorAll(selector));
        } else {
            this.unveilImages(document.querySelectorAll(selector));
        }
    };

    /**
     * Iterates over the given images and replaces the placeholder image with the actual one
     *
     * @param images
     */
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