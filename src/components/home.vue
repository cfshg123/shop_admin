<template>
    <el-container class="home">
      <el-header>
        <div class="h-left"></div>
        <div class="h-right">
          欢迎光临
          <a href="javescript:;" @click="logout">退出</a>
        </div>
        <h1 class="h-title">电商后台管理系统</h1>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-menu"></i>
              <span slot="title">角色列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-menu"></i>
              <span slot="title">权限列表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        </el-aside>
        <el-main class="main">Main</el-main>
      </el-container>
  </el-container>
</template>

<script>
// #545c64
// #d4dfe4
export default {
  methods: {
    // 点击退出功能
    logout() {
      // 1.点击退出，弹出模态框  2. 点击确认 清除token 跳转登录页 点击取消 弹框消失
      // console.log(111)
      this.$confirm('你确定要退出系统吗', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 2. 点击确认 清除token 跳转登录页 点击取消 弹框消失
          localStorage.removeItem('token')
          this.$message({
            type: 'success',
            message: '退出成功!'
          })
          this.$router.push('/login')
        })
        .catch(() => {
          this.$message({
            type: 'error',
            message: '已取消退出'
          })
        })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .el-header {
    background-color: skyblue;
    .h-left {
      float: left;
      width: 180px;
      height: 60px;
      // background-color: #fff;
      background: url('../assets/imges/logo.png') center center no-repeat;
      background-size: contain;
    }
    .h-title {
      text-align: center;
      height: 60px;
      line-height: 60px;
      overflow: hidden;
      color: #fff;
      font-size: 28px;
    }
    .h-right {
      float: right;
      width: 180px;
      text-align: center;
      line-height: 60px;
      height: 60px;
      // background-color: #fff;
      font-weight: 700;
      a {
        color: orange;
      }
    }
  }
  .aside {
    background-color: #545c64;
    .el-submenu {
      width: 200px;
    }
  }
  .main {
    background-color: #d4dfe4;
  }
}
</style>
