// 格式：当前时间：2022年8月22-16时46分10秒
const GetDate = function(){
    const dt = new Date();
    let y = dt.getFullYear();
    let mt = dt.getMonth() + 1;
    let day = dt.getDate();
    let h = dt.getHours(); //获取时
    let m = dt.getMinutes(); //获取分
    let s = dt.getSeconds(); //获取秒
    return `当前时间：${y}年${mt}月${day}日-${h}时${m}分${s}秒`;
}

export default GetDate;