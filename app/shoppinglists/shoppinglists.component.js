"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var shoppinglist_service_1 = require('./shoppinglist.service');
var ShoppingListComponent = (function () {
    function ShoppingListComponent(_shoppingListService) {
        this._shoppingListService = _shoppingListService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoppingLists = [];
        this._shoppingListService
            .getShoppingLists()
            .then(function (shoppingLists) {
            _this.shoppingLists = shoppingLists;
        })
            .catch(function (error) { return _this.error = error; });
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            selector: 'my-shoppinglists',
            templateUrl: 'app/shoppinglists/shoppinglists.component.html',
            providers: [shoppinglist_service_1.ShoppingListService],
        }), 
        __metadata('design:paramtypes', [shoppinglist_service_1.ShoppingListService])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shoppinglists.component.js.map