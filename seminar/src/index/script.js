System.register(["jquery", "bootstrap", "cdnjs/slick-carousel/1.8.1/slick.min.js"], function (exports_1, context_1) {
    "use strict";
    var jquery_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {
            if (document.location.host != "7eminar.com") {
                jquery_1.default('#gift').hide();

            }
        }
    };
});
