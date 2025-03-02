import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleRepository } from './repositories/UserRoleRepository';
import { UserRole } from './entities/user_role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,UserRole])],
  controllers: [UserController],
  providers: [UserService,UserRoleRepository],
  exports:[UserService,UserRoleRepository]
})
export class UserModule {}
