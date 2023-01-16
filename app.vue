<template>
  <div class="bg-amber-100  h-screen">
   <div class="text-center pt-3">
    <input
    v-model="searchWorld"
    type="text" class="p-2 text-center  font-black text-red-900 mx-3">
   <button class="p-2 text-center bg-amber-200 rounded-lg duration-1000 transition-all ease-linear hover:bg-amber-100 hover:p-4" @click="searchClick()">Search</button> 
   </div>
   <div class="bg-amber-200 mt-2 p-4 columns-3 ">
    <div class="" v-for="image in images " :key="image">
      <div>
         <img :src="image.image" class="rounded-lg mt-1 border-8 border-black"/>
      </div>
    </div>
   </div>
  </div>

</template>

<script lang="ts" setup  >
      const searchWorld = ref<string>('')
      const images  = ref<any[]>([])
       const searchClick = async() => {
        const url :string = `https://nature-image-api.vercel.app/search?q=${searchWorld.value}`
        const data = await fetch(url).then(res=> res.json()).then(data => data.images)
        images.value=data
          console.log(images.value);
    
      }

</script> 

<style lang="scss" scoped>

</style>