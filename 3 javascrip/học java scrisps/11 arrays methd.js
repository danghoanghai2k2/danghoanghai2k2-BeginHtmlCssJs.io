// ARRAYS METHOD

var numbers = [1, 2, 3, 4, 5, 6, 7];
console.log('Mảng ban đầu : ', numbers);
console.log('Độ dài của mảng : ', numbers.length);
console.log('===========================================');

//CHUYỂN ARRAY THÀNH CHUỖI toString() || join("<kí tự ngăn cách bởi cac mảng>")
console.log(` Mảng được chuyển thành chuối là : ${numbers.toString()}`); // sẽ cách nhau bởi dấu phẩy
console.log(` Mảng được chuyển thành chuối là : ${numbers.join('-')}`); // sẽ cách nhau cái mình tự đắt

// thêm 1 hoặc nhiều phần tử vào cuối mảng ? push()
// Array.push(<phần tử cần thêm>) --> CÓ THỂ THÊM NHIỀU PHẦN TỬ CÁCH NHAU DẤU PHẨY

numbers.push('hải', 'SƠN');
console.log('Mảng sau khi chèn thêm ở cuối là : ', numbers);
console.log('Độ dài của mảng : ', numbers.length);
console.log('===========================================');

// thêm 1 hoặc nhiều phần tử vào đầu  mảng ?  unshift()
// Array.unshift(<phần tử cần thêm>) --> CÓ THỂ THÊM NHIỀU PHẦN TỬ CÁCH NHAU DẤU PHẨY

numbers.unshift('thắng', 'hoài');
console.log('Mảng sau khi chèn thêm ở đầu là : ', numbers);
console.log('Độ dài của mảng : ', numbers.length);
console.log('===========================================');

// xóa đi phần tử cuối cùng của mảng ? pop()
// Array.pop()

var a = numbers.pop(); //có thể gán phần tử lược bỏ đi vào 1 biến bằng cách gán
console.log('phần tử bị pop xóa đi là : ', a);
console.log('Mảng sau khi xóa phần tử cuối : ', numbers);
console.log('Độ dài của mảng : ', numbers.length);
console.log('===========================================');

// xóa đi phần tử ĐẦU  của mảng ? shift()
// Array.shift()

var a = numbers.shift(); //có thể gán phần tử lược bỏ đi vào 1 biến bằng cách gán
console.log('phần tử bị shift xóa đi là : ', a);
console.log('Mảng sau khi xóa phần tử đầu : ', numbers);
console.log('Độ dài của mảng : ', numbers.length);
console.log('===========================================');

var numbers2 = [3, 3, 3, 3, 3];
// HỢP 2 MẢNG THÀNH 1 MẢNG <mảng cần hợp>.concat(<mảng muấn hơp>)
a = numbers.concat(numbers2);
console.log(`Mảng sau khi ghép thêm với 1 mảng khác là :${a}`);

// cắt mảng ra thành một mảng ? slice
// luôn cắt từ vị trí chọn đến vị trí kết thúc trừ 1 phần tử
// Array.slice(<vị tri bắt đầu cắt><(vị trí kết thúc cắt)-1>)

var mangMoi = numbers.slice(2, 6);
console.log('Mảng cắt từ phần tử 2 đến phần tử 5 : ', mangMoi);
console.log('===========================================');

// xóa hoặc thêm phần tử trong mảng ? splice()
//Array.spline(<số phần tử bắt đầu xóa> , <số lượng phần tử muấn xóa> , <các giá trị muấn chèn vào>,<các giá trị n chèn vào........>)

a = numbers.splice(2, 2, 77, 77, 88, 'hải');
// ---->> ( 2:vị trí bắt đầu xóa , 2:xóa đi 2 giá trị từ vị trí số 2 , 77 & 77 & 88 & hải -> là chèn vào sau khi xóa)
console.log('giá trị bị xóa đi', a); // giá trị bị xóa đi
console.log('Mảng xóa đi 2 giá trị bắt đầu vị trí 2 và chèn vào 4 giá trị ', numbers);
console.log('===========================================');

var soDem = [3, 5, 8, 2, 4, 1];
var b = soDem.splice(3, 0, 7, 6); // từ vị trí số 3 xóa đi 0 giá trị và thêm vào 7 và 6 từ vị trí số 3 đấy
console.log('giá trị bị xóa đi', b); // giá trị bị xóa đi
console.log('mảng sau khi cắt chèn là : ', soDem);
console.log('===========================================');

// every KIỂM TRA XEM TẤT CẢ GIÁ TRỊ TRONG MẢNG CÓ THỎA MÃN 1 ĐIỀU KIỆN KHÔNG -->> TRẢ VỀ true or false
// tất cả thỏa mãn
var kiemtra = soDem.every(function (valus, index) {
   return valus >= 0;
});
console.log(` Kiểm tra xem tất cả phần tử có > 0 hay không : ${kiemtra}`);

