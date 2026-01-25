import { Server, Model, Factory } from "miragejs";
import { faker } from '@faker-js/faker';
import { UserRole } from "@/core/models/LoginUser";
import { Endpoints } from "@/core/constants/HttpCalls";

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
      // this.namespace = Endpoints.baseUri;
      // this.urlPrefix = Endpoints.baseUri;

      this.post("/account/login", (schema) => {
        return faker.internet.jwt({
          payload: {
            name: 'Redon',
            lastName: 'Alla',
            email: 'redon.alla@gmail.com',
            username: 'RedonAlla',
            role: UserRole.SuperAdmin,
            exp: '2025-12-12T00:00:00.000Z'
          }
        });
      });
    },
  });

  return server;
}