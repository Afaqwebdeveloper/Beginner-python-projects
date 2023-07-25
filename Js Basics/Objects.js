var vehicleInfo = {
    make: "Toyota",
    year: 2011,
    model:"prius"

}

vehicleInfo['make']

vehicleInfo['year']

var mess ={
    a: "hello",
    b:  ['x','y','z'] ,
    c: {'inside': [4,5,["weird"]]}

};

mess['c']['inside'][2][0]


console.dir(vehicleInfo)

for(var x in vehicleInfo){
    //console.log(key)//
    console.log(x + ": " + vehicleInfo[x])
}
// We put X in key value it also shows same sequential order//

var vehicleInfo = {
    make: "Toyota",
    year: 2011,
    model:"prius",
    updateyear: function(){// Define a method
        alert("Year updated")
    }

}
vehicleInfo.updateyear()// Called a method//


var vehicleInfo = {
    make: "Toyota",
    year: 2011,
    model:"prius",
    updateyear: function(new_year
        ){// Define a method
        this.year=
        alert("Year updated")
    }

}
vehicleInfo.updateyear(2014)

