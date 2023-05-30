import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CoffeesService } from './coffees/coffees.service'
import { CoffeesController } from './coffees/coffees.controller'
import { CoffeesModule } from './coffees/coffees.module'

@Module({
  imports: [CoffeesModule],
  controllers: [AppController],
  providers: [AppService], // 在nest中，每个service都是一个provider(主要思想：可以注入依赖，通过给Controller constructor中声明类型实现)，
})
export class AppModule {}
