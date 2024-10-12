import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";

export class generateUsers1728762230703 implements MigrationInterface {
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
                ],
            }), true);
        }

        const userRepository = queryRunner.manager.getRepository(UserEntity);

        const user = userRepository.create({
            email: 'example@example.com',
            fullName: 'John Doe'
        });

        await userRepository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable('users');
        
        if (tableExists) {
            await queryRunner.dropTable('users');
        }
    }
}