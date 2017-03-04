module voucherAppTS.Services {

    export interface IVoucherResource extends ng.resource.IResource<IVoucher>, IVoucher {        
    }

    export interface IVoucherService {
        getVoucherResource(): ng.resource.IResourceClass<IVoucherResource>;
    }

    export class VoucherService implements IVoucherService {

        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) { }

        public getVoucherResource(): ng.resource.IResourceClass<IVoucherResource> {
            return (this.$resource('/api/vouchers/:id')) as ng.resource.IResourceClass<IVoucherResource>;
        }
    }

    voucherApp.service("voucherService", VoucherService);
}