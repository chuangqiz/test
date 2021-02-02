<template>
  <el-container>
  <el-header class="header">
    <div class="header-main">
      <img src="../../assets/images/icon.jpg" alt="">
      <ul>
        <li
          v-for="item in navMenu"
          :key="item.name"
          :class="navMenuIndex === item.index ? 'active' : ''"
          @click="navClick(item)">
            {{ item.title }}
          </li>
      </ul>
      <ul class="header-right">
        <li class="el-icon-s-home">返回官网</li>
        <li class="el-icon-user-solid icon-arrow-down">123@qq.com</li>
        <li class="el-icon-chat-dot-round icon-arrow-down"><i class="icon-message">5</i>系统消息</li>
        <li class="el-icon-switch-button">注销</li>
      </ul>
    </div>
  </el-header>
  <el-container>
    <el-aside class="aside">
      <el-menu
        default-active="1"
        @open="handleOpen"
        @close="handleClose"
        unique-opened
        background-color="#2b343d"
        text-color="#fff"
        active-text-color="#ff6329">
          <el-menu-item index="1">
            <template slot="title">
              <i class="el-icon-orange"></i>
              <span>直播控制台</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <template slot="title">
              <i class="el-icon-video-camera"></i>
              <span>直播管理</span>
            </template>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-folder-opened"></i>
              <span>媒体库</span>
            </template>
            <el-menu-item index="3-1">永久存储</el-menu-item>
            <el-menu-item index="3-2">精彩回放</el-menu-item>
          </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import menu from '../../utils/menu.json'
export default {
  data () {
    return {
      menu: [
        {
          title: '选项卡一',
          id: 0,
          items: [
            {
              title: '栏目一',
              id: 1
            },
            {
              title: '栏目二',
              id: 2
            }
          ]
        },
        {
          title: '选项卡二',
          id: 3,
          items: [
            {
              title: '栏目一',
              id: 4
            }
          ]
        }
      ],
      navMenu: [],
      navMenu1: [
        {
          index: 0,
          title: '导航一',
          items: [
            {
              title: '选项1-1'
            },
            {
              title: '选项1-2'
            }
          ]
        },
        {
          index: 1,
          title: '导航二',
          items: [
            {
              title: '选项2-1'
            },
            {
              title: '选项2-2'
            }
          ]
        }
      ],
      items: [],
      nav: [],
      navMenuIndex: 0
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // console.log(menu)
      // this.menu = menu[0]
      // console.log(this.menu)
      // this.items = this.menu.map(v => {
      //   return v[0].items
      // })
      this.navMenu = menu.map(v => {
        return {
          index: v.index,
          name: v.name,
          path: v.path,
          title: v.title
        }
      })
    },
    navClick (item) {
      // console.log(item.name)
      // this.$router.push({ name: item.name })
      this.nav = this.navMenu1.filter(v => {
        return v.index === item.index
      })
      console.log(this.nav)
      this.navMenuIndex = item.index
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
  @import './index.scss'
</style>
