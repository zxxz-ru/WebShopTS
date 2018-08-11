import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import {Manufacturer} from './manufacturer';

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

}
