import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      sliderimg: [
<<<<<<< HEAD
        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8a753b7abc549d52f2255_noah-buscher-1118080-unsplash.jpg",
        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd90a8aef82dc5918248baa_cushion.jpg",
=======
        ("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8a753b7abc549d52f2255_noah-buscher-1118080-unsplash.jpg"),
        ("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd90a8aef82dc5918248baa_cushion.jpg"),
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
      ],
      elementPage: [
        {
          id: 1,
<<<<<<< HEAD
          image: "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e61cab6c8d61313a06_1.png",
=======
          image: ("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e61cab6c8d61313a06_1.png"),
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
          title: "About me",
          link: "learn more",
        },
        {
          id: 2,
<<<<<<< HEAD
          image: "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e6e7345f8606c14439_2.png",
=======
          image: ("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e6e7345f8606c14439_2.png"),
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
          title: "My products",
          link: "learn more",
        },
        {
          id: 3,
<<<<<<< HEAD
          image: "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e6b7abc54c782f11a0_3.png",
=======
          image: ("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e6b7abc54c782f11a0_3.png"),
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
          title: "Contact me",
          link: "learn more",
        },
      ],
      products: [
        {
          id: 1,
<<<<<<< HEAD
          image: "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fee8179853822e2c85c0_p-1%2019.48.27.jpg",
=======
          image: ("https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fee8179853822e2c85c0_p-1%2019.48.27.jpg"),
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
          title: "Plated Cushion",
          price: 19.19,
        },
        {
          id: 2,
<<<<<<< HEAD
          image: "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",
=======
          image: ("https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg"),
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
          title: "Silver Cushion",
          price: 19.19,
        },
        {
          id: 3,
<<<<<<< HEAD
          image: "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e347b51929d41cefee85_p-3.jpg",
=======
          image: ("https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e347b51929d41cefee85_p-3.jpg"),
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
          title: "Deep Blue Cushion",
          price: 19.19,
        },
        {
          id: 4,
<<<<<<< HEAD
          image: "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",
=======
          image: ("https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg"),
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
          title: "Pink Cushion",
          price: 19.19,
        },
        {
          id: 5,
<<<<<<< HEAD
          image: "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e2e0f03b7d5cc10349cc_p-5.jpg",
=======
          image: ("https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e2e0f03b7d5cc10349cc_p-5.jpg"),
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
          title: "Black Cushion",
          price: 19.19,
        },
        {
          id: 6,
<<<<<<< HEAD
          image: "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e2a838042158384fff20_p-6.jpg",
=======
          image: ("https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e2a838042158384fff20_p-6.jpg"),
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
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
