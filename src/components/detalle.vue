<script setup>
import BotonV from './botonV.vue';
</script>
<template>
    <div class="tarjetaFoto">
   <img :src="imgSrc">
   <div class="listaDescriptiva">
   <ol>
       <li>Id : {{ idPhoto }} </li>
       <li>Earth date: {{ earthDate }} </li>
       <li>Rover name: {{ roverName }}</li>
       <li>Camera: {{ cameraName }}   </li>
       
       <li>Camera: {{ textoBtn }}   </li>
   </ol>
   </div> 
   
<boton-v :textoBoton=this.textoBtn @click="pedirVolver"></boton-v> 
       
</div>
</template>

<script>


     
  export default {
    props: ['idPhoto','imgSrc', 'earthDate', 'roverName', 'cameraName','textoBtn'],
    methods: {
        pedirVolver() {
            this.$emit('pedir-volver', this.idPhoto);
        }
    }
  }

      
</script>

<style>


.tarjetaFoto img{
 width: 100%;
 height: 100%;
  object-fit: contain;
  z-index: 2;
}


.tarjetaFoto{  
  
  display:flex;
  flex-direction: column;
    border-width : 2px;
    border: solid var(--gris);
    border-radius : 10px;
    margin: 30px;
    padding: 30px;
    background-color: var(--claro);

}

.listaDescriptiva{  
  position: relative;
    display: flex;
    justify-content: center;
   max-width: 700px;
   object-fit: contain; 
    
}
</style>
