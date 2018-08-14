import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Basket } from './basket';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
    id: number;

  @Column("varchar", {length: 25})
    login: string;

  @Column("varchar", {length: 25})
    password: string;

  @OneToMany(() => Basket, basket => basket.user)
  baskets: Basket[];
}