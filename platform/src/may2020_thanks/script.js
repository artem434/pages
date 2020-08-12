System.register(["jquery"], function (exports_1, context_1) {
    "use strict";
    var jquery_1, loaderPage;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            }
        ],
        execute: function () {
            loaderPage = jquery_1.default('#loader-page');
            loaderPage.delay(850).fadeOut('slow');
        }
    };
});
