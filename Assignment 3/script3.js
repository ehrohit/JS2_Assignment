/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define*/


var a = 0;
var i;

function sumForThousand() {
    
    "use strict";
                                                    /* The sum of 1000 numbers using the  for loop */
    
   
    for (i = 1; i <= 1000; i++) {
         
              
        a = a + i;
       
        
    }
   
    console.log("The Sum of 1000 numbers using For Loop " + a);
}

sumForThousand();  // Calling function 


function sumUsingWhile() {
    "use strict";
    while (i <= 1000) {
        a = a + i;                                          /* The sum of 1000 numbers using the while loop */
        i++;
    }
    return a;
    
}

var sum = sumUsingWhile();

console.log("The sum of 1000 numbers using While Loop " + sum);