import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 移除除了在DTO中指定的入参外的其他参数
      transform: true, // 将来源入参调整为DTO类的实例对象，目的是啥？
    }),
  )
  await app.listen(3000)
}

bootstrap()
