import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import {Manufacturer} from './manufacturer';
import { Basket } from './basket';

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
    id: number;

  @Column("varchar", {length: 25})
    name: string;

  @Column("int")
    cost: number;

  @ManyToOne(() => Manufacturer, m => m.products)
  manufacturer: Manufacturer;

  @ManyToOne(() => Basket, b => b.products)
  basket: Basket;
}
