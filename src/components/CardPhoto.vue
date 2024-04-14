<template>
    <div class="tarjetaFoto">
   <img :src="imgSrc">
   <div class="listaDescriptiva">
   <ol>
       <li>Id : {{ idPhoto }} </li>
       <li>Earth date: {{ earthDate }} </li>
       <li>Rover name: {{ roverName }}</li>
       <li>Camera: {{ cameraName }}   </li>
   </ol>
   </div>          
</div>
</template>

<script>
  export default {
    props: ['idPhoto','imgSrc', 'earthDate', 'roverName', 'cameraName']
  }
</script>

<style>





.tarjetaFoto img {
  object-fit: contain;
  max-width: 100%;
    max-height: 90vh;
}
.tarjetaFoto{
    max-width: 1200px;    
    border-width : 3px;
    border: 2px solid var(--gris);
    border-radius : 20px;
    margin: 30px;
    padding: 30px;

}
.listaDescriptiva{
    display: flex;
    justify-content: center;
   max-width: 700px;
   left: 200px;
    
}
</style>
