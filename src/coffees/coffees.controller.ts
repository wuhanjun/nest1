import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common'
import { CoffeesService } from './coffees.service'
import { UpdateCoffeeDto } from './dto/update-coffee.dto'
import { CreateCoffeeDto } from './dto/create-coffee.dto'

@Controller('coffees') // 统一前缀coffees
export class CoffeesController {
  // 会生成一个CoffeesController的实例传入controller中
  // 为什么是private私有属性？？
  constructor(private readonly coffeesService: CoffeesService) {}
  // 注册get路由，并且匹配统一前缀'coffees/'
  @Get('/all1')
  findAll1(@Res() res) {
    // 直接用express api虽然方便，但是：
    // 1. nest框架已经封装好了很多操作，
    // 2. 如果切换底层框架，nest会抹平差异，
    // 3. 且框架最佳实践封装更好。
    return res.status(200).send('express api 直接指定返回数据')
  }

  @Get('/all')
  findAll2(@Query() filterQuery) {
    const { limit, offset } = filterQuery
    // 直接用express api虽然方便，但是：
    // 1. nest框架已经封装好了很多操作，
    // 2. 如果切换底层框架，nest会抹平差异，
    // 3. 且框架最佳实践封装更好。
    return this.coffeesService.findAll()
  }

  @Get(':id') // Param装饰器是路径参数
  findOne(@Param('id') id: number) {
    console.log(typeof id)
    const item = this.coffeesService.findOne(id)
    if (!item) {
      throw new NotFoundException('未找到')
    }

    return item
  }

  @Post('/create')
  @HttpCode(HttpStatus.BAD_REQUEST)
  // 如果@Body装饰器中指定参数名称，则validator不会验证其他参数
  create(@Body() body: CreateCoffeeDto) {
    console.log(body, body instanceof CreateCoffeeDto)
    return this.coffeesService.create(body)
  }

  @Patch([':id']) // 如何配置路径？
  update(@Param('id') id: string, @Body() body: UpdateCoffeeDto) {
    return this.coffeesService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coffeesService.delete(id)
  }
}
