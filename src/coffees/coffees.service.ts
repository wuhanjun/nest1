import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { Coffee } from './entities/coffee.entity'

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'moka',
      brand: 'xbk',
      flavors: [],
    },
  ]

  findOne(id: number) {
    const item = this.coffees.find((item) => item.id === +id)
    if (!item) {
      throw new BadRequestException(`coffee ${id} not found`)
    }

    return item
  }

  findAll() {
    return this.coffees
  }

  update(id: string, body: Partial<Coffee>) {
    return body
    // const item = this.coffees.find((item) => item.id === +id)
    // if (item) {
    //   // xxx
    // }
  }

  delete(id: string) {
    this.coffees = this.coffees.filter((item) => item.id !== +id)
  }

  // 如何处理创建时的类型？
  create(createCoffeeDto: Coffee) {
    this.coffees.push(createCoffeeDto)

    return this.coffees
  }
}
