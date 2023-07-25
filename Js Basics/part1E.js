var x=0
while (x<5){
    console.log("value of x:" + x)
    x=x+1;
}

// break of while loop

while(true){
    var x=prompt("Enter a number")
    if (x>10){
        break;
    }
}

// Test yourself
// Write a While loops that prints out only even numbers in while loops//

var x=1
while (x<11){
       
     if (x%2==0){
        console.log("value of x:" + x)
     } 
      
     x=x+1;
}