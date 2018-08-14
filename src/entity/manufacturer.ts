import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './product';

@Entity()
export class Manufacturer {

  @PrimaryGeneratedColumn()
    id: number;

  @Column("varchar", {length: 25})
    name: string;

  @Column("varchar", {length: 400})
    address: string;


  @OneToMany(() => Product, product => product.manufacturer)
    products: Product[];
}
