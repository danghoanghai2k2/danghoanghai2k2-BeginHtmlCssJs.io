// HÀM TRONG JS function    

// cú pháp function <tên hàm>(tham số nếu có,tham số nếu có,tham số nếu có........){ câu lệnh bên trong }
// dùng function bằng cách gọi lại tên hàm và truyền tham số vào nếu có

// -  KHI KHAI BÁO 2 Function TRÙNG TÊN THÌ Function KHAI BÁI SAU SẼ ĐƯỢC CHẠY 
// - CÓ THỂ KHAI BÁO BIẾN TRONG HÀM NHƯNG PHẠM VI TRUY CẬP CHỈ BÊN TRONG HÀM 


// hàm không có giá trị truyền vào 
function outPut(){
    console.log("tôi là đặng thanh hải");
    console.log("quê tôi ở thái bình");
    console.log("năm nay tôi 20 tuổi\n--------------------------------------");
    return "đặng thanh hải" // để hiện return thì phải hiển thị dữ liệu ra 
}
outPut()
console.log(outPut());


// hàm có truyền vào giá trị và biến
function outPut2(numbers1,numbers2){
   console.log(`tổng 2 số ${numbers1} + ${numbers2}`);
    return numbers1 + numbers2
}
outPut2(6,7) // không return nên không trả về giá trị 
console.log(`Dữ liệu kết quả của hàm là : `,outPut2(6,6));


// có thể khái báo function bằng các này 
var ham = function(c){
    console.log(c);
    return c
}
ham(7)

// ĐỐI TƯỢNG ARGUMENTS TRONG HÀM 

function AGUMNET(){
    console.log(arguments); // sử dụng khi bạn chưa xác định biến truyền vào bao nhiêu 
}
AGUMNET(1,2,3,4,5)