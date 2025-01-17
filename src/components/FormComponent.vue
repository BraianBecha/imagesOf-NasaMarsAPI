<template>

    <div id="formInit">

      <div>
        <form id="form1" @submit.prevent="enviarDatos">
            <div>
            <ul>
              <li>
                <label for="key">License key is needed:    </label>
                <input v-model="licenseKey" id="key" type="text" value="{{this.licenseKey}}"/>  <button @:click="colocarDemoKey('DEMO_KEY')">use Demo-key</button>
                
              </li>              
              <li>
                <label for="martianDate">Martian day of Mission (Sol)</label>
                <input v-model="sol" type="number" id="martianDate" name="sol"  min="1" />  
                <h5>*There might be some days that they don't record photos</h5>
              </li>
              <li>
                <p>Misson:</p>
                <div class="select">
                   
                        <input v-model="rover" type="radio" name="rover" value="spirit" >Spirit 
                     
                        <input v-model="rover" type="radio" name="rover" value="opportunity">Opportunity
                     
                        <input v-model="rover" type="radio" name="rover" value="curiosity" >Curiosity
                                              
                        <input v-model="rover" type="radio" name="rover" value="perseverance">Perseverance 
                      
                       
                      
                </div>
                
                <button class="botonSubmit"  @click="sendValues" type="submit" name="Submit">See photos</button>
              </li>                             
            </ul>
           
        
        </div>
          </form>
        </div>          
          
    </div>


    
    <div id="optionsInit">
      <p><a href="https://api.nasa.gov/#Scout" target="_blank">Get my own license</a></p>
      
      
    </div>
  
</template>


<script>
console.log("funciona FormComponent")
export default { 
  data(){
    return{
      licenseKey : "" ,
      sol : null ,
      

    }
  },
  emits: ['send-values'],
  methods:{

    sendValues(){
      this.$emit('send-values', this.rover, this.sol , this.licenseKey)
    },
    colocarDemoKey(x){
    this.licenseKey=x

    console.log(`colocarDemoKey() ${x}`)
}
  } 
}

</script>
<style>

@import '/src/assets/base.css';


#optionsInit{
  margin-left: 5%;
  margin-right: 5%;
}

#form1{
    display: flex;
    flex-direction: column;
    max-width: 500px;
    border-color: var(--color-border);
    border-radius: 15px;
    margin: 20px;
    padding: 20px;
}

#form1 button{    
    border-radius: 5px;
    margin: 5px;
}
#form1 .select{
    display: flex;
    flex-direction: row;    
    justify-content: space-between;

}
#formInit{
  display: flex;
  justify-content: center;
  margin: 5%;
}

button{
    background-color: var(--violeta);
    color: var(--claro);    
    border-radius: 10px;
    padding: 7px;
    margin: 3px;
}

ol{
   
   display: flex;
   flex-direction: column;
   justify-content: center;

  
}
li{
  
   border: 2px solid var(--color-border-hover);
   border-radius: 10px ;
   padding: 10px;
   list-style: none;
   background-color: var(--claro);
}


ul {
   list-style: none;
}

</style>
  