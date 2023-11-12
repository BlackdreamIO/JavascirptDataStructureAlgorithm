
// TARGET => CREATE A RECURSION FUNCTION

function RecursiveCountDown(fromNumber) 
{
    console.log(fromNumber);

    let number = fromNumber - 1; // substract the number by 1 each time the function runs

    if (number > 0) // run the recursive untill the number is 0
    {
        RecursiveCountDown(number); // calls the function
    }
}
RecursiveCountDown(5); // count down from 5 to 0