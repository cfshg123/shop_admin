<template>
  <div class="login">
    <el-form :model="form" :rules="rules" ref="form" status-icon label-width="80px">
      <div class="img"></div>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button class="reset" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入活动名称', trigger: 'change' },
          {
            min: 6,
            max: 12,
            message: '长度在 6 到 12 个字符',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    reset() {
      // console.log(222)
      this.$refs.form.resetFields()
    },
    login() {
      // console.log(111)

      this.$refs.form.validate(valid => {
        // console.log(this.form)
        if (valid) {
          // console.log('验证通过')
          axios({
            url: 'http://localhost:8888/api/private/v1/login',
            method: 'post',
            data: this.form
          })
            .then(res => {
              console.log(res.data)
              if (res.data.meta.status === 200) {
                // 存储token
                localStorage.setItem('token', res.data.data.token)
                // 提示信息
                this.$message.success('登录成功')

                // 跳转到HOME
                this.$router.push('/home')
              } else {
                this.$message.error(res.data.meta.msg)
                return false
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          // console.log('error submit!!')

          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 400px;
  background-color: #fff;
  padding: 80px 40px 20px;
  border-radius: 20px;
  margin: 200px auto;
  position: relative;
  .img {
    width: 100px;
    height: 100px;
    background-image: url('../assets/imges/04.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: -55px;
    transform: translateX(-50%);
    border: 10px solid #fff;
  }
  .reset {
    margin-left: 80px;
  }
}
</style>
