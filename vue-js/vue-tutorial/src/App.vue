<script setup>
import DataBiding from "./components/DataBiding.vue";
import ComProps from "./components/ComPropos.vue"
import EscutaEvento from "./components/EscutaEvento.vue"
</script>

<template>
   <EscutaEvento />
   <ComProps item="Picareta" :preco="3.5" />
   <DataBiding />
</template>

<style scoped></style>
