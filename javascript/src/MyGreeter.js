
/**
 * @author：zh
 */
module.exports = {
  Client: class {
    constructor(time){
      this.time = time ? time : new Date().getHours()
    }
    getGreeting() {
      // 如果是早上6点之后，中午12点之前，请说“早上好”
      // 如果是在下午12点之后和6点[18:00]之前，“下午好”
      // 如果是在下午6点[18:00]之后和早上6点之前，“晚上好”
      let str
      if (this.time < 6){
        str = 'Good evening'
      } else if (this.time < 12){
        str = 'Good morning'
      } else if (this.time < 18){ //早上
        str = 'Good afternoon'
      }else{
        str = 'Good evening'
      }
      return str
    }
  }
}

