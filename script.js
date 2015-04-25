$(document).ready(function() {
/*-------------------------------------------------------*/	
	/*1. Scratching out ingredients after they are bought*/
	$(this).on("click", ".unbought_items", function(){
		$(this).toggleClass("unbought_items bought_items");
	})
	$(this).on("click", ".bought_items", function(){
			$(this).toggleClass("unbought_items bought_items");
		})
/*-------------------------------------------------------*/	
	/*2. Making current Instruction Active*/
	$(this).on("click", ".inactive", function(){
		var instructionSteps = $(".instructions li");
		instructionSteps.each(function(i, li){
			if ($(this).hasClass("active")){
				$(this).removeClass().addClass("inactive");
			}
		});
		$(this).removeClass().addClass("active");
	});
/*	-------------------------------------------------------*/	
	/*3. Toggle Images*/
	$(this).on("click", "#toggleImg", function(){
		if ($(this).hasClass("showImg")){
			$("img").hide();
			$(this).removeClass().addClass("hideImg");
		}
		else {
			$("img").show();
			$(this).removeClass().addClass("showImg");
		}
	});
/*	-------------------------------------------------------*/	
});