<template>
  <div>
    <!-- 头部区域 -->
    <header>
      <h1>数据可视化E-charts</h1>
      <div class="showTime">{{ date }}</div>
    </header>
    <!-- 页面主体区域 -->
    <section class="mainbox">
      <div class="column">
        <div class="panel bar">
          <h2>柱形图-就业行情</h2>
          <div class="chart" ref="bar_ref">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2>
            折线图-人员变化 <span @click="chengeYear('2020')">2020</span
            ><span @click="chengeYear('2021')">2021</span>
          </h2>
          <div class="chart" ref="line_ref">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>饼形图-年龄分布</h2>
          <div class="chart" ref="pie_ref">图表</div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <!-- no模块区域 -->
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>12345</li>
              <li>45678</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>前端需求人数</li>
              <li>市场供应人数</li>
            </ul>
          </div>
          <!-- 地图模块 -->
          <div class="map">
            <div class="map1"></div>
            <div class="map2"></div>
            <div class="map3"></div>
            <div class="chart" ref="map_ref">地图模块</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="panel bar2">
          <h2>柱形图-技能掌握</h2>
          <div class="chart" ref="bar2_ref">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line2">
          <h2>折线图-播放量</h2>
          <div class="chart"  ref="line2_ref">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie2">
          <h2>饼形图-地区分布</h2>
          <div class="chart" ref="pie2_ref">图表</div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GetDate from "@/utils/date";
