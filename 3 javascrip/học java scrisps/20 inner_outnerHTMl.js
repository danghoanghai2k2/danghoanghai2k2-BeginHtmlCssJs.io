// innerHTML: bên trong lấy ra hết thẻ bên trong
// outerHTML: bên ngoài 
var box_div =  document.querySelector('.Box-div')
console.log(box_div);
// thêm vào element 1 element mới
box_div.innerHTML = `<h3>đặng thanh hải</h3>
<h3>đặng thanh hải</h3>
ĐĂNG THANH HẢI`

// innerHTML
// ta cũng có thể thêm attributes và text vào  innerHTML mới 

var h3 = document.querySelector('.Box-div h3:last-child')
console.log(h3);
// thêm attributes
h3.style = 'color:blue;'
h3.setAttribute('class','thẻ h3')
console.log(h3.getAttribute('style'));
console.log(h3.getAttribute('class'));
// thêm text
h3.innerText = 'ĐẶNG THANH HẢI DHTI14A1ND'
console.log(h3.innerText);

// lấy ra tất cả những j mình vừa thêm vào theo string
console.log(box_div.innerHTML);

// outerHTML: bên ngoài 
console.log(box_div.outerHTML);

var rePlace= box_div.outerHTML = '<p>thay thế thẻ div bởi outHTML</p>'
console.log(box_div);
console.log(rePlace);