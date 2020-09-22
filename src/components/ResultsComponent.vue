<template>
  <div>
    <h1>Resultados</h1>
    <div class="text-left">
      <pre>{{results}}</pre>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ResultsComponent",
  mounted() {
    this.api_token = this.$route.params.api_token;
    this.endpoint = this.$route.params.endpoint;
    this.getBomDocuments(this.api_token, this.endpoint);
  },
  data() {
    return {
      api_token: null,
      endpoint: null,
      results: null,
    };
  },
  methods: {
    getBomDocuments(api_token, endpoint) {
      console.log(endpoint);
      axios
        .get("http://localhost:8080/erpNext", {
          headers: { Authorization: "token " + api_token },
        })
        .then((response) => {
          console.log(response);
          this.results = response.data;
        })
        .catch((error) => {
          this.results = error;
          console.log(error);
        });
    },
  },
};
</script>