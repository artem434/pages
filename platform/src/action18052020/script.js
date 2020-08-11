System.register(["bootstrap"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
            jQuery(function ($) {
                $('[data-timer-2]').each(function (index, elem) {
                    var units = [86400, 3600, 60, 1];
                    var a = $(elem).data('timer-2').split(/[^0-9]/);
                    var due = new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
                    function pad(a) {
                        a = Math.floor(a);
                        if (a <= 0)
                            return '00';
                        return a < 10 ? '0' + a : a;
                    }
                    function update() {
                        var timeLeft = Math.floor((due.getTime() - new Date().getTime()) / 1000);
                        var u = units.map(function (s) {
                            var unit = (timeLeft < 0) ? 0 : Math.floor(timeLeft / s);
                            timeLeft -= unit * s;
                            return pad(unit);
                        });
                        $('.seconds', elem).text(pad(u[3]));
                        $('.minuts', elem).text(pad(u[2]));
                        $('.hours', elem).text(pad(u[1]));
                        $('.days', elem).text(pad(u[0]));
                    }
                    setInterval(update, 1000);
                });
            });
        }
    };
});
