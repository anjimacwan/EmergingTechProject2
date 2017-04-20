System.register(['./motivation.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var motivation_component_1;
    var MotivationRoutes;
    return {
        setters:[
            function (motivation_component_1_1) {
                motivation_component_1 = motivation_component_1_1;
            }],
        execute: function() {
            exports_1("MotivationRoutes", MotivationRoutes = [{
                    path: 'motivation',
                    component: motivation_component_1.MotivationComponent
                }]);
        }
    }
});
//# sourceMappingURL=motivation.routes.js.map