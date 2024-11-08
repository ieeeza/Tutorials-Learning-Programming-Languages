<script setup>
   import { ref } from "vue";
   const valor = ref("vue")
</script>

<template>
   <div class="componente">
      <h1>Componente com Data Biding</h1>
      <p>{{ valor }}</p>
      <!-- <input type="text" :value="valor" @input="(e) => valor = e.target.value"/> -->
      <input type="text" v-model="valor" />
   </div>
</template>