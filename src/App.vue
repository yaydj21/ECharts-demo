<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li{
  list-style: none;
}
//声明字体
@font-face {
  font-family: electronicFont;
  src: url(./assets/font/DS-DIGIT.TTF);
}
body{
  background: url(./assets/images/bg.jpg) no-repeat top center;
}
</style>
