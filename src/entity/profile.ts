import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user';

@Entity()
export class Profile {

  @PrimaryGeneratedColumn()
    id: number;

  @Column("varchar", {length: 25})
    firstName: string;

  @Column("varchar", {length: 25})
    lastName: string;

  @Column("int")
    age: number;

  @Column("varchar", {length: 250})
    photo: string;

  @OneToOne(() => User, u => u.profile)
  @JoinColumn()
    user: User;
}
