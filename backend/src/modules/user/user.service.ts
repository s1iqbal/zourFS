import {
  HttpException,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(
    createUserDto: CreateUserDto,
  ): Promise<UserEntity> {
    const userData =
      await this.userRepository.create(
        createUserDto,
      );
    return this.userRepository.save(userData);
  }

  async findAll(): Promise<UserEntity[]> {
    // Do not return password column with the select option
    return await this.userRepository.find({
      comment: "Get all users",
      select: ["id", "username", "email", "fullName"]
    });
  }

  async findOne(id: number): Promise<UserEntity> {
    const userData = await this.userRepository.findOneBy({ id });
    delete userData.password;
    if (!userData) {
      throw new HttpException(
        'User Not Found',
        404,
      );
    }
    return userData;
  }

  async findOneByUsername(username: string): Promise<UserEntity> {
    const userData = await this.userRepository.findOneBy({ username });
    if (!userData) {
      throw new HttpException(
        'User Not Found',
        404,
      );
    }
    return userData;
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const existingUser = await this.findOne(id);
    const userData = this.userRepository.merge(
      existingUser,
      updateUserDto,
    );
    return await this.userRepository.save(
      userData,
    );
  }

  async remove(id: number): Promise<UserEntity> {
    const existingUser = await this.findOne(id);
    return await this.userRepository.remove(
      existingUser,
    );
  }
}