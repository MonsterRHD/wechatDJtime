// 执行倒计时状态
          that.startSetInter("2019-11-11 22:14:00")
  Page({
  data: {
      //存储计时器
     
    interval:'',//存储计时器
  },
  onLoad: function () {
      var that = this;
       
  },
  startSetInter: function (endTime) {
    var that = this;
    var countdownId = 'countdown'
    let end = new Date(endTime.replace(/-/g, "/")).getTime()
    that.setData({
      [countdownId]: {
        countdown: parseInt((end - new Date().getTime()) / 1000),
        day: parseInt((end - new Date().getTime()) / 1000 / 60 / 60 / 24),
        hour: parseInt((end - new Date().getTime()) / 1000 / 60 / 60 % 24),
        minute: parseInt((end - new Date().getTime()) / 1000 / 60 % 60),
        seconds: parseInt((end - new Date().getTime()) / 1000) % 60
      }
    })
    that.data.interval = setInterval(() => {
      
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
        // 执行任务
        that.postFoodMission()
      }

    }, 1000)
  },
  endSetInter: function() {
    var that = this;
    //清除计时器  即清除setInter
    clearInterval(that.data.interval)
  },
  onHide: function () {
 
  },
  onUnload: function () {
      var that =this;
      //清除计时器  即清除setInter
    clearInterval(that.data.interval)
  },
 
})
