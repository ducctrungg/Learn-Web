class Rectangle {
      constructor() {
            this.height = 5;
            this.width = 10;
            this.color = 'blue'
      }

      get area() {
            return this.width * this.height;
      }

      set area(area) {
            this.height = Math.sqrt(area)
            this.width = Math.sqrt(area)
      }
}

var Rec = new Rectangle();
console.log(Rec.area)

console.log(`First line\nSecond line\t\t\tafter tabs`)
console.log('First line\nSecond line\t\t\tafter tabs')

function custom(strings, name, hobby) {
      console.log(strings)
      console.log(name)
      // Kyle
      console.log(hobby)
      // weight lifting
}

const name = 'Kyle'
const hobby = 'weight lifting'
custom`My name is ${name} and I love ${hobby}`


//Array & object destructing 

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
const numbers = ['1', '2', '3', '4', '5', '6']

// const [a, b] = alphabet  // a = a, b = b

// const [a,,b] = alphabet

// const [a, b, ...rest] = alphabet  // ... is spreading operator
const newArr = [...alphabet, ...numbers] // concat 2 array 
console.log(newArr)

// division is default parameter 
const [sum, multiply, division = 'no division'] = sum_and_multiply(3,4)

function sum_and_multiply(a, b){
      return [a + b, a * b]
}


let btn = document.createElement('button');
btn.innerHTML = 0;
btn.id = 'btn';
document.body.appendChild(btn)

btn.onclick = () => btn.innerHTML = Number.parseInt(btn.innerHTML) + 1;

Array.prototype.map2() = function(){
      console.log(this);
}

let temp = ['JS', 'PHP', 'Python']

temp.map2();