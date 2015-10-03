"use strict";

/**
 * Some convenience methods for CSS class manipulation
 *
 * @type {{hasClass: Function, removeClass: Function, addClass: Function}}
 */
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