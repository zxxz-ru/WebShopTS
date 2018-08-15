import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import {Manufacturer} from './manufacturer';
import {Item} from './item';

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
    id: number;

  @Column("varchar", {length: 25})
    name: string;

  @Column("numeric")
    cost: number;

  @Column()
    manufacturerId: number;

  @ManyToOne(() => Manufacturer, m => m.products)
  manufacturer: Manufacturer;

  @OneToMany(() => Item , item => item.product)
  items: Item[];

}
