<template>
   <div class="radio_item" @click="itemCLick" :style="{backgroundColor:bgcolor}" >
      <span v-if="name" class="check-style-1"></span>
   </div>
</template>

<script setup lang="ts">

const props = defineProps<{
   bgcolor: string,
   name: string,
}>();

const emits = defineEmits<{
   (e: "update:value", n: string): void,
}>();

const itemCLick = () => {
   emits("update:value", props.name);
};



</script>

<style scoped>
.check-style-1 {
   display: inline-block;
   width: 15px;
   height: 7px;
   border-left: 2px solid #ffffff;
   border-bottom: 2px solid #ffffff;
   -webkit-transform: rotate(-45deg);
   transform: rotate(-45deg);
   margin-top: 2px;
}

.radio_item {
   display: flex;
   justify-content: center;
   align-content: center;
   width: 20px;
   height: 20px;
   margin-right: 20px;
}
</style>
