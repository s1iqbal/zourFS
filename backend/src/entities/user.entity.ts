import { Exclude } from 'class-transformer';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity("users")
  export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    fullName: string;
    
    @Column()
    username: string;

    @Column()
    @Exclude()
    password: string;

    @Column({ unique: true })
    email: string;
  }