// some KIỂM TRA XEM 1 TRONG TẤT CẢ GIÁ TRỊ TRONG MẢNG CÓ THỎA MÃN 1 ĐIỀU KIỆN KHÔNG -->> TRẢ VỀ true or false
// chỉ cần 1 thỏa mãn

kiemtra = soDem.some(function (valus, index) {
   return valus === 1;
});
console.log(` Kiểm tra xem có số 1  trong mảng hay không : ${kiemtra}`);

// sắp xếp mảng ? sort()
soDem.sort(); // sắp xếp theo thứ tự tăng dần kiểu number và string
console.log('Sắp Xếp Tăng dần theo kiểu dữ liệu numbes', soDem);

var string = ['hải91', 'hải2', 'hải3', 'hải4', 'hải5', 'hải6', 'hải7'];
console.log('Sắp Xếp Tăng dần theo kiểu dữ liệu chuỗi', string.sort());
console.log('===========================================');
// sắp xếp kiểu chi tiết hơn
string.sort(function (item1, item2) {
   if (item1 > item2) return 1; //chuyển thành -1 thì sắp xếp ngược lại

   if (item1 < item2) return -1; //chuyển thành 1 thì sắp xếp ngược lại

   if (item1 == item2) return 0;
});
console.log(string);
console.log('===========================================');
var student = [
   {
      name: 'hải1',
      diem: 7,
   },
   {
      name: 'hải3',
      diem: 5,
   },
   {
      name: 'hải2',
      diem: 10,
   },
   {
      name: 'hải6',
      diem: 9,
   },
];
// SO SÁNH MẢNG Object
student.sort(function (item1, item2) {
   if (item1.diem > item2.diem) return 1; //chuyển thành -1 thì sắp xếp ngược lại

   if (item1.diem < item2.diem) return -1; //chuyển thành 1 thì sắp xếp ngược lại

   if (item1.diem == item2.diem) return 0;
});
console.log('So Sánh Điểm Tăng Dần :', student); // chạy trên web

// TẠO RA MỘT MẢNG MỚI CÓ ĐỘ RỘNG TƯƠNG TỰ NHUNG CÓ THỂ KHÁC GIÁ TRỊ map()
// TRUYỀN VÀO 3 THAM SỐ : 1 LÀ valus , 2 LÀ INDEX  , 3 LÀ MẢNG CŨ(ÍT DÙNG ĐẾN)

var soDem2 = [4, 7, 2, 9, 3, 10, 11];
var mangMoi2 = soDem2.map(function (item1) {
   if (item1 % 2 == 0) return item1;
   // return về cái j thì mảng trả về cái đó (vd : item1/2, item1-2, item1+12,"hải"
});
console.log('Mảng Mới Tạo Ra mà Vẫn giữ nguyên độ rộng : ', mangMoi2);

// TẠO RA 1 MẢNG MỚI NHƯNG KHÁC ĐỘ RỘNG (BÉ HƠN HOẶC BẰNG) filter
// CÓ THỂ NHIỀU PHẦN TỬ BÊN TRONG

mangMoi2 = soDem2.filter(function (item1) {
   if (item1 % 2 == 1) return item1;
});
console.log('mảng số lẻ mới : ', mangMoi2);

// TÌM XEM CÓ GIÁ TRỊ ĐÓ Ở TRONG MẢNG KHÔNG  CHỈ TRẢ RA 1 PHẦN TỬ

mangMoi2 = soDem2.find(function (item1) {
   if (item1 == 111) return item1; // nếu có trả về số đó , nếu ko có trả về undefind
});
console.log('Số 111 có nằm bên trong mảng hay không : ', mangMoi2);

// TRẢ VỀ 1 SỐ LƯU TRỮ SAU KHI DUYỆT QUA MẢNG CÓ THAM SỐ KHỞI TẠO reduce
// return cái j thì lưu trữ cái đó

// CÚ PHÁP .reduce(function(<biến lưu trữ>,<valus>,<index>,<mảng hiện tại>)
// {code },< trị  khởi tạo của biến lưu trữ>)

// cách 1
mangMoi2 = soDem2.reduce(function (sum, valus, index) {
   return sum + valus;
}, 0);
console.log(` Tổng các giá trị bên trong mảng là : ${mangMoi2}`);

// BÀI TẬP reduce
var delarrays = [1, 2, [3, 4], 5, 6, [9, 8]];
var flatarrays = delarrays.reduce(function (sum, valus, index) {
   return sum.concat(valus); // concat là nối mảng với mảng
}, []);
console.log('Mảng sau khi được làm phẳng là : ', flatarrays);
