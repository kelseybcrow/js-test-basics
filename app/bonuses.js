//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
    let res = str.split(" ");
    // team, number, 2
    res[1][0] = res[1][0].toUpperCase;
    // (res[1])[0]  = (res[1])[0].toUpperCase;
    console.log(res);
    str = res[0] + res[1] + res[2];
    console.log(str);
}

camelCase (str);
