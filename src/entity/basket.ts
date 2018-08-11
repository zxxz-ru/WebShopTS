import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Basket {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    userId: number;

  @Column()
    productId: number;

  @Column()
    quantity: number;


}
