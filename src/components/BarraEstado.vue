
<script>
  export default {
    props: [
      'nPhotos',
      'nSol'
    ]
  }
</script>
  <template>
    <div id="barraEstado">{{nPhotos || 0 }} photos recorded in {{ nSol || 0}} Sol </div>
  </template>


  <style scoped>

#barraEstado{
    background-color: #F90011;
    color: #fffbf4;
    border-radius: 15px;
    max-width: 300px;
    max-height: 100px;
    margin: 10px;
    padding: 10px;
    position: fixed;
    bottom: 50px;
    right: 20px;
}
</style>