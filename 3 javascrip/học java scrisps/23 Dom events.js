/*
Attibutes Events 
Assign events using  the elements node */
/*  + click : ấn chuột
 + dblclick : ấn 2 lần chuột
 + Drag : kéo
 + drop : thả
 + keydown : ấn phím xuống 
 + keyup : ấn phím lên
 + resize : thay đổi kích thước 
 + scroll : ăn con chuột  
 + onmouseover : hover chuột */

//Assign events using  the elements node (dùng gọi biến elemetNode xong sử dụng)
var h1elements = document.querySelector('h1')
h1elements.onclick = console.log('bạn đã click vào đây rồi !!!')
h1elements.onclick = function(e){
    // truyền vào e là truyền vào kiểu Event
    // target : là chỉ đến cái element mà mình tạo event mà muấn thực hiện 
    console.log(e.target);
    Object.assign(h1elements.style,{
        color:'red',
        backgroundColor:'blue',
        trasition: 'all 2s esae-in-out 0s'
    })
}

// click nhiều thẻ 
var elementH2s = document.querySelectorAll('.h2')
for(var i = 0;i<elementH2s.length;++i){
    elementH2s[i].onclick = function(e){
        console.log(e.target);
    }
}
console.log(elementH2s);

// lấy value input text 

var inPutText = document.querySelector('input[type="text"]')
// thuộc tính input có cái là onchange
var save = ''
console.log(inPutText);
inPutText.onchange = function(event){
  save = (event.target.value).toString()
}
console.log('in ra biến lưu khi nhập dữ liệu từ input ',save);

// lấy value checkbox

var inPutCheck = document.querySelector('input[type="checkbox"]')
inPutCheck.onchange = function(event){
    if(event.target.checked == false)
    {
        console.log('fhskajhfahsa');
    }else{
        console.log('aaaaaaaaaaaaaaaaaaaaaaa');
    }
}

// lấy value select 

var selectElemnet = document.querySelector('.select-one')
selectElemnet.onchange = function(e){
    console.log(e.target.value);
}
// oninput : ấn đến đâu thay đổi dữ liệu đến đó
// onchange :ấn ra ngoài thì thay đổi dữ liệu

/* sử lý sự kiện bàn phím :
onkeydown : sau khi ấn xuống
onkeyup : sau khi ấn lên
onkeypress : có thể dữ niền trừ esc */
document.onkeypress = function(event){
    console.log(event.which);
}