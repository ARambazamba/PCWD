module voucherAppTS.Services {

    export interface IVoucherResource extends ng.resource.IResource<IVoucher> { }

    export interface IVoucherService {
        getVoucherResource(): ng.resource.IResourceClass<IVoucherResource>;
    }

    export class VoucherService implements IVoucherService {

        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) { }

        public getVoucherResource(): any {
            return this.$resource('/api/vouchers/:id');
        }
    }

    voucherApp.service("voucherService", VoucherService);
}