<template>
  <div>
    <!-- <router-link to="/shouye">首页</router-link> -->
    <span @click='btn("/shouye")'>首页</span>
    <router-link to="/fenlei">分类</router-link>
    <router-link to="/dingdan">订单</router-link>
    <router-link to="/wode">我的</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    btn(targetPath) {
      // 方式1: path跳转
      this.$router.push({
        path: targetPath,
       
      });
    },
  },
};
</script>
<style scoped></style>
