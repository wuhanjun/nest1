import { Module } from '@nestjs/common'
import { CoffeesController } from './coffees.controller'
import { CoffeesService } from './coffees.service'

@Module({
  controllers: [CoffeesController], // 在当前模块被实例化的controller
  providers: [CoffeesService], // 当前模块需要的，由Nest injector实例化的service
  exports: [], // 当前模块导出的module
  imports: [], // 可以导入的其他module
})
export class CoffeesModule {}

// DTO：数据传输对象，data transfer object，是一个对象，用于封装数据，并将其从一个应用程序传输到另一个应用程序
