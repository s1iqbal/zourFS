import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { UserEntity } from "../../entities/user.entity";
import { faker } from '@faker-js/faker';
export class generateUsers1722876222302703 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable('users');
        
        if (!tableExists) {
            await queryRunner.createTable(new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'fullName',
                        type: 'varchar',
                    },
                    {
                        name: 'username',
                        type: 'varchar',
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                ],
            }), true);
        }

        const userRepository = queryRunner.manager.getRepository(UserEntity);

        for(let i = 0; i < 10; i++) {
            const user = userRepository.create({
                email: faker.internet.email(),
                fullName: faker.person.fullName(),
                username: faker.internet.userName(),
                password: faker.internet.password(),
            });
            await userRepository.save(user);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable('users');
        
        if (tableExists) {
            await queryRunner.dropTable('users');
        }
    }
}