// HỌC VỀ OBJECT
// cú pháp khai báo ---> key : <thuộc tính> ,key : <thuộc tính> ,key : <thuộc tính> ,.........
// Muấn đặt key sai quay tắc đặt ten thì cho vào dấu chuỗi '.....'

// TA CÓ THỂ THÊM BIẾN VÀO TRONG 1 OBJECT

let phoneKey = 'phone'; // biến biên ngoài
let myInfor = {
   'name-hai': 'đặng thanh hải',
   age: 20,
   address: 'thái bình',
   [phoneKey]: '09999999', // cách thêm biến vào object
};
console.log(myInfor);

// TA CÓ THỂ THÊM 1 KEY VÀO Object SAU KHI ĐẶT ?
myInfor.email = 'dangthanhhai@gmail.com';
console.log(myInfor);

// LẤY DỮ LIỆU CỦA TỪNG KEY CÓ 2  CÁCH
console.log(` Lấy dữ liệu từ key ra cách 1 : ${myInfor.address}`);
console.log(` Lấy dữ liệu từ key ra cách 1 : ${myInfor['age']}`); // KEY OR DỮ LIỆU KHÔNG CÓ TRẢ VỀ undefined

// XÓA ĐI 1 KEY TRONG OBJECT
delete myInfor.age; // xóa đi key trong object
console.log(' object sau khi bị xóa key age ', myInfor);

myInfor = {
   'name-hai': 'đặng thanh hải',
   age: 20,
   address: 'thái bình',
   [phoneKey]: '09999999', // cách thêm biến vào object
   getAddres: function () {
      return this['name-hai']; // đây là trường hợp trong object có 1 hàm
   },
};
console.log(myInfor.getAddres()); // khi gọi lại trả đúng hàm đó và thêm ()

// Object CONTRUCTER : tạo nên đối tượng

// cách 1
var Nguoi = function doiTuong(hoTen, tuoi, diaChi, email) {
   this.hoTen = hoTen;
   this.tuoi = tuoi;
   this.diaChi = diaChi;
   this.email = email;
   this.hoVaTen = function () {
      return `${this.hoTen}  ${this.diaChi}`;
   };
};

// cách 2
/*  function Nguoi(hoTen,tuoi,diaChi,email){
    this.hoTen = hoTen;
    this.tuoi = tuoi;
    this.diaChi = diaChi;
    this.email = email;
} */
var giamDoc = new Nguoi('hải', 40, 'thái bình', 'danghoanghai$gm.c');
var nhanVien = new Nguoi('thi', 10, 'ninh bình', 'roanthilethi@gm.c');

// TA CŨNG CÓ THỂ CHÈN THÊM KEY VÀo TỪNG ĐỐI TƯỢNG

giamDoc.Didong = '0999777666';
nhanVien['thẻ nghi'] = '000120022';
console.log(giamDoc);
console.log(` Họ và địa chỉ kết hợp bên trong object: ${giamDoc.hoVaTen()}`);
console.log(nhanVien);

// THÊM THUỘC TÍNH VÀO BÊN TRONG OBJETC KHÔNG CẦN BIẾN prototype.
Nguoi.prototype.Classname = 'dhti14a1nd'; // THÊM THUỘC TÍNH LỚP VÀO TRONG
