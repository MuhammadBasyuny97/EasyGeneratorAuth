import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(
    signUpDto: SignUpDto,
  ): Promise<{ success: boolean; token: string; message?: string }> {
    const { name, email, password, role } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const existingUser = await this.userModel.findOne({ email });

      if (existingUser) {
        return {
          token: null,
          success: false,
          message: 'Duplicate Email Entered',
        };
      }
      const user = await this.userModel.create({
        name,
        email,
        password: hashedPassword,
        role,
      });

      const token = this.jwtService.sign({ id: user._id });
      console.log('token', token);

      return { token, success: true, message: 'User registered successfully' };
    } catch (error) {
      throw new ConflictException('Duplicate Email Entered');
    }
  }

  async login(
    loginDto: LoginDto,
  ): Promise<{ success: boolean; token: string; message?: string }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });
    try {
      if (!user) {
        return {
          token: null,
          success: false,
          message: 'User not found, Please Register',
        };
      }

      const isPasswordMatched = await bcrypt.compare(password, user.password);

      if (!isPasswordMatched) {
        return {
          token: null,
          success: false,
          message: 'Invalid Password',
        };
      }

      const token = this.jwtService.sign({ id: user._id });

      return { token, success: true, message: 'User logged in successfully' };
    } catch (error) {
      throw new UnauthorizedException('Invalid email or password');
    }
  }

  async logout(): Promise<{ message: string }> {
    return { message: 'Logged out successfully, please login again' };
  }
}
