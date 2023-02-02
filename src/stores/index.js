import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      sliderimg: [

        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8a753b7abc549d52f2255_noah-buscher-1118080-unsplash.jpg",
        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd90a8aef82dc5918248baa_cushion.jpg",

      ],
      elementPage: [
        {
          id: 1,
          image: "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e61cab6c8d61313a06_1.png",


          title: "About me",
          link: "learn more",
        },
        {
          id: 2,


          image: ("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e6e7345f8606c14439_2.png"),


          title: "My products",
          link: "learn more",
        },
        {
          id: 3,

          image: "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e6b7abc54c782f11a0_3.png",

          title: "Contact me",
          link: "learn more",
        },
      ],
      products: [
        {
          id: 1,

          image: "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fee8179853822e2c85c0_p-1%2019.48.27.jpg",

          title: "Plated Cushion",
          price: 19.19,
        },
        {
          id: 2,


          image: "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",


          title: "Silver Cushion",
          price: 19.19,
        },
        {
          id: 3,


          image: "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e347b51929d41cefee85_p-3.jpg",


          title: "Deep Blue Cushion",
          price: 19.19,
        },
        {
          id: 4,
          image: "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",




          price: 19.19,
        },
        {
          id: 5,


          image: "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e2e0f03b7d5cc10349cc_p-5.jpg",


          title: "Black Cushion",
          price: 19.19,
        },
        {
          id: 6,


          image: "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e2a838042158384fff20_p-6.jpg",

          title: "Green Cushion",
          price: 19.19,
        },
      ],
    };
  },
  mutations: {},
  actions() {},

  getters: {
    products(state){
      return state.products
    }
  },
});

export default store;
