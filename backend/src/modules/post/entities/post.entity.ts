import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity("posts")
  // export class PostEntity {
  //   @PrimaryGeneratedColumn()
  //   id: number;
  
  //   @Column()
  //   fullName: string;
  
  //   @Column({ unique: true })
  //   email: string;
  // }
  export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    user_id: number;
    
    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    is_deleted: boolean;
  }