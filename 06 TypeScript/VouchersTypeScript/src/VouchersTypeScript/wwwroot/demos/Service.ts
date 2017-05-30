namespace Vouchers.Services {

    export class VoucherService {
        getVouchers() {
            var deferred = $.Deferred();
            $.ajax({
                type: "GET",
                url: "/api/vouchers",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success(data: IVoucher[]) {
                    return deferred.resolve(data);
                },
                error(msg: any) {
                    console.log("error calling service");
                    console.log(msg);
                    return deferred.reject(msg);
                }
            });
            return deferred;
        }
    }

    export interface IVoucherObject {
        ID: number;
    }
    
    export interface IClickCallback {
        (e: Event): void;
    }

    export interface IAjaxCallback {
        (data: any):void
    }
    
    export interface IVoucherTblOptions {
        data: IVoucher[];
        rowClicked: IClickCallback;
        tblBody: string;
        tblPager: string;
        pageSize: number;
        keyProp: string; //ID
    }

    export class VoucherTableBuilder {

        constructor(public options: IVoucherTblOptions) { }

        private doPaging(opts: any, tag: any) {
            var $this = tag,
                defaults = {
                    perPage: 7,
                    showPrevNext: false,
                    hidePageNumbers: false,
                    showAll: false
                },
                settings = $.extend(defaults, opts);

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
                pager.find('li .prev_link').click(() => {
                    previous();
                    return false;
                });
                pager.find('li .next_link').click(() => {
                    next();
                    return false;
                }
                );
            }

            if (showAll) {
                $('<li><a href="javascript:SwitchPaged(true)" class="show_all">Pager anzeigen</a></li>').appendTo(pager);
            } else {
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

            function goTo(page: any) {
                var startAt = page * perPage,
                    endOn = startAt + perPage;

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

        private getKeyValue(item: IVoucher, fldName: string): string {
            let result: string = "";

            if (item.hasOwnProperty(fldName)) {
                result = (<any>item)[fldName];
            }
            return result;
        }

        init() {
            $('#' + this.options.tblBody).empty();
            $('#' + this.options.tblPager).empty();

            this.options.data.forEach((item) => {
                $('#' + this.options.tblBody).append(
                    '<tr id="' + this.getKeyValue(item, this.options.keyProp) + '" style="cursor:pointer">' +
                    '<td>' + item.ID + '</td>' +
                    '<td>' + moment(item.Date).format("DD. MM. YYYY") + '</td>' +
                    '<td>' + this.getKeyValue(item, "Text") + '</td>' +
                    '<td>' + item.Amount + '</td>' +
                    '<td>' + item.Paid + '</td>' +
                    '</tr>');
            });
            $('#' + this.options.tblBody).append("</table>");

            this.doPaging({ pagerSelector: '#' + this.options.tblPager, showPrevNext: true, hidePageNumbers: false, perPage: this.options.pageSize, showAll: false }, $('#' + this.options.tblBody));

            $('#' + this.options.tblBody + ' tr').click(this.options.rowClicked);
        }
    }

    export class VouchersRessource<T extends IVoucherObject> {

        constructor(public url : string){}

        getItems() {
            var deferred = $.Deferred();
            $.ajax({
                type: "GET",
                url: this.url,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success(data: T[]) {
                    return deferred.resolve(data);
                },
                error(msg: any) {
                    console.log("error calling service");
                    console.log(msg);
                    return deferred.reject(msg);
                }
            });
            return deferred;
        }

        getItem(id: number) {
            var deferred = $.Deferred();
            $.ajax({
                type: "GET",
                url: `${this.url}/${id}`,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success(data: T) {
                    return deferred.resolve(data);
                },
                error(msg: any) {
                    console.log("error calling service");
                    console.log(msg);
                    return deferred.reject(msg);
                }
            });
            return deferred;
        }

        save(item: T, success: IAjaxCallback, error: IAjaxCallback) {

            let httpVerb = item.ID === 0 ? "POST" : "PUT";

            $.ajax({
                type: httpVerb,
                data: JSON.stringify(item),
                url: this.url,
                contentType: "application/json; charset=utf-8",
                success: data => { success(data); },
                error: data => { error(data); }
            });
        }

        delete(id: number, success: IAjaxCallback, error: IAjaxCallback) {
            $.ajax({
                type: "DELETE",
                url: this.url,
                contentType: "application/json; charset=utf-8",
                success: data => { success(data); },
                error: data => { error(data); }
            });
        }
    }

    export class Voucher implements IVoucherObject {
        ID: number;
        Text: string;
        Date: Date;
        Amount: number;
        Paid: boolean;
        Expense: boolean;
        Remark?: boolean;
        Details?: IVoucherDetail[];
    }
}

function consumeService() {
    var service = new Vouchers.Services.VoucherService();
    service.getVouchers().then((data: Vouchers.IVoucher[]) => {

        let onClicked: Vouchers.Services.IClickCallback = (e: Event): void => {
            var item: HTMLElement = <HTMLElement>(e.currentTarget);
            console.info("selected voucher row with id=" + item.id);
        }

        let bilder: Vouchers.Services.VoucherTableBuilder = new Vouchers.Services.VoucherTableBuilder(
            {
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
    let res: Vouchers.Services.VouchersRessource<Vouchers.Services.Voucher> = new Vouchers.Services
        .VouchersRessource<Vouchers.Services.Voucher>("/api/vouchers/");

    res.getItems().done((data: Vouchers.Services.Voucher[]) => {
        let vs: Vouchers.Services.Voucher[] = data;
        console.log("Data received from Ressource");
        console.log(JSON.stringify(vs));
    });
}

function usingPromises() {

    function doAsyncTask(succeed: boolean) {

        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Async Work Complete");
                if (succeed) {
                    resolve("Promise resolved");
                } else {
                    reject("Promise rejected");
                }
            }, 1000);
        });
        return promise;
    }

    doAsyncTask(true).then((msg) => {
        console.log(msg);
        console.log("Async Task complete");
    });
}

