"use strict";

var DigitalView = {
    el: null,

    init: function(id) {
        this.el = document.getElementById(id);
    },

    render: function(h, m, s) {
        // zweistellig machen falls einstellig
        var hh = h < 10 ? "0" + h : "" + h;
        var mm = m < 10 ? "0" + m : "" + m;
        var ss = s < 10 ? "0" + s : "" + s;

        this.el.textContent = hh + ":" + mm + ":" + ss;
    }
};
