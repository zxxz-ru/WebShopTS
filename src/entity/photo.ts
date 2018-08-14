import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Profile } from './profile';

@Entity()
export class Photo {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
   name: string; 

  @Column()
   url: string; 

  @Column()
   profileId: number; 

  @ManyToOne(() => Profile, profile => profile.photos )
    profile: Profile;
}


