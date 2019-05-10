// var a ="hello world";
// console.log(a);
// var b=10;
// console.log("hey")
// var d=10,c=20;
// function add(d,c) {
// console.log("addition",d+c);
// }
// add(d,c);
// var e;
// var a="hello";
// function printvaluesformerotoone(num){
// }
// alert("its cool");
// var usernumber=prompt("give me a number");
// console.log(usernumber);
function position(marks)
{
    if(marks>=85)
    {
        console.log("distinction");
    
    }
    else if((marks>=60) &&(marks<85))
    {
        console.log("first class");
    }
    else if((marks>=35)&&(marks<60))
    {
        console.log("second class");
    }
    else{
        console.log("fail");
    }
}
var marks=prompt("enter the number");
position(marks);