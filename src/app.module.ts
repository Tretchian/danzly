import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { getPostgresConfig } from './configs/postgres.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StudioModule } from './studio/studio.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: getPostgresConfig,
    inject: [ConfigService],
  }),
    UserModule,
    AuthModule,
    StudioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
