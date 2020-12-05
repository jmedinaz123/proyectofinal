<template>
    <div class="font-weight-bold">
        <router-link :to='urlBack' class="text-dark">
            <i class="fas fa-arrow-left"></i>
        </router-link>
        <span class="ml-3">{{label}}</span>
    </div>
</template>

<script>

export default {
    name: 'Back',
    props: {
        urlBack: String,
        label: String
    }
}
</script>

<style>

</style>