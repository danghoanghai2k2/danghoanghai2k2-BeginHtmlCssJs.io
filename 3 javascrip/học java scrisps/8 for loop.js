// VÒNG LẶP FOR LOOP

// FOR(<KHAI BÁO> ; <ĐIỀU KIỆN LẶP> ; <SỐ LẦN LẶP>){
//     CÂU LỆNH THỰC THI
// }

// HIỂN THỊ TỪ 1 ĐẾN 10

var arrays = [1, 2, 3, 4, 5, 6, 7];
// in ra mảng ngược lại
for (var i = arrays.length - 1; i >= 0; --i) {
   console.log(arrays[i]);
}

// in ra mảng
for (var i = 0; i < arrays.length; ++i) {
   console.log(arrays[i]);
}

// TRONG JS CŨNG CÓ BREAK(thoát ra khỏi vòng lặp gần nhất) VÀ CONTINUE (bỏ qua tất cả code sau và tiếp tục chạy)
// TRONG JS CŨNG CÓ VÒNG LẶP while VÀ do while tương tự như c++;
