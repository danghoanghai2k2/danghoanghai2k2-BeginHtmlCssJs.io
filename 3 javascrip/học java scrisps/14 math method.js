// HÀM MATH.?

// HÀM TRẢ VỀ TRỊ TUYỆT ĐỐI Math.abs(số truyền vào)

var b = Math.abs(-8.75); //Trả về 8.75
console.log("TRẢ VỀ TRỊ TUYỆT ĐỐI : ", b);

// HÀM TRẢ VỀ GIÁ TRỊ CĂN BẬC 2 CỦA 1 SỐ Math.sqrt(số truyền vào)

var d = Math.sqrt(81);
console.log("TRẢ VỀ CĂN BẬC HAI : ", d);


// HÀM TRẢ VỀ LŨY THỪA (SỐ MŨ) Math.pow(số truyền vào,số mũ)

d = Math.pow(2, 4);
console.log("TRẢ VỀ LŨY THỪA : ", d);


// HÀM LÀM TRÒN XUỐNG 1 SỐ  Math.floor(số truyền vào)

d = Math.floor(2.9);
console.log("LÀM TRÒN XUỐNG CỦA 1 SỐ : ", d);


// HÀM LÀM TRÒN LÊN 1 SỐ  Math.ceil(số truyền vào)

d = Math.ceil(2.9);
console.log("LÀM TRÒN LÊN CỦA 1 SỐ : ", d);


// HÀM LÀM TRÒN LÊN HOẶC XUỐNG THEO SỐ THẬP PHÂN (<=0.5-> lên , >0.5 ->xuống)  Math.round(số truyền vào)

d = Math.round(2.599);
console.log("LÀM TRÒN LÊN HAY XUỐNG THEO SỐ THẬP PHÂN (<=0.5-> lên , >0.5 ->xuống) : ", d);

// HÀM LÀM TRÒN LÊN SAU DẤU THẬP PHÂN toFixed(số lượng muấn làm tròn sau dấu phẩy)
console.log(3.555.toFixed(2));
// NẾU VIẾT toFixed() THÌ LÀM TRÒN THÀNH SỐ NGUYÊN DƯƠNNG


// HÀM PI CỦA MATH 

console.log("Lấy ra số PI  = ",Math.PI);

// HÀM RANDUM()  TẠO RA 1 SỐ THẬP PHÂN NHỎ HƠN 1 --> MỖI LẦN CHẠY TẠO RA 1 SỐ 
console.log(Math.random());

// Ứng dụng tạo ra số ngẫu nhiên 

var soNgauNhien = Math.floor(Math.random() * 5)
console.log("tạo ra số ngẫu nhiên từ 1 đến 5",soNgauNhien);

var arrays = ['hải','thanh','hoài','thắng','sơn']
console.log("Lấy ra ngẫu nhiên phần tử trong mảng : ",arrays[soNgauNhien]);

// LÀM VỀ ĐẬP ĐỒ TRONG GAME 
soNgauNhien = Math.floor(Math.random() * 100)
if(soNgauNhien <50){
    console.log('Bạn đập đồ thành công');
}else{
    console.log('Bạn đập đồ không thành công ');
}


// HÀM MATH.MAX VÀ MATH.MIN

var max = Math.max(-1,6,9,10,11,100)
console.log('Số lớn nhất trong các chữ số : ',max);

var min = Math.min(-1,6,9,10,11,100)
console.log('Số bé nhất trong các chữ số : ',min);