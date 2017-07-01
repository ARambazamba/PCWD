"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("promise/polyfill");
require("whatwg-fetch");
var Vouchers;
(function (Vouchers) {
    var Services;
    (function (Services) {
        var VoucherService = (function () {
            function VoucherService() {
            }
            VoucherService.prototype.getVouchers = function () {
                var deferred = $.Deferred();
                $.ajax({
                    type: "GET",
                    url: "/api/vouchers",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        return deferred.resolve(data);
                    },
                    error: function (msg) {
                        console.log("error calling service");
                        console.log(msg);
                        return deferred.reject(msg);
                    }
                });
                return deferred;
            };
            return VoucherService;
        }());
        Services.VoucherService = VoucherService;
        var VoucherTableBuilder = (function () {
            function VoucherTableBuilder(options) {
                this.options = options;
            }
            VoucherTableBuilder.prototype.doPaging = function (opts, tag) {
                var $this = tag, defaults = {
                    perPage: 7,
                    showPrevNext: false,
                    hidePageNumbers: false,
                    showAll: false
                }, settings = $.extend(defaults, opts);
                var listElement = $this;
                var perPage = settings.perPage;
                var children = listElement.children();
                var showAll = settings.showAll;
                var pager = $('.pager');
                if (typeof settings.childSelector != "undefined") {
                    children = listElement.find(settings.childSelector);
                }
                if (typeof settings.pagerSelector != "undefined") {
                    pager = $(settings.pagerSelector);
                }
                if (showAll === false) {
                    var numItems = children.size();
                    var numPages = Math.ceil(numItems / perPage);
                    pager.data("curr", 0);
                    if (settings.showPrevNext) {
                        $('<li><a href="#" class="prev_link">«</a></li>').appendTo(pager);
                    }
                    var curr = 0;
                    while (numPages > curr && (settings.hidePageNumbers === false)) {
                        $('<li><a href="#" class="page_link">' + (curr + 1) + '</a></li>').appendTo(pager);
                        curr++;
                    }
                    if (settings.showPrevNext) {
                        $('<li><a href="#" class="next_link">»</a></li>').appendTo(pager);
                    }
                    pager.find('.page_link:first').addClass('active');
                    pager.find('.prev_link').hide();
                    if (numPages <= 1) {
                        pager.find('.next_link').hide();
                    }
                    pager.children().eq(1).addClass("active");
                    children.hide();
                    children.slice(0, perPage).show();
                    pager.find('li .page_link').click(function () {
                        var clickedPage = Number($(this).html().valueOf()) - 1;
                        goTo(clickedPage);
                        return false;
                    });
                    pager.find('li .prev_link').click(function () {
                        previous();
                        return false;
                    });
                    pager.find('li .next_link').click(function () {
                        next();
                        return false;
                    });
                }
                if (showAll) {
                    $('<li><a href="javascript:SwitchPaged(true)" class="show_all">Pager anzeigen</a></li>').appendTo(pager);
                }
                else {
                    $('<li><a href="javascript:SwitchPaged(false)" class="show_all">Alle anzeigen</a></li>').appendTo(pager);
                }
                function previous() {
                    var goToPage = parseInt(pager.data("curr")) - 1;
                    goTo(goToPage);
                }
                function next() {
                    var goToPage = parseInt(pager.data("curr")) + 1;
                    goTo(goToPage);
                }
                function goTo(page) {
                    var startAt = page * perPage, endOn = startAt + perPage;
                    children.css('display', 'none').slice(startAt, endOn).show();
                    if (page >= 1) {
                        pager.find('.prev_link').show();
                    }
                    else {
                        pager.find('.prev_link').hide();
                    }
                    if (page < (numPages - 1)) {
                        pager.find('.next_link').show();
                    }
                    else {
                        pager.find('.next_link').hide();
                    }
                    pager.data("curr", page);
                    pager.children().removeClass("active");
                    pager.children().eq(page + 1).addClass("active");
                }
            };
            ;
            VoucherTableBuilder.prototype.getKeyValue = function (item, fldName) {
                var result = "";
                if (item.hasOwnProperty(fldName)) {
                    result = item[fldName];
                }
                return result;
            };
            VoucherTableBuilder.prototype.init = function () {
                var _this = this;
                $('#' + this.options.tblBody).empty();
                $('#' + this.options.tblPager).empty();
                this.options.data.forEach(function (item) {
                    $('#' + _this.options.tblBody).append('<tr id="' + _this.getKeyValue(item, _this.options.keyProp) + '" style="cursor:pointer">' +
                        '<td>' + item.ID + '</td>' +
                        '<td>' + moment(item.Date).format("DD. MM. YYYY") + '</td>' +
                        '<td>' + _this.getKeyValue(item, "Text") + '</td>' +
                        '<td>' + item.Amount + '</td>' +
                        '<td>' + item.Paid + '</td>' +
                        '</tr>');
                });
                $('#' + this.options.tblBody).append("</table>");
                this.doPaging({ pagerSelector: '#' + this.options.tblPager, showPrevNext: true, hidePageNumbers: false, perPage: this.options.pageSize, showAll: false }, $('#' + this.options.tblBody));
                $('#' + this.options.tblBody + ' tr').click(this.options.rowClicked);
            };
            return VoucherTableBuilder;
        }());
        Services.VoucherTableBuilder = VoucherTableBuilder;
        var VouchersRessource = (function () {
            function VouchersRessource(url) {
                this.url = url;
            }
            VouchersRessource.prototype.getItems = function () {
                var deferred = $.Deferred();
                $.ajax({
                    type: "GET",
                    url: this.url,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        return deferred.resolve(data);
                    },
                    error: function (msg) {
                        console.log("error calling service");
                        console.log(msg);
                        return deferred.reject(msg);
                    }
                });
                return deferred;
            };
            VouchersRessource.prototype.getItem = function (id) {
                var deferred = $.Deferred();
                $.ajax({
                    type: "GET",
                    url: this.url + "/" + id,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        return deferred.resolve(data);
                    },
                    error: function (msg) {
                        console.log("error calling service");
                        console.log(msg);
                        return deferred.reject(msg);
                    }
                });
                return deferred;
            };
            VouchersRessource.prototype.save = function (item, success, error) {
                var httpVerb = item.ID === 0 ? "POST" : "PUT";
                $.ajax({
                    type: httpVerb,
                    data: JSON.stringify(item),
                    url: this.url,
                    contentType: "application/json; charset=utf-8",
                    success: function (data) { success(data); },
                    error: function (data) { error(data); }
                });
            };
            VouchersRessource.prototype.delete = function (id, success, error) {
                $.ajax({
                    type: "DELETE",
                    url: this.url,
                    contentType: "application/json; charset=utf-8",
                    success: function (data) { success(data); },
                    error: function (data) { error(data); }
                });
            };
            return VouchersRessource;
        }());
        Services.VouchersRessource = VouchersRessource;
        var Voucher = (function () {
            function Voucher() {
            }
            return Voucher;
        }());
        Services.Voucher = Voucher;
    })(Services = Vouchers.Services || (Vouchers.Services = {}));
})(Vouchers || (Vouchers = {}));
function consumeService() {
    var service = new Vouchers.Services.VoucherService();
    service.getVouchers().then(function (data) {
        var onClicked = function (e) {
            var item = (e.currentTarget);
            console.info("selected voucher row with id=" + item.id);
        };
        var bilder = new Vouchers.Services.VoucherTableBuilder({
            data: data,
            tblBody: "tblVoucherBody",
            tblPager: "tblVoucherPager",
            pageSize: 5,
            rowClicked: onClicked,
            keyProp: "ID"
        });
        bilder.init();
    });
}
function consumeRessource() {
    var res = new Vouchers.Services
        .VouchersRessource("/api/vouchers/");
    res.getItems().done(function (data) {
        var vs = data;
        console.log("Data received from Ressource");
        console.log(JSON.stringify(vs));
    });
}
function usingPromises() {
    function doAsyncTask(succeed) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("Async Task Complete");
                if (succeed) {
                    resolve("Outcome: Promise resolved");
                }
                else {
                    reject("Outcome: Promise rejected");
                }
            }, 1000);
        });
    }
    doAsyncTask(true).then(function (msg) {
        console.log(msg);
    });
}
function usingFetchAwait() {
    function getAllVouchers() {
        return __awaiter(this, void 0, void 0, function () {
            var response, voucher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("./demos/vouchers.json")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        voucher = _a.sent();
                        console.log("Data received using fetch - await");
                        console.log(voucher);
                        return [2 /*return*/];
                }
            });
        });
    }
    getAllVouchers();
}
//# sourceMappingURL=Service.js.map