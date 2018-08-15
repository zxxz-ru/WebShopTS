import { Connection, EntityManager } from 'typeorm';
import { Manufacturer } from '../entity/manufacturer';

export class ManufacturerInit {

readonly manufacturers = [
{ name: 'plant#1', address : 'Russia, Moscow, podwal u Ashota' },
{ name: 'plant#2', address : 'Russia, Moscow, zil' },
{ name: 'plant#3', address : 'Russia, Moscow, azlk' },
{ name: 'plant#4', address : 'Russia, Moscow, podwal' },
{ name: 'plant#5', address : 'Russia, Moscow, sharaz' },
{ name: 'plant#6', address : 'Russia, Moscow, garazi' },
{ name: 'plant#7', address : 'Russia, Moscow' },
{ name: 'plant#8', address : 'Russia, Moscow, post box 24242214' },
{ name: 'plant#9', address : 'Russia, Moscow, Hamovniky' },
{ name: 'plant#10', address : 'Russia, Moscow, Rjabinovaj St. 13' }
];

constructor(private conn: Connection){};
async save() {
    const manager = this.conn.manager;

    for ( let i = 0; i < this.manufacturers.length; i++ ) {
        const m = new Manufacturer();
        m.name = this.manufacturers[i].name;
        m.address = this.manufacturers[i].address;
        manager.save(m);
    }

   console.log(`${this.manufacturers.length} entities saved to manufacturer table.`); 
}
}
