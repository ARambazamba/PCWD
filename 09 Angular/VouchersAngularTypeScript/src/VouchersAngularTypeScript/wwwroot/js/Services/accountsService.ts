module voucherAppTS.Services {

    export interface IAccountResource extends ng.resource.IResource<IAccount> { }

    export interface IAccountService {
        getAcctResource(): ng.resource.IResourceClass<IAccountResource>;
    }

    export class AccountService implements IAccountService {
        
        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) {}

        public getAcctResource(): ng.resource.IResourceClass<IAccountResource> {
            return (this.$resource('/api/accounts')) as ng.resource.IResourceClass<IAccountResource>;
        }
    }

    voucherApp.service("accountService", AccountService);
}