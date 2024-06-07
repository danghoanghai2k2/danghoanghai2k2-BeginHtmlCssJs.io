// Bài tập 1 :
var soNguyen = [1,6,2,4,8,9,10,3,7]
console.log(soNguyen);
var max = soNguyen[0]
var min = soNguyen[0]
for(var i of soNguyen){
    if(max < i){
        max = i;
    }
    if(min > i){
        min = i;
    }
}
console.log("Số Lớn Nhất trong mảng vùa nhập là : ",max);
console.log("Số nhỏ Nhất trong mảng vùa nhập là : ",min);
// BÀI2
console.log("\n\nVỊ TRÍ CỦA GIÁ TRỊ LỚN NHẤT TRONG MẢNG\n\n");
max = soNguyen[0]
var viTri = null
for(var i in soNguyen){
    if(max < soNguyen[i]){
        max = soNguyen[i]
        viTri = i;
    }
}
console.log("Vị trí của giá trị lớn nhất trong mảng là : ",viTri);
// BAID 3
console.log("\n\nTÍNH TRUNG BÌNH CỘNG\n\n");
var sum = soNguyen.reduce(function(tong,valus){
    return tong + valus
},0)
var tbc = (sum/soNguyen.length);
console.log("TRUNG BÌNH CỘNG CÁC PHẦN TỬ TRONG MẢNG LÀ : ",tbc.toFixed(2));


// BAI4
console.log("\n\nSỐ NGUYÊN TỐ TRONG MẢNG\n\n")
// KIỂM TRA SÓ NGUYÊN TỐ
var ArraySNT = soNguyen.filter(function(valus,index){
    if(valus < 3){
        return false
    }
    else{
        var count = 0;
        for (var i = 2; i <= Math.sqrt(valus); i++) {
            if (valus % i == 0) {
                ++count;
            }
        }
        if(count == 0){
            return valus;
        }
    }
})
console.log(` Mảng số nguyên tố mới : `,ArraySNT);
// BÀI 5
console.log("\n\n TRUNG BÌNH CỘNG SỐ NGUYÊN TỐ TRONG MẢNG\n\n")
var soNguyen2 = [3,5,7,11,13,10,2,20];
ArraySNT = soNguyen2.filter(function(valus,index){
    if(valus < 3){
        return false
    }
    else{
        var count = 0;
        for (var i = 2; i <= Math.sqrt(valus); i++) {
            if (valus % i == 0) {
                ++count;
            }
        }
        if(count == 0){
            return valus;
        }
    }
})
console.log(` Các Số nguyên tố trong mảng là : `,ArraySNT);
var TongSNT =  ArraySNT.reduce(function(sum,valus,index){
    return sum + valus
},0)
console.log(` Trung bình cộng các số nguyên tố trong mảng : ${TongSNT/ArraySNT.length}`);
// bài 7
console.log("\n\n SẮP XẾP TĂNG DẦN \n\n")
soNguyen2.sort(function(item1,item2){
    if (item1 > item2)
            return 1;//chuyển thành -1 thì sắp xếp ngược lại 

        if (item1 < item2)
            return -1;//chuyển thành 1 thì sắp xếp ngược lại 

        if (item1 == item2)
            return 0;
})
console.log(soNguyen2);
// Bài 6
console.log("\n\n SỐ ÂM LỚN NHẤT TRONG MẢNG\n\n")
var mangAm = [-5,-7,-2,-4,-1,-9]
max = 0;
for(var i of mangAm){
    if(i < 0){
        max = i;
        break;
    }
}
for(var i of mangAm){
    if((i<0) && (i > max)){
        max = i
    }
}
console.log("SỐ ÂM LƠN NHẤT TRONG MẢNG LÀ : ",max);


// BÀI 9
var Animals = ['Cho','Meo','Lon','Ga','Ho','Chuot','Trau']
var Animals_Ho_Chuot = Animals.filter(function(valus,index,Animals){
    if(valus.trim().toUpperCase() === 'HO'||valus.trim().toUpperCase() === 'CHUOT'){
        return valus
    }
})
console.log("Mảng có xuất hiện con hổ và chuột không : ",Animals_Ho_Chuot);
// ý 2
var AnimalsCho = Animals.some(function(valus,index){
    return valus.trim().toUpperCase() == 'CHO'
})
console.log(AnimalsCho);
if(AnimalsCho === true){
    Animals.push('Cao','LonRung')
    console.log('Mảng có con CHó và thêm vào Cáo và Lợn Rừng : ',Animals);
}
else{
    console.log('Mảng không có con CHó và thêm vào Cáo và Lợn Rừng : ',Animals);
}
// ý 3
let viTriMeo = undefined
Animals.forEach(function(valus,index){
    if(valus.trim().toUpperCase() === 'MEO'){
        viTriMeo = index
    }
})
// console.log(viTriMeo);
if(viTriMeo == undefined){
    console.log("Không có con MÈo nào trong Mảng !!!! ");
}
else{
    Animals.splice(viTriMeo,1,'Voi')
    console.log("Mảng có con mèo và xóa đi thay bằng con Voi : ",Animals);
}
// bài 10 :
var arr = ["111","222","333","444"]
var arrNumbers = arr.map(function(valus,index){
    return parseInt(valus)
})
console.log(arrNumbers);