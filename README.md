# wechatDJtime
微信小程序Timer+ wxCountdown结合，对这个库wxCountdown增加了，倒计时结束事件



### 引入

```bash
 var Countdown = require('../../utils/wxCountdown.js')
```


### 倒计时结束后执行事件

```bash
 var wxTimer = new Countdown({
      complete: function() {
        console.log("完成了")
      }
    })
 // 你可以在页面初始化任意数量的倒计时对象。第一个参数是时间，你可以从后台拿数据动态传入；第二个参数是 countDown 的 id，第三个是当前页面对象。三个参数都是必选的
 wxTimer.init('2019-11-03 19:57:00', 'time', this);
```


### WXML

```bash
 <view class="weui-flex" style="text-align:center;color:red">
  <view class="weui-flex__item">{{time.day}}</view>
  <view class="weui-flex__item">{{time.hour}}</view>
	<view class="weui-flex__item">{{time.minute}}</view>
  <view class="weui-flex__item">{{time.seconds}}</view>
</view>
```
