require(['jquery','carousel'],function($,Carousel){
	var imgData = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
	new Carousel({
		selector:'#container',
		arrowPos:'bottom',
		buttonType:'circle',
		imgData:imgData

	});
});