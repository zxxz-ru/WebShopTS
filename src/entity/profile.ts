import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Photo } from './photo';

@Entity()
export class Profile {

  @PrimaryColumn()
    id: number;

  @Column("varchar", {length: 25})
    firstName: string;

  @Column("varchar", {length: 25})
    lastName: string;

  @Column("int")
    age: number;

  @OneToMany(() => Photo, photo => photo.profile)
    photos: Photo[]; 
}
