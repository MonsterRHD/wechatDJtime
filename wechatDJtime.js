var Countdown = function(initObj) {
  initObj = initObj || {};
  this.complete = initObj.complete; //结束任务
}

Countdown.prototype = {
   init:function(endTime, countdownId, that) {
    let end = new Date(endTime).getTime()

    that.setData({
      [countdownId]: {
        countdown: parseInt((end - new Date().getTime()) / 1000),
        day: parseInt((end - new Date().getTime()) / 1000 / 60 / 60 / 24),
        hour: parseInt((end - new Date().getTime()) / 1000 / 60 / 60 % 24),
        minute: parseInt((end - new Date().getTime()) / 1000 / 60 % 60),
        seconds: parseInt((end - new Date().getTime()) / 1000) % 60
      }
    })

    let interval = setInterval(() => {
      that.setData({
        [countdownId]: {
          countdown: parseInt((end - new Date().getTime()) / 1000),
          day: parseInt((end - new Date().getTime()) / 1000 / 60 / 60 / 24),
          hour: parseInt((end - new Date().getTime()) / 1000 / 60 / 60 % 24),
          minute: parseInt((end - new Date().getTime()) / 1000 / 60 % 60),
          seconds: parseInt((end - new Date().getTime()) / 1000) % 60
        }
      })

      if (that.data[countdownId].countdown <= 0) {
        clearInterval(interval)
        that.setData({
          seconds: 0
        })
        if (this.complete) {
          this.complete();
        }
      }
    }, 1000)
  }
}
module.exports = Countdown;
