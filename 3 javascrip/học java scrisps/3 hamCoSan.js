// CÁC HÀM CÓ SẴN TRONG JS
// alert(); là hàm hiện thị thông báo cho người dùng
alert('Mời Bạn nhập vào ô còn thiếu !!');

// hàm console
console.log('đặng thanh hải');
console.warn('cảnh báo bạn đang nhập nỗi');
console.error('bạn đang nhập sai cái j đấy này ');

// hàm confirm
// hiển thị thông báo và có 2 nút buttom Ok và Cancel
confirm('Thông Báo Người Dùng');

print('hàm in về máy tính ');

// hàm prompt
// hiển thị thông báo và có input["text"], có 2 nút buttom Ok và Cancel
prompt('đặng thanh hải ');

/*hàm setTimeout(() => {
    câu lệnh thực thi
 }, timeout); là hàm thời gian sau khoảng thời gian là bao nhiều rồi thực thi câu lệnh*/
var sum;
var a = 4,
   b = 5,
   c = 7;
setTimeout(function tongBaSo() {
   sum = a + b + c;
   console.log('tổng ba số : ', sum);
}, 3000);

/*setInterval(() => {
    câu lệnh thực thi 
}, interval); hàm sau khoảng thời gian bao nhiêu thì thực hiện liên tục */
setInterval(() => {
   sum = a + b + c;
   console.log('tổng ba số : ', sum);
}, 2000);
