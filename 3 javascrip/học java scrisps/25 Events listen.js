// thêm Event ?
// addEventListener(<kiểu event>,<function>{  
// })


// xóa Event ?
/* hay cho vào setTimeout(hàm)
removeEventListener(<kiểu events>,<function off >{
    
}) */
var buttomElements = document.querySelector('.buttom_tom')
buttomElements.addEventListener('click',function(e){
    console.log('hoàn thành việc 1');
})
function viecLam(){
    console.log('fkjahsfkhaskfhaskjhaf');
}
buttomElements.addEventListener('click',viecLam)

setTimeout(function(){
    buttomElements.removeEventListener('click',viecLam)
},3000)


