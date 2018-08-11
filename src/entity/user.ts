import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Profile } from './profile';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
    id: number;

  @Column("varchar", {length: 25})
    login: string;

  @Column("varchar", {length: 25})
    password: string;

  @OneToOne(() => Profile, p => p.user)
  @JoinColumn()
  profile : Profile;


}
