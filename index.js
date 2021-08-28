var divs = $('.cur-list div.duration');
var timearr = [];
divs.each((i,e) => {
    timearr.push(e.innerText)
});
var timeInSecond = []
timearr.forEach((e) => {
    var time = e.split(':');
    var m = parseInt(time[0]);
    var s = parseInt(time[1]);
    var st = m * 60 + s;
    timeInSecond.push(st);
})
var tts = timeInSecond.reduce((pv, c,i) =>{
    return pv + c
},0)
var hours = tts / 60 /60;
console.log(hours,'小时')

// 视频标题
var titles = ''
jQuery('.part').each((i,e)=>{titles += e.innerText + '\n'})
var e = document.createElement('div')
e.innerText = titles;
document.body.insertBefore(e,document.getElementById('app'))
