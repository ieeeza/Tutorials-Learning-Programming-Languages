<template>
    <div>
        <h1>Componente com renderização de Lista</h1>
        <p>Nome: {{ nome }}</p>
        <p v-show="cachorros.length === 0">Não tem cachorro</p>
        <ul>
            <li v-for="cachorro in cachorros">
                Nome: {{ cachorro.nome }} | Idade: {{ cachorro.idade }}
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    nome: String,
    cachorros: Array,
});
</script>
