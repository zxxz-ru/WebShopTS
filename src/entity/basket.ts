import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from './user';
import { Item } from './item';

@Entity()
export class Basket {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    userId: number;

  @Column("timestamp")
    date: Date;

  @Column()
    status: number;

  @OneToMany(() => Item, item => item.basket )
    items: Item[];

  @ManyToOne(() => User, user => user.basket)
    users: User[];
}