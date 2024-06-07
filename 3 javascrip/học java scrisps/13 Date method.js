
// DATE METHOD ?

// new Date()  tạo một đối tượng ngày mới với ngày và giờ hiện tại :

// new Date("2020-05-07") : lấy ra ngày tháng theo chuỗi

// new Date(year, month, day, hours, minutes, seconds, milliseconds) 
//  tạo một đối tượng ngày mới với một ngày và giờ được chỉ định .

        var date = new Date() //lấy ra ngày giờ hiện tại
        console.log("Ngày giờ hiện tại : ",date);

        date = new Date("2002-05-07") // lấy ra ngày giờ theo dạng chuỗi
        console.log("lấy ra ngày tháng năm theo string : ",date);

        // cú pháp truyền vào tháng (số 0 là tháng 1,số 1 là tháng 2 ,.... ,số 11 là tháng 12)

        date = new Date(2022,8,21,20,30,30) 
        console.log("Truyền vào ngày, tháng, năm, giờ, phút, giây : ",date);


// LẤY RA CÁI NĂM .getFullYear()

        date = new Date()
        var a = date.getFullYear()
        console.log("Lấy ra năm của biến date : ",a);

 // LẤY RA CÁI THÁNG .getMonth()

        a = date.getMonth()
        console.log("lấy ra tháng : ",a+1);

// LẤY RA CÁI NGÀY .getDate()

        a = date.getDate()
        console.log("lấy ra tháng : ",a);

        
// SO SÁNH DATE 

        var ngay = new Date(2020,6,7)
        var ngay1 = new Date(2020,10,7)
        
        console.log(ngay > ngay1);

        if(ngay.getMonth() > ngay1.getMonth()){
                console.log(true);
        }else{
            console.log(false);
        }

        
       /*  var date = new Date()
        getFullYear	lấy giá trị của năm
        getMonth	lấy giá trị của tháng
        getDate	lấy giá trị trong ngày
        getDay	lấy giá trị của ngày trong tuần
        getHours	lấy giá trị của giờ
        getMinutes	lấy giá trị của phút
        getSeconds	lấy giá trị của giây
        getMilliseconds	lấy giá trị tính bằng mili giây */


// LẤY RA MINI GIÂY CỦA DATE .Date.now() ?

        console.log("số mini giây về ngày tháng năm hiện tại : ",Date.now());
        date = new Date(0)
        console.log("lấy ra sô mini giây của 0 : ",date);
        
