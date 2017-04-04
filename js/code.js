var defaultRes = 24;
var $sketch = $('#sketch');
var $inputGrid = $('#inputGrid');
var divHeight = 1;
var divWidth = 1;


$(document).ready(function(){
	$inputGrid.val(defaultRes);
	gridCreator(defaultRes);

});

function gridCreator(res){
	divHeight = $sketch.height()/res;
	divWidth = $sketch.width()/res;

	for(var i = 0; i<res;i++){
		/*this creates a row of res columns*/
		$sketch.append("<div class='row' style='width:" + $sketch.width() + "px; height:" + divHeight + "px;' ></div>")
		var $row = $('.row:last-child');
		for(var j = 0; j<res;j++){
			$row.append("<div class='unmarkedPixel' style='width:" + divWidth + "px; height:" + divHeight + "px;'></div>");
		}
	}

	$(".unmarkedPixel").mouseenter(function(e){
		if(e.buttons === 1 || e.buttons ===3){
			$(this).addClass('markedPixel');
		}
	});
}

function resetGrid(){
	$sketch.empty();
	var value = parseInt($inputGrid.val());
	if(($inputGrid.val() > 0) && ($inputGrid.val() < 100) && (typeof value === "number")){
		gridCreator($inputGrid.val());
		console.log("grid created with " + $inputGrid.val());
	}else{
		gridCreator(defaultRes)
		console.log("grid created with " + defaultRes + " because the input value " + $inputGrid.val() + " was incorrect");
	}

}