import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

faker.seed(123);

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      product: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("product");
    },

    seeds(server) {
      [...Array(30)].forEach((_) => {
        server.create("product", {
          id: faker.random.uuid(),
          name: faker.commerce.productName(),
          image: faker.random.image(),
          price: faker.commerce.price(),
          discount: faker.random.arrayElement([10, 30, 40]),
          inStock: faker.random.boolean(),
          ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
          fastDelivery: faker.random.boolean(),
          brand: faker.random.arrayElement([
            "Maybelline", 
            "M.A.C",
            "Lakme",
            "L'Oreal Paris"
           ]),
          category: faker.random.arrayElement([ 
            "Eyes",
            "Face",
            "Lips",
            "Brushes"
          ]),
          special: faker.random.arrayElement([
            null,
            "New",
            "Bestseller"
          ]),
          offer: faker.random.arrayElement([
            "Super Saver",
            "Buy 1 Get 1",
            "Diwali Sale"
          ])
        });
      });
    }
  });
}
