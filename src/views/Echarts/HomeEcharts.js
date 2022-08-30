const Echarts1 = function(echarts){
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.querySelector(".bar .chart"));
    // 配置选项和数据
    let option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true,
        },
        xAxis: [
            {
                type: "category",
                data: [
                    "旅游产业",
                    "教育培训",
                    "游戏行业",
                    "医疗行业",
                    "电商行业",
                    "社交行业",
                    "金融行业",
                ],
                axisTick: {
                    alignWithLabel: true,
                },
                // 修改刻度标签，相关样式
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12",
                },
                // 不显示x坐标轴的样式
                axisLine: {
                    show: false,
                },
            },
        ],
        yAxis: [
            {
                type: "value",
                // 修改刻度标签，相关样式
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12",
                },
                // y轴线条样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2,
                    },
                },
                //y轴分割线样式
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    },
                },
            },
        ],
        series: [
            {
                name: "Direct",
                type: "bar",
                barWidth: "35%",
                data: [10, 52, 200, 334, 390, 330, 220],
                itemStyle: {
                    barBorderRadius: 5,
                },
            },
        ],
    };
    // 绘制图表
    myChart.setOption(option);
    // 图标跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

export default Echarts1;