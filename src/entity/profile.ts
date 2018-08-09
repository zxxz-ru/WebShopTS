
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Profile {

  @PrimaryGeneratedColumn("int")
    id: number;

  @Column("varchar", {length: 25})
    firstName: string;

  @Column("varchar", {length: 25})
    lastName: string;

  @Column("int")
    age: number;

  @Column("varchar", {length: 250})
    photo: string;
}
