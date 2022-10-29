// const character = {
//   name: "Rick",
//   specie: "Human",
//   description: "Male - Alive",
//   img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
// };

const app = Vue.createApp({
  data() {
    return {
      characters: [],
      favorites: []
    };
  },
  created() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        this.characters = data.results;
      });
  },
  computed: {
    info() {
      return `${this.character.gender} - ${this.character.status}`;
    }
  },
  methods: {
    addFavorite(id) {
      this.favorites.push(id);
    },
    removeFavorite(id) {
      this.favorites = this.favorites.filter((e) => e !== id);
    },
    onFavorites(id) {
      return this.favorites.includes(id);
    }
  }
});
