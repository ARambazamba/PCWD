module voucherAppTS {

    export interface IAccount {
        ID: number;
        Name: string;
        Expense: boolean;
    }

    export interface IVoucher {
        ID: number;
        Text: string;
        Date: Date;
        Amount: number;
        Paid: boolean;
        Expense: boolean;
    }   

    export interface IBalanceAccount {
        ID: number;
        Name: string;
        Expense: boolean;
        VoucherDetails?: IVoucherDetail [];
    }  

    export interface IVoucherDetail {
        ID: number;
        VoucherID: number;
        AccountID: number;
        Account: IBalanceAccount;
        Text: string;
        Amount: number;
        Comment?: string;
    }

    export interface IVoucherDetailsViewModel {
        CurrentVoucher: IVoucher;
        EditDetail: IVoucherDetail;
        Details: IVoucherDetail[];
        Accounts: IBalanceAccount [];
    }
}