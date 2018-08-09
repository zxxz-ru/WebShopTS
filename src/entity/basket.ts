import { Entity, OneToMany } from 'typeorm';
import { Product } from './product';

@Entity()
export class Basket {

  @OneToMany(() => Product, p => p.basket)
    products: Product[];

}
