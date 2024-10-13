import { de } from '@faker-js/faker/.';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
    IsEmail,
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  // create-post-dto
  export class CreatePostDto {
    @ApiProperty({
        description: 'User ID of the post',
        example: '1',
      })
    user_id: number;
    
    @ApiProperty({
        description: 'Title of the post',
        example: 'Post Title',
      })
    @IsString()
    @IsNotEmpty()
    title: string;
    
    
    @ApiProperty({
        description: 'Content of the post',
        example: 'Post Content',
      })
    @IsDate()
    @IsNotEmpty()
    content: string;

    @ApiProperty({
        description: 'Created date of the post',
        example: '2021-09-21T00:00:00.000Z',
      })
    @IsDate()
    created_at: Date;
    
    @ApiProperty({
        description: 'Updated date of the post',
        example: '2021-09-21T00:00:00.000Z',
      })
    @IsDate()
    updated_at: Date;


    @ApiProperty({
        description: 'Deleted date of the post',
        example: '2021-09-21T00:00:00.000Z',
      })
    @IsDate()
    deleted_at: Date;
    
    @ApiProperty({
        description: 'Is deleted or not',
        example: 'false',
      })
    @IsBoolean()
    is_deleted: boolean;
  }
  