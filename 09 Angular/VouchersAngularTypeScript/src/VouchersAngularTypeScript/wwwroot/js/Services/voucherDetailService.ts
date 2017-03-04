module voucherAppTS.Services {

    export interface IVoucherDetailResource extends ng.resource.IResource<IVoucher> { }

    export interface IVoucherDetailService {
        getVDetailResource(): ng.resource.IResourceClass<IVoucherDetailResource>;
    }

    export class VoucherDetailService implements IVoucherDetailService {

        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) { }

        public getVDetailResource(): any {
            return this.$resource('/api/VoucherDetails');
        }
    }

    voucherApp.service("voucherDetailService", VoucherDetailService);
}