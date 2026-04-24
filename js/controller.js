"use strict";
/*******************************************************
 *     Back to the Future - 100p
 *
 *     Marty! Marty can you read me? This is Doc Brown,
 *     im messaging you from the Year of 1955!
 *
 *     The Flux Capacitor worked and I traveled back in time!
 *     I don't have time to explain all the details, but
 *     time itself is of the essence Marty! As proud as I am
 *     of my achievement, it seems like I can't come back to
 *     the future. At least not without your help!
 *
 *     Do you remember the Wrist-watch I gave you? You need
 *     to sync its hands to match the digital clock of the
 *     Delorean! Only when they are perfectly in sync, the
 *     Flux Capacitor can bring me back to 1985!
 *
 *     I think it's best to create a model first, which keeps
 *     track of the true time. Once we got that, we can sync
 *     the two clocks in separate views. Yours, analogue and
 *     animated, mine digital. Use this controller file to
 *     glue everything together!
 *
 *     Our clocks should be synced in no-time! Got it?
 *     No - Time! *laughs nervously*. Unfortunatley, I only
 *     have enough fuel for one ride. So we need to be 100%
 *     certain that it works. I'd suggest you add a button somewhere
 *     that saves the current time into the localStorage.
 *
 *     Now hurry Marty! Or I will be stuck in the past forever!
 *
 *     Doc Brown - 1955-11-05
 *******************************************************/

// HINT:
// setInterval(functionName, 1000); will call functionName() every 1000 miliseconds.

function tick() {
    TimeModel.update();

    let h = TimeModel.getHours();
    let m = TimeModel.getMinutes();
    let s = TimeModel.getSeconds();

    AnalogueView.render(h, m, s);
    DigitalView.render(h, m, s);
}

document.addEventListener("DOMContentLoaded", function() {
    AnalogueView.init("analogClock");
    DigitalView.init("digitalClock");

    // schauen ob schon was gespeichert ist
    let gespeichert = TimeModel.load();
    if (gespeichert != null) {
        let hh = gespeichert.h < 10 ? "0" + gespeichert.h : "" + gespeichert.h;
        let mm = gespeichert.m < 10 ? "0" + gespeichert.m : "" + gespeichert.m;
        let ss = gespeichert.s < 10 ? "0" + gespeichert.s : "" + gespeichert.s;
        document.getElementById("savedTime").textContent = "gespeichert: " + hh + ":" + mm + ":" + ss;
    }

    document.getElementById("saveBtn").addEventListener("click", function() {
        TimeModel.save();
        let h = TimeModel.getHours();
        let m = TimeModel.getMinutes();
        let s = TimeModel.getSeconds();
        let hh = h < 10 ? "0" + h : "" + h;
        let mm = m < 10 ? "0" + m : "" + m;
        let ss = s < 10 ? "0" + s : "" + s;
        document.getElementById("savedTime").textContent = "gespeichert: " + hh + ":" + mm + ":" + ss;
    });

    tick();
    setInterval(tick, 1000);
});
