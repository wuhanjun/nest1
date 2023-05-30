import { IsString } from 'class-validator'
// nest g class coffees/dto/create-coffee.dto ，为什么是class 而不是interface?
// 为什么要和entities分开？
export class CreateCoffeeDto {
  @IsString()
  readonly name: string

  @IsString()
  readonly brand: string

  @IsString({
    each: true,
  })
  readonly flavors: string[]
}

// 是怎么校验入参是数字/字符串的？
