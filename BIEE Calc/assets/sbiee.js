function results (form) {
    let a = parseInt(form.nincome.value);
    let b = parseInt(form.aexpense.value);
    let c = parseInt(form.egrowth.value);
    let d = parseInt(form.eexpense.value);
    let e = parseInt(form.tgsales.value);
    let f = parseInt(form.tpayroll.value);
    let g = parseInt(mpindemnity.value);
    let exposure = a + b * c;
    let limit = exposure / 12 * g + d;
    document.getElementById("est_limit").innerHTML = "Your suggested Business Income and Extra Expense Limit = " + limit;
}