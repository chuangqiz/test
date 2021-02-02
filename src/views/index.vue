<template>
  <div class="st-page">
    <!-- 面包屑 -->
    <div class="st-breadcrumb">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- search模板 -->
    <div class="st-search">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="区域: ">
          <el-select v-model="searchForm.region" placeholder="---请选择区域---">
          <el-option
            v-for="item in regions"
            :key="item.id"
            :label="item.shopName"
            :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="店铺名: ">
          <el-input v-model="searchForm.name" placeholder="请输入商铺名称"></el-input>
        </el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form>
    </div>
    <!-- 表格 -->
    <div class="st-tab">
      <el-table
        border
        :data="items">
        <el-table-column prop="region" label="地区"></el-table-column>
        <el-table-column prop="shopName" label="店铺名称"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="tel" label="电话号码"></el-table-column>
        <el-table-column label="操作">
          <el-button type="primary">查看</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="st-pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchForm: {
        region: '',
        shopName: ''
      },
      regions: [
        {
          id: 0,
          name: '杭州',
          value: '杭州'
        },
        {
          id: 1,
          name: '萧山',
          value: '萧山'
        }
      ],
      items: [
        {
          id: 0,
          region: '杭州',
          shopName: '杭州店铺',
          name: 'zhangsan',
          tel: '123456'
        },
        {
          id: 1,
          region: '萧山',
          shopName: '萧山店铺',
          name: 'lisi',
          tel: '123456'
        },
        {
          id: 2,
          region: '滨江',
          shopName: '滨江店铺',
          name: 'wangwu',
          tel: '123456'
        }
      ]
    }
  }
}
</script>

<style>

</style>
