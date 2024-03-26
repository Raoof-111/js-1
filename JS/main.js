// 1.İstifadəçinin daxil etdiyi adın neçə simvoldan ibarət olduğunu tapın.

// let admin = prompt ("Ad daxil et:");
// let leo =  admin.length;
// console.log(leo + " " + "simvoldan ibarətdir");




// 2.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvol varmı ?.


// let word = prompt ("Bir soz daxil edin:");
// let char = prompt("Birinci herfi daxil edin:");
// let gray = word.includes(char);
// console.log(gray ? "simvol var." : "simvol yoxdur." );




// 3.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla başlayırmı ?.

// let word = prompt ("Söz daxil et:");
// let char = prompt ("Simvol daxil et:")
// let group = word.charAt(0) == char

// console.log(group ? "Söz simvol ilə başlayır" : "Söz simvol ilə başlamır");


// 4.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi ?.

// let word = prompt ("Söz daxil et:");
// let char = prompt("Simvol daxil et:");
// let last = word.charAt(word.length - 1) == char

// console.log(last ? "Söz simvol ilə bitir" : "Söz simvol ilə bitmir");


// 5.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvolun index`ini tapın.

// let word = prompt ("Söz daxil et:");
// let main = word.indexOf(word[2]);
// console.log(main);

// 6.İstifadəçinin daxil etdiyi sözün böyük hərf olub olmadığını tapın.

let word = prompt ("Bir soz daxil edin:");

let boyuk = word == word.toUpperCase();

console.log(boyuk ? "Böyük hərflə" : "kiçik hərflə");