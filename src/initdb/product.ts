import { Connection, EntityManager } from 'typeorm';
import { Product } from '../entity/product';

export class ProductInit {

readonly products = [
{ name: 'product#1', cost : 12321.321, id: 1 },
{ name: 'product#2', cost : 1.23213, id: 1 },
{ name: 'product#3', cost : 1232, id: 10 },
{ name: 'product#4', cost : 12321.8, id: 2 },
{ name: 'product#5', cost : 21321.89, id: 3 },
{ name: 'product#6', cost : 1321.99, id: 4 },
{ name: 'product#7', cost : 1231.1, id: 5 },
{ name: 'product#8', cost : 12.00, id: 6 },
{ name: 'product#9', cost : 32.99, id: 7 },
{ name: 'product#10', cost : 21.5, id: 7 },
{ name: 'product#11', cost : 123211, id: 7 },
{ name: 'product#12', cost : 12, id: 8 },
{ name: 'product#13', cost : 1, id: 9 },
{ name: 'product#14', cost : 124213.7, id: 1 },
{ name: 'product#15', cost : 123213.29, id: 9 },
{ name: 'product#16', cost : 1232.49, id: 9 },
{ name: 'product#17', cost : 1232.12, id: 10 },
{ name: 'product#18', cost : 1232.13, id: 3 },
{ name: 'product#19', cost : 12.3, id: 10 }
];

constructor(private conn: Connection){};
async save() {
    const manager = this.conn.manager;

    for ( let i = 0; i < this.products.length; i++ ) {
        const p = new Product();
        p.name = this.products[i].name;
        p.cost = this.products[i].cost;
        p.manufacturerId = this.products[i].id;
        manager.save(p);
    }

   console.log(`${this.products.length} entities saved to product table.`); 
}
}

