import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product';

@Entity()
export class Basket {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    quantity: number;

  @OneToMany(() => Product, p => p.basket)
    products: Product[];

}
