<template>
  <div class="container">
    <ImageCards v-bind:data="data"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageCards from '@/components/ImageCards.vue'

export default {
  name: 'home',
  components: {
    ImageCards
    
  },
  data(){
    return {
      data : [{
        image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Presiden_Sukarno.jpg",
        name: 'Soekarno'
      },
      {
        image: "https://images.tempo.co/?id=528628&width=720",
        name: 'Abraham Lincoln'
      },{
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
        name: 'Albert Einstein'
      },{
        image: "https://www.sahistory.org.za/sites/default/files/bio_pics/nelson_rolihlahla_mandela.jpg",
        name: 'Nelson Mandela'
      },{
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Bundesarchiv_Bild_183-S33882%2C_Adolf_Hitler_retouched.jpg/230px-Bundesarchiv_Bild_183-S33882%2C_Adolf_Hitler_retouched.jpg",
        name: "Adolf Hitler"

      },{
         image: "https://cdn.britannica.com/s:300x300/17/5017-004-3754A6AC.jpg",
         name: "James Watt"
      },{
        image: "https://ichef.bbci.co.uk/news/304/media/images/70159000/jpg/_70159327_napoleoncleaned.jpg",
        name: "Napoleon Bonaparte"
      }]

    }
  }
}
</script>
