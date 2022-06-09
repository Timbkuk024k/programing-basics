// lets talk loops!
var num = 5
if(num > 1) {
    console.log("num is greater than 1");
    var x = 1;
}

for(var i = 0; i < 5; i++) {
    console.log("say something!");
}



// console log the string hello world 5 times

var Phrase = "hello world"
for(i + 0; i < 5; i++) {
    console.log(Phrase)
}

function printPhrase(phrase, times) {
    for(i = 0; i < 5; i++) {
        console.log(phrase)
    }

}

printPhrase("This is the phrase!")


// differance between while loop and a for loop
var num = 0;  
while (num <= 5) {
    console.log(num)
    num++;
}

function doThing() {
    while (num <= 5) {
        console.log(num);
            num++
    }
    console.log("Stop logging the sum")
}

function keepscore(score1,score2) {
    while(score1 < 10 && score2 < 10){
        console.log(*****************)
        console.log("score 1" + score1)
        console.log("score 2" + score2)
    }
}