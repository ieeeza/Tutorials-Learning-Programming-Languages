<template>
  <div class="componente">
    <h1>Componente que escuta evento</h1>
    <p>total: {{ total }}</p>
    <div>
      <EmiteEvento item="item1" :preco="1.99" @foiAdicionado="atualizarTotal" />
      <EmiteEvento item="item2" :preco="4.99" @foiAdicionado="atualizarTotal" />
      <EmiteEvento item="item3" :preco="9.99" @foiAdicionado="atualizarTotal" />
    </div>
  </div>
</template>

<script setup>
import EmiteEvento from "./EmiteEvento.vue";
import { ref } from "vue";

const total = ref(0)

function atualizarTotal(p) {
   const valor = total.value + p;
   total.value = +valor.toFixed(2)
}

</script>
