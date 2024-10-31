<script>
export default {
    props: ['textoBoton']
  }

</script>

<template>    
    <button class="boton1">{{ textoBoton }} </button>
</template>
<style>
@import url(//src/assets/base.css);
@import url(/src/assets/main.css);

.boton1{   
    background-color: var(--violeta);
    color: var(--claro);    
    border-radius: 10px;
    padding: 7px;
    margin: 3px;
    max-width: fit-content;

}
</style>
