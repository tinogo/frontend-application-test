"use strict";

/**
 * Some convenience methods for CSS class manipulation
 *
 * @type {{hasClass: Function, removeClass: Function, addClass: Function}}
 */
var utilities = {
    /**
     * Checks, whether the given CSS class name is assigned to the given element
     *
     * @param elem
     * @param className
     * @returns {boolean}
     */
    hasClass: function (elem, className) {
        return elem.className.search(new RegExp('(\\s|^)' + className + '(\\s|$)')) !== -1;
    },
    /**
     * Removes a CSS class from the given element
     *
     * @param elem
     * @param className
     */
    removeClass: function (elem, className) {
        if (this.hasClass(elem, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            elem.className = elem.className.replace(reg, ' ');
        }
    },
    /**
     * Adds a CSS class to the given element
     *
     * @param elem
     * @param className
     */
    addClass: function (elem, className) {
        if (!this.hasClass(elem, className)) {
            elem.className += ' ' + className;
        }
    }
};