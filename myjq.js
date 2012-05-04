$(function(){
	
		document.getElementById('loading').style.display='none';

	
	var panels = $('.father .roll > div');
	panels.last().css({
		"padding-right":"200px"
	});

		panels.mouseover(function(){
			
			panels.stop().animate({
				'width':'0px'
			},700);

			$(this).stop().animate({
				'width':'392px'
			},700);

		});

		$(this).mouseout(function(){
			panels.stop().animate({
				'width':'100px',
			},300);
		});


/* 3D doors - Opening */


	var doorl = $("#left-door");
	var doorr = $("#right-door");
	doorl.click(function(){
		doorl.css({
			"-webkit-transform-origin":"1px -350px",
			"-moz-transform-origin":"3px 0px",
			"-moz-transform":"rotateY(120deg)",
			"-webkit-transform":"perspective(1000) rotateY(-150deg)",
			// "-moz-transform":"perspective(1300) rotateY(-120deg)",
			
		});	

		doorr.css({
			"-moz-transform":"rotateY(120deg)",
			"webkit-transform-origin":"219px -300px",
			"-moz-transform-origin":"219px 0px",
			"-webkit-transform":"perspective(1000) rotateY(150deg)",
			// "-moz-transform":"perspective(1300) rotateY(180deg)",

		});

	});
	var doorl = $("#left-door");
	var doorr = $("#right-door");
	doorr.click(function(){
		doorl.css({
			"-webkit-transform-origin":"2px -350px",
			"-moz-transform":"rotateY(120deg)",
			"-moz-transform-origin":"3px 0px",
			"-webkit-transform":"perspective(1000) rotateY(-150deg)",
			// "-moz-transform":"perspective(1300) rotateY(-120deg)",
			
		});	

		doorr.css({
			"-moz-transform":"rotateY(120deg)",
			"webkit-transform-origin":"219px -300px",
			"-moz-transform-origin":"219px 00px",
			"-webkit-transform":"perspective(1000) rotateY(150deg)",
			// "-moz-transform":"perspective(1300) rotateY(180deg)",

		});
	});


/* FOR Closing doors */


	var doorl = $("#left-door");
	var doorr = $("#right-door");

	doorl.dblclick(function(){
		doorl.css({
		"-webkit-transform":"rotateY(0deg)",
		"-moz-transform":"rotateY(0deg)",
		});

		doorr.css({
		"-webkit-transform":"rotateY(0deg)",
		"-moz-transform":"rotateY(0deg)",
		});

	});

	doorr.dblclick(function(){
		doorl.css({
		"-webkit-transform":"rotateY(0deg)",
		"-moz-transform":"rotateY(0deg)",
		});
		
		doorr.css({
		"-webkit-transform":"rotateY(0deg)",
		"-moz-transform":"rotateY(0deg)",
		});

	});
		
	

		
});