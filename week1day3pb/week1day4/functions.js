



function doThing() {
    console.log("Say Something Im giving up on you...")
}

doThing()


function greeting(name) {
    // console.log(name)
    console.log("hello, welcoome to the jungle")
}

greeting(Geralt of rivia)

// function that introduced someone and displayed their name, age and profession

function intro(name, age, profession) {
    console.log(name)
    console.log(age)
    console.log(profession)
    return name
}

intro("ciri","27", "almost a witcher")
intro("geralt", "534", "always a witcher")

function getName(name) {
    console.log("line 32 inside getName function")
    return name
}
// getName("geralt")

console.log(getName("tim you wre not a witcher"))


// question 2

function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
