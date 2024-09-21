import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() body: any, @UploadedFile() jsonFile: Express.Multer.File) {
    const jsonData = JSON.parse(jsonFile.buffer.toString());
    return this.cartService.create(jsonData);
  }

  @Get()
  get() {
    return this.cartService.get();
  }

  @Delete()
  delete() {
    return this.cartService.delete();
  }
}
