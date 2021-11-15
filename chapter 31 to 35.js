// chapter 31 to 35

// 1.

// document.write(new Date())

// 2.

// var a = new Date()
// var months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// document.write("Current month: ",months[a.getMonth()])

// 3.

// var a = new Date()
// var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// document.write("Today is: ",day[a.getDay()])

// 4.

// var a = new Date()
// var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

// if(day[a.getDay()]=="Sat"||day[a.getDay()]=="Sun")
// {
//     alert("It's Fun day")
// }

// 5.

// var a = new Date()
// if(a.getDate()<=15)
// {
//     alert("First fifteen days of month")
// }
// else{
//     alert("Last days of the month")
// }

// 6.

// var a = new Date()
// document.write("Current Date: ",a,"<br>")
// document.write("Elapsed milliseconds since January 1,1970: ",a.getTime(),"<br>")
// document.write("Elapsed minutes since January 1,1970: ",(a.getTime()/(1000*60)))

// 7.

// var a = new Date();
// if(a.getHours<=12)
// {
//     alert("It's AM")
// }
// else
// {
//     alert("It's PM")
// }

// 8.

// var a = new Date("Dec 31 , 2020")
// document.write("Later Date: ",a)

// 9.


// var msDiff = new Date().getTime() - new Date("June 18 , 2015").getTime();
// var daysPassedl = Math.floor(msDiff / (1000 * 60 * 60 * 24));
// document.write(`${daysPassedl} days have passed since 1st Ramadan, 2015`)
// console.log(daysPassedl)

// 10.
// var ref = new Date("Dec 5 , 2015")
// var start = new Date(2015);
// var total = Math.floor(ref.getTime() - start.getTime()/(1000));
// document.write(`On reference date ${ref}<br>${total} seconds had passed since beginning of 2015`);

// 11.

// var a = new Date()
// document.write(`Current date: ${a}<br>`)
// var b = new Date(`9-11-2021 15:52:00`)
// document.write(`One hour ago it was ${b}`)

// 12.

// var age = prompt("Enter your age")
// var Age = parseInt(age)
// alert(`Your age is ${age}\nYour birth year is ${new Date().getFullYear()-parseInt(Age)}`)

// 13.
// var units = 500;
// var char = 20;
// var bill = units*char;
// var months =["January","February","March","April","May","June","July","August","September","October","November","December"]
// document.write(`<h1>K-Elertric Bill</h1><br>
// Costomer Name: Hamid Laghari<br>
// Month: ${months[new Date().getMonth()]}<br>
// Number of Units: ${units}<br>
// Charger per unit ${char} <br>
// <br>
// Net Amount Payable (within Due date): ${bill}<br>
// Late payment surcharges: 500<br>
// Gross Amount Payable (after due date): ${bill+500}`)
