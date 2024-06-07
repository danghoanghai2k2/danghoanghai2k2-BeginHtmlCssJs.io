// bài 1 chuẩn hóa chuỗi 
var Chuoi = "   Học js hay     lắm     đó bạn   ";
var ChuoiCH = ""
function chuoiChuanHoa(valus){
    valus = valus.trim();
    for(var i = 0;i < valus.length ;i++){
        if(valus.charAt(i) == " "){
            if(valus.charAt(i + 1) != " "){
                ChuoiCH = ChuoiCH + valus.charAt(i)
            }
        }else{
            ChuoiCH = ChuoiCH + valus.charAt(i)
        }
    }
    return ChuoiCH

}
console.log(` Chuỗi ban đầu : ${Chuoi}`);
console.log(` Chuỗi sau khi được chuẩn hóa là : ${chuoiChuanHoa(Chuoi)}`);
// bài 2 :
Chuoi = "đặng thanh hải dhti14a1nd";
function timKiem(str){
    if(str.length <= 10){
        let arrStr = Chuoi.split(" ");
        arrStr[0] = arrStr[0].toUpperCase()
        return arrStr.join(" ")
    }
    else{
        let arrStr = Chuoi.split(" ");
        arrStr[arrStr.length - 1] = arrStr[arrStr.length - 1].toUpperCase()
        return arrStr.join(" ")
    }
}
console.log(` Chuỗi được chuyển kí tự đầu hoặc kí tự cuối : ${timKiem(Chuoi)}`);
// bài 3 : đếm xem từ js xuất hiện bao nhiêu lần 
Chuoi = "Học js đi Học js đi học js đi"
arrStr = Chuoi.split(" ")
console.log(arrStr);
function timKiemJS(str){
    var counter = 0;
    for(var i of arrStr){
        if(i.trim().toUpperCase() === 'JS'){
            counter++;
        }
    }
    if(counter == 0){
        return 0 ;
    }
    else if(counter > 0){
        return counter
    }
    else{
        return 0 ;
    }
}
if(timKiemJS(Chuoi) == 0){
    console.log(` Chuỗi không có chữ 'js' !!!!!!!!!`);
}
else{
    console.log(` Chuỗi có chữ 'js' và có ${timKiemJS(Chuoi)} chữ`);
}
// bài 4 : thay thế toàn bộ chuỗi js 
 function thayTheJS(str){
    var chuoiThayThe = str.replace(/js/g,"JavaScrips")
    return chuoiThayThe;
 }
console.log(` Chuỗi được thay thế : `,thayTheJS(Chuoi));
//  bài 5:  xóa toàn bộ JavaScrips
function xoaaJS(str){
    var arrStr = str.split(" ");
    var arrNOJS = arrStr.filter(function(valus,index){
        if(valus != 'js'){
            return valus;
        }
    })
    return arrNOJS.join(" ")
}
console.log(xoaaJS(Chuoi));

// bài 6 :
function bienChuoiThanhMang(str){
    return str.split(" ")
}
console.log(bienChuoiThanhMang(Chuoi));
// bài 7 tìm kinh độ và vĩ độ 
var loCaTion = "https://www.google.com/maps/place/King+BBQ+Buffet/@20.4357278,106.1601989,19.92z/data=!4m5!3m4!1s0x3135e710d4318457:0x814041d69daeccab!8m2!3d20.4355664!4d106.1606089?hl=vi"
function timKinhDo_ViDo(str){
    var starts = str.indexOf("@")
    starts = starts + 1
    var end = str.lastIndexOf(",")
    var kinh_Vi_Do = str.slice(starts,end)
    return kinh_Vi_Do.split(",")
}
var arrKINH_VIDO = timKinhDo_ViDo(loCaTion)
console.log("Kinh độ tìm được ở tọa độ trên là : ",arrKINH_VIDO[0]);
console.log("Vi độ tìm được ở tọa độ trên là : ",arrKINH_VIDO[1]);