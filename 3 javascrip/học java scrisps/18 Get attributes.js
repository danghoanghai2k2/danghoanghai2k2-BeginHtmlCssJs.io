// DOM attributes
var h1heading = document.querySelector('h1');
console.log(h1heading);

// thêm thuộc tính vào trong thẻ setAttribute
//Cách 1 : trỏ và gán
// cách này tùy tửng thẻ sẽ có thuộc tính riêng và chung

h1heading.className = 'headding'; //class
h1heading.id = 'idheadding'; //id
h1heading.title = 'headding'; // title
h1heading.style = 'color:blue;'; // style
//...............................

var aheading = document.querySelector('a');
console.log(aheading);
aheading.href = 'faceBoock'; // href

// Cách 2 : dùng Phương thức
// có thể thêm bất kì thuộc tính nào vào thẻ,và thêm thuộc tính người dùng tự định nghĩa
h1heading.setAttribute('href', 'facebook');
aheading.setAttribute('data-111', 'youtube');

// lấy ra trong thẻ getAttribute
var p = document.querySelector('p');
var a = document.querySelector('a');
// lấy ra thuộc tính trong thẻ p

// cách 1 : trỏ đến thuộc tính có sẵn
console.log(` trỏ thẳng đến thuộc tính class : ${p.className}`);
console.log(` trở thẳng đến thuộc tính title :`, p.title);

// cách 2 : dùng phương thức (có thể truy xuất ra thuộc tính người dùng tự định nghĩa)
console.log('trỏ thông qua hàm getAttributes :', p.getAttribute('class'));
console.log('trỏ thông qua hàm getAttributes :', p.getAttribute('title'));

p.setAttribute('dataSet', 'DaTaSet');
console.log(p.getAttribute('dataSet'));
console.log(a.getAttribute('data-111'));
