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
      <el-menu>
      </el-menu>
    </el-aside>
    <el-main>Main</el-main>
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
      items: [],
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
      this.navMenuIndex = item.index
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss'
</style>
