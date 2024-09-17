{
  let a = 10;
  let b = 10;
  let c = 10;
  let x = (a + b + c) / 2;
  let area = Math.sqrt(x * (x - a) * (x - b) * (x - c));
  console.log(area);
}
{
  let x = 2;
  let faranheit = x * 2 + 30;
  console.log(faranheit);
}
{
  let f = 100;
  let celcius = (f - 30) / 2;
  console.log(celcius);
}
{
  let cm = 10;
  let inch = cm / 2.54;
  console.log(inch);
}
{
  let inch = 12;
  let cm = 12 * 2.54;
  console.log(cm);
}
{
  let a = 20,
    b = 10;
  let result = a > b;
  console.log(result);
}
{
  let a = 20;
  let b = 10;
  let result = a != b;
  console.log(result);
}
let a = 16;
let b = 15;
if (a < b) {
  console.log("a is less than b");
}
if (b < a) {
  console.log("b is less than a");
}
{
  let a = 30;
  let b = 10;
  let c = 10;
  if (a + b > c && a + c > b && b + c > a) {
    console.log("Triangle is true");
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Triangle is false");
  }
}
/*let count=1;
while (count <=100 ) {
    console.log(count);
    count=count+1;
}*/
//1
/*let count="1"
while (count <=10) {
     {
    console.log(count)
    }
    count=count+1;
}*/
{
  let sum = 0;
  let count = 1;

  while (count <= 10) {
    sum += count;
    count++;
  }

  console.log(sum);
}
{
  let sum = 0;
  let count = 1;
  while (count <= 100) {
    if (count % 2 == 0) sum += count;
    count = count + 1;
  }
  console.log(sum);
}
{
  let sum = 0;
  let count = 1;
  while (count <= 100) {
    if (count % 2 == 1) sum += count;
    count = count + 1;
  }
  console.log(sum);
}
{
  let count = "*";
  while (count <= "*****") {
    {
      console.log(count);
    }
    count = count + "*";
  }
}
{
  let sum = 0;
  let count = 1;
  while (count <= 100) {
    if (count % 3 == 0) {
      sum += count;
    }
    count = count + 1;
  }
  console.log(sum);
}
let sum = 0;
let count = 1;
while (count <= 100) {
  if (count % 5 == 0) {
    sum += count;
  }
  count = count + 1;
}
console.log(sum);
{
  let sum = 1;
  let count = 1;
  while (count <= 10) {
    {
      sum = sum * count;
    }
    count = count + 1;
  }
  console.log(sum);
}
{
  let count = 3;
  while (count <= 37) {
    if (count % 5 == 0) {
      console.log(count);
    }
    count = count + 1;
  }
}
/*{
    let num=2024;
    let digits=0;
    while (num>=1) {
        digits=digits+1 
        num=num/10
    }
    console.log(num)
}*/
/*{
    let num=2024;
    let sumOfDigits=0;
    while (num>=1) {   
        let lastdigit=num%10; 
        console.log(lastdigit);
        sumOfDigits=sumOfDigits+lastdigit;
        num=math.floor(num/10);
    }
    console.log(sumOfDigits)
}*/
/*{
let n=prompt();
let count=1;
while (count <=n) {
   console.log(count)
   count++;
}
}*/
/*{
let n=prompt();
let count=0;
while (count <n) {
   console.log(n-count)
   count=count+1;
}
}*/
/*{
let first=0;
let second=1;
let next;
let cont=1;
let n=prompt();
while (cont<=n) {
    next=first+second;
    console.log(first);
    first=second;
    second=next;
    cont++;
}
}*/
/*{
    let n=prompt()
    let sum=0;
    let cont=1;
    while (cont<=n) {
        sum=sum+cont;
        cont++;
    }
    console.log(sum)

/*{
    let n=prompt()
    let sum=0;
    let cont=Number(n);
    while (cont>0) {
        sum=sum+cont;
        cont=cont-1;
    }
    console.log(sum)
}*/
/*{
    function add(a, b, c, d, e) {
        return a + b + c + d + e
    }
    let number1 = Number(prompt("Enter your number1"))
    let number2 = Number(prompt("Enter your number2"))
    let number3 = Number(prompt("Enter your number3"))
    let number4 = Number(prompt("Enter your number4"))
    let number5 = Number(prompt("Enter your number5"))
    let result = add(number1, number2, number3, number4, number5)
    console.log("The sum is " + result)
}*/
/*function Perimeter(a, b, c) {
    if (a + b > c && a + c > b && b + c > a)
        return "Perimeter: "+ a + b + c;
    if (a + b <= c || a + c <= b || b + c <= a)
        return "Triange is not";
}
let p1 = Number(prompt("Perimeter 1"))
let p2 = Number(prompt("Perimeter 2"))
let p3 = Number(prompt("Perimeter 3"))

let result = Perimeter(p1, p2, p3)
console.log(result)*/
/*let password = prompt ("Enter the password");
let attempt = 3;
    if (password == "pass1234") {
        alert ("Access Granted!");
    }
    else {
        while (attempt != 0) {
        attempt--;
        password = prompt ("Enter your password: ");
        if (password == "pass1234") {
            alert ("Access Granted!");
        }
        else if (attempt == 0) {
            alert ("Access Denied!");
        }
    }
    }*/
