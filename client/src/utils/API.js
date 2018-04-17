import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  randomize: function(query) {
    return axios.get("/api/random", { params: { q: query } });
  },
  saveFriend: function(obj) {
    return axios.post("/api/store", obj);
  }
};
