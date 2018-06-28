webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddDataPage = /** @class */ (function () {
    function AddDataPage(navCtrl, navParams, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        this.data = { fechatransaccion: "", tipo: "", descripcion: "", cantidad: 0, nombre: "", apellido: "", email: "", telefono: "", lugartrabajo: "" };
    }
    AddDataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddDataPage');
    };
    AddDataPage.prototype.saveData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ciro_prueba.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO personas values(NULL,?,?,?,?,?,?,?,?,?)', [_this.data.nombre, _this.data.apellido,
                _this.data.lugartrabajo, _this.data.fechatransaccion, _this.data.email, _this.data.telefono, _this.data.cantidad,
                _this.data.tipo, _this.data.descripcion])
                .then(function (res) {
                console.log(res);
                _this.toast.show('Datos Guardados', '5000', 'center').subscribe(function (toast) {
                    _this.navCtrl.popToRoot();
                });
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        }).catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    AddDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-data',template:/*ion-inline-start:"/home/oym-dev06/Proyectos/OyM/IonicProject/Crud_Sqlite/ionic3-sqlite/src/pages/add-data/add-data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mis Gastos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h2>Agregar Gastos</h2>\n  <form (ngSubmit)="saveData()">\n    <!-- nombre -->\n    <ion-item>\n      <ion-label>Nombre </ion-label>\n      <ion-input type="text" placeholder="Nombre" [(ngModel)]="data.nombre" name="nombre" requiered="">\n\n      </ion-input>\n    </ion-item>\n\n\n    <!-- apellido -->\n    <ion-item>\n      <ion-label>Apellido </ion-label>\n      <ion-input type="text" placeholder="Apellido" [(ngModel)]="data.apellido" name="apellido" requiered="">\n\n      </ion-input>\n    </ion-item>\n\n\n    <!-- lugar de trabajo -->\n    <ion-item>\n      <ion-label>Lugar de Trabajo </ion-label>\n      <ion-input type="text" placeholder="Lugar de Trabajo" [(ngModel)]="data.lugartrabajo" name="lugartrabajo" requiered="">\n\n      </ion-input>\n    </ion-item>\n    <!-- fecha de transaccion -->\n    <ion-item>\n      <ion-label>Fecha de Transaccion</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="data.fechatransaccion" name="fechatransaccion" required=""></ion-datetime>\n    </ion-item>\n\n    <!-- Cantidad -->\n\n    <ion-item>\n      <ion-label>Cantidad</ion-label>\n      <ion-input type="number" placeholder="cantidad" [(ngModel)]="data.amount" name="amount" required=""></ion-input>\n    </ion-item>\n\n    <!-- tipo -->\n\n    <ion-item>\n      <ion-label>Tipo</ion-label>\n      <ion-select [(ngModel)]="data.tipo" name="tipo" required="">\n        <ion-option value="Ingreso">Ingreso</ion-option>\n        <ion-option value="Gasto">Gasto</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!-- descripcion -->\n\n    <ion-item>\n      <ion-label>Descripcion </ion-label>\n      <ion-input type="text" placeholder="Descripcion" [(ngModel)]="data.descripcion" name="descripcion" requiered="">\n\n      </ion-input>\n    </ion-item>\n\n    <!-- Email -->\n\n    <ion-item>\n      <ion-label>Email </ion-label>\n      <ion-input type="text" placeholder="email" [(ngModel)]="data.email" name="email">\n\n      </ion-input>\n    </ion-item>\n\n    <!-- Telefono -->\n\n    <ion-item>\n      <ion-label>Telefono </ion-label>\n      <ion-input type="text" placeholder="telefono" [(ngModel)]="data.telefono" name="telefono">\n\n      </ion-input>\n    </ion-item>\n\n    <ion-input type="hidde" [(ngModel)]="data.idpersona" name="idpersona"></ion-input>\n    <button ion-button type="submit" block> Actualizar</button>\n\n\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"/home/oym-dev06/Proyectos/OyM/IonicProject/Crud_Sqlite/ionic3-sqlite/src/pages/add-data/add-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */]])
    ], AddDataPage);
    return AddDataPage;
}());

