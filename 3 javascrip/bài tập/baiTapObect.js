// Bài tập 1:

var NhanVien = {
    "full-name":"đặng thanh hải",
    yearofbirth:2004,
    address:'Thái bình city',
    salary:200000,
}
// câu 1 : thêm cặp key:valus vào sau object
NhanVien.email = 'dangthanhhai-dhti14a1nd'
NhanVien['year-experience'] = '2 năm'
// câu 2:
var nameKey = 'phone'
NhanVien[nameKey] = '098877443'
console.log(NhanVien);
// câu 3: xóa email nhân viên 
delete NhanVien.email
NhanVien['calculator'] = function(){
    var d = new Date;
    return d.getFullYear() - this.yearofbirth
}

console.log(` Tuổi của nhân viên là : ${NhanVien['calculator']()}`);
function checkAge(valus){
    if(valus >= 20){
        console.log(` Nhân viên có độ tuổi là ${valus} lớn hơn hoặc bằng 20 !!!`);
    }else{
        console.log(` Nhân viên có độ tuổi là ${valus} nhỏ hơn 20 !!!`);
    }
}
checkAge(NhanVien['calculator']())
// bài tập 2 : tạo 1 object contructer
var Xe = function(tenXe,hangXe,namXuatBan){
    this.tenXe = tenXe;
    this.hangXe = hangXe;
    this.namXuatBan = namXuatBan;
}
// câu 1 : khởi tao xe đạp và xe hơi
var xeHoi = new Xe('Mex 300','Mexedex',2015)
var xeDap =new Xe('lamBoGiDap','Đạp',1990)
console.log(xeHoi,xeDap);
// câu 2 : thêm số bánh vào xe đạp và số ghế vào xe hơi
xeHoi.soGhe = 10;
xeDap.soBanh = 2;
console.log("\n");
console.log(xeHoi,xeDap);
// câu 3 : thêm thuộc tính tính tuổi của xe 
Xe.prototype.Agecar = function(){
    var d = new Date;
    return d.getFullYear() - this.namXuatBan
}
console.log(` Tuổi của xe đạp là : ${xeDap.Agecar()} tuổi`);
console.log(` Tuổi của xe hơi là : ${xeHoi.Agecar()} tuổi`);

// bài tập 3 : 
// var hours = document.querySelector(".hours")
// var minutes = document.querySelector(".minutes")
// var secounds = document.querySelector(".secounds")
// var days = document.querySelector(".days")
// var months = document.querySelector(".months")
// var years = document.querySelector(".years")
// function upDateTimeNow(){
//     var date = new Date();
//     hours.innerHTML = date.getHours()
//     minutes.innerHTML = date.getMinutes()
//     secounds.innerHTML = date.getSeconds()
//     days.innerHTML = date.getDate()
//     months.innerHTML = date.getMonth() + 1
//     years.innerHTML = date.getFullYear()
// }
// setInterval (function(){
//     upDateTimeNow()
// },1000)
// bài tập 4 :
var GiaiThuong = ['Giải nhất','giải nhì','giải ba','giải khuyến khích'];
var giaiNgauNhien = Math.floor(Math.random() * 4)
var giaitThuongNhanDuoc = GiaiThuong[giaiNgauNhien];
console.log(`Danh sách các giải thưởng : \n`,GiaiThuong);
console.log(` Giải THưởng mà bạn nhận được là : ${giaitThuongNhanDuoc}`);