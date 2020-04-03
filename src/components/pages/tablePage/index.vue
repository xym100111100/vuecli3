<template>
  <div>
    <template>
      <el-table @selection-change="handleSelectionChange" stripe :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55">

        </el-table-column>
        <el-table-column prop="date" label="头像" width="180">
          <template v-slot:default="scope">
            <img :src="scope.row.url+'这里可以使用图片'" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="管理">
          <template v-slot:default="scope">
            <button @click="del(scope.$index)">{{scope.$index}}刪除</button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <el-pagination @current-change="changePage" background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template> 

<script>
import Vue from "vue";
import { Table, TableColumn, Pagination } from "element-ui";
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);

export default {
  name: "my-table",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    changePage(e) {
      console.log(e);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      console.log("选择", val);
      this.multipleSelection = val;
    },
    del(index) {
      this.tableData.splice(index, 1);
    }
  }
};
</script>


<style>
</style>