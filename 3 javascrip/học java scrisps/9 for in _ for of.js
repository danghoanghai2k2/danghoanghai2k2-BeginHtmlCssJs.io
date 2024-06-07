/* VÒNG FOR IN 
        for(<tên biến> in <mảng/object>) 

--> nó sẽ lấy tất cả dữ liệu bên trong mảng mà không cần điều kiện

--> vòng for in này sẽ dùng được trong kiểu dữ liệu object : hiện ra biến và giá trị  */

var object = [
   {
      name: 'đặng thanh hải',
      class: '12a7',
      salary: 25000,
   },
   {
      name: 'đặng hoàng hải',
      class: '12a7',
      salary: 25000,
   },
   {
      name: 'hoàng thanh hải',
      class: '12a7',
      salary: 25000,
   },
];

var arrays = [10, 2, 5, 6, 4, 7, 1];
for (var i in arrays) {
   console.log(i, ' :', arrays[i]);
   //viết là i : sẽ ra vị trí số thứ tự phần tử trong mảng ,viết arrays[i] : sẽ ra giá trị
}

console.log('\n===================================================================\n');
for (var i in object) {
   console.log(i, ' :', object[i]);
   //viết là i : sẽ ra biến mà người dùng đặt ,viết object[i] : sẽ ra giá trị
}

console.log('\n===================================================================\n');

// VONG LẶP FOR OF LẤY RA GIÁ TRỊ TRONG TỪNG PHẦN TỬ kiểu interable (kiểu duyệt được)

//  for(<tên biến> in <mảng/object>)
for (var i of arrays) {
   console.log(i); // in ra giá trị trong mảng
}
console.log('\n===================================================================\n');
for (var i of 'Xin Chao') {
   console.log(i);
}

// VÒNG forEach lấy ra phần tử và giá trị của mảng
/* CÚ PHÁP : mảng.foreach(function(<phần tử trong mảng>,<vị trí của phần tử> ){
    câu lệch thực thi;
}) */

arrays.forEach(function (valus, index) {
   console.log(` phần tử  ${valus} -> có vị trí là ${index}`);
});
