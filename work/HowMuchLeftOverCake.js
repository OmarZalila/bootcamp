
//feature 1 

function HowMuchLeftOverCake(numberOfPeople , numberOfPieces){
    var remainingPieces = numberOfPieces % numberOfPeople ;
    return remainingPieces ;
    
}
console.log(HowMuchLeftOverCake(5,12));

// feature 2
function HowMuchLeftOverCake(numberOfPeople , numberOfPieces){
    var remainingPieces = numberOfPieces % numberOfPeople ;
    if (remainingPieces == 0 ){
        console.log("No leftovers for you!");
    } else if (remainingPieces <= 2){
        console.log("You have some leftovers");
    } else if (remainingPieces > 5) {
        console.log("Hold another party!");
    } else console.log("You have leftovers to share" );

}
HowMuchLeftOverCake(5,13)