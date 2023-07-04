//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
// let dog_names = ['word', 'crazy', 'wild', 'nice']

function findWords(para1, para2){
   for (let i = 0; i < para2.length; i++) {
    const element = para2[i];
    if (para1.toLowerCase().includes(element.toLowerCase())) { 
        console.log(`Matched ${element}`)
    } else { 
        console.log('No Matches') 
    }
   } 
}

findWords(dog_string, dog_names)




/////////////////////////////////////////////////////


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

const exampleArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (i % 2 == 0) {
            arr.splice(i, 1, 'even index')
        }
        
    }
    console.log(arr)
}

replaceEvens(exampleArr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


///////////////////////////////////////////////////////////


//Write a function which converts the input string to uppercase

function makeUpperCase(str) {
    const element = str
     return element.toUpperCase()
  }


/////////////////////////////////////////////


// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c) {
    if (a + b > c && a + c > b && b + c > a) {
      return true;
    } else {
      return false;
    }
 }