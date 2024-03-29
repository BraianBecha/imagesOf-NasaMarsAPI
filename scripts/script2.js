let photos = []
let linkServicio ="https://api.nasa.gov/mars-photos/api/v1/rovers/"
let linkConsulta=""
let rover =""
let sol=0;
const form = document.getElementById("form1");


let arrayPresentacionPhotos = [];
let stringImgElement=""
let innerFotos = document.getElementById("contenedorDeFotos")
let presentacionFoto ={id:0 , imgSrc:"" , earth_date:"" , rover:"" , camera :"" }






 function verLasFotos(){ 
    
         photos.forEach(element => { let unaPresentacion=Object.create(presentacionFoto)
                        unaPresentacion.id=element.id
                        unaPresentacion.imgSrc=element.img_src
                        unaPresentacion.earth_date=element.earth_date
                        unaPresentacion.rover=element.rover.name
                        unaPresentacion.camera=element.camera.name
                    arrayPresentacionPhotos.push(unaPresentacion)})
                    imprimirPhotos(arrayPresentacionPhotos)
            
       
};

 function imprimirPhotos(x){   
   x.forEach((x) => {stringImgElement=stringImgElement.concat(`<div class="tarjetaFoto">
   <img src="${x.imgSrc}" alt="">
   <div class="listaDescriptiva">
   <ol>
       <li>Id: ${x.id}</li>
       <li>Earth date: ${x.earth_date}</li>
       <li>Rover name: ${x.rover}</li>
       <li>Camera: ${x.camera}</li>
   </ol>
   </div>
</div>`)})
console.log(`las fotos enviadas a html son: ${x.length}`)
   innerFotos.innerHTML=stringImgElement

};
  


                 
                            function visible(etiqueta, q) {
                                try {
                                       switch (q) {
                                       case 'Class':
                                               {
                                                   let divs = document.getElementsByClassName(etiqueta);
                                                    for (let i = 0; i < divs.length; i++) {
                                                   divs[i].style.visibility = 'visible';
                                               }
                                      break;
                                                      }
                                      case "Id":
                                                      {
                                                       let div = document.getElementById(etiqueta);
                                                       if (div) {
                                                          div.style.visibility = 'visible';
                                                                 }
                                      break;
                                              }
                                             }
                               } catch (error) {
                                         console.log(`No se pudo mostrar el elemento ${etiqueta} (${q}): ${error.message}`);
                                               }
                                      }


                    
  function oculto(etiqueta, q) {
              try {
                     switch (q) {
                     case 'Class':
                             {
                                 let divs = document.getElementsByClassName(etiqueta);
                                  for (let i = 0; i < divs.length; i++) {
                                 divs[i].style.visibility = 'hidden';
                             }
                    break;
                                    }
                    case "Id":
                                    {
                                     let div = document.getElementById(etiqueta);
                                     if (div) {
                                        div.style.visibility = 'hidden';
                                               }
                    break;
                            }
                           }
             } catch (error) {
                       console.log(`No se pudo ocultar el elemento ${etiqueta} (${q}): ${error.message}`);
                             }
                    }



form.addEventListener("submit", onFormSubmit);

async function onFormSubmit() {
	event.preventDefault();
	const data = new FormData(form);
    linkConsulta=crearLinkConsulta(data.get('rover'),data.get('sol'),data.get('licenseKey'))
    console.log(linkConsulta)
    await buscarFotos(linkConsulta)
    console.log("onFormSubmit")
    window.open("./index.html")

}

function colocarDemoKey(){
    let element = document.getElementById("key")    
    element.value = "DEMO_KEY"
    console.log("colocarDemoKey()")
}

function crearLinkConsulta(x,y,z){    
    let link=linkServicio.concat(`${x}/photos?sol=${y}&api_key=${z}`)
    console.log(`en crearLinkConsulta() link es ${link}`)
    return link
    
}



async function buscarFotos(x){

await  fetch(x)
.then(z=>z.json())
        .then((y)=> {console.log(`y es ${y}`)
        photos=y.photos
        localStorage.setItem('arrayPhotosLS', JSON.stringify(photos));
        })
        /*.then(imprimirPhotos())*/
}

function imprimirBarraEstado(){
    let innerBarraEstado = document.getElementById("barraEstado")
    innerBarraEstado.innerHTML=`${photos.length} images `
}


function generarNombre(x){
let string =""
string=string.concat(`${x.rover.name}_${x.camera.name}_${x.earth_date.tostring()}_${x.id.tostring()}`)
return string;

}