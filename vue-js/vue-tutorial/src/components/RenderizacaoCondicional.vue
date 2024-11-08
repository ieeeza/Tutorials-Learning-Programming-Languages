<template>
    <div>
        <h1>Componente com renderização condicional</h1>
        <p>nome: {{ nome }}</p>
        <p v-if="qtdCachorros === 0">não tem cachorro</p>
        <p v-else-if="qtdCachorros === 1">tem um cachorro</p>
        <p v-else>tem muitos cachorros</p>
    </div>
</template>

<script setup>

defineProps({
    nome: String,
    qtdCachorros: Number
})

</script>