// KIỂU DỮ LIỆU Function

// CÓ 2 CÁCH  KHAI BÁO Function

// cách 1 : đặt function và gọi lại
function inPut() {
   console.log(1);
   console.log(2);
   console.log(3);
   console.log(4);
}
inPut();

// cách 2 : đặt function thành 1 biến và gọi lại và thêm dấu ()
var inPut2 = function () {
   console.log(999);
};
inPut2();

console.log('----------------------------------------------------------------------------');

// CÓ THỂ TRUYỀN VÀO THAM SỐ CHO function(....,....,....)

function xuat(a, b) {
   console.log('Tên : ', a);
   console.log('Tuổi : ', b);
}
xuat('đặng thanh hải', 17);
function tongBaSo(number, number2, number3) {
   let sum = number + number2 + number3;
   return sum;
}
console.log(`Tổng ba số là : `, tongBaSo(3, 3, 3));

inPut2 = function (a, b) {
   console.log('Tên : ', a);
   console.log('Tuổi : ', b);
};
inPut2('hải thái bình', 20);

console.log('----------------------------------------------------------------------------');

// TA CÓ THỂ GÁN Function1 = Function2
var bien1 = function () {
   console.log(789);
};
var bien1 = inPut2;
bien1('mõm bí thư', 88);
