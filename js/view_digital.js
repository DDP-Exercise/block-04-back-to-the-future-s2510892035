"use strict";

const DigitalView = {
    el: null,

    init: function(id) {
        this.el = document.getElementById(id);
    },

    render: function(h, m, s) {
        // zweistellig machen falls einstellig
        let hh = h < 10 ? "0" + h : "" + h;
        let mm = m < 10 ? "0" + m : "" + m;
        let ss = s < 10 ? "0" + s : "" + s;

        this.el.textContent = hh + ":" + mm + ":" + ss;
    }
};
