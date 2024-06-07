// TOÁN TỬ CỘNG +
var ketQua = 2 + 2; // kết quả ra 4
ketQua = 'dang thanh' + 'hai'; // kết quả ra dang thanhhai
ketQua = 12 + 'hải'; // có thể nối chuỗi với số
console.log(ketQua); // kết quả 12hải
console.log(typeof ketQua);

// TOÁN TỬ TRỪ -
var ketQua2 = 'hai' - 'hai'; // kết quả NaN (nỗi)
ketQua2 = 5 - 6; //  kết quả -1

console.log('-----------------------------');

// TOÁN TỬ NHÂN *
var ketQua3 = 'hai' * 5; // NaN
ketQua3 = 5 * 4;
console.log(ketQua3);

// TOÁN TỬ LŨY THỪA **
ketQua3 = 5 ** 4;
console.log(ketQua3);

// TOÁN TỬ CHIA / : chia nguyên , % : chia dư
ketQua4 = 10 % 3;
console.log('Phép chia lấy phần dư là : ', ketQua4);
ketQua4 = 10 / 3;
console.log('Phép chia lấy phần nguyên là : ', ketQua4);

// TOÁN TỬ SO SÁNH
/* + bằng : == ,=== , khác : !=
   + == : so sánh về giá trị 
   + === : so sánh về giá trị và kiểu dữ liệu true
   + !== : so sánh về giá trị và kiểu dữ liệu  false*/

var a = 8;
var b = '8';
console.log('kết quả là : ', a == b);
console.log('kết quả là : ', a === b);

// TOÁN TỬ NGƯỢC LẠI !
console.log('kết quả là NGƯỢC LẠI cái trên  : ', !(a == b));
console.log('kết quả là NGƯỢC LẠI cái trên : ', !(a === b));

/* TOÁN TỬ LOGIC 

VÀ : && 
HOẶC : ||
CÁC TOÁN TỬ CÓ THỂ VIẾT TẮT : +=, -=, *=, /=, %=, ++, --

i++ có độ ưu tiên thấp hơn toán tử 
++i có độ ưu tiên cao hơn toán tử */
