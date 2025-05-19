import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/types';

@Injectable()
export class AuthService {
 constructor(
    private readonly userService: UserService, 
    private readonly jwtService: JwtService,
 ){}
    
async validateUser(email: string, password: string) {
  const user = await this.userService.findOne(email);
  if (!user) throw new UnauthorizedException('Неверный email или пароль');

  const isMatch = await argon2.verify(user.password, password);
  if (!isMatch) throw new UnauthorizedException('Неверный email или пароль');

  return user;
}


 async login(user: IUser) {
  const payload = { id: user.id, email: user.email};
  return {
    id: user.id,
    email: user.email,
    token: this.jwtService.sign(payload),
  };
}

}
