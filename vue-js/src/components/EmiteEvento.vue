<script setup>

const props = defineProps({
  item: String,
  preco: Number,
});

const emit = defineEmits(["foiAdicionado"]);

function adicionar() {
  emit("foiAdicionado", props.preco);
}
</script>

<template>
  <div>
    <h1>Componente que emite evento!</h1>
    <p>{{ item }} R${{ preco.toFixed(2) }}</p>
    <button @click="adicionar">ADICIONAR CARRINHO</button>
  </div>
</template>
