<template>
  <div class="container">
    <ImageCards v-bind:data="data"/>

  </div>
</template>

<script>
// @ is an alias to /src

import ImageCards from "@/components/ImageCards.vue";

export default {
  name: "home",
  components: {
    ImageCards
  },
  
  data() {
    return {
      data : [{
        image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Presiden_Sukarno.jpg",
        hint: "Presiden Pertama Indonesia",
        name: 'soekarno'
      },
      {
        image: "https://images.tempo.co/?id=528628&width=720",
        hint: "Presiden Amerika ke 16 yang menghapuskan perbudakan",
        name: 'abraham lincoln'
      },{
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
        hint: "Pengemuka teori relativitas",
        name: 'albert einstein'
      },{
        image: "https://www.sahistory.org.za/sites/default/files/bio_pics/nelson_rolihlahla_mandela.jpg",
        hint: "Seorang revolusioner antiapartheid Afrika Selatan",
        name: 'nelson mandela'
      },{
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Bundesarchiv_Bild_183-S33882%2C_Adolf_Hitler_retouched.jpg/230px-Bundesarchiv_Bild_183-S33882%2C_Adolf_Hitler_retouched.jpg",
        hint: "Kanselir jerman 1933-1945 dan pemimpin nazi",
        name: "adolf hitler"

      },{
         image: "https://cdn.britannica.com/s:300x300/17/5017-004-3754A6AC.jpg",
         hint: "Penemu Mesin Uap",
         name: "james watt"
      },{
        image: "https://ichef.bbci.co.uk/news/304/media/images/70159000/jpg/_70159327_napoleoncleaned.jpg",
        hint : "Pemimpin perancis yang kalah di battle of waterloo",
        name:   "napoleon bonaparte"
      },{
         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Guglielmo_Marconi.jpg/220px-Guglielmo_Marconi.jpg",
         hint : "Penemu Radio",
         name: "guglielmo marconi"

      },{
        image: "https://www.sciencehistory.org/sites/default/files/styles/rte_full_width/public/historical_profile/bio-fleming-lab-bmsquibb.jpg?itok=Q8oC_HjC",
        hint: "Ilmuwan penemu penisilin",
        name: "alexander fleming"

      }],
       thisRoom:''

    }
  }

};
</script>
