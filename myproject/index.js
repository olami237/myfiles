// let x, y, z;
// x = 5
// y = 6
// z = x + y
// console.log(z);
// x = "hello"
// y = "arab"
// let z = x + y

// document.getElementById("demo").innerHTML ="honey" + " " + "bear" ;
// let   x = 5
// let   y = 8
// const  z = x + y
// const price1 = 120
// const price2 = 120
// const price3 = 130
// const price4 = 140
// const price5 = 150
// let total = price5  + price2
// console.log(total);


// 


// var carName = "volvo";
// var carName
// document.getElementById("demo") .innerHTML = carName;

// let x =  16 + 4 + "volvo"

// let text = "The temperature is " + toCelsius(77) + " Celsius.";
//   function toCelsius (fahrenheit){ 
   
    // return (5/9) * (fahrenheit -32)
  
// }
// let value = toCelsius(77)
// console.log(value);
// document.getElementById('demo').innerHTML = text

// let  x = add  (sum1=100, sum2=50) 
  
// function add(addedValue) {
    // return (sum1 + sum2) - (addedValue-5)
    
// }
// let answer  = add(40)

// console.log(answer);

// let text = "Outside: " + typeof carName;
// document.getElementById("demo1").innerHTML = text;
// function myCars() {
//   let carName = "Volvo";
//   let text = "Inside: " + typeof carName + " " + carName; 
//   document.getElementById('demo2') .innerHTML = text;

// }
// myCars()

 
const person ={
    firstName : "lade",
    gender : 'female',
    occupation : "banker",
    age : 50,

    fullInfo: function(){
        return this.firstName + " is a " + this.occupation; 
    }
};
document.getElementById("demo1").innerHTML = person.fullInfo();
