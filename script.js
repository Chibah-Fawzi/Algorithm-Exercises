
// DETERMINE THE LENGTH OF THE SENTENCE :

var sentence = "I got these goosebumps everytime yeah."
var count = 0

for (i = 0, i < sentence.length; i++;) {
    if (sentence != "")
        count++
}



// DETERMINE THE NUMBER OF WORDS IN SENTENCE 
var sentence = "I got these goosebumps everytime yeah."
sentence.split(' ').length;



// DETERMINE THE NUMBER OF VOWALS IN SENTENCE 
var sentence = "I got these goosebumps everytime yeah."
var vow = sentence.match(/[aeiou]/gi);
vow === null ? 0 : vow.length;
