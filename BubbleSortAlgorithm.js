
// TARGET = Bubble sort Implementation Javascript

function BubbleSort (array) 
{
    for (let i = 0; i < array.length; i++) 
    {
        for (let j = 0; j < ( array.length - i - 1); j++)  // last item is placed
        {
            // if the item is found and in the iteration
            if (array[j] > array[j + 1]) 
            {
                // If the condition is true then swap them 
                var tempArray = array[j] 
                array[j] = array[j + 1] 
                array[j + 1] = tempArray 
            }
        }
    }
    console.log(array); // Print the sorted array 
}

var unSortedArray = [234, 43, 55, 63, 5, 6, 235, 547]; 

BubbleSort(unSortedArray)

// output = [5, 6, 43, 55, 63, 234, 235, 547]