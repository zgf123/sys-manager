export default {}
/* --------------------------------------------------*{ 接口初探 }*-------------------------------------------------- */

function createSquareTest() {
  interface SquareConfig {
    color?: string
    width?: number
    [x: string]: any
  }
  function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
      color: 'red',
      area: 1
    }
  }
  const mySquare = createSquare({ colour: 'red', width: 100, dd: '2131' })
}

function objectType() {
  const box: object = {
    color: '#aaa',
    width: 10
  }
  Reflect.defineProperty(box, 'color', {
    value: 1
  })
  // console.log(box)
}

function interfaceTest() {
  interface Person {
    readonly name: string
    age: number
  }
  const foo: Person = {
    name: 'a',
    age: 10
  }

  // foo.name = 'b'
}

function duanyan() {
  interface Person {
    name: string
    age: number
  }

  const p = {
    name: 'aa',
    age: 3,
    dd: 3
  }

  const strLength: number = (p as Person).age

  // console.log(strLength)
}

/* --------------------------------------------------*{ 函数类型 }*-------------------------------------------------- */
type SearchFunc = (source: string, subString: string) => boolean
const mySearch: SearchFunc = (source, subString) => {
  const result = source.search(subString)
  return result > -1
}
mySearch('a', 'b')

/* --------------------------------------------------*{ 可索引的类型 }*-------------------------------------------------- */
interface StringArray {
  [index: number]: string
}

const myArray: StringArray = ['a', 'b']
const myStr: string = myArray[0]

/* class Animal {
  public name: string = 'a'
}
class Dog extends Animal {
  private breed: string = 'b'
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: number]: Animal
  [x: string]: Dog
} */

interface NumberDictionary {
  [index: string]: number
  length: number // 可以，length是number类型
  // name: string // 错误，`name`的类型与索引类型返回值的类型不匹配
}

/* --------------------------------------------------*{ 类类型 }*-------------------------------------------------- */
/* interface ClockInterface {
  currentTime: Date
}

class Clock implements ClockInterface {
  public currentTime: Date = new Date()
  constructor(h: number, m: number) {}
  ddd: number = 1
} */

/* interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}
interface ClockInterface {
  tick(): void
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep')
  }
} */
/* --------------------------------------------------*{ 继承接口 }*-------------------------------------------------- */

/* interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

// let square = {} as Square
let square = <Square>{}
square.color = 'blue'
square.sideLength = 10
square.aa = 1 */

/* --------------------------------------------------*{ 混合类型 }*-------------------------------------------------- */
/* interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = <Counter>function(start: number) {}
  counter.interval = 123
  counter.reset = function() {}
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0 */

/* --------------------------------------------------*{ 接口继承类 }*-------------------------------------------------- */

/* class Control {
  private state: any
  select() {}
}

interface SelectableControl extends Control {
  select(): void
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
  select() {}
}

class Location {} */
