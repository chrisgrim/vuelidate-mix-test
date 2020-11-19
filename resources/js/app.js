import Vue from 'vue';
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

Vue.component('vue-create-title', () => import(/* webpackChunkName: "assets/ct" */ './title.vue'));


if(document.getElementById("create")){
    const create = new Vue({
        el: '#create',
    });
}