
function validateVoucher(vsum, vdetails) {
    var result = false;
    if (vdetails!=null) {
        var sumD = 0;
        for (var i = 0; i < vdetails.length; i++) {
            var cd = vdetails[i];
            sumD += cd.DetailAmount;
        }
        result = vsum === sumD;
    }
    return result;
}