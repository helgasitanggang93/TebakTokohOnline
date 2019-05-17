<template>
  <div>
    <div class="container">


        <div class="row">
            <div class="col">
                <div class="card" style="width:400px">
                    <div class="col">
                        <form v-on:submit.prevent='next'>
                        <img class="card-img-top img-fluid" :src="data[counter].image" alt="Card image">
                        <label> {{data[counter].hint}} </label><br>
                        <label>Siapakah tokoh Diatas?</label>
                     <input v-model="answer" type="text" class="form-control">
                     <button type="submit">Next</button>
                    </form>

                    </div>
                    
                </div>
            </div>
            <div class="col">
                <h3>
                    {{score}}
                </h3>
            </div>
        </div>
        <div class="col">
          <h3>{{score}}</h3>
          <ul>
            <li v-for="(player,index) in this.thisRoom.players" :key="index">{{player.name}} : {{player.score}}</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
let audio = new Audio('https://storage.googleapis.com/upload-mini-wp-photo/04%20All%20of%20Us.mp3');
audio.play();
import db from "@/api/firebaseAPI";
import { constants } from "crypto";
export default {
  props: ["data"],
  name: "image-cards",

  data() {
    return {
      counter: 0,
      answer: "",
      score: 0,
      thisRoom: ""
    };
  },
  created() {
    db.collection("rooms")
      .doc(this.$route.params.id)
      .onSnapshot(
        doc => {
          this.thisRoom = doc.data();
        },
        err => {
          console.log(err);
        }
      );
  },

  methods: {
    next() {
      console.log(this.answer);
      console.log(this.data[this.counter].name);
      if (this.answer === this.data[this.counter].name) {
        console.log("benar");
         let corSound = document.getElementById("audiocor")
                corSound.play()
                console.log('benar')

        this.score++;
        this.counter++;
        const newPlayers = this.thisRoom.players
        newPlayers.find((element)=>{
            if(element.name === localStorage.username){
                element.score = this.score
            }
        })

        db.collection('rooms')
        .doc(this.$route.params.id)
        .update({
            players:newPlayers
        })
        .then(()=>{
            console.log('success')
        })
        .catch((err)=>{
            console.log(err)
        })

        if (this.counter === this.data.length) {
          this.counter = 0;
        }
      } else {
        let sound = document.getElementById("audio")
                sound.play()
        console.log("salah");
        this.score--;
      }

      this.answer = "";
    }
  }
};
</script>

