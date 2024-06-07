// SRING METHOD 


// LẤY RA SỐ LƯỢNG CỦA CHUỖI lenght

        var hoTen = "   Đặng js Thanh Hải  js js";
        var kieu =  hoTen.length;
        console.log("1 Số Lượng trong chuỗi là bao nhiêu : ",kieu);
        console.log(`1 Số Lượng trong chuỗi là bao nhiêu : ${kieu}`);

// LẤY RA CHUỖI MÀ KHÔNG CÓ KHOẢNG TRẮNG Ở HAI ĐẦU trim()

    console.log("2 Sô Lượng Chuỗi hiển thị mất đi khoảng trắng : ",hoTen.trim().length);
    console.log("2 Chuỗi hiển thị mất đi khoảng trắng : ",hoTen.trim());

//  KIỂM TRA XEM CHỮ CÁI ĐÓ LẰM Ở VỊ TRÍ THỨ MẤY TRONG CHUỖI indexOf("kí tự kiểm tra") 
// ---> trả về Number (không có thì -1)

        kieu = hoTen.indexOf("js")
        console.log("3 Chữ 'js' ở vị trí từ thư mấy trong chuỗi : ",kieu);

        
         // KIỂM TRA XEM CHỮ JS BẮT ĐẦU SAU VỊ TRÍ SỐ 8 
        kieu = hoTen.indexOf("js",10)
        console.log("3 Chữ 'js' ở sau vị trí 8 ở vị trí từ thư mấy trong chuỗi : ",kieu);


        // KIỂM TRA CHỮ JS Ở VỊ TRÍ CUỐI CHUỖI
        kieu = hoTen.lastIndexOf("js")
        console.log("3 Chữ 'js' ở cuối trở lại ở vị trí từ thư mấy trong chuỗi : ",kieu);

// CẮT CHUỖI RA MỘT CHUỖI MỚI +  substring("vị trí bắt đầu cắt","vị trí kết thúc cắt(không ghi là đến hết)")
                        //    +  slice("vị trí bắt đầu cắt","vị trí kết thúc cắt(không ghi là đến hết)")

        kieu = hoTen.substring(3,8)
        // kieu = hoTen.slice(3,8)
        console.log("4 Vi trí cắt từ vị trí 3 -> 8 :",kieu);
        kieu = hoTen.substring(8) 
        console.log("4 Vi trí cắt từ vị trí  8 -> hết:",kieu);

    
// THAY THẾ CHUỖI NÀY THÀNH CHUỖI KHÁC 
        // + replace(<kí tự muấn thay đổi> , <kí tự sau khi thay đổi>) chỉ thay đổi chữ đầu tiên gặp trong chuỗi
        // + replace(/kí tự muấn thay đổi/g , <kí tự sau khi thay đổi>)thay đổi tất cả chữ trong chuỗi
        var HOTEN = "dang thanh hai hai hai"

        // chỉ thay đổi chữ hai đầu tiên gặp trong chuỗi
        kieu = HOTEN.replace("hai","Hải")
        console.log("5 thay đổi chữ 'hai' đầu tiên trong chuỗi : ",kieu);

        // thay đổi tất cả chữ hai trong chuỗi
        kieu = HOTEN.replace(/hai/g,"Hải")
        console.log("5 thay đổi chữ 'hai' tất cả trong chuỗi : ",kieu);


// VIẾT HOA TOÀN BỘ CHỮ CÁI  toUpperCase()

        var kieu =  HOTEN.toUpperCase()
        console.log("6 Viết Hoa Toàn Bộ Chuỗi : ",kieu);

// VIẾT THƯỜNG TOÀN BỘ CHỮ CÁI .toLowerCase()

        kieu =  HOTEN.toLowerCase()
        console.log("7 Viết thường Toàn Bộ Chuỗi : ",kieu);

// LẤY RA KÍ TỰ Ở VỊ TRÍ TRONG CHUỖI  charAt(vị trí cần lấy ra kiểu số)

        kieu = HOTEN.charAt(1)
        console.log("8 Chữ cái ở vị trí 2 trong chuỗi là : ",kieu);

        kieu = HOTEN.charAt(HOTEN.length - 1)
        console.log("8 Chữ cái ở vị trí cuối trong chuỗi là : ",kieu);
        console.log("===========================================");
        for( var i in HOTEN){
            kieu = HOTEN.charAt(i)
            console.log(kieu);
        }
        // TA CÓ THỂ DÙNG NHƯ NÀY ĐỂ LẤY RA CHỮ CÁI Ở VITRI MÌNH CHỌN
        // NẾU CHUỖI LÀ RỖNG THÌ HIỆN undefinde
        console.log(`akjhsdkj ${HOTEN[2]}`);
        

// HÀM TÁCH CHUỖI split("kí tự mà bạn muấn cắt") BIẾN CHUỖI THÀNH ARRAYS 

        HOTEN = "11 22 33 44 55"
        kieu = HOTEN.split(" ") //TÁCH CHUỖI THÀNH MẢNG THEO KHAONGR TRẮNG
        console.log("9 Kiểu chuỗi mà cắt theo dấu cách là  : ",kieu);
 //       kieu = HOTEN.split("") : CẮT CHUỖI THÀNH MẢNG THEO TỪNG KÍ TỰp


/* HÀM KIỂM TRA XEM CÓ KÍ TỰ TRONG CHUỖI KHÔNG 
--->> (tương tự indexOf(kí tự kiểm tra) : trả về số  || HOTEN.includes(kí tự kiểm tra) : trả về true,false ) */

        kieu = HOTEN.includes("1") // kiểm tra xem có 1 trong chuỗi không 
        console.log("1 Kí tự này có trong chuỗi hay khồng : ",kieu);


        kieu = HOTEN.includes("1",10) // kiểm tra xem có 1 trong chuỗi khoảng từ 10 đến hết không
        console.log("10 Kí tự này có trong chuỗi từ vị trí 10  hay khồng : ",kieu);
        