import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { PostEntity } from "../../modules/post/entities/post.entity";
import { faker } from '@faker-js/faker';
export class generatePosts72876222322703 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable('posts');
        
        if (!tableExists) {
            await queryRunner.createTable(new Table({
                name: 'posts',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'content',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'date',
                    },
                    {
                        name: 'updated_at',
                        type: 'date',
                    },
                    {
                        name: 'deleted_at',
                        type: 'date',
                    },
                    {
                        name: 'is_deleted',
                        type: 'boolean',
                    },
                ],
            }), true);
        }

        const postRepository = queryRunner.manager.getRepository(PostEntity);

        for(let i = 0; i < 10; i++) {
            const post = postRepository.create({
                user_id: faker.number.int({ min: 1, max: 10}),
                title: faker.lorem.words({ min: 4, max: 10}),
                content: faker.lorem.words({ min: 10, max: 30}),
                created_at: new Date('Jul 12 2011'),
                updated_at: new Date('Jul 12 2011'),
                deleted_at: new Date('Jul 12 2011'),
                is_deleted: false
            });
            await postRepository.save(post);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable('posts');
        
        if (tableExists) {
            await queryRunner.dropTable('posts');
        }
    }
}