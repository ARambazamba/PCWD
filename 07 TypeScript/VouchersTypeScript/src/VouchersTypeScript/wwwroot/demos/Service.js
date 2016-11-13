function consumeService() {
    var service = new Vouchers.Demo.VoucherService();
    service.getVouchers().then(function (data) {
        var onClicked = function (e) {
            var item = (e.currentTarget);
            console.info("selected voucher row with id=" + item.id);
        };
        var bilder = new Vouchers.Demo.VoucherTableBuilder({
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
var Vouchers;
(function (Vouchers) {
    var Demo;
    (function (Demo) {
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
        Demo.VoucherService = VoucherService;
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
            VoucherTableBuilder.prototype.getKeyValue = function (item) {
                var result = "";
                if (item.hasOwnProperty(this.options.keyProp)) {
                    result = item[this.options.keyProp];
                }
                return result;
            };
            VoucherTableBuilder.prototype.init = function () {
                var _this = this;
                $('#' + this.options.tblBody).empty();
                $('#' + this.options.tblPager).empty();
                this.options.data.forEach(function (item) {
                    $('#' + _this.options.tblBody).append('<tr id="' + _this.getKeyValue(item) + '" style="cursor:pointer">' +
                        '<td>' + item.ID + '</td>' +
                        '<td>' + moment(item.Date).format("DD. MM. YYYY") + '</td>' +
                        '<td>' + item.Text + '</td>' +
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
        Demo.VoucherTableBuilder = VoucherTableBuilder;
    })(Demo = Vouchers.Demo || (Vouchers.Demo = {}));
})(Vouchers || (Vouchers = {}));
//# sourceMappingURL=Service.js.map