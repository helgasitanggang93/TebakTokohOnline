<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card" style="width:400px">
            <form v-on:submit.prevent="next">
              <img class="card-img-top" :src="data[counter].image" alt="Card image">
              <label for="email">Siapakah tokoh Diatas:</label>
              <input v-model="answer" type="text" class="form-control">
              <button type="submit">Next</button>
            </form>
          </div>
        </div>
        <div class="col">
          <h3>{{score}}</h3>
          <ul>
            <li v-for="(player,index) in this.thisRoom.players">{{player.name}} : {{player.score}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        console.log("salah");
        this.score--;
      }

      this.answer = "";
    }
  }
};
</script>

