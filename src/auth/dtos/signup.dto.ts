import { IsStrongPassword, IsEmail } from 'class-validator'

export class SignupDto {
  @IsEmail()
  email: string

  @IsStrongPassword()
  password: string
}