//# sourceMappingURL=add-data.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditDataPage = /** @class */ (function () {
    function EditDataPage(navCtrl, navParams, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        this.data = { idpersona: 0, fechatransaccion: "", tipo: "", descripcion: "", cantidad: 0, nombre: "", apellido: "", email: "", telefono: "", lugartrabajo: "" };
        this.getCurrenData(navParams.get("idpersona"));
    }
    EditDataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditDataPage');
    };
    EditDataPage.prototype.getCurrenData = function (idpersona) {
        var _this = this;
        this.sqlite.create({
            name: 'ciro_prueba.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * FROM personas where idpersona= ?', [idpersona])
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.data.idpersona = res.rows.item(0).idpersona;
                    _this.data.nombre = res.rows.item(0).nombre;
                    _this.data.apellido = res.rows.item(0).apellido;
                    _this.data.lugartrabajo = res.rows.item(0).lugartrabajo;
                    _this.data.tipo = res.rows.item(0).tipo;
                    _this.data.email = res.rows.item(0).email;
                    _this.data.telefono = res.rows.item(0).telefono;
                    _this.data.fechatransaccion = res.rows.item(0).fechatransaccion;
                    _this.data.cantidad = res.rows.item(0).cantidad;
                }
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        }).catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    EditDataPage.prototype.updateData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ciro_prueba.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('UPDATE personas SET nombre=?,apellido=?,lugartrabajo=?,fechatransaccion=? ,tipo=? ,cantidad=? ,descripcion=? ,telefono=? WHERE idpersona=?', [_this.data.nombre, _this.data.apellido, _this.data.lugartrabajo, _this.data.fechatransaccion, _this.data.tipo, _this.data.cantidad, _this.data.descripcion, _this.data.telefono, _this.data.idpersona])
                .then(function (res) {
                console.log(res);
                _this.toast.show('Data actualizado', '5000', 'center').subscribe(function (toast) {
                    _this.navCtrl.popToRoot();
                });
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        }).catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    EditDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-data',template:/*ion-inline-start:"/home/oym-dev06/Proyectos/OyM/IonicProject/Crud_Sqlite/ionic3-sqlite/src/pages/edit-data/edit-data.html"*/'<!--\n  Generated template for the EditDataPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Gastos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h2>Editar Datos</h2>\n  <form (ngSubmit)="updateData()">\n    <!-- nombre -->\n    <ion-item>\n      <ion-label>Nombre </ion-label>\n      <ion-input type="text" placeholder="Nombre" [(ngModel)]="data.nombre" name="nombre" requiered="">\n\n      </ion-input>\n    </ion-item>\n\n\n    <!-- apellido -->\n    <ion-item>\n      <ion-label>Apellido </ion-label>\n      <ion-input type="text" placeholder="Apellido" [(ngModel)]="data.apellido" name="apellido" requiered="">\n\n      </ion-input>\n    </ion-item>\n\n\n    <!-- lugar de trabajo -->\n    <ion-item>\n      <ion-label>Lugar de Trabajo </ion-label>\n      <ion-input type="text" placeholder="Lugar de Trabajo" [(ngModel)]="data.lugartrabajo" name="lugartrabajo" requiered="">\n\n      </ion-input>\n    </ion-item>\n    <!-- fecha de transaccion -->\n    <ion-item>\n      <ion-label>Fecha de Transaccion</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="data.fechatransaccion" name="fechatransaccion" required=""></ion-datetime>\n    </ion-item>\n\n    <!-- Cantidad -->\n\n    <ion-item>\n      <ion-label>Cantidad</ion-label>\n      <ion-input type="number" placeholder="cantidad" [(ngModel)]="data.amount" name="amount" required=""></ion-input>\n    </ion-item>\n\n    <!-- tipo -->\n\n    <ion-item>\n      <ion-label>Tipo</ion-label>\n      <ion-select [(ngModel)]="data.tipo" name="tipo" required="">\n        <ion-option value="Ingreso">Ingreso</ion-option>\n        <ion-option value="Gasto">Gasto</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!-- descripcion -->\n\n    <ion-item>\n      <ion-label>Descripcion </ion-label>\n      <ion-input type="text" placeholder="Descripcion" [(ngModel)]="data.descripcion" name="descripcion" requiered="">\n\n      </ion-input>\n    </ion-item>\n\n    <!-- Email -->\n\n    <ion-item>\n      <ion-label>Email </ion-label>\n      <ion-input type="text" placeholder="email" [(ngModel)]="data.email" name="email">\n\n      </ion-input>\n    </ion-item>\n\n    <!-- Telefono -->\n\n    <ion-item>\n      <ion-label>Telefono </ion-label>\n      <ion-input type="text" placeholder="telefono" [(ngModel)]="data.telefono" name="telefono">\n\n      </ion-input>\n    </ion-item>\n\n    <button ion-button type="submit" block> Guardar</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/home/oym-dev06/Proyectos/OyM/IonicProject/Crud_Sqlite/ionic3-sqlite/src/pages/edit-data/edit-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */]])
    ], EditDataPage);
    return EditDataPage;
}());

