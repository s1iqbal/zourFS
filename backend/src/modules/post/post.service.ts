import {
  HttpException,
  Injectable,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../../entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async create(
    createPostDto: CreatePostDto,
  ): Promise<PostEntity> {
    const postData =
      await this.postRepository.create(
        createPostDto,
      );
    return this.postRepository.save(postData);
  }

  async findAll(): Promise<PostEntity[]> {
    return await this.postRepository.find();
  }

  async findOne(id: number): Promise<PostEntity> {
    const postData =
      await this.postRepository.findOneBy({ id });
    if (!postData) {
      throw new HttpException(
        'Post Not Found',
        404,
      );
    }
    return postData;
  }

  async update(
    id: number,
    updatePostDto: UpdatePostDto,
  ): Promise<PostEntity> {
    const existingPost = await this.findOne(id);
    const postData = this.postRepository.merge(
      existingPost,
      updatePostDto,
    );
    return await this.postRepository.save(
      postData,
    );
  }

  async remove(id: number): Promise<PostEntity> {
    const existingPost = await this.findOne(id);
    return await this.postRepository.remove(
      existingPost,
    );
  }
}