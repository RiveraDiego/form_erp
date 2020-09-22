<template>
  <div class="col col-md-3 mx-auto formulario">
    <h2>Log in</h2>
    <form @submit.prevent="toApiModel()">
      <p class="text-danger">{{msg}}</p>
      <div class="form-group text-left">
        <label for="exampleInputEmail1">Username</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="request_body.user"
        />
      </div>
      <div class="form-group text-left">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          v-model="request_body.password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "LoginComponent",
  data() {
    return {
      request_body: {
        user: "demo1",
        password: "via1234",
        deviceId: "35B22BAE-44DE-49FC-B057",
        deviceName: "Test-35B22BAE-44DE-49FC-B057-F1A90309C845",
        deviceOS: "iOS",
        deviceOSVersion: "2.0",
        appVersion: "13.3",
        appId: "1",
      },
      msg: "",
      url: "http://localhost:8080/apiModel",
      response_data: {
        api_token: "",
        code: null,
        description: "",
        endpoint: "",
        token: "",
      },
    };
  },
  methods: {
    toApiModel() {
      axios
        .post(this.url, this.request_body)
        .then((response) => {
          this.response_data.api_token = response.data[0].api_token;
          this.response_data.code = response.data[0].code;
          this.response_data.description = response.data[0].descripcion;
          this.response_data.endpoint = response.data[0].endpoint;
          this.response_data.token = response.data[0].token;

          var _endpoint = this.response_data.endpoint;
          var __endpoint = _endpoint.replace("http://", "");

          this.$router.push(
            "/results/" + this.response_data.api_token + "/" + __endpoint
          );
        })
        .catch((error) => {
          console.log(this.request_body);
          this.msg = "Ocurrió un error. Ver consola.";
          console.log(error);
        });
    },
  },
};
</script>