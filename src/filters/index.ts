import Vue from 'vue'

const filters: any = {
  // 数字格式化为千分位显示
  formatNumThousand(v: any) {
    const vArr: string[] = String(v).split('.')
    const intStr: string = String(vArr[0])
    const floatStr: string = vArr[1] ? '.' + String(vArr[1]) : ''
    const intStrUnitLen: number = Math.ceil(Number(intStr.length) / 3)
    const intArr: string[] = intStr.split('').reverse()
    const newArr: string[] = []
    for (let i: number = 0; i < intStrUnitLen; i++) {
      const temp: string[] = []
      for (let j = 0; j <= 3; j++) {
        if (intArr.length) {
          if (j === 3) {
            temp.push(',')
          } else {
            temp.push(intArr[0])
            intArr.shift()
          }
        } else {
          break
        }
      }
      newArr.push(...temp)
    }
    return newArr.reverse().join('') + floatStr
  }
}

Object.keys(filters).forEach((key: any) => Vue.filter(key, filters[key]))

export default filters
