<template>
  <div @click.stop="createCode" v-html="codeImg" class="codeBox"
       :style="`width:${codeWidth};height:${codeHeight};`">
  </div>
<!--    <div class="codeBox" :style="`width:${codeWidth};
height:${codeHeight};`" @click="refreshCpde">-->
<!--        <span v-for="(item,index) in codeList" :key="index"-->
<!--        :style="getStyle(item)">-->
<!--             {{item.code}}-->
<!--        </span>-->
<!--    </div>-->
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'VerifiCode',
  props: {
    codeWidth: {
      type: String,
      default: '100px',
    },
    codeHeight: {
      type: String,
      default: '40px',
    },
    // length: {
    //   type: Number,
    //   default: 4,
    // },
  },
  data() {
    return {
      codeImg: '',
    };
  },
  mounted() {
    this.createCode();
  },
  methods: {
    ...mapActions({
      loginCode: 'Login/loginCode',
    }),
    async createCode() {
      this.codeImg = await this.loginCode();
    },
    // 验证码刷新
    // refreshCpde() {
    //   this.createCode();
    // },
    // createCode() {
    //   const len = this.length;
    //   const codeList = [];
    //   const charts = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789';
    //   const charsLen = charts.length;
    //   for (let i = 0; i < len; i += 1) {
    //     const rgb = [Math.round(Math.random() * 220),
    //       Math.round(Math.random() * 240), Math.random(Math.random() * 200)];
    //     codeList.push({
    //       code: charts.charAt(Math.floor(Math.random() * charsLen)),
    //       color: `rgb(${rgb})`,
    //       fontSize: `1${[Math.floor(Math.random() * 10)]}px`,
    //       padding: `${[Math.floor(Math.random() * 10)]}px`,
    //       transform: `routate(${Math.floor(Math.random() * 90
    //         - Math.floor(Math.random() * 90))}deg)`,
    //     });
    //   }
    //   this.codeList = codeList;
    //   this.$emit('updataCode', codeList.map((item) => item.code).join(''));
    // },
    // getStyle(data) {
    //   return `color:${data.color};font-size:${data.fontSize};
    //          padding:${data.padding}; transform:${data.transform}
    //         `;
    // },
  },
};
</script>

<style lang="scss" scoped>
  .codeBox{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #d8fafd;
    span{
      display: inline-block;
    }
  }
</style>
