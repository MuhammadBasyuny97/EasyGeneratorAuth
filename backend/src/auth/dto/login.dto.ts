import { IsEmail, IsNotEmpty, IsString, MinLength, Matches } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
    @IsEmail({}, { message: "Invalid email format" })
    readonly email: string;
  
  
    
    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]).{8,}$/, {
      message:
        'Password must contain at least one letter, one number, and one special character',
    })
    readonly password: string;
}
