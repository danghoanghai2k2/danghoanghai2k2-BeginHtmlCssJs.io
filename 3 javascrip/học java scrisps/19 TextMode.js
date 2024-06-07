// innerText
// textContent

// lấy ra nội dung của Element
var headding = document.querySelector('#heading')
console.log(headding.innerText);
console.log(headding.textContent);

// sửa nội dung 
headding.textContent = 'Đặng Thanh Hải'
headding.innerText = 'ĐẶNG THANH HẢI'

// SO SÁNH innerText và textContent
// innerText : trả về đúng những j mà ta nhìn thấy được trên web (nằm trong element) 
// textContent : trả về tất cả những j có trong element trừ tên thẻ
var box_div = document.querySelector('.Box-Div')
console.log('Hiện ra những j mà người dùng thấy được \n',box_div.innerText);
console.log('Hiện ra các nội dung trừ tên thẻ : \n',box_div.textContent);


var idH1 = document.getElementById('H11');
console.log(idH1);
// chèn có xuống dòng với innerText thì ra là br
// chèn có xuống dòng với textContent thì ra không có 
idH1.textContent = `
hải hải hải hải



`
// chèn vào có cà thẻ thì hiện lên tất cả thẻ 
idH1.innerText = `


<h1 id="H11">ĐẶNG THANH HẢI </h1>`