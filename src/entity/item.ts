import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './product';
import { Basket } from './basket';

@Entity()
export class Item {

  @PrimaryGeneratedColumn()
    id: number;

  @Column("int")
    basketId: number;
    
  @Column("int")
    productId: number;

  @Column("int")
    quantity: number;

  @ManyToOne(() => Product, product => product.items )
    product: Product;

  @ManyToOne(() => Basket, basket => basket.items)
  basket: Basket;
}
