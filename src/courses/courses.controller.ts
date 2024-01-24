import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'registros:';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `registro encontrado: ${id}`;
  }
  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `registro atualizado ${id}`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `registro deletado: ${id}`;
  }
}
