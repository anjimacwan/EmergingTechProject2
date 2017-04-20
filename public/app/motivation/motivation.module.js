System.register(['@angular/core', '@angular/common', '@angular/forms', '@angular/router', './motivation.routes', './motivation.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, forms_1, router_1, motivation_routes_1, motivation_component_1;
    var MotivationModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (motivation_routes_1_1) {
                motivation_routes_1 = motivation_routes_1_1;
            },
            function (motivation_component_1_1) {
                motivation_component_1 = motivation_component_1_1;
            }],
        execute: function() {
            MotivationModule = (function () {
                function MotivationModule() {
                }
                MotivationModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            router_1.RouterModule.forChild(motivation_routes_1.MotivationRoutes),
                        ],
                        declarations: [
                            motivation_component_1.MotivationComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MotivationModule);
                return MotivationModule;
            }());
            exports_1("MotivationModule", MotivationModule);
        }
    }
});
//# sourceMappingURL=motivation.module.js.map