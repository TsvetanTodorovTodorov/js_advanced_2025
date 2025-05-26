function strLength(str1, str2, str3) {
    let strLen1 = str1.length;
    let strLen2 = str2.length;
    let strLen3 = str3.length;
    let sumStr = strLen1+strLen2+ strLen3;
     console.log(sumStr);
     console.log(Math.round(sumStr/3));
    
}
strLength('chocolate', 'ice cream', 'cake')