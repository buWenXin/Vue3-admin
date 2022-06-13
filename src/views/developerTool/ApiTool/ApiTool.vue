<template>
   <div class="api_page">
      <div class="api_menu">
         <el-menu style="height: 100%;width: 270px" background-color="#fff">
            <ApiMenuItem @api-click="apiClick" :list="data"/>
         </el-menu>
      </div>
      <div v-if="showView.url==='首页'">
         api文档说明
      </div>
      <div v-else class="api_content">
         <div class="content_title_box">
            <div class="content_title_left"></div>
            <div class="content_title">{{ showView.title }}</div>
         </div>

         <div class="api_content_box">
            <div class="content_method">{{ showView.method }}</div>
            <div class="content_url">{{ showView.url }}</div>
         </div>

         <div>
            <div class="content_parameter">请求参数：</div>
            <Highlight :code="showView.requestDtoString"></Highlight>
         </div>
         <div>
            <div class="content_parameter">响应参数：</div>
            <Highlight :code="showView.responseVoString"></Highlight>
         </div>
      </div>
   </div>
</template>


<script setup lang="ts">
import {userApiData} from "@/views/developerTool/ApiTool/ApiTool";
import ApiMenuItem from "@/views/developerTool/ApiTool/son/ApiMenuItem.vue";
import {ref} from "vue";
import type {childrens} from "@/model/developerToolModel/ApisModel";

//api接口数据list
const data = userApiData();


//显示的vo
const showView = ref<childrens>({
   method: "首页",
   requestDto: undefined,
   requestDtoString: "",
   responseVo: undefined,
   responseVoString: "",
   title: "",
   url: "首页"
});


//监听子组件事件
function apiClick(item: childrens) {
   showView.value = item;
}

</script>

<style scoped lang="scss">

.api_menu {
   height: 100%;
   width: 270px;
}

.api_page {
   width: 100%;
   height: 100%;
   display: flex;
}

.api_content {
   flex-grow: 1;
   background: #fff;
   padding-left: 10px;
   box-sizing: border-box;
   overflow: auto;
}

.content_title_box {
   display: flex;
   height: 20px;
   margin: 15px 0;
}

.content_title {
   font-size: 17px;
   font-weight: 600;
   color: #616368;
}

.content_title_left {
   width: 5px;
   height: 110%;
   background: #F56C6C;
   margin-right: 5px
}

.content_parameter {
   font-size: 15px;
   font-weight: bold;
   color: #616368;
   margin-top: 10px;
}


.api_content_box {
   display: flex;
   background: #EFF7FF;
   height: 33px;
   margin: 13px 0;

   .el-button {
      padding: 0 23px;
      font-size: 16px;
      font-weight: bold
   }
}

.content_method {
   font-size: 16px;
   font-weight: bold;
   color: #ffffff;
   background: #409EFF;
   line-height: 33px;
   padding: 0 23px;
}

.content_url {
   color: #909399;
   line-height: 33px;
   margin-left: 12px;
   font-size: 15px;
}
</style>
