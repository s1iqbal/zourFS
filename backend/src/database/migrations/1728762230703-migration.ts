import { MigrationInterface, QueryRunner } from "typeorm";
import { UserEntity } from "../../user/entities/user.entity"; // Adjust the import path according to your project structure

export class generateUsers1728762230703 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const userRepository = queryRunner.manager.getRepository(UserEntity);

        const user = userRepository.create({
            email: 'example@example.com',
            fullName: 'John Doe'
        });

        await userRepository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const userRepository = queryRunner.manager.getRepository(UserEntity);

        await userRepository.delete({ email: 'example@example.com' });
    }
}