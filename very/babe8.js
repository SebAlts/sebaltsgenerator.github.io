var NumberOfWords = 34

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "http://shortearn.eu/y6hJWLZ"
words[2] = "http://shortearn.eu/wK7a"
words[3] = "http://shortearn.eu/cGse"
words[4] = "http://shortearn.eu/BaOAQ"
words[5] = "http://shortearn.eu/ND1v"
words[6] = "http://shortearn.eu/zXuA3UG"
words[7] = "http://shortearn.eu/DSTBo42"
words[8] = "http://shortearn.eu/OcmJmj"
words[9] = "http://shortearn.eu/Wp4HzjDx"
words[10] = "http://shortearn.eu/XUyxPU"
words[11] = "http://shortearn.eu/pL3RuLr"
words[12] = "http://shortearn.eu/L9du"
words[13] = "http://shortearn.eu/pZ9c0z4T"
words[14] = "http://shortearn.eu/l3MpK2hq"
words[15] = "http://shortearn.eu/EZqc"
words[16] = "http://shortearn.eu/uJW9djXB"
words[17] = "http://shortearn.eu/2plfBAzQ"
words[18] = "http://shortearn.eu/Xf9JrL"
words[19] = "http://shortearn.eu/wKUMc9"
words[20] = "http://shortearn.eu/IiSkj"
words[21] = "http://shortearn.eu/CnKzWj"
words[22] = "http://shortearn.eu/7Q7guC"
words[23] = "http://shortearn.eu/pMUvTQ7"
words[24] = "http://shortearn.eu/IGHjw"
words[25] = "http://shortearn.eu/utTDwiTw"
words[26] = "http://shortearn.eu/ZZx5X0Na"
words[27] = "http://shortearn.eu/N2dyecn"
words[28] = "http://shortearn.eu/0boMfnLg"
words[29] = "http://shortearn.eu/ISHmx"
words[30] = "http://shortearn.eu/FP9F"
words[31] = "http://shortearn.eu/8xHiiW"
words[32] = "http://shortearn.eu/amE2C7"
words[33] = "http://shortearn.eu/IzOhQwCr"
words[34] = "http://shortearn.eu/GJRB8kiP"



function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 40 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}