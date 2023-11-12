
// TARGET = QUICK SORT ALGORITHM JAVASCIRPT

function QuickSort(array) 
{
    if (array.length < 2) // If the array length is less then 2 then stop
    {
        return array;
    }
    const pivot = array[Math.floor(Math.random() * array.length)]; // get the pivot point

    let left = []; // left side array
    let right = []; // right side array
    let equal = []; // equal array

    for (let value of array) // for value in array
    {
        if (value < pivot) // if the value is less then the pivot point
        {
            left.push(value); // then push the value into the <left side array>
        } 
        else if (value > pivot) // and it the value is greater
        {
            right.push(value); // push it to the <right side array>
        } 
        else // otherwise
        {
            equal.push(value); // push it to <equal side array>
        }
    }
    return [ ...QuickSort(left), ...equal, ...QuickSort(right) ] // sprade operator
}

var value = QuickSort([5000,500,-1000,1000]);

console.log(value); // output [-1000, 500, 1000, 5000]