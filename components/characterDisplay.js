app.component("character-display", {
  template: `
  <div class="character-image">
          <img :src="character.image" alt="Profile image">
        </div>
        <div class="character-info" >
          <h1>{{name}}</h1>
          <h2>{{species}}</h2>
          <p>{{info}}</p>   
          <small v-if="gender === 'Male'" >Episodes that him appears {{nEpisodios}}</small> 
          <small v-else-if="gender === 'Female'" >Episodes that her appears {{nEpisodios}}</small> 
          <small v-else>Episodes that it appears {{nEpisodios}}</small> 
          <span v-if="!favorite" class="material-icons favorite" v-on:click="addFavorite" >star_border</span>
          <span class="material-icons favorite" >star</span>
        </div>
  `,
  props: {
    character: {
      type: Object,
      required: true,
    },
    favorite: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    info() {
      return `${this.character.gender} - ${this.character.status}`;
    },
    nEpisodios() {
      return this.character.episode?.length;
    },
    name() {
      return this.character.name;
    },
    species() {
      return this.character.species;
    },
  },
  methods: {
    addFavorite() {
      this.$emit("add-to-favorite", this.character.id);
    },
    removeToFavorite() {
      this.$emit("remove-to-favorite", this.character.id);
    }
  },
  emits: ["add-to-favorite", "remove-to-favorite"],
});
