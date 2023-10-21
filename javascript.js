alert("Hello")



var winningSpot = Math.floor(Math.random() * 9)
var losingSpot = Math.floor(Math.random() * 9)

const changeToEmoji = (clickedItem) => {
    if(clickedItem === winningSpot){
        document.getElementById(winningSpot).innerHTML = "🎄"
        alert("you found a treasure")
    } else if(clickedItem === losingSpot){
        document.getElementById(losingSpot).innerHTML = "💣"
        alert("you found a bomb")
    } else {
        document.getElementById(clickedItem).innerHTML = "🤩"
        alert("you found nothing")

        
    }
}



