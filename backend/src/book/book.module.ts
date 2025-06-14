import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookSchema } from './schemas/book.schema';
import { ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
  ],
  controllers: [BookController],
  providers: [BookService, { provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class BookModule {}