// 导入china.js绘制地图
import "@/utils/china";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      date: "",
      yearData: [
        {
          year: "2020",
          data: [
            [
              120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230,
              210,
            ],
            [
              220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330,
              310,
            ],
          ],
        },
        {
          year: "2021",
          data: [
            [
              220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330,
              310,
            ],
            [
              120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230,
              210,
            ],
          ],
        },
      ],
      showYearData: [
        [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210],
        [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310],
      ],
    };
  },
  created() {},
  mounted() {
    this.getTime();

    // 绘制Echart
    this.drawChart();
    this.drawChart2();
    this.drawChart3();
    this.drawChart4();
    this.drawChart5();
    this.drawChart6();
    this.drawMapChart();
  },
  methods: {
    getTime() {
      this.date = GetDate();
      setTimeout(() => {
        //倒计时中递归调用，每秒更新一次时间
        this.getTime();
      }, 1000);
    },
    chengeYear(val) {
      if (val === "2020") {
        this.showYearData = this.yearData[0].data;
        this.drawChart3();
      } else {
        this.showYearData = this.yearData[1].data;
        this.drawChart3();
      }
    },
    // 柱状图1
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.bar_ref);
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
    },
    // 柱状图2
    drawChart2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.bar2_ref);
      // 柱子颜色
      const myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
      let option = {
        grid: {
          left: "22%",
          right: "22%",
          bottom: "10%",
          // containLabel: true,
        },
        // 不显示x轴的信息
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            data: ["HTML", "CSS", "JavaScript", "Vue", "Node"],
            // 不显示y轴的线
            axisLine: {
              show: false,
            },
            // 不显示y轴的刻度
            axisTick: {
              show: false,
            },
            // 把刻度标签中的文字改为白色
            axisLabel: {
              color: "#fff",
            },
          },
          {
            show: true,
            inverse: true,
            data: ["702", "123", "456", "789", "112"],
            // 不显示y轴的线
            axisLine: {
              show: false,
            },
            // 不显示y轴的刻度
            axisTick: {
              show: false,
            },
            // 把刻度标签中的文字改为白色
            axisLabel: {
              color: "#fff",
            },
          },
        ],
        series: [
          {
            name: "条",
            type: "bar",
            data: [34, 89, 34, 70, 44],
            yAxisIndex: 0,
            itemStyle: {
              barBorderRadius: 20,
              color: function (params) {
                return myColor[params.dataIndex];
              },
            },
            barCategoryGap: 50,
            barWidth: 10,
            // 显示柱子内的文字
            label: {
              show: true,
              position: "inside",
              // {c}自动解析为数据 data里面的数据
              formatter: "{c}%",
            },
          },
          {
            name: "框",
            type: "bar",
            barCategoryGap: 50,
            barWidth: 15,
            yAxisIndex: 1,
            itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              boderWidth: 3,
              barBorderRadius: 15,
            },
            data: [100, 100, 100, 100, 100],
          },
        ],
      };
      myChart.setOption(option);
      // 图标跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    // 折线图1
    drawChart3() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.line_ref);
      let option = {
        // 通过color修改两条线的颜色
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          //如果series对象有name值，则Legend不用写数据了
          // data: ["新增粉丝", "新增游客"],
          // 修改图例组件的文字颜色
          textStyle: {
            color: "#4c9bfd",
          },
          // 10%要加引号
          right: "10%", //距离右边10%
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true,
          borderColor: "#012f4a",
          containLabel: true, //包含刻度文字在内
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#4c9bfd",
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#4c9bfd",
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: "#012f4a",
            },
          },
        },
        series: [
          {
            name: "新增粉丝",
            type: "line",
            stack: "Total",
            smooth: "true",
            data: this.showYearData[0],
          },
          {
            name: "新增游客",
            type: "line",
            stack: "Total",
            smooth: "true", //显示带有弧度
            data: this.showYearData[1],
          },
        ],
      };
      myChart.setOption(option);
      // 图标跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //折线图2
    drawChart4() {
      let myChart = this.$echarts.init(this.$refs.line2_ref);
      let option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: "0%",
          data: ["转发量", "播放量"],
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12",
          },
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "01",
              "02",
              "03",
              "04",
              "05",
              "06",
              "07",
              "08",
              "09",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
            ],
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12,
              },
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.2)",
                },
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12,
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                },
              },
            },
          },
        ],
        series: [
          {
            name: "转发量",
            type: "line",
            smooth: "true",
            // 填充区域
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(1,132,213,0.4)", // 0% 处的颜色
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1,132,213,0.1)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              shadowColor: "rgba(0,0,0,0.1)",
            },
            // 设置拐点
            symbol: "circle",
            // 开始不显示拐点，鼠标经过显示
            showSymbol: false,
            // 拐点大小
            symbolSize: 12,
            // 拐点颜色和边框设置
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221,220,107,.1)",
              borderWidth: 12,
            },
            lineStyle: {
              color: "#0184d5",
              width: 2,
            },
            emphasis: {
              focus: "series",
            },
            data: [
              20, 32, 10, 34, 90, 30, 21, 20, 32, 10, 34, 90, 30, 21, 20, 32,
              10, 34, 90, 30, 21, 20, 32, 10, 34, 90, 30, 21, 30, 21,
            ],
          },
          {
            name: "播放量",
            type: "line",
            smooth: "true",
            // 填充区域
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0,216,135,0.4)", // 0% 处的颜色
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0,216,135,0.1)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              shadowColor: "rgba(0,0,0,0.1)",
            },
            // 设置拐点
            symbol: "circle",
            // 开始不显示拐点，鼠标经过显示
            showSymbol: false,
            // 拐点大小
            symbolSize: 12,
            // 拐点颜色和边框设置
            itemStyle: {
              color: "#00d887",
              borderColor: "rgba(221,220,107,.1)",
              borderWidth: 12,
            },
            lineStyle: {
              color: "#00d887",
              width: 2,
            },
            emphasis: {
              focus: "series",
            },
            data: [
              22, 18, 19, 34, 29, 33, 31, 22, 18, 19, 34, 29, 33, 31, 22, 18,
              19, 34, 29, 33, 31, 22, 18, 19, 34, 29, 33, 31, 34, 29,
            ],
          },
        ],
      };
      myChart.setOption(option);
      // 图标跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    // 饼图1
    drawChart5() {
      let myChart = this.$echarts.init(this.$refs.pie_ref);
      let option = {
        color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          bottom: "0%",
          // 修改小图标大小
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12",
          },
        },
        series: [
          {
            name: "年龄分布",
            type: "pie",
            // 第一个是内圆半径，第二个是外圆半径
            radius: ["40%", "60%"],
            center: ["50%", "45%"],
            avoidLabelOverlap: false,
            // 图形上的文字
            label: {
              show: false,
              position: "center",
            },
            // 文字上的链接线
            labelLine: {
              show: false,
            },
            data: [
              { value: 1, name: "0岁以下" },
              { value: 4, name: "20-29岁" },
              { value: 2, name: "30-39岁" },
              { value: 2, name: "40-49岁" },
              { value: 1, name: "50岁以上" },
            ],
          },
        ],
      };
      myChart.setOption(option);
      // 图标跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    // 饼图2
    drawChart6() {
      let myChart = this.$echarts.init(this.$refs.pie2_ref);
      let option = {
        color: [
          "#006cff",
          "#60cda0",
          "#ed8884",
          "#ff9f7f",
          "#0096ff",
          "#9fe6b8",
          "#32c5e9",
          "#1d9dff",
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          bottom: "0%",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#rgba(255,255,255,.5)",
            fontSize: 12,
          },
        },
        series: [
          {
            name: "地区模式",
            type: "pie",
            radius: ["10%", "70%"],
            center: ["50%", "50%"],
            roseType: "radius",
            // 图形文字标签
            label: {
              fontSize: 10,
            },
            // 链接图形和文字的线
            labelLine: {
              length: 6,
              length2: 8,
            },
            itemStyle: {
              borderRadius: 5,
            },
            data: [
              { value: 30, name: "云南" },
              { value: 28, name: "广东" },
              { value: 26, name: "山东" },
              { value: 24, name: "陕西" },
              { value: 22, name: "湖南" },
              { value: 20, name: "江苏" },
              { value: 18, name: "浙江" },
              { value: 16, name: "北京" },
            ],
          },
        ],
      };
      myChart.setOption(option);
      // 图标跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    // 模拟飞行航线地图模块
    drawMapChart() {
      // 地图数据
      var geoCoordMap = {
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028],
      };

      var XAData = [
        [{ name: "江门" }, { name: "清远", value: 100 }],
        [{ name: "江门" }, { name: "上海", value: 100 }],
        [{ name: "江门" }, { name: "广州", value: 100 }],
        [{ name: "江门" }, { name: "西宁", value: 100 }],
        [{ name: "江门" }, { name: "银川", value: 100 }],
      ];

      var XNData = [
        [{ name: "云南" }, { name: "北京", value: 100 }],
        [{ name: "云南" }, { name: "上海", value: 100 }],
        [{ name: "云南" }, { name: "广州", value: 100 }],
        [{ name: "云南" }, { name: "西安", value: 100 }],
        [{ name: "云南" }, { name: "银川", value: 100 }],
      ];

      var YCData = [
        [{ name: "银川" }, { name: "北京", value: 100 }],
        [{ name: "银川" }, { name: "广州", value: 100 }],
        [{ name: "银川" }, { name: "上海", value: 100 }],
        [{ name: "银川" }, { name: "西安", value: 100 }],
        [{ name: "银川" }, { name: "西宁", value: 100 }],
      ];

      var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
      //var planePath = 'arrow';
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];

          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord],
              value: dataItem[1].value,
            });
          }
        }
        return res;
      };

      var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
      var series = [];
      [
        ["江门", XAData],
        ["云南", XNData],
        ["银川", YCData],
      ].forEach(function (item, i) {
        series.push(
          {
            name: item[0] + " Top3",
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: "red", //arrow箭头的颜色
              symbolSize: 3,
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 0,
                curveness: 0.2,
              },
            },
            data: convertData(item[1]),
          },
          {
            name: item[0] + " Top3",
            type: "lines",
            zlevel: 2,
            symbol: ["none", "arrow"],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15,
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2,
              },
            },
            data: convertData(item[1]),
          },
          {
            name: item[0] + " Top3",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke",
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}",
              },
            },
            symbolSize: function (val) {
              return val[2] / 8;
            },
            itemStyle: {
              normal: {
                color: color[i],
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
            data: item[1].map(function (dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([
                  dataItem[1].value,
                ]),
              };
            }),
          }
        );
      });

      let myChart = this.$echarts.init(this.$refs.map_ref);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: function (params, ticket, callback) {
            if (params.seriesType == "effectScatter") {
              return "线路：" + params.data.name + "" + params.data.value[2];
            } else if (params.seriesType == "lines") {
              return (
                params.data.fromName +
                ">" +
                params.data.toName +
                "<br />" +
                params.data.value
              );
            } else {
              return params.name;
            }
          },
        },
        legend: {
          orient: "vertical",
          top: "bottom",
          left: "right",
          data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
          textStyle: {
            color: "#fff",
          },
          selectedMode: "multiple",
        },
        geo: {
          map: "china",
          label: {
            emphasis: {
              show: true,
              color: "#fff",
            },
          },
          // 把地图放大1.2倍
          zoom: 1.2,
          roam: true,
          itemStyle: {
            normal: {
              // 地图省份的地图颜色
              areaColor: "rgba(20,41,87,.6)",
              borderColor: "#195BB9",
              borderWidth: 1,
            },
            emphasis: {
              areaColor: "#2B91B7",
            },
          },
        },
        series: series,
      };
      myChart.setOption(option);
      // 图标跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style lang="less" scoped>
