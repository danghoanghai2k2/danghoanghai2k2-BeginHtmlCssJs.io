/* Element lấy thuộc tính :
+ id 
+ class
+ tag (cách thẻ)
+ selectort (các thuộc tính mà bạn đặt)
+ HTMLCollection  */

// LẤY THEO TÊN CỦA ID
var iD1 =  document.getElementById('h1111')
console.log(iD1);
// LẤY THEO TÊN CỦA CLASS trả về html conection
var class1  = document.getElementsByClassName('class11')
console.log(class1);
// LẤY THEO TÊN THẺ TAGNAME html conection
var theP = document.getElementsByTagName('p')
console.log(theP[0]);
// LẤY THEO THUỘC TÍNH MÀ MÌNH ĐẶT CHO THẺ (HAY DÙNG)
var selector =  document.querySelector('.Secound .theSecound:last-child')
 // chỉ lấy được 1 thuộc tính trong nhiều mà người dùng đặt

console.log(selector);
var selectors = document.querySelectorAll('.Secound .theSecound')
//lấy ra tất cả các thuộc tính mà người dùng đặt 
console.log(selectors);

// LẤY THEO HTML Collection có vài thẻ điển hình ít dùng
// trả về thẻ form 
var form  = document.forms
console.log(form);
console.log(document.forms['form-2']);

// trả về thẻ a có trường name
console.log(document.anchors);

// TA CÓ THỂ DÙNG CÁCH NÀY ĐỂ GỌI ĐẾN PHẦN TỬ CON TRONG WEB 
// lấy thẻ li từ the ul 
// cách 1 
selectors = document.querySelectorAll('ul li')
console.log(selectors);
// cách 2
selectors = document.querySelector('ul')// lấy ra thẻ ul 
console.log(selectors);
var ul_li = selectors.querySelectorAll('li')
console.log(ul_li);

