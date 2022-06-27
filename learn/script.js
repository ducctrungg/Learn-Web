
// Built in function 
/*
    alert()
    console()
    confirm()
    prompt()
    set timeout()
    set interval()
*/
/*
    - Bất cứ giá trị nào khi chuyển đổi sang kiểu dữ liệu boolean
      mà có giá trị true thì ta gọi đó là Truthy

    - Bất cứ giá trị nào khi chuyển đổi sang kiểu dữ liệu boolean
      mà có giá trị false thì ta gọi đó là Falsy
    
    - Có 6 giá trị sau được gọi là Falsy
        1. false
        2. 0 (số không)
        3. '' or "" (chuỗi rỗng)
        4. null
        5. undefined
        6. NaN

    - Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy,
      kể cả những giá trị sau:
        1. '0' (một chuỗi chứa số không)
        2. ' ' (một chuỗi chứa dấu cách)
        3. 'false' (một chuỗi chứa từ khóa false)
        4. [] (một array trống)
        5. {} (một object trống)
        6. function(){} (một hàm “trống”)
    
    - Ngoại lệ: document.all là một ngoại lệ chính thức duy nhất theo đặc tả ECMA 
    - Cụ thể như sau:
        1. document.all chuyển sang boolean sẽ là false
        2. document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
        3. Khi typeof document.all sẽ trả về "undefined"
    
    + ECMA là đặc tả chi tiết kỹ thuật mà các ngôn ngữ theo đặc tả này phải tuân theo.
      Javascript là một ngôn ngữ tuân thủ đặc tả kỹ thuật ECMA.
*/

var myName = 'Trung'
var lastName = 'Nguyen'
console.log(`My name is ${myName} ${lastName}`)
var commentText = '\"Học chưa hiểu là học chưa đủ!\"';
var authorName = 'Sơn Đặng'
console.log(`${authorName} ${commentText}`)

// String 
// 1. Length
console.log(commentText.length);
// 2.Find index
console.log(commentText.indexOf('là'))
console.log(commentText.lastIndexOf('là'))
console.log(commentText.search())

// indexOf() vs search()
// 3.Cut string
console.log(commentText.slice(2,3)) //left to right
console.log(commentText.slice(-1)) //right to left

//4. Replace
console.log(commentText.replace('là', 'học'))

//5. convert to uppercase
console.log(commentText.toUpperCase())

//6.convert to lowercase
console.log(commentText.toLowerCase())

//7.trim(delete space at head and tail)
console.log(commentText.trim())

//8.split (cut  string to array)
console.log(commentText.split())

//9.get character by index
console.log(commentText[100])
console.log(commentText.charAt(100))
console.log(typeof 1e6)


// MẢNG 
// Array.isArray()
var lan = ['hi', 'hello', 1]
console.log(lan)

var title = 'Học Javascript tại F8'
var temp = title.indexOf(' ') + 1;
var language = title.slice(temp, title.indexOf(' ', temp))
var rest = title.substring(title.indexOf('tại'))
console.log(`Language is ${language} and rest is ${rest}`)

const re = /ab+c/
console.log(re)
console.log(typeof re)
lan.splice(2,1,'Monkey', 'Tiger')
console.log(typeof NaN)

function test(a)
{
  console.log(a)
}

if(typeof undefined == 'number' && typeof 3 == 'number' && !isNaN(undefined))   
  console.log(true)
else  
  console.log(false)


var emailKey = 'email'
var myInfo = {
  name: 'Trung',
  age: 20,
  adress: 'tphcm',
  [emailKey]: 'trungnguyen@...',
  fuc: function (){
    return 1;
  },
  ob:  {
    
  }
}

myInfo.new = 'new'
var str = 'adress'
console.log(myInfo)
console.log(myInfo.name)
console.log(myInfo['name'])
console.log(myInfo[str])
console.log(myInfo[emailKey])

function User(first, last, name) // object constructor
{
  this.first = first;
  this.last = last;
  this.class = name;
}

var user = User('nguyen', 'duc', 'trungs')
console.log(Number.MAX_VALUE)
console.log("MIN_VALUE - 1 = " + Number.MIN_VALUE - 1);
 

// Đối tượng Date

var date = new Date();
var date1 = Date();
console.log(typeof date) // real date
console.log(typeof date1) // string
const d = new Date(0)
console.log(Math.floor(+ new Date() / 1000)) // get timestamp
for(let i of 'string')
console.log(i)

let numbers = [2, 3, 6, 6, 5];
numbers.sort((a, b) => a - b);
console.log(numbers);

function getSecondLargest(nums) {
  // Complete the function
  nums.sort((a,b) => a - b);
  let temp = nums[nums.length - 1]
  console.log(temp)
  let i = nums.length - 1;
  console.log(i)
  while(temp == nums[i])
  {
      i--;
      if(i == 0)
        return nums[0];
  }
  return nums[i];
}

console.log(getSecondLargest(numbers))


s = 12345

function try_catch(st)
{
  try{
    st = st.split('');
    st.reverse();
    st = st.join('')
  } catch (ex) {
    throw ex.message
  } finally {
    console.log(st)
  }
}
// try_catch(s)
const me = Object.create(myInfo)
console.log(me)

/* function return object that can alternative to constructor function
function Rectangle(a, b)
{
  return {
    lenght: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b
  }
}
*/

var temp = 5 > 0 ? 'đúng' : 'sai';
console.log('' == 0 )



//inheritance in js
class animal
{
  constructor(name)
  {
    this.name = name;
  }
    peak()
  {
    console.log(this.name, 'speak')
  }
}

class Dog extends animal
{
  speak()
  {
    super.speak() // call function on object parent nhiê
    console.log(this.name, 'barks')
  }
}

// let spot = new Dog('spot')
// spot.speak()

// spot = new animal('spot')
// spot.speak()

// let btn = document.getElementById("btn")

// btn.onclick = () => btn.innerHTML += 1

/*
let change = [1,2,3,6,9,8,7,4]
const perma = [1,2,3,6,9,8,7,4]
let btn = document.getElementById('btns')
console.log(btn)

btn.onclick = function(){
  change.unshift(change.pop())
  for(let i = 0; i <= 7; i++)
  {
    document.getElementById('btn' + perma[i]).innerHTML = change[i];
  }
}
*/

let vari = document.getElementById("test")
vari.innerText = "2";