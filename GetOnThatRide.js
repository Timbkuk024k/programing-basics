// create function to find out if someone meets the height and age requirments to ride
function able_to_ride(num1,num2) {
    // min height in inches and min age to ride
    var height = 52
    var age = 10
// if height and age are both at least or more than min allowed amounts log
    {
    if (num1 >= height && num2 >= age) {
        console.log("Get on that ride kiddo!");
        } 
// if either height or age is less than min rwquired log
        else {
            console.log("Sorry kiddo. Maybe next year");
        }
    }


    }
able_to_ride(52,19)
// height in, age