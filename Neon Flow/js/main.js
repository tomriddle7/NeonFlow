WinJS.Namespace.define("Sample", {

    currentMode: null,
    togglePlayPause: WinJS.UI.eventHandler(function (ev) {
        var status = document.querySelector(".status");

        Sample.currentMode = (Sample.currentMode === Sample.modes.play) ? Sample.modes.pause : Sample.modes.play;
        var command = ev.currentTarget;
        if (command.winControl) {
            status.textContent = command.winControl.section + " command " + command.winControl.label + " was pressed";
            command.winControl.label = Sample.currentMode.label;
            command.winControl.icon = Sample.currentMode.icon;
            command.winControl.tooltip = Sample.currentMode.tooltip;
        }
    }),
    outputCommand: WinJS.UI.eventHandler(function (ev) {
        var status = document.querySelector(".status");
        var command = ev.currentTarget;
        if (command.winControl) {
            var label = command.winControl.label || command.winControl.icon || "button";
            var section = command.winControl.section || "";
            var msg = section + " command " + label + " was pressed";
            /* status.textContent = msg; */
        }
    }),
    App1: WinJS.UI.eventHandler(function (ev) {
        var status = document.querySelector("p");
        var text = document.getElementById('textbar');
        var command = ev.currentTarget;
        if (command.winControl) {
            var msg = text.value;
            status.textContent = msg;
        }
    }),
    App2: WinJS.UI.eventHandler(function (ev) {
        var status = document.querySelector("p");
        var text = document.getElementById('textbar');
        var command = ev.currentTarget;
        if (command.winControl) {
            var msg = text.value;
            status.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px " + msg + ", 0 0 70px " + msg + ", 0 0 80px " + msg + ", 0 0 100px " + msg + ", 0 0 150px " + msg;
        }
    }),
    color: WinJS.UI.eventHandler(function (ev) {
        var status = document.querySelector("p");
        var command = ev.currentTarget;
        if (command.winControl) {
            var msg = command.winControl.label;
            status.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px " + msg + ", 0 0 70px " + msg + ", 0 0 80px " + msg + ", 0 0 100px " + msg + ", 0 0 150px " + msg;
        }
    })
});

WinJS.UI.processAll();