export default {
  // 切割日期分字符返回年月日
  splitDate(timestamp: any) {
    const time: any = new Date(timestamp)
    const y: any = time.getFullYear()
    const m: any = time.getMonth() + 1
    const d: any = time.getDate()
    const h: any = time.getHours()
    const mm: any = time.getMinutes()
    // const s = time.getSeconds();
    const w: any = time.getDay()
    return { y, m, d, h, mm, w }
  },

  // 日期格式化
  formatDate(timestamp: any) {
    const t: any = this.splitDate(timestamp)
    return `${t.y}-${t.m < 10 ? '0' + t.m : t.m}-${t.d < 10 ? '0' + t.d : t.d}`
  }
}
