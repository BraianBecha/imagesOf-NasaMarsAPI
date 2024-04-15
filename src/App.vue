<script setup>
import TopBar from './components/TopBar.vue';
import FormComponent from './components/FormComponent.vue';
import CardPhoto from './components/CardPhoto.vue';
import BarraEstado from './components/BarraEstado.vue';



</script>

<script>
export default {
  components: { CardPhoto },
  data() {
    return {
      sol : 0,
      message: 'This is some text',
      linkServicio : "https://api.nasa.gov/mars-photos/api/v1/rovers/",
      linkConsulta : "",
      arrayPresentacionPhotos : [],      
      presentacionFoto : {id:0 , imgSrc:"" , earth_date:"" , rover:"" , camera :"" },
      mostrarBarraEstado : false
    };
  },
  methods:{
    receiveValues(x, y, z)
    {
      this.sol=y;
    console.log(`los valores escuchados en appVue son ${x} , ${y} , ${z}`)
    let elLink=this.crearLinkConsulta(x,y,z)
    console.log(`el link creado es ${this.linkConsulta}`)

  },
    
    crearLinkConsulta(x,y,z){    
    this.linkConsulta=this.linkServicio.concat(`${x}/photos?sol=${y}&api_key=${z}`)
    console.log(`en crearLinkConsulta() link es ${this.linkConsulta}`)
    this.buscarFotos(this.linkConsulta)
    
    
},
 buscarFotos(x){
  this.arrayPresentacionPhotos=[];
  fetch(x)
.then(z=>z.json())
        .then((y)=> {console.log(`y es ${y} la cantidad de fotos es ${y.photos.length}`)  
        y.photos.forEach(element => { 
          let unaPresentacion=Object.create(this.presentacionFoto)
                        unaPresentacion.id=element.id
                        unaPresentacion.imgSrc=element.img_src
                        unaPresentacion.earth_date=element.earth_date
                        unaPresentacion.rover=element.rover.name
                        unaPresentacion.camera=element.camera.name                        
                    this.arrayPresentacionPhotos.push(unaPresentacion)})
                    if (this.arrayPresentacionPhotos.length!=0){
                      this.mostrarBarraEstado=true
                    }
                   // imprimirPhotos(arrayPresentacionPhotos) 
        })
        
}

}
};

</script>

<template> 

<top-bar />
 <main>
  <form-component @send-values="receiveValues" />

  <div class="contenedorDeFotos">
 <card-photo v-for="x in arrayPresentacionPhotos" :key="x.id"
 :id-photo="x.id"
 :img-src="x.imgSrc"
 :earth-date="x.earth_date"
 :rover-name="x.rover"
 :camera-name="x.camera" />   
  </div>
  <barra-estado :n-sol='this.sol' :n-photos='this.arrayPresentacionPhotos.length' v-show="mostrarBarraEstado" />
  </main>
</template>

<style scoped>

.contenedorDeFotos{
    display : flex ;
    flex-direction : column ;
    justify-content: center;
    
  place-items: center;
    justify-content:space-between;
    max-width: 95vw;
    margin: 20px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

}
</style>
