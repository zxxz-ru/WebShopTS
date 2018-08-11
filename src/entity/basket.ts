import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product';

@Entity()
export class Basket {

  @PrimaryGeneratedColumn()
    id: number;

  @OneToMany(() => Product, p => p.basket)
    products: Product[];

}
