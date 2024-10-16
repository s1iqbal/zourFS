import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcrypt');
//STORE THE SALT ROUND AS AN ENVIRONMENT VARIABLE
const saltRounds = 10;
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByUsername(username);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    const compare = await bcrypt.compare(pass, user?.password);
    if (compare) {
      const payload = { sub: user.id, username: user.username };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new HttpException('Incorrect Credentials', HttpStatus.UNAUTHORIZED);
    }
   
  }

  async register(
    fullName: string,
    username: string,
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByUsername(username);
    if (user) {
      console.log('User already exists');
      throw new UnauthorizedException();
    }
    try {
      const hash = await bcrypt.hash(password, saltRounds);
      const newUser = await this.usersService.create({
        email: email,
        fullName: fullName,
        username: username,
        password: hash,
      });
      console.log('New user created');
      console.log(newUser);
      const payload = { sub: newUser.id, username: newUser.username };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (err) {
      console.error('Error hashing password:', err);
      throw new UnauthorizedException();
    }
  }
}