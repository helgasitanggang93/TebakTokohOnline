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
        image: "https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest?cb=20170621101134",
        name: 'Naruto'
      },{
        image: "https://i.pinimg.com/originals/77/20/c4/7720c4e73a3c44332458a4f3c93724ec.jpg",
        name: 'Sasuke'
      },{
        image: "https://i.pinimg.com/originals/05/d6/c3/05d6c3b5a880a7ab8bb37a09e48a4995.jpg",
        name: 'Sakura'
      }]

    }
  }
}
</script>
