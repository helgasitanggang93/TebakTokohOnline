import Vue from "vue";
import Vuex from "vuex";
import db from "@/api/firebaseAPI"
import router from './router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rooms: [],
    currentRoomId: '',
    currentPlayer: '',
    myRoom: {}
  },
  mutations: {
    register(state, playerName) {
      state.currentPlayer = playerName
    },
    getRooms(state, data) {
      state.rooms = data
      if (localStorage.getItem('idRoom')) {
        let room = state.rooms.find(room => room.id === localStorage.getItem('idRoom'))
        state.myRoom = room
      }
    }

  },
  actions: {
    getAllRoom(context) {
      db.collection('rooms')
        .orderBy('createdAt')
        .onSnapshot((docs) => {
          const data = []
          docs.forEach(element => {
            const info = element.data()
            info.id = element.id
            data.push(info)
          });
          context.commit('getRooms', data)
        }, (err) => {
          console.log(err)
        })
    },
    createRoom(context, roomName) {
      db.collection('rooms')
        .add({
          name: roomName,
          players: [{ name: localStorage.getItem('username'), score: 0 }],
          winner: '',
          createdAt: new Date(),
          status:false
        })
        .then((docs) => {
          console.log(docs)
          localStorage.setItem('idRoom', docs._key.path.segments[1])
          router.push(`/waiting/${docs._key.path.segments[1]}`)
          context.dispatch('getAllRoom')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    joinRoom(context, roomId) {
      let newPlayers = []
      const room = context.state.rooms.find(room => room.id === roomId)
      newPlayers = room.players
      if (newPlayers.length < 3) {
        newPlayers.push({ name: context.state.currentPlayer, score: 0 })
        db.collection('rooms')
        .doc(roomId)
        .update({
          players: newPlayers,
        })
        .then(() => {
          context.dispatch('getAllRoom')
          console.log(roomId,'=====================')
          router.push(`/waiting/${roomId}`)
        })
        .catch((err) => {
          console.log(err)
        })
      } else {
        console.log('maaf sudah penuh')
      }     
    }
  }
});
