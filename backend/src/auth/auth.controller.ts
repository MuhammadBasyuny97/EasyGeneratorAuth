import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body() signUpDto: SignUpDto,
  ): Promise<{ success: boolean; token: string; message?: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(
    @Body() loginDto: LoginDto,
  ): Promise<{ success: boolean; token: string; message?: string }> {
    return this.authService.login(loginDto);
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }
}