header {
  position: relative;
  height: 0.5208rem;
  background: url(../assets/images/head_bg.png) no-repeat;
  background-size: 100% 100%;
  // 缩放 垂直100% 水平100%
  h1 {
    font-size: 0.1979rem;
    color: #fff;
    text-align: center;
    line-height: 0.4167rem;
  }
  .showTime {
    position: absolute;
    right: 0.1563rem;
    top: 0;
    line-height: 0.3906rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.1042rem;
  }
}

.mainbox {
  display: flex;
  min-width: 1024px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0.0521rem 0.0521rem 0;
  .column {
    flex: 3;
  }
  .column:nth-child(2) {
    flex: 5;
    margin: 0 0.0521rem 0.0781rem;
  }
  .panel {
    position: relative;
    height: 1.6146rem;
    padding: 0 0.0781rem 0.2083rem;
    margin-bottom: 0.0781rem;
    border: 0.0052rem solid rgba(25, 186, 139, 0.17);
    background: url(../assets/images/line.png) rgba(255, 255, 255, 0.04);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 10px;
      width: 10px;
      border-left: 2px solid #02a6b5;
      border-top: 2px solid #02a6b5;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 10px;
      width: 10px;
      border-right: 2px solid #02a6b5;
      border-top: 2px solid #02a6b5;
    }
    .panel-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 10px;
        width: 10px;
        border-left: 2px solid #02a6b5;
        border-bottom: 2px solid #02a6b5;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 10px;
        width: 10px;
        border-right: 2px solid #02a6b5;
        border-bottom: 2px solid #02a6b5;
      }
    }
    h2 {
      height: 0.25rem;
      color: #fff;
      line-height: 0.25rem;
      text-align: center;
      font-size: 0.1042rem;
      font-weight: 400;
      span {
        color: #fff;
        margin: 0 0.0521rem;
      }
    }
    .chart {
      height: 1.25rem;
    }
  }
}
// no模块
.no {
  background: rgba(101, 132, 226, 0.1);
  padding: 0.0781rem;
  .no-hd {
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 30px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }
    &::after {
      position: absolute;
      bottom: 0;
      right: 0;
      content: "";
      width: 30px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
    }
    ul {
      display: flex;
      li {
        position: relative;
        flex: 1;
        line-height: 0.4167rem;
        font-size: 0.3646rem;
        color: #ffeb7b;
        text-align: center;
        font-family: "electronicFont";
      }
      li:nth-child(1)::after {
        content: "";
        position: absolute;
        top: 25%;
        right: 0;
        height: 50%;
        width: 1px;
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
  .no-bd {
    ul {
      display: flex;
      li {
        flex: 1;
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.0938rem;
        height: 0.2083rem;
        line-height: 0.2083rem;
        padding-top: 0.0521rem;
      }
    }
  }
}
.map {
  position: relative;
  height: 4.2188rem;
  .map1 {
    width: 2.6979rem;
    height: 2.6979rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(../assets/images/map.png);
    opacity: 0.3;
    background-size: 100% 100%;
  }
  .map2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3.349rem;
    height: 3.349rem;
    background: url(../assets/images/lbx.png);
    animation: rotate1 15s linear infinite;
    background-size: 100% 100%;
    opacity: 0.6;
  }
  .map3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.9479rem;
    height: 2.9479rem;
    background: url(../assets/images/jt.png);
    animation: rotate2 10s linear infinite;
    background-size: 100% 100%;
    opacity: 0.6;
  }
  .chart {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4.2188rem;
  }
  @keyframes rotate1 {
    form {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @keyframes rotate2 {
    form {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
}
// 约束屏幕尺寸
@media screen and (max-width:1024px){
  html{
    // 1024/10
    font-size: 102px !important;
  }
}

@media screen and (min-width:1920){
  html{
    // 1920/10
    font-size: 192px !important;
  }
}
</style>