//# sourceMappingURL=edit-data.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-data/add-data.module": [
		273,
		1
	],
	"../pages/edit-data/edit-data.module": [
		274,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_data_add_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_data_edit_data__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.personas = [];
        this.totalingreso = 0;
        this.totalgastos = 0;
        this.balance = 0;
    }
    HomePage.prototype.ionViewDidLOad = function () {
        this.getData();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    HomePage.prototype.getData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ciro_prueba.db',
            location: 'default'
        }).then(function (db) {
            //codigo para crear la tabla personas
            db.executeSql('CREATE TABLE IF NOT EXISTS personas(idpersona INTEGER PRIMARY KEY,nombre TEXT, apellido TEXT, lugartrabajo TEXT, fechatransaccion TEXT, email TEXT, telefono TEXT, cantidad INT,tipo TEXT, descripcion TEXT     )', {}).then(function (res) { return console.log('EXECUCION SQL'); }).catch(function (e) { return console.log(e); });
            db.executeSql('select * from personas ORDER BY idpersona DESC', {}).then(function (res) {
                _this.personas = [];
                for (var i = 0; i < res.rows.lengt; i++) {
                    _this.personas.push({
                        idpersona: res.rows.item(i).idpersona,
                        nombre: res.rows.item(i).nombre,
                        apellido: res.rows.item(i).apellido,
                        lugartrabajo: res.rows.item(i).lugartrabajo,
                        fechatransaccion: res.rows.item(i).fechatransaccion,
                        email: res.rows.item(i).email,
                        telefono: res.rows.item(i).telefono,
                        cantidad: res.rows.item(i).cantidad,
                        tipo: res.rows.item(i).tipo,
                        descripcion: res.rows.item(i).descripcion
                    });
                }
            }).catch(function (e) { return console.log(e); });
            db.executeSql('select sum(cantidad) as totalingreso from personas where tipo="Ingreso"', {})
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.totalingreso = parseInt(res.rows.item(0).totalingreso);
                    _this.balance = _this.totalingreso - _this.totalgastos;
                }
            });
        }).catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.addData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_data_add_data__["a" /* AddDataPage */]);
    };
    HomePage.prototype.editData = function (idpersona) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_data_edit_data__["a" /* EditDataPage */], {
            idpersona: idpersona
        });
    };
    HomePage.prototype.deletaData = function (idpersona) {
        var _this = this;
        this.sqlite.create({
            name: 'ciro_prueba.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('DELETE FROM personas where idpersona =? ', [idpersona])
                .then(function (res) {
                console.log(res);
                _this.getData();
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/oym-dev06/Proyectos/OyM/IonicProject/Crud_Sqlite/ionic3-sqlite/src/pages/home/home.html"*/' <!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n      DATOS DE PERSONAS\n    </ion-title>\n    <ion-button end>\n      <button ion-button icon-only (click)="addData()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-button>\n  </ion-navbar>\n</ion-header>  -->\n\n <ion-header>\n    <ion-navbar>\n      <ion-title>\n        Mis Gastos\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="addData()">\n          <ion-icon name="add-circle"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header> \n\n\n\n\n\n<ion-content padding>\n  <h2> Lista de Gastos </h2>\n  <ion-list>\n    <ion-item-sliding *ngFor="let persona of personas; let i=index">\n      <ion-item nopadding>\n        <p>\n          <span>{{persona.fechatransaccion}}</span><br>\n          Tipo : {{persona.tipo}} <br>\n          {{persona.descripcion}}\n        </p>\n\n        <h3 item-end>\n          Cantidad: {{persona.cantidad}} Gs.\n        </h3>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button color="primary" (click)="editData(persona.idpersona)">\n          <ion-icon name="paper"></ion-icon>\n        </button>\n        <button ion-button color="danger" (click)="deleteData(persona.idpersona)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n        \n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n<ion-toolbar>\n  <ion-title> Balance de Gastos : {{balance}} Gs. </ion-title>\n</ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"/home/oym-dev06/Proyectos/OyM/IonicProject/Crud_Sqlite/ionic3-sqlite/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_add_data_add_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_data_edit_data__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_add_data_add_data__["a" /* AddDataPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_data_edit_data__["a" /* EditDataPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-data/add-data.module#AddDataPageModule', name: 'AddDataPage', segment: 'add-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-data/edit-data.module#EditDataPageModule', name: 'EditDataPage', segment: 'edit-data', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_add_data_add_data__["a" /* AddDataPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_data_edit_data__["a" /* EditDataPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/oym-dev06/Proyectos/OyM/IonicProject/Crud_Sqlite/ionic3-sqlite/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/oym-dev06/Proyectos/OyM/IonicProject/Crud_Sqlite/ionic3-sqlite/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map