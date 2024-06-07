var elemnetsNode = document.querySelector('.divBox')
console.log(elemnetsNode);

// thêm từng 1 thuộc tính css khi chưa có css
elemnetsNode.style.width = '300px'
elemnetsNode.style.height = '300px'
elemnetsNode.style.backgroundColor = 'blue'

// bản chất các style là 1 Objject (đối tượng)
// thêm nhiều thuộc tính cùng 1 lúc vào elementNode
//Object.assign(<element.style>,<{thuộc tính cần thêm}>)
Object.assign(elemnetsNode.style,{
    width:'300px',
    height:'500px',
    backgroundColor:'rgb(228, 219, 219 ,0.5)',
    textAlign: 'center',
    border: '1px solid black'
})

// lấy ra từng thuộc tính css là : 
console.log('Màu của khối là : ',elemnetsNode.style.backgroundColor);
