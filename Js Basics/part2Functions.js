// sleepIn(false,false) True
// sleepIn(true,false) False
// sleepIn(false,true) true
 
function sleepIn(weekday, vacation) {
   return  !weekday ||  vacation 
}


// Monkey Trouble(true,true) True
// Monkey Trouble(false,false) True
// Monkey Trouble(true,False) false

function MonkeyTrouble(aSmile,bSmile) {
   return (aSmile && bSmile) || (!aSmile && !bSmile)

}


// stringTimes("Hi" , 2)  "HiHi"
// stringTimes("Hi" , 3)  "HiHiHi"
// stringTimes("Hi" , 1)  "Hi"

function stringTimes(str,n) {
    var result=str
    for (i=o; i<n; i++)
    {
      result=result+str
    }
    return result
}