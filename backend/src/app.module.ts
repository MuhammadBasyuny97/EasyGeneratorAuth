import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 5 * 1000,
        limit: 5,
      },
      {
        name: 'medium',
        ttl: 10 * 1000,
        limit: 20,
      },
      {
        name: 'long',
        ttl: 60 * 1000,
        limit: 100,
      },
    ]),
    ConfigModule.forRoot({
      envFilePath: `.env`, //`.env.${process.env.NODE_ENV}`
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    BookModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
