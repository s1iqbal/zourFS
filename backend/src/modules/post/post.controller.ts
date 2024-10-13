import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts') //route group
export class PostController {
  constructor(
    private readonly postService: PostService,
  ) {}

  @Post()
  async create(
    @Body() createPostDto: CreatePostDto,
  ) {
    try {
      await this.postService.create(
        createPostDto,
      );

      return {
        success: true,
        message: 'Post Created Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get()
  async findAll() {
    try {
      const data =
        await this.postService.findAll();
      return {
        success: true,
        data,
        message: 'Post Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.postService.findOne(
        +id,
      );
      return {
        success: true,
        data,
        message: 'Post Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    try {
      await this.postService.update(
        +id,
        updatePostDto,
      );
      return {
        success: true,
        message: 'Post Updated Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.postService.remove(+id);
      return {
        success: true,
        message: 'Post Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
  
}