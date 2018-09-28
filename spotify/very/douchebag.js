var NumberOfWords = 40

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "http://shortearn.eu/gMWc4B"
words[2] = "http://shortearn.eu/iTcinipP"
words[3] = "http://shortearn.eu/qT5jf2"
words[4] = "http://shortearn.eu/eic7kxG9"
words[5] = "http://shortearn.eu/Azus"
words[6] = "http://shortearn.eu/SYMW"
words[7] = "http://shortearn.eu/Ax8zN"
words[8] = "http://shortearn.eu/gH2wE8r"
words[9] = "http://shortearn.eu/jXUT3y0"
words[10] = "http://shortearn.eu/gDXbrRe1"
words[11] = "http://shortearn.eu/5wELWSHl"
words[12] = "http://shortearn.eu/H4lpbt"
words[13] = "http://shortearn.eu/b0sSNZc"
words[14] = "http://shortearn.eu/nSsUX"
words[15] = "http://shortearn.eu/Jn23X"
words[16] = "http://shortearn.eu/zNx32y"
words[17] = "http://shortearn.eu/SOxm"
words[18] = "http://shortearn.eu/KsAv3lBY"
words[19] = "http://shortearn.eu/wDc1"
words[20] = "http://shortearn.eu/qVE1qDS"
words[21] = "http://shortearn.eu/OdxK"
words[22] = "http://shortearn.eu/Tw5kSPk"
words[23] = "http://shortearn.eu/Fqld"
words[24] = "http://shortearn.eu/AZrQ"
words[25] = "http://shortearn.eu/WfVkx4C"
words[26] = "http://shortearn.eu/PBrQG"
words[27] = "http://shortearn.eu/G4JMA7"
words[28] = "http://shortearn.eu/ixwFR"
words[29] = "http://shortearn.eu/fQBS"
words[30] = "http://shortearn.eu/oek4E"
words[31] = "http://shortearn.eu/hYju"
words[32] = "http://shortearn.eu/BvGm1au"
words[33] = "http://shortearn.eu/Z3chJdy"
words[34] = "http://shortearn.eu/GAngoLpZ"
words[35] = "http://shortearn.eu/6coU"
words[36] = "http://shortearn.eu/hbLLdro"
words[37] = "http://shortearn.eu/IBRp"
words[38] = "http://shortearn.eu/YIrTA"
words[39] = "http://shortearn.eu/iGJB"
words[40] = "http://shortearn.eu/rPbSwIB"


function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}