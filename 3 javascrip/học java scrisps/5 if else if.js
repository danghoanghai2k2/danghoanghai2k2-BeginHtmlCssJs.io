// CẤU TRÚC RẼ NHÁNH IF ELSE

/* + dạng viết tắt
        if(điều kiện){
            thực thi câu lệnh;
        }


+ dạng đầy đủ
        if(điều kiện){
            thực thi câu lệnh ;
        }
        else{
            thực thi câu lệnh ;
        }

+ dạng if else if 
        if(điều kiện){
            thực thi câu lệnh ;
        }
        else if(điều kiện){
            thực thi câu lệnh;
        }
        else{
            thực thi mà điều kiện trên không vào ;
        } */
var diem = 9;
if (diem < 5) {
   console.log('Học Sinh Này Bị Điểm dưới trung bình : ', diem + ' điểm');
} else if (diem >= 5 && diem < 7) {
   console.log('Học Sinh Này Bị Điểm  trung bình : ', diem + ' điểm');
} else if (diem >= 7 && diem < 8) {
   console.log('Học Sinh Này Bị Điểm  khá : ', diem + ' điểm');
} else {
   console.log('Học Sinh Này Bị Điểm  giỏi : ', diem + ' điểm');
}
