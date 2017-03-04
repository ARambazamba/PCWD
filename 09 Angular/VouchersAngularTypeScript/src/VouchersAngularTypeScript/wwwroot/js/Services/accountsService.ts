module voucherAppTS.Services {

    export interface IAcctResource extends ng.resource.IResource<IAccount> { }

    export interface IAccountsService {
        getAcctResource(): ng.resource.IResourceClass<IAcctResource>;
    }

    export class AccountsService implements IAccountsService {
        
        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) {}

        public getAcctResource(): any {
            return this.$resource('/api/accounts');
        }
    }

    voucherApp.service("accountService", AccountsService);
}