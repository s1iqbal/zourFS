# Zour Backend Template
## NestJS/Postgres/TypeORM


NESTJS backend with Postgres Database, migrations with TypeORM, and makes use of a REST API model.


## Features

- JWT Authentication with SSO support for Google
- Migrations for creating and deleting tables with dummy data.
- Typescript and typesafety with eloquent objects when running query runners.

## Tech

Backend uses a number of open source projects to work properly:

- [NestJS] - HTML enhanced for web apps!
- [Postgres] - awesome web-based text editor
- [Docker] - Markdown parser done right. Fast and easy to extend.
- [TypeORM] - great UI boilerplate for modern web apps
- [Typescript] - evented I/O for the backend


## Installation


Install the dependencies and devDependencies and start the server.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


Ensure that you have a postgres database running. The compose file can be found in ../db and can be run with 
```bash
$ docker compose up
```

## Database Migrations
With the config file defined at ""./src/config/typeorm.ts", the migrations are listed under: "src/database/migrations/*-migration.ts"

This means that when the command below is ran, it will scan the folder for files ending with -migration.ts in the folder "src/database/migrations/" and run up function for run, and down function for revert.

```bash
$ npm run migration:generate 
$ npm run migration:create
$ npm run migration:run
$ npm run migration:revert

```

## Swagger API

Visit localhost:3000/api to see the binded swagger UI

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources
- [NestJS Documentation](https://docs.nestjs.com) 

## Stay in touch
- Author - [Saad Iqbal](https://github.com/s1iqbal)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