/*let numbers = [10, 20, 30, 40, 50];
let sumofnumbers = 0;
let i=0;
while (i < numbers.length) {
    sumofnumbers= sumofnumbers+numbers[i]
    i++;
}
let average=sumofnumbers/5
console.log(average)
*/

/*const array = [2, -3, 5, 6, -8, 10];

let i = 0;
let sumofarray = 0;
while (i < array.length) {
  if (array[i] > 0 && array[i] % 2 == 0) {
    sumofarray = sumofarray + array[i];
  }
  i++;
}

console.log(sumofarray);*/
/*{ let i=0;
let sumofI=0;
while (i<=3) {
    sumofI += i
    i++;
}
console.log(sumofI)
}
let array = [1, 2, 3, 4, 5];
for (let i=array.length-1; i>=0; i--) {
    console.log(array[i]);
}
{
    let array = [
        {
            name: "Bill",
            age:10,
            siblings: [
                {
                    name: "Bolor",
                    age:11,
                }
                {
                    name: "Boldoo",
                    age:9,
                }
            ]
        }
    ]
    console.log(array[0].siblings[1].name)
}
let arrayname = [
    [
        {
            name :"Bill",
        },
        {
            name: "Dul",
        }
    ],
    [
        {
          name: "Sumiya",
        },
        {
          name: "Anar",
        }
    ]
]
console.log(arrayname[0][1].name)
{
    let array = [1, 2, 3, 4, 5];
    let result = []
    for (let i = array.length - 1; i >= 0; i--) [
        result[result.length] = array[i]
    ]
    console.log(result)
}
{
    let array = [1, 2, 3, 4, 5]
    array.reverse();
    console.log(array)
}
{
    let array = [2, 1, 0, 3, 5]
    console.log(array.sort())
}
{
    let fruits = ["Banana", "Apple", "Orange"]
    console.log(fruits.toString())
}
let array = [100, 200]
console.log(array.includes(200))
{
    let array = [1, 2, 3];
    array.push(4)
    console.log(array)
}

{
    let array = [1, 2, 3];
    array.pop()
    console.log(array)
}



let n = 4;
let mult = 0;
let result = 0;
while (mult >= 0, result < 1000) {
    result = n ** mult
    mult++;
}
console.log(mult) */
/*let n=2;
let mult=0;
let result=0;
while (mult >=0) {
    result=n**mult
    if (result > 1000)
    {
        break;
    }
    mult++;
}
console.log(mult)*/
/*const arr = [1, 0, 2, 5];
let sumofnumbers = 0;
arr.map((element) => {
  sumofnumbers = sumofnumbers + element;
});
console.log(sumofnumbers);*/

/*const arr = [2, 5, 100];

arr.map((index) => {
  index = index ** 2;
  console.log(index);
});*/
// function doubleNumbers(array) {
//   let newarray = [];
//   for (let i = 0; i < array.length; i++) {
//     newarray.push(array[i] * 2);
//   }
//   return newarray;
// }
// console.log(doubleNumbers([2, 5, 100]));
// function doubleNumbers(array) {
//   const result = array.map((element) => {
//     return element * 2;
//   });
//   return result;
// }
// console.log(doubleNumbers([2, 5, 100]));
// function stringItUp(arr) {
//   const result = arr.map((element) => {
//     return element.toString();
//   });
//   return result;
// }

// console.log(stringItUp([2, 5, 100]));
// function capitalizeNames(arr) {
//   const result = arr.map((element) => {
//     return element.toUpperCase();
//   });
//   return result;
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
// function namesOnly(information) {
//   const names = information.map((info) => {
//     return info.name;
//   });
//   return names;
// }

// console.log(
//   namesOnly([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );
// function makeStrings(information) {
//   const result = information.map((info) => {
//     if (info.age >= 18) {
//       return "${info.name} + can go to Matrix";
//     } else {
//       return "${info.name} + under age";
//     }
//   });
//   return result;
// }

// console.log(
//   makeStrings([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );
function readyToPutInTheDOM(arr) {}
console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
