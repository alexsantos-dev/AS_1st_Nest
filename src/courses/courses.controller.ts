import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return 'registros:';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `registro encontrado: ${id}`;
  }
  @Post()
  create(@Body() body: object) {
    return body;
  }
  @Patch(':id')
  update(@Param('id') id: string) {
    return `registro atualizado ${id}`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `registro deletado: ${id}`;
  }
}
