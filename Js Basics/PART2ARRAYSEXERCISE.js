var roster =[]
var query;

var start = prompt("Would you like to start roster web app y/n")

if (start =="y") {
    
 while(true){
        query=prompt("Select Command: Add, Remove,  Display, Quit")

       if (query=="Add") {
          var entry =prompt("Enter a name:");
          roster.push(entry) 
       }

       else if (query=="Remove") {
                var entry=prompt("Enter a name:");
                 var index=roster.index(entry);
                 roster.splice(index,1);

       }
       else if (query=="Display"){
          console.log(roster);
       }
       else if (query=="Quit"){
           break;
       }
        
    }
    
}

alert("Thank you for using rooster web app!")