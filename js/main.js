$(function (){
	
	var rotateTimeOut = function (){
		$('#rotate').rotate({
			angle:0,
			animateTo:2160,
			duration:8000,
			callback:function (){
				alert('Done!');
			}
		});
	};

	//Quay Vòng
	var bRotate = false;

	var rotateFn = function (awards, angles, txt){
		bRotate = !bRotate;
		$('#rotate').stopRotate(); // Ngừng quay
		$('#rotate').rotate({ //Gọi Hàm quay
			angle:0,
			animateTo:angles+1800, // Số vòng quay
			duration:8000, // Thời gian quay (8s)
			callback:function (){ // Sau khi quay xong
				alert(txt); // Xuất thông báo
				$('.turntable-bg').css('background','url("images/turntable-bg.jpg")'); //Change background
				// window.location = "https://thammyhanquoc.vn";
				bRotate = !bRotate;
			}
		})
	};

	$('.pointer').click(function (){
		if(bRotate)return; // if vòng đang quay thì return false
		$('.turntable-bg').css('background','url("images/turntable-bg.gif")'); //Change background
		var item = getRandByRatio(ratioValues); //Lấy giá trị theo tỉ lệ
		switch (item) {
			case 0:
				rotateFn(0, rnd(312,360), 'Tạch rồi!');
				break;
			case 1:
				rotateFn(1, rnd(7,54), 'Thật tuyết vời! Bạn nhận được 4999 bịch Kotex Xitin miễn phí!');
				break;
			case 2:
				rotateFn(2, rnd(59,110), 'Bạn nhận được vé giảm giá nhà nghỉ lên đến 50%');
				break;
			case 3:
				rotateFn(3, rnd(115,157), 'Nhận miễn miễn phí 10 bịch Diana');
				break;
			case 4:
				rotateFn(4, rnd(162,206), 'Nhận miễn phí 5 bịch Kotex');
				break;
			case 5:
				rotateFn(5, rnd(162,206), 'Nhận miễn phí 5 bịch Kotex');
				break;
			case 6:
				rotateFn(6, rnd(211,257), 'Bạn nhận được ngân sách giảm giá khi đi nhà nghỉ!');
				break;
			case 7:
				rotateFn(7, rnd(261,309), 'Bạn đã trúng Ví tiết kiệm khi mua Kotex Xitin!');
				break;
		}
		$('#rand-value').html("<li>Giá trị: " + item + "</li>"); // Xuất ra giá trị
		console.log(item);
	});
});

function rnd(min, max){
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Set giá trị theo tỉ lệ (v: giá trị, r: tỉ lệ %)
const ratioValues = [
  {v: 0, r: [0,40]}, // 40% sẽ ra 0
  {v: 1, r: [41,50]}, // 10% sẽ ra 1
  {v: 2, r: [51,60]}, // 10% sẽ ra 2
  {v: 3, r: [61,70]}, // 10% sẽ ra 3
  {v: 4, r: [71,80]}, // 10% sẽ ra 4
  {v: 5, r: [81,90]}, // 10% sẽ ra 5
  {v: 6, r: [91,95]}, // 5% sẽ ra 6
  {v: 7, r: [96,100]} // 5% sẽ ra 7
];

//Hàm lấy giá trị theo tỉ lệ
function getRandByRatio(ratioValues) {
  // idx is a random integer between 0 and 100
  let idx = Math.floor(Math.random() * (100 + 1));
  for (let item of ratioValues) {
    // test if idx is within the r range
    if (idx >= item.r[0] && idx <= item.r[1]) {
      //if it is return our value
      return item.v;
    }
  }
};