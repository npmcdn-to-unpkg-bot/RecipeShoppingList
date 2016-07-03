System.register(['angular2/core', './modal.service'], function(exports_1, context_1) {
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
    var core_1, modal_service_1;
    var KEY_ESC, ModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (modal_service_1_1) {
                modal_service_1 = modal_service_1_1;
            }],
        execute: function() {
            KEY_ESC = 27;
            let ModalComponent = class ModalComponent {
                constructor(modalService) {
                    this._defaults = {
                        title: 'Confirmation',
                        message: 'Do you want to cancel your changes?',
                        cancelText: 'Cancel',
                        okText: 'OK'
                    };
                    modalService.activate = this.activate.bind(this);
                }
                activate(message = this._defaults.message, title = this._defaults.title) {
                    this.title = title;
                    this.message = message;
                    this.okText = this._defaults.okText;
                    this.cancelText = this._defaults.cancelText;
                    let promise = new Promise((resolve, reject) => {
                        this.negativeOnClick = (e) => resolve(false);
                        this.positiveOnClick = (e) => resolve(true);
                        this._show();
                    });
                    return promise;
                }
                ngOnInit() {
                    this._modalElement = document.getElementById('confirmationModal');
                    this._cancelButton = document.getElementById('cancelButton');
                    this._okButton = document.getElementById('okButton');
                }
                _show() {
                    document.onkeyup = null;
                    if (!this._modalElement || !this._cancelButton || !this._okButton)
                        return;
                    this._modalElement.style.opacity = 0;
                    this._modalElement.style.zIndex = 9999;
                    this._cancelButton.onclick = ((e) => {
                        e.preventDefault();
                        if (!this.negativeOnClick(e))
                            this._hideDialog();
                    });
                    this._okButton.onclick = ((e) => {
                        e.preventDefault();
                        if (!this.positiveOnClick(e))
                            this._hideDialog();
                    });
                    this._modalElement.onclick = () => {
                        this._hideDialog();
                        return this.negativeOnClick(null);
                    };
                    document.onkeyup = (e) => {
                        if (e.which == KEY_ESC) {
                            this._hideDialog();
                            return this.negativeOnClick(null);
                        }
                    };
                    this._modalElement.style.opacity = 1;
                }
                _hideDialog() {
                    document.onkeyup = null;
                    this._modalElement.style.opacity = 0;
                    window.setTimeout(() => this._modalElement.style.zIndex = 0, 400);
                }
            };
            ModalComponent = __decorate([
                core_1.Component({
                    selector: 'modal-confirm',
                    templateUrl: 'app/blocks/modal/modal.component.html',
                    styleUrls: ['app/blocks/modal/modal.component.css']
                }), 
                __metadata('design:paramtypes', [modal_service_1.ModalService])
            ], ModalComponent);
            exports_1("ModalComponent", ModalComponent);
        }
    }
});
//# sourceMappingURL=modal.component.js.map