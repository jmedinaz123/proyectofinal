<template>
    <div :class='dark ? "footer bg-dark-pachaqtec" : ""'>
        <div class="container p-0 mt-4">
            <div class="row px-5 py-3">
                <div class="col-12 text-left">
                    <img :src='dark ? "/assets/IconRespaldoWhite.svg" : "/assets/IconRespaldoDark.svg"' />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Patrocinadores',
    props: {
        dark: Boolean
    }
}
</script>