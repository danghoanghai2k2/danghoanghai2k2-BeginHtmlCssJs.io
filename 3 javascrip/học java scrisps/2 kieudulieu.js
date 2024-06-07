// KIỂU DỮ LIỆU TRONG JS

// kiểu dữ liệu trong js
// string ,number,boolen,object

// khai báo kiểu chuối trên 1 dòng thì dùng ' '," ",``
var ten = 'đặng thanh "hải" ';
console.log(ten);
console.log(typeof ten);

// khai báo kiểu dữ liệu trên nhiều dòng thì dùng dấu `đoạn văn .......`
var doanTho = `
quê anh nước mặn đồng chua
làng nghèo sỏi đá
anh với tôi đôi người xa lạ`;
console.log(doanTho);
console.log(typeof doanTho);
// 2 KIỂU DỮ LIỆU SỐ numbers

var numbers = 999;
console.log('số dương : ', numbers);
numbers = -999;
console.log('Số âm :', numbers);
console.log(typeof numbers);

// 3 KIỂU DỮ LIỆU LUẬN LÝ Boolean trả về true or false

var lyLuan = true;
console.log('kiểu lý luận đúng : ', lyLuan);
console.log(typeof lyLuan);

lyLuan = false;
console.log('kiểu lý luận sai : ', lyLuan);

/* 4 KIỂU DỮ LIỆU Array  : TẬP HỢP CÁC KIỂU DỮ LIỆU KHÁC (MẢNG)

--> GOM TẤT CẢ  KIỂU DỮ LIỆU ĐÓ VÀO TRONG 1 CÁI NHÓM  */

var Arrays = [1, 2, 3, 4, 5, 6];

/* có thể viết  = [
    1,
    2,
    3,
    4,
    5,
    6
] */
var lenght = Arrays.length;
console.log('kiểu dữ liệu mảng : ', Arrays);
console.log('số phần tử (độ dài) của trong mảng : ', lenght);
lenght = Arrays[3]; // lấy ra giá trị ở vị trí 3
console.log('vị trí lấy ra là : ', lenght);
console.log(typeof Arrays); // sẽ ra  object

// 5 KIỂU DỮ LIỆU Object : là kiểu dữ liệu có thể gom tất cả giá trị liên quan đến nhau hay mối niên hệ

/* cú pháp tên biến = {
   --> key : value
    luôn có dấu : nối với nhau bởi biến và giá trị 
    các thuộc tính niên quan đến nhau 
    các cặp thuộc tính  này cách nhau 1 dấu phẩy
    --->> tương đương như struct 
} */
var objects = {
   name: 'hải',
   tuoi: 20,
   quequan: 'thái bình',
   luong: 99.99,
};
/* có thể viết ={name: "hải",tuoi:  20,quequan:"thái bình",luong:99.99} */
console.log(objects);
// lấy ra từng thuộc tính bên trong objects
console.log('lấy ra từng thuộc tính bên trong : ', objects.name);
console.log('lấy ra từng thuộc tính bên trong : ', objects['name']);

// ----> BẢN CHẤT CỦA Arrays TƯƠNG TỰ Object
