import { createStore } from "vuex";
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
          image:
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e61cab6c8d61313a06_1.png",

          title: "About me",
          link: "learn more",
        },
        {
          id: 2,

          image:
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e6e7345f8606c14439_2.png",

          title: "My products",
          link: "learn more",
        },
        {
          id: 3,

          image:
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e6b7abc54c782f11a0_3.png",

          title: "Contact me",
          link: "learn more",
        },
      ],
      products: [
        {
          id: 1,

          image:
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fee8179853822e2c85c0_p-1%2019.48.27.jpg",
          title: "Plated Cushion",
          price: 19.19,
          des: "Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas. with optimal networks.",
          shipping:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",

          images_details: [
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fee8179853822e2c85c0_p-1%2019.48.27.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9ff975a7df30e1a5caa20_p1-2.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9ffa2e46cb9bdb81b6c8b_p1-3.jpg",
          ],
          related_products: [
            {
              id: 1,
              title: "Plated Cushion",
              price: 19.19,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fee8179853822e2c85c0_p-1%2019.48.27-p-500.jpeg",
            },
            {
              id: 2,
              title: "Silver Cushion",
              price: 25.5,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2-p-500.jpeg",
            },
            {
              id: 3,
              title: "Deep Blue Cushion",
              price: 85.5,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e347b51929d41cefee85_p-3-p-500.jpeg",
            },
          ],
        },
        {
          id: 2,

          image:
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",
          title: "Silver Cushion",
          price: 19.19,
          des: "Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas. with optimal networks.",
          shipping:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",

          images_details: [
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fea32d95ef225ba4280c_p2-2.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fea64c7562efc069dc35_p2-3.jpg",
          ],
          related_products: [
            {
              id: 1,
              title: "Plated Cushion",
              price: 19.19,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fee8179853822e2c85c0_p-1%2019.48.27-p-500.jpeg",
            },
            {
              id: 2,
              title: "Silver Cushion",
              price: 25.5,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2-p-500.jpeg",
            },
            {
              id: 3,
              title: "Deep Blue Cushion",
              price: 85.5,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e347b51929d41cefee85_p-3-p-500.jpeg",
            },
          ],
        },
        {
          id: 3,

          image:
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e347b51929d41cefee85_p-3.jpg",
          title: "Deep Blue Cushion",
          price: 19.19,
          des: "Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas. with optimal networks.",
          shipping:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",

          images_details: [
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e347b51929d41cefee85_p-3.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fdb92d95ef70cda424b9_p3-2.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fdbe2d95ef037fa424be_p3-3.jpg",
          ],
          related_products: [
            {
              id: 1,
              title: "Plated Cushion",
              price: 19.19,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fee8179853822e2c85c0_p-1%2019.48.27-p-500.jpeg",
            },
            {
              id: 2,
              title: "Silver Cushion",
              price: 25.5,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2-p-500.jpeg",
            },
            {
              id: 3,
              title: "Deep Blue Cushion",
              price: 85.5,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e347b51929d41cefee85_p-3-p-500.jpeg",
            },
          ],
        },
        {
          id: 4,
          image:
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",
          title: "Pink Cushion",
          price: 19.19,
          des: "Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas. with optimal networks.",
          shipping:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",

          images_details: [
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fcd52d4d5f9eacbcc8e6_p4-2.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fcd8179853e5952c841d_p4-3.jpg",
          ],
          related_products: [
            {
              id: 1,
              title: "Plated Cushion",
              price: 19.19,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fee8179853822e2c85c0_p-1%2019.48.27-p-500.jpeg",
            },
            {
              id: 2,
              title: "Silver Cushion",
              price: 25.5,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2-p-500.jpeg",
            },
            {
              id: 3,
              title: "Deep Blue Cushion",
              price: 85.5,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e347b51929d41cefee85_p-3-p-500.jpeg",
            },
          ],
        },
        {
          id: 5,

          image:
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e2e0f03b7d5cc10349cc_p-5.jpg",
          title: "Black Cushion",
          price: 19.19,
          des: "Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas. with optimal networks.",
          shipping:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
          images_details: [
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fbd75062a0da83955050_p5-2.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fbdb4c7562231769d99a_p5-3.jpg",
          ],
          related_products: [
            {
              id: 1,
              title: "Plated Cushion",
              price: 19.19,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fee8179853822e2c85c0_p-1%2019.48.27-p-500.jpeg",
            },
            {
              id: 2,
              title: "Silver Cushion",
              price: 25.5,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2-p-500.jpeg",
            },
            {
              id: 3,
              title: "Deep Blue Cushion",
              price: 85.5,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e347b51929d41cefee85_p-3-p-500.jpeg",
            },
          ],
        },
        {
          id: 6,

          image:
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e2a838042158384fff20_p-6.jpg",

          title: "Green Cushion",
          price: 19.19,
          des: "Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas. with optimal networks.",
          shipping:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",

          images_details: [
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e2a838042158384fff20_p-6.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9faac4c7562d76869d90b_p6-2.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fab05062a08546954eba_p6-3.jpg",
          ],
          related_products: [
            {
              id: 1,
              title: "Plated Cushion",
              price: 19.19,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd9fee8179853822e2c85c0_p-1%2019.48.27-p-500.jpeg",
            },
            {
              id: 2,
              title: "Silver Cushion",
              price: 25.5,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2-p-500.jpeg",
            },
            {
              id: 3,
              title: "Deep Blue Cushion",
              price: 85.5,
              image:
                "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e347b51929d41cefee85_p-3-p-500.jpeg",
            },
          ],
        },
      ],
    };
  },
  mutations: {},
  actions() {},

  getters: {
    products(state) {
      return state.products;
    },
    elementPage(state) {
      return state.elementPage;
    },
  },
});

export default store;
