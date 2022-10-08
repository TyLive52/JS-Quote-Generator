var quotes = [
    'These are the times that try Men\'s souls. -Thomas Paine' ,
    'The people Highest UP have GOT the lowest self esteem. -Ye' ,
    'Fear of Travel is not through lack of money but lack of COURAGE. -Paulo Coehlo' ,
    'Death is NOT the greatest loss in life. The Greatest loss in life is what dies inside while we are alive. NEVER SURRENDER. -Tupac Shakur' ,
    'You\'ve got to learn to live with regrets. -Sean Carter' ,
    'Broke, the average hope\'s to get mad rich But what\'s the purpose? Only the Gods can watch the Earth twist I\'m physically trapped down on the surface... -Nasir Jones' ,
    'I like to start it out from the bottom and build with ya be on my last dollar and split the bill with ya -Kendrick Lamar' ,
    'You can\'t change your past but you can forever change your future. -Sam Dawahare'
]

function newQuote(quoteDisplay){
    var randomNumber = Math.floor(Math.random() * (quotes.length));

document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
