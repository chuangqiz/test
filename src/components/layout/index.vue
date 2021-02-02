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
      <ul>
        <li>个人中心</li>
        <li>1</li>
        <li>2</li>
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
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu
          index="1">
          <el-menu-item></el-menu-item>
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
