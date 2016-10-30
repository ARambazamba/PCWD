namespace Vouchers {

    export interface IVoucherDetail {
        ID: number;
        VoucherID: number;
        AccountID: number;
        Account: IBalanceAccount;
        Text: string;
        Amount: number;
        Comment: string;
    }

    export interface IBalanceAccount {
        ID: number;
        Name: string;
        Expense: boolean;
        VoucherDetails: IVoucherDetail[];
    }

    export interface IVoucher {
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