"use strict";

var TimeModel = {
    stunde: 0,
    minute: 0,
    sekunde: 0,

    update: function() {
        var jetzt = new Date();
        this.stunde = jetzt.getHours();
        this.minute = jetzt.getMinutes();
        this.sekunde = jetzt.getSeconds();
    },

    getHours: function() {
        return this.stunde;
    },

    getMinutes: function() {
        return this.minute;
    },

    getSeconds: function() {
        return this.sekunde;
    },

    save: function() {
        var zeitObjekt = {
            h: this.stunde,
            m: this.minute,
            s: this.sekunde
        };
        localStorage.setItem("gespeicherteZeit", JSON.stringify(zeitObjekt));
    },

    load: function() {
        var daten = localStorage.getItem("gespeicherteZeit");
        if (daten == null) {
            return null;
        }
        return JSON.parse(daten);
    }
};
