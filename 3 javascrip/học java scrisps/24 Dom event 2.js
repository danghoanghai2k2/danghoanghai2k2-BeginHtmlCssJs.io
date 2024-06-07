/* preventDefault() : ngăn chặn sự kiện diễn ra auto của các thẻ
stopPropagation() : ngăn chặn sự kiện nổi bọt */

//preventDefault()
var ulElement = document.querySelector('.ul_flex')
ulElement.onmousedown = function(e){
    e.preventDefault()
}
ulElement.onclick = function(e){
    console.log(e.target.textContent);
}

//stopPropagation()
var divElement = document.querySelector('.div_blog')
divElement.onclick = function(e){

    console.log('Click DIV');
}
var a_blog = document.querySelector('.a_blog')
a_blog.onclick = function(e){
    e.stopPropagation()
    console.log('CLick a');
}