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

interface StringArray {
  [index: number]: string
}
