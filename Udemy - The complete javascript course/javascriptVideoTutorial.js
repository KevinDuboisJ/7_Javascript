var averageJhon = (89 + 120 + 103) / 3
var averageMike = (116 + 94 + 123) / 3
var averageMary = (116 + 94 + 123) / 3
var winner;
var highestAv;

switch(true){

	//which is the winner
	case averageJhon > averageMike && averageJhon > averageMary:
	highestAv = averageJhon;
	winner = "Jhon";
	break;

	case averageMike > averageJhon && averageMike > averageMary:
	highestAv = averageMike;
	winner = "Mike";
	break;

	case averageMary > averageJhon && averageMary > averageMary:
	highestAv = averageMike;
	winner = "Mike";
	break;

	//check for draw

	case averageJhon=== averageMike && averageJhon === averageMary:
	highestAv = averageMike;
	winner = "it is a draw";
	break;

	case averageJhon === averageMike:
	highestAv = averageMike;
	winner = "it is a draw between Jhon and Mike";
	break;

	case averageJhon === averageMary:
	highestAv = averageMike;
	winner = "it is a draw between Jhon and Mary";
	break;

	case averageMike === averageMary:
	highestAv = averageMike;
	winner = "it is a draw between Mike and Mary";
	break;

}

console.log("Winner is: " + winner + ' ' + highestAv);

/*if(averageJhon > averageMike) {
	highestAv = averageJhon;
	winner = "Jhon";
}else if (averageMike > averageJhon) {
	highestAv = averageMike;
	winner = "Mike";
}else {
	highestAv = averageMike;
	winner = "it is a draw";
}*/