<template>
  <div>
    <h1>{{thisRoom.name}}</h1>
    <ul>
      <li v-for="(player,index) in thisRoom.players">{{player.name}}</li>
      
    </ul>
     <a v-if="thisRoom.players[0].name==username" href="" class="btn btn-info">REaDY</a> 
  </div>
  
</template>
<script>
import db from "@/api/firebaseAPI";
export default {
  data() {
    return {
      thisRoom: {},
      myPoint: 0,
      username : localStorage.username
    };
  },
  created() {
    db.collection("rooms")
      .doc(this.$route.params.id)
      .onSnapshot(
        doc => {
          console.log(doc.data());

          this.thisRoom = doc.data();
        },
        err => {
          console.log(err);
        }
      );
  }
};
</script>
