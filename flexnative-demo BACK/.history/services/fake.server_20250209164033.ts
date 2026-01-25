import { Server, Model, Factory } from "miragejs";
import faker from "faker";
import { UserRole } from "@/core/models/LoginUser";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model,
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.findName();
        },
        avatarUrl(i) {
          let c = i % 2 ? "men" : "women";
          return `https://randomuser.me/api/portraits/${c}/${i}.jpg`;
        },
        title() {
          return faker.name.title();
        },
      }),
    },

    seeds(server) {
      server.createList("user", 25);
    },

    routes() {
      this.get("/account/login", (schema) => {
        return {
          name: 'Redon',
          lastName: 'Alla',
          email: 'redon.alla@gmail.com',
          username: 'RedonAlla',
          role: UserRole.SuperAdmin
        };
      });
    },
  });

  return server;
}