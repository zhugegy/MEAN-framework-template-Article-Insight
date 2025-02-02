Date.prototype.Format = function(fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//console.log((new Date()).Format("yyyy"));

//exports.currentYear=((new Date()).Format("yyyy"));
//exports.currentTime=((new Date()).Format("yyyy-MM-dd hh:mm:ss"));

module.exports.currentTime = function () {
    return (new Date()).Format("yyyy-MM-dd hh:mm:ss");
}

module.exports.currentYear = function () {
    return (new Date()).Format("yyyy");
}
