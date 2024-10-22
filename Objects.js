let card0 = {
    suit: 'Hearts',
    number: 2

} //end of card0
console.log(card0);
function isRed( cardToCheck){
    if(cardToCheck.suit === 'Hearts' || cardToCheck.suit === "diamonds"){
        return true;
    }
        else{
            return false;
        }
}
console.log(isRed(card0));
let card1 = {
    suit: "Clubs",
    number: 1
}
console.log(card1);
console.log(isRed(card1))
function highestCard( cardToCheck1, cardToCheck2){
    if(cardToCheck1.number > cardToCheck2.number){
        return console.log(cardToCheck1)
    }
    else{
        return console.log(cardToCheck2)
    }
}
console.log(highestCard(card1, card0))