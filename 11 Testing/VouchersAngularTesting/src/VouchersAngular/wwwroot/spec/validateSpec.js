describe("VoucherValidater", function () {

    var sum;
    var details;
    var baddetails;

    beforeEach(function() {
        sum = 40;

        details = [
            { "ID": 2, "VoucherID": 3, "AccountID": 1, "DetailText": "USB Stick", "DetailAmount": 11, "Comment": null },
            {
                "ID": 7,
                "VoucherID": 3,
                "AccountID": 6,
                "DetailText": "Game of Thrones, Season 6",
                "DetailAmount": 29,
                "Comment": null
            }
        ];

        baddetails = [
            {
                "ID": 2,
                "VoucherID": 3,
                "AccountID": 1,
                "DetailText": "USB Stick",
                "DetailAmount": 11,
                "Comment": null
            },
            {
                "ID": 7,
                "VoucherID": 3,
                "AccountID": 6,
                "DetailText": "Game of Thrones, Season 6",
                "DetailAmount": 55,
                "Comment": null
            }
        ];
    });


    it("returns false when null is passed as sum", function () {
        expect(validateVoucher(null, details)).toEqual(false);
    });
    
    it("returns false when null is passed as detail", function () {
        expect(validateVoucher(sum, null)).toEqual(false);
    });

    it("returns true when correct data is passed", function () {
        expect(validateVoucher(sum, details)).toEqual(true);
    });

    it("returns false when bad data is passed", function () {
        expect(validateVoucher(sum, baddetails)).toEqual(false);
    });

    it("returns false when wrong sum is passed", function () {
        expect(validateVoucher(99, details)).toEqual(false);
    });

});