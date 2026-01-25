import { Server, Model, Factory } from "miragejs";
import { faker } from '@faker-js/faker';
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
          return faker.person.fullName();
        },
        avatarUrl(i) {
          let c = i % 2 ? "men" : "women";
          return `https://randomuser.me/api/portraits/${c}/${i}.jpg`;
        },
        title() {
          return faker.person.jobTitle();
        },
      }),
    },

    seeds(server) {
      server.createList("user", 25);
    },

    routes() {
      this.post("/account/login", (schema) => {
        const token = faker.internet.jwt({
          payload: {
            name: 'Redon',
            lastName: 'Alla',
            email: 'redon.alla@gmail.com',
            username: 'RedonAlla',
            role: UserRole.SuperAdmin
          }
        });

        console.log('TOKEN: ', token)

        return token;
      });
    },
  });

  return server;
}