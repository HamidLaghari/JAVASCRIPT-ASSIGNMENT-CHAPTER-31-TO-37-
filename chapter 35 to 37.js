
// Chapter 35 to 37
// 1.

// function time()
// {
//     return new Date;
// }
// document.write(time())

// 2.

// function greet()
// {
//     let a = prompt("Enter your first name")
//     let b = prompt("Enter your last name")
//     return "Welcome Mr "+a+" "+b;
// }
// alert(greet())

// 3.

// function sum(){
//     let a = prompt("Enter the value of num1")
//     let b = prompt("Enter the value of num2")
//     return parseInt(a)+parseInt(b)
// }
// alert("Your answer is "+sum())

// 4.

// let a = prompt("Enter te value of a")
// let b = prompt("Enter the value of b ")
// let c = prompt("Enter the opperator")

// function calulator(a, b, c) {

//     if (c == "+") {
//         return parseInt(a) + parseInt(b)
//     }
//     else if (c == "-") {
//         return a-b;
//     }
//     else if (c == "*") {
//         return parseInt(a) * parseInt(b);
//     }
//     else if (c == "/") {
//         return parseInt(a) / parseInt(b);
//     }
//     else if (c == "%") {
//         return parseInt(a) % parseInt(b);
//     }
// }
// alert(calulator(a, b, c));

// 5.

// let a = prompt("Enter the value to see it's square",0)
// function sp(a) {
//     let b = parseInt(a)
//     return b ** 2
// }

// alert(sp(a))

// 6.

// let a = prompt("Enter the number to see its factorial")
// let b = parseInt(a)
// function factorial(b)
// {
//      if(b==0||b==1)
//      {
//          return 1;
//      }
//      else 
//      {
//          return b*factorial(b-1)
//      }
// }
// let answer = factorial(b)
// alert("THe factorial of "+a+" is "+answer)

// 7.

// let a = prompt("Enter the startarting value of counting")
// let b = prompt("Enter the end value of counting")

// function count(a,b)
// {
//     if (a<b)
//     {
//         for(i=parseInt(a);i<=parseInt(b);i++)
//         {
//             document.write(i,"<br>")
//         }
//     }
//     else if (a>b)
//     {
//         for(i=parseInt(a);i>=parseInt(b);i--)
//         {
//             document.write(i,"<br>")
//         }
//     }
// }
// count(a,b)


// 8.

// let a = prompt("please enter the value of base")
// let base =parseInt(a)
// let b =prompt("Enter the value of perpendicular")
// let per = parseInt(b)
// function calculateHypotenuse(base,per)
// {
//     let c = base;
//     let d = per;

//     function calculateSquare(c,d)
//     {
//         return c**2 + d**2
//     }
//     let e = calculateSquare(c,d)
//     return Math.sqrt(e);

// }
// let ans = calculateHypotenuse(base,per)
// alert("Hypotenuse = "+parseInt(ans))

// 9.

// i

// function area()
// {
//     let width = 10;
//     let height = 20;
//     return width*height;
// }
// document.write(`Height = 20 <br>width = 10<br>area = ${area()}`)

// ii

// var w = 10;
// var h = 20;
// function area(w,h)
// {
//  return w*h;
// }
// document.write("area = "+area(w,h))

// 10.

// let a = prompt("Enter the word to check it is palindrome or not")

// function palindrome(a) {
//     var rev = []
//     var far = []
//     for (i = 0; i < a.length; i++) {
//         rev.unshift(a[i])
//         far.push(a[i])
//     }
//     if (rev.join("") === far.join("")) {
//         return true;
//     }
//     else {
//         return false;
//     }


// }
// let ans = palindrome(a)
// if (ans == true) {
//     alert("The word " + a + " is Palindrome")
// }
// else {
//     alert("The word " + a + " is not Palindrome")
// }

// 11.

// var a = "the quick brown fox"

// function eachUpperCase(a){
//     var b = a.split(" ");
//     var c=[]
// for(i=0;i<b.length;i++)
// {
//    c.push(b[i]=b[i][0].toUpperCase()+b[i].substr(1))
// }
// return c;
// }
// document.write(eachUpperCase(a).join(" "))


// 12.

// var a = "web development and app development"
// var b = a.split(" ")
// function abc(b){
    
//     var long = 0;
//     var word=null;
// for(i=0;i<b.length;i++)
// {
//     if(long<b[i].length)
//     {
//         long=b[i].length;
//         word= b[i]
//     }
// }
// return word
// }
// var words = abc(b)
// console.log(words)

// 13.

// var a = 'JSResourceS.com'
// var b = 'o'
// var c =0;
// console.log(a.length)
// function calOccur(a,b)
// {
    
//     for(i=0;i<a.length;i++)
//     {
//         if(a[i]==b)
//         {
//             c++;
//         }
//     }
//     return c;
// }
// console.log(calOccur(a,b))

// 14.

// var a = prompt("Enter the radius value",0)
// const pi = 3.14

// function calcCircumference(a)
// {
//     let b = parseInt(a)
//     let c = 2*pi*b
//     return "The circumference is "+Math.floor(c)

// }
// console.log(calcCircumference(a))

// function calcArea(a)
// {
//     let b = parseInt(a)
//     let c = pi*b**2
//     return "The Area is "+c
// }
// console.log(calcArea(a))

    
    

