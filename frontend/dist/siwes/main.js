(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/whizyrel/Documents/code/.dno/js/siwes/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: MY_FORMATS, LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_mqtt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-mqtt */ "r+EJ");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
















const _c0 = function (a0, a1, a2) { return { "active": a0, "shadow-sm": a1, "fw-bold": a2 }; };
function LandingComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.active = i_r8; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c0, i_r8 === ctx_r1.active, i_r8 === ctx_r1.active, i_r8 === ctx_r1.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](city_r7);
} }
function LandingComponent_mat_option_44_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_mat_option_44_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const option_r11 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.setApiInterval(option_r11.apiInterval); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r11.name);
} }
const _c1 = function (a0, a1) { return { "mt-0": a0, "mb-0": a1 }; };
function LandingComponent_ng_container_68_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "wb_sunny");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const isFirst_r18 = ctx.first;
    const isLast_r19 = ctx.last;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c1, isFirst_r18, isLast_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 5, ctx_r15.getDate(item_r16[1]), "EEEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 8, item_r16[1], "longDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r15.convertNumber(item_r16[0], 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r15.dataSymbols[ctx_r15.target.weekly], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function LandingComponent_ng_container_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LandingComponent_ng_container_68_div_1_Template, 14, 14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.weeklyData);
} }
function LandingComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No Weekly Data Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
class LandingComponent {
    constructor(httpClient, mqttService, cd) {
        this.httpClient = httpClient;
        this.mqttService = mqttService;
        this.cd = cd;
        this.active = 0;
        this.cities = ['Lagos', 'Ogun', 'Abuja', 'Oyo', 'Enugu', 'Anambra', 'Akwa Ibom', 'Nasarawa'];
        this.today = new Date();
        this.options = {
            chart: {
                height: 360,
                type: 'area',
                toolbar: { show: false },
                redrawOnParentResize: true,
                redrawOnWindowResize: true,
            },
            stroke: {
                width: 2,
                curve: 'smooth',
                lineCap: 'butt',
            },
            dataLabels: {
                enabled: false
            },
            series: [],
            grid: { show: false },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 1,
                    opacityTo: 0.5,
                    stops: [0, 90, 100]
                },
                colors: ['#3f51b5'],
            },
            colors: ['#3f51b5'],
            xaxis: {
                type: 'datetime',
                labels: {
                    style: {
                        cssClass: 'tspan__label',
                    }
                },
                axisTicks: { show: false },
                axisBorder: { color: '#3f51b5' },
                crosshairs: {
                    show: true,
                },
                tooltip: { enabled: false },
            },
            yaxis: {
                show: false,
            },
            markers: {
                colors: 'white',
                strokeColors: '#3f51b5',
                shape: 'circle',
            },
            tooltip: {
                custom: ({ series, seriesIndex, dataPointIndex }) => {
                    return `
          <div class="mat-caption custom-tooltip rounded-pill px-3 py-1">
            <span> ${this.convertNumber(series[seriesIndex][dataPointIndex], 2)}&deg;C</span>
          </div>
        `;
                }
            }
        };
        this.statIndex = 0;
        this.dataSymbols = {
            c: '&deg;C',
            f: '&deg;F',
            k: 'K',
            h: '&rho;',
            hi: 'HI',
            dp: '&deg;C',
        };
        this.dataImageLink = {
            c: 'https://storage.googleapis.com/whizyrel-public/cloud.png',
            f: 'https://storage.googleapis.com/whizyrel-public/cloud.png',
            k: 'https://storage.googleapis.com/whizyrel-public/cloud.png',
            h: 'https://storage.googleapis.com/whizyrel-public/humidity.png',
            hi: 'https://storage.googleapis.com/whizyrel-public/heat.png',
            dp: 'https://storage.googleapis.com/whizyrel-public/dew.png',
        };
        this.dataTitle = {
            c: 'Temperature',
            f: 'Temperature',
            k: 'Temperature',
            h: 'relative humidity',
            hi: 'Heat Index',
            dp: 'Dew Point',
        };
        this.intervals = [
            { name: 'Today', apiInterval: 'hour' },
            { name: 'Yesterday', apiInterval: 'hour' },
            { name: 'This Week', apiInterval: 'day' },
            { name: 'Last Week', apiInterval: 'day' },
            { name: 'This Month', apiInterval: 'day' },
        ];
        this.objectIntervals = {
            Today: this.buildInterval(this.today.getDate(), this.today.getDate() + 1),
            Yesterday: this.buildInterval(this.today.getDate() - 1, this.today.getDate()),
            'This Week': this.buildInterval(this.today.getDate() - (this.today.getDay() - 1), this.today.getDate() + (7 - this.today.getDay() + 1)),
            'Last Week': this.buildInterval(this.today.getDate() - (this.today.getDay() - 1) - 7, this.today.getDate() - (this.today.getDay() - 1)),
            'This Month': this.buildInterval(1, new Date(this.today.getFullYear(), this.today.getMonth(), 0).getDate()),
        };
        this.apiInterval = 'hour';
        this.defaultIntervalText = 'Interval';
        this.intervalSubscriptions = [];
        this.baseUrl = `${window.location.protocol}//localhost:9100/d`;
        this.DEFAULT_INTERVAL = 60 * 1000 * .5;
        this.target = { weekly: 'c', latest: 'c', interval: 'c' };
        this.intervalData = [];
        this.statsToday = [];
        this.weeklyData = [];
        this.intervalRange = {};
        this.intervalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.statsToday = [];
        this.weeklyData = [];
        this.intervalData = [];
    }
    set _intervalData(v) {
        if (v) {
            window.localStorage.setItem('ind', JSON.stringify(v));
            this.intervalData = v;
            this.options.series = [
                {
                    data: this.intervalData
                        .map(d => {
                        return {
                            x: d[1],
                            y: d[0]
                        };
                    }),
                }
            ];
        }
    }
    set _statsToday(v) {
        if (v.length > 0) {
            this.currentStat = v[this.statIndex];
            this.statsToday = v;
        }
    }
    set _weeklyData(v) {
        if (v) {
            window.localStorage.setItem('kly', JSON.stringify(v));
            this.weeklyData = v;
        }
    }
    set _intervalRange(v) {
        var _a, _b;
        if (v) {
            this.intervalRange = v;
            this.defaultIntervalText = `${(_a = this.intervalRange.start) === null || _a === void 0 ? void 0 : _a.toLocaleString().split(',')[0]} - ${(_b = this.intervalRange.end) === null || _b === void 0 ? void 0 : _b.toLocaleString().split(',')[0]}`;
            this.getIntervalData();
        }
    }
    ngOnInit() {
        var _a;
        this._intervalRange = {
            start: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 0, 0),
            end: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 1, 0, 0),
        };
        this.statsToday = [];
        this.weeklyData = [];
        this.intervalData = [];
        this.target = (_a = this.target) !== null && _a !== void 0 ? _a : window.localStorage.getItem('gt');
        this.getLatestData();
        this.getIntervalData();
        this.getWeeklyData();
        [this.getWeeklyData.bind(this)]
            .forEach(fn => {
            this.intervalSubscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(this.DEFAULT_INTERVAL)
                .subscribe(fn));
        });
        const mqSub = this.mqttService
            .observe(`/rt/weather-data/${1}`)
            .subscribe((data) => {
            if (window.DEBUG) {
                console.log(`[MQTT]`, JSON.parse(data.payload.toString()));
            }
            this.statsToday = this.transformLatest([JSON.parse(data.payload.toString())]);
        }, (error) => {
            console.error(`[MQTT] error`, error);
        });
        this.intervalSubscriptions.push(mqSub, this.intervalControl.valueChanges.subscribe((d) => {
            if (d) {
                this.apiInterval = d.apiInterval;
                this._intervalRange = this.objectIntervals[d.name];
                this.cd.detach();
                this.cd.reattach();
                this.cd.detectChanges();
            }
        }));
    }
    ngOnDestroy() {
        this.intervalSubscriptions.forEach(s => s.unsubscribe());
    }
    setApiInterval(v) {
        this.apiInterval = v;
    }
    buildInterval(startDay, endDay) {
        return {
            start: new Date(this.today.getFullYear(), this.today.getMonth(), startDay !== null && startDay !== void 0 ? startDay : this.today.getDate() - 1, 0, 0),
            end: new Date(this.today.getFullYear(), this.today.getMonth(), endDay !== null && endDay !== void 0 ? endDay : this.today.getDate() + 1, 0, 0),
        };
    }
    dateRangeChange(e, mode) {
        var _a, _b;
        this._intervalRange = Object.assign(Object.assign({}, (this.intervalRange)), { [mode]: e.value });
        this.defaultIntervalText = `${(_a = this.intervalRange.start) === null || _a === void 0 ? void 0 : _a.toLocaleString().split(',')[0]} - ${(_b = this.intervalRange.end) === null || _b === void 0 ? void 0 : _b.toLocaleString().split(',')[0]}`;
    }
    getIntervalData(start, end) {
        var _a, _b, _c, _d;
        if (this.httpClient) {
            this.cd.detach();
            this.cd.reattach();
            this.cd.detectChanges();
            this.httpClient
                .get(`${this.baseUrl}/interval`, {
                headers: { 'Content-type': 'application/json' },
                responseType: 'json',
                observe: 'body',
                params: {
                    start: start !== null && start !== void 0 ? start : (_b = (_a = this.intervalRange) === null || _a === void 0 ? void 0 : _a.start) === null || _b === void 0 ? void 0 : _b.toJSON(),
                    end: end !== null && end !== void 0 ? end : (_d = (_c = this.intervalRange) === null || _c === void 0 ? void 0 : _c.end) === null || _d === void 0 ? void 0 : _d.toJSON(),
                    interval: this.apiInterval,
                    target: this.target.weekly,
                    id: 1,
                },
            })
                .subscribe((data) => {
                this._intervalData = data.data;
            }, (error) => {
                var _a;
                console.error(`[Latest] error`, error);
                this.intervalData = this.intervalData.length ?
                    this.intervalData :
                    JSON.parse((_a = window.localStorage.getItem('ind')) !== null && _a !== void 0 ? _a : '[]');
            });
        }
        else {
            console.error(`[Error] latest`, this.httpClient);
        }
    }
    getLatestData() {
        if (this.httpClient) {
            this.httpClient
                .get(`${this.baseUrl}/latest/?target=${this.target.latest}&id=${1}`, {
                headers: { 'Content-type': 'application/json' },
                responseType: 'json',
                observe: 'body'
            })
                .subscribe((data) => {
                this._statsToday = this.transformLatest(data.data);
                window.localStorage.setItem('tst', JSON.stringify(this.transformLatest(data.data)));
            }, (error) => {
                var _a;
                console.error(`[Latest] error`, error);
                this.statsToday = this.statsToday.length ?
                    this.statsToday :
                    JSON.parse((_a = window.localStorage.getItem('tst')) !== null && _a !== void 0 ? _a : '[]');
            });
        }
        else {
            console.error(`[Error] latest`, this.httpClient);
        }
    }
    transformLatest(data) {
        return Object.keys(data[0]).map((k) => {
            if (['t', 'id'].includes(k) === false) {
                return {
                    link: this.dataImageLink[k],
                    value: data[0][k],
                    unit: this.dataSymbols[k],
                    title: this.dataTitle[k],
                };
            }
        })
            .filter(el => el !== undefined)
            .sort((a, b) => {
            return b.value - a.value;
        });
    }
    getWeeklyData() {
        if (this.httpClient) {
            this.httpClient
                .get(`${this.baseUrl}/weekly/?target=${this.target.weekly}&id=${1}`, {
                headers: { 'Content-type': 'application/json' },
                responseType: 'json',
                observe: 'body'
            })
                .subscribe((data) => {
                this._weeklyData = [...data.data];
            }, (error) => {
                var _a;
                console.error(`[Weekly] error`, error);
                this.weeklyData = this.weeklyData.length ?
                    this.weeklyData :
                    JSON.parse((_a = window.localStorage.getItem('kly')) !== null && _a !== void 0 ? _a : '[]');
            });
        }
        else {
            console.error(`[Error] weekly`, this.httpClient);
        }
    }
    targetChanged(v, mode) {
        this.target[mode] = v.value;
        window.localStorage.setItem('gt', JSON.stringify(this.target));
        this.getWeeklyData();
    }
    convertNumber(no, place) {
        return Number.parseFloat(no).toFixed(place);
    }
    openCustomIntervalPicker(picker) {
        picker.open();
    }
    nextStat() {
        ++this.statIndex;
        if (this.statIndex >= this.statsToday.length) {
            this.statIndex = 0;
        }
        this.currentStat = this.statsToday[this.statIndex];
    }
    previousStat() {
        --this.statIndex;
        if (this.statIndex < 0) {
            this.statIndex = this.statsToday.length - 1;
        }
        this.currentStat = this.statsToday[this.statIndex];
    }
    getDate(d) {
        return new Date(d);
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_mqtt__WEBPACK_IMPORTED_MODULE_4__["MqttService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["sws-landing"]], decls: 71, vars: 28, consts: [[1, "app-bar", "position-sticky", "top-0", "shadow-lg"], ["mat-icon-button", "", 1, "rounded-circle", "my-auto", "mx-2", 3, "click"], [1, "my-auto"], [1, "d-flex", "container", "p-0", "py-2", "my-auto"], ["places", ""], ["mat-flat-button", "", "class", "mx-3 px-4 rounded-pill", "style", "width: fit-content; min-width: fit-content;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "color", "primary", 1, "rounded-circle", "my-auto", "mx-2", 3, "click"], [1, "d-flex", "container", "flex-column", "p-0"], [1, "d-flex", "flex-wrap", "w-100", "my-sm-auto", "py-sm-5"], [1, "d-flex", "flex-column", "col-12", "col-sm-12", "col-md-5", "col-lg-4", "my-sm-4", "my-md-0", "px-2", "px-sm-3", "py-5", "sws-stats__today"], [1, "d-flex", "mx-auto", "py-3"], [1, "mat-subheading-1", "my-auto"], ["mat-icon-button", "", 1, "rounded-pill", "ms-1", "me-auto"], [1, "d-flex", "w-100", "mx-auto", "my-3"], [1, "d-flex", "flex-column", "w-100"], ["alt", "weather-image", 1, "mx-auto", "mb-3", 2, "width", "124px", "height", "124px", "object-fit", "contain", "object-position", "50%", 3, "src"], [1, "d-flex", "mx-auto"], [1, "mat-display-2", "mb-0"], [1, "mat-headline", "me-auto", "mt-2", "mb-auto", 3, "innerHtml"], ["mat-icon-button", "", 1, "rounded-circle", "my-auto", "ms-2", "me-auto", 3, "click"], [1, "mat-h6", "mx-auto", "my-3", "py-3", "text-uppercase", "text-center", 2, "letter-spacing", "5px"], ["mat-stroked-button", "", 1, "mx-auto", "my-3", "px-4", "px-sm-5", "py-1", "rounded-pill", 2, "width", "fit-content", "border-color", "white"], [1, "mat-h5", "mx-auto"], [1, "d-flex", "flex-column", "col-12", "col-sm-12", "col-md-7", "col-lg-8", "px-3", "px-md-4", "py-5", "py-sm-0", "sws-analytics"], ["appearance", "outline", 1, "w-50", "my-0", "ms-auto"], [3, "formControl"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "click"], [2, "display", "none!important", "visibility", "hidden", 3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date", 1, "d-flex", "w-100", "h-100", 2, "display", "none!important", "visibility", "hidden", 3, "dateChange"], ["matEndDate", "", "placeholder", "End date", 1, "d-flex", "w-100", "h-100", 2, "display", "none!important", "visibility", "hidden", 3, "dateChange"], ["touchUi", ""], ["picker", ""], ["mat-button", "", "matDateRangePickerCancel", "", 1, "px-4", "py-1", "rounded-pill"], ["mat-raised-button", "", "color", "primary", "matDateRangePickerApply", "", 1, "px-4", "py-1", "rounded-pill"], [1, "d-flex", "w-100", "mb-4"], [1, "w-100", 3, "series", "chart", "xaxis", "yaxis", "dataLabels", "fill", "grid", "stroke", "states", "colors", "markers", "tooltip"], ["color", "primary", 1, "mb-3", "rounded-pill", "shadow-sm", 2, "width", "fit-content", "border", "0!important", 3, "value", "change"], ["selected", "", "value", "c", 1, "px-4", "bg-transparent", "mat-caption", 2, "border", "0!important", "color", "inherit"], ["value", "h", 1, "px-4", "bg-transparent", "mat-caption", 2, "border", "0!important", "color", "inherit"], ["value", "hi", 1, "px-4", "bg-transparent", "mat-caption", 2, "border", "0!important", "color", "inherit"], ["value", "dp", 1, "px-4", "bg-transparent", "mat-caption", 2, "border", "0!important", "color", "inherit"], [4, "ngIf", "ngIfElse"], ["noWeeklyData", ""], ["mat-flat-button", "", 1, "mx-3", "px-4", "rounded-pill", 2, "width", "fit-content", "min-width", "fit-content", 3, "ngClass", "click"], [3, "value", "click"], ["matRipple", "", "class", "d-flex w-100 my-2 px-3 py-2 sws-week__history rounded-3", "style", "cursor: pointer;", 3, "ngClass", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "d-flex", "w-100", "my-2", "px-3", "py-2", "sws-week__history", "rounded-3", 2, "cursor", "pointer", 3, "ngClass"], [1, "d-flex", "flex-column", "my-auto"], [1, "mat-subheading-1", "p-0", "m-0"], [1, "mat-h5", "p-0", "m-0"], ["mat-icon-button", "", 1, "ms-auto", "my-auto", "p-2", "rounded-circle"], ["color", "primary", 1, "m-auto"], [1, "mat-subheading-1", "ms-2", "my-auto"], [1, "mat-subheading-1", "my-auto", "me-2", 3, "innerHtml"], [1, "d-flex", "flex-column", "w-100", "py-5"], [1, "mat-body", "m-auto"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r0.scrollBy({ "left": -96, "top": 0 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LandingComponent_button_6_Template, 3, 6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r0.scrollBy({ "left": 96, "top": 0 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "main", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_22_listener() { return ctx.previousStat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "sup", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_31_listener() { return ctx.nextStat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Partly Cloudly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, LandingComponent_mat_option_44_Template, 2, 2, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_Template_mat_option_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](51); return ctx.openCustomIntervalPicker(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Custom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-date-range-input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dateChange", function LandingComponent_Template_input_dateChange_48_listener($event) { return ctx.dateRangeChange($event, "start"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dateChange", function LandingComponent_Template_input_dateChange_49_listener($event) { return ctx.dateRangeChange($event, "end"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-date-range-picker", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-date-range-picker-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "apx-chart", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "mat-button-toggle-group", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function LandingComponent_Template_mat_button_toggle_group_change_59_listener($event) { return ctx.targetChanged($event, "weekly"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "mat-button-toggle", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\u00B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "mat-button-toggle", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "mat-button-toggle", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "H.I");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "mat-button-toggle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "DWPNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, LandingComponent_ng_container_68_Template, 2, 1, "ng-container", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, LandingComponent_ng_template_69_Template, 3, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](51);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](16, 25, ctx.today, "E, LLL d YYYY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.currentStat == null ? null : ctx.currentStat.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.convertNumber(ctx.currentStat == null ? null : ctx.currentStat.value, 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.currentStat == null ? null : ctx.currentStat.unit, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentStat == null ? null : ctx.currentStat.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.defaultIntervalText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.intervalControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.intervals);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rangePicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.options.series)("chart", ctx.options.chart)("xaxis", ctx.options.xaxis)("yaxis", ctx.options.yaxis)("dataLabels", ctx.options.dataLabels)("fill", ctx.options.fill)("grid", ctx.options.grid)("stroke", ctx.options.stroke)("states", ctx.options.states)("colors", ctx.options.colors)("markers", ctx.options.markers)("tooltip", ctx.options.tooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.target.weekly);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.weeklyData && ctx.weeklyData.length > 0)("ngIfElse", _r5);


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'siwes';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["sws-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var ngx_mqtt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mqtt */ "r+EJ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















const MQTT_SERVICE_OPTIONS = {
    hostname: 'evryword.com.ng',
    port: 8008,
    protocol: 'ws',
    path: '/mqtt'
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_mqtt__WEBPACK_IMPORTED_MODULE_15__["MqttModule"].forRoot(MQTT_SERVICE_OPTIONS),
            // DateAdapter,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_17__["LandingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_mqtt__WEBPACK_IMPORTED_MODULE_15__["MqttModule"], 
        // DateAdapter,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"],
    },
    {
        path: '**',
        redirectTo: '',
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map