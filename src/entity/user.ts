import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn("int")
    id: number;

  @Column("varchar", {length: 25})
    login: string;

  @Column("varchar", {length: 25})
    password: string;

}
