// TOÁN TỬ BA NGÔI ?
// ( điều kiện ) ? 'giá trị nếu đúng' : 'giá trị nếu sai';

var age = 15;
var dieukien = age == 20 ? 'điều kiện này đúng' : 'điều kiện này sai';
console.log(dieukien);

dieukien = age == 21 ? 88 : 99;
console.log(dieukien);

dieukien = age >= 15 && age < 20 ? 'đủ tuổi' : 'không đủ tuổi';
console.log('sinh vien ', dieukien);

// TOÁN TỬ BA NGÔI EXCHANG
/*      (điều kiện)?'giá trị đúng':
        (điều kiện)?'giá trị đúng':
        (điều kiện)?'giá trị đúng':
                .........
        (điều kiện)?'giá trị đúng':'điều kiện sai' */

age = 30;
dieukien =
   age < 20
      ? 'nhỏ hơn 20 tuổi'
      : age < 25
      ? 'nhỏ hơn 25 tuổi'
      : age < 30
      ? 'nhỏ hơn 30 tuổi'
      : 'lớn hơn 30 tuổi';
console.log(dieukien);
