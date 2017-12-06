// wait for the DOM to finish loading
$(document).ready(function() {
 
let clickCount = 0;
$(".unclicked").on("click",function playerTurn(e){
	clickCount = clickCount + 1;
	console.log(clickCount%2);
	if (clickCount%2===0){
		$(this).html("<p>X</p>");
		$("#turn-notifier").text("Player 1 turn");
	} else {
		$(this).html("<p>O</p>");
		$("#turn-notifier").text("Player 2 turn");
	};
	$(this).removeClass('unclicked');
});

$(".reset").on("click",function refresh(e){ 
	location.reload();
});

/*
Player 1 turn: clicks a box, box receives X. Box no longer accepts clicks. 
Player 2 turn: clicks a box, box receives O. 
Repeat above. 
*/









});
