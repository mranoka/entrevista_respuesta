// flattens only the first layer of a nested array
const flattener = (array) => {
    let holder = []; // holds newly flattened array
    // checks if arrays exist in first layer
    // if arrays exist in the first layer, push their elements a level up into holder array
    for (let i = 0; i < array.length; i++) {
        // check if ecountered object is an array
        if (typeof array[i] === 'object' && array[i].length >= 1) {
            for (let k = 0; k < array[i].length; k++) {
                holder.push(array[i][k]);
            }

            // add rest of non-array items to holder array   
        } else {
            holder.push(array[i]);
        }

    }
    return holder;
}

// Flattens nested array by recursively calling flattener()
const recursor = (array) => {
    let holder2 = flattener(array); // flatten given array

    // check if there is still nesting within holder2 array.
    // if so, change sentinel value
    let sentinel = 0;
    for (let m = 0; m < holder2.length; m++) {
        // check if any item encountered in holder2 is an array
        if (typeof holder2[m] === 'object' && holder2[m].length >= 1) {
            sentinel = 1;
        }
    }
    // if sentinel is still 0, array has been flattened and will be return
    if (sentinel === 0) {
        return holder2;
    } else if (sentinel === 1) {
        return recursor(holder2)
    }


}

// flattens array provided by user and sends result back
const flatWizard = () => {
    let userInput = document.getElementById('array-input').value;
   let flatResult = recursor(JSON.parse(userInput));
   let display = document.getElementById('array-display')
    display.innerHTML = `[ ${flatResult} ]`;
    display.style.border = '1px solid white';


}



// console.log(recursor([2, 3, 4, [5, [6, 54, 56, [55, 454, 54, 54, [56,[25, [54, [15, [16, [17, [18, 19]]]]]],65, 54, [56]]]], 5, 99], 2, [55, 66, 77, [12, 31]]]))

