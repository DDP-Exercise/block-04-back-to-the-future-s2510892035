"use strict";

var AnalogueView = {
    canvas: null,
    ctx: null,

    init: function(id) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
    },

    render: function(h, m, s) {
        var ctx = this.ctx;
        var mitte = this.canvas.height / 2;
        var radius = mitte - 10;

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // kreis zeichnen
        ctx.beginPath();
        ctx.arc(mitte, mitte, radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,0,0,0.55)";
        ctx.fill();
        ctx.strokeStyle = "#1af0c4";
        ctx.lineWidth = 3;
        ctx.stroke();

        // die 12 striche
        for (var i = 0; i < 12; i++) {
            var winkel = (i / 12) * Math.PI * 2 - Math.PI / 2;
            ctx.beginPath();
            ctx.moveTo(
                mitte + Math.cos(winkel) * (radius - 8),
                mitte + Math.sin(winkel) * (radius - 8)
            );
            ctx.lineTo(
                mitte + Math.cos(winkel) * (radius - 18),
                mitte + Math.sin(winkel) * (radius - 18)
            );
            ctx.strokeStyle = "#1af0c4";
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        // stundenzeiger
        // stunden gehen von 0-12 also mal 2 damit der winkel stimmt
        var hWinkel = ((h % 12) / 12 * Math.PI * 2) + (m / 60 * (Math.PI * 2 / 12)) - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(mitte, mitte);
        ctx.lineTo(mitte + Math.cos(hWinkel) * (radius * 0.55), mitte + Math.sin(hWinkel) * (radius * 0.55));
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.stroke();

        // minutenzeiger
        var mWinkel = (m / 60 * Math.PI * 2) + (s / 3600 * Math.PI * 2) - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(mitte, mitte);
        ctx.lineTo(mitte + Math.cos(mWinkel) * (radius * 0.75), mitte + Math.sin(mWinkel) * (radius * 0.75));
        ctx.strokeStyle = "#dddddd";
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.stroke();

        // sekundenzeiger
        var sWinkel = (s / 60 * Math.PI * 2) - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(mitte, mitte);
        ctx.lineTo(mitte + Math.cos(sWinkel) * (radius * 0.88), mitte + Math.sin(sWinkel) * (radius * 0.88));
        ctx.strokeStyle = "#1af0c4";
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.stroke();

        // punkt in der mitte
        ctx.beginPath();
        ctx.arc(mitte, mitte, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#1af0c4";
        ctx.fill();
    }
};
