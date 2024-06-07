/* add thêm class vào Element
lenght : đội dài các class 
contain : kiểm tra xe class nào đó có trong Element hay không
remove : xóa bỏ class 
togegle : có thì xóa class không có thì thêm class */

var elements = document.querySelector(".Box-1")
console.log('thuộc tính bên trong classLIist : ',elements.classList);

// trả về số lượng class : length
console.log('số lượng các class trong elementNode : ',elements.classList.length);
var classfirst = elements.classList[0]
console.log('class thứ nhất : ',classfirst);

// lấy ra các dãy thuộc tính class ở chuỗi 
var stingClassList = elements.classList.value
console.log('các class ở dạng chuỗi : ',stingClassList);
// thêm 1 hoăc nhiều class vào elemnets 
// thêm nhiều các nhau dấu ,
elements.classList.add('colorRed','bgrYellow','FS-50')

// contain : kiểm tra xe class nào đó có trong Element hay không
var Check = elements.classList.contains('colorRed')
if (Check == true){
    console.log('class có trong elements');
}else{
    console.log('class không có trong elements');
}

// remove : xóa bỏ class 
// xóa nhiều cách nhau 1 dấu ,
elements.classList.remove('bgrYellow','FS-50')

// togegle : có thì xóa class không có thì thêm class 
// cách sử dụng của togegle
setInterval(function nhapNhay(){
    elements.classList.toggle('colorRed',)
    elements.style.transition = 'all ease-in-out 1s'
},1000)
nhapNhay()