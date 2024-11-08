<script setup>
   import { defineProps } from "vue";

   defineProps({
      item: String,
      preco: Number
   })

</script>

<template>
   <div>
      <p>{{ item }} (R${{ preco.toFixed(2) }})</p>
   </div>
</template>


