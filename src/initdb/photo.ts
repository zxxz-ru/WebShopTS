import { Connection, EntityManager } from 'typeorm';
import { Photo } from '../entity/photo';

export class PhotoInit {

readonly photos = [
{ name: 'bakery', url : 'https://cdn.stocksnap.io/img-thumbs/960w/ZAG3KUMDTW.jpg', prid: 1 },
{ name: 'windsor', url : 'https://thumb7.shutterstock.com/display_pic_with_logo/176509728/1028528137/stock-photo-long-walk-to-windsor-castle-in-spring-london-suburbs-uk-1028528137.jpg', prid: 2 },
{ name: 'newschwanstien', url : 'https://image.shutterstock.com/z/stock-photo-beautiful-view-of-world-famous-neuschwanstein-castle-the-nineteenth-century-romanesque-revival-614535680.jpg', prid: 3 },
{ name: 'windsor 2', url : 'https://thumb1.shutterstock.com/display_pic_with_logo/176509728/1011533713/stock-photo-alley-to-windsor-castle-in-spring-london-suburbs-uk-1011533713.jpg', prid: 4 },
{ name: 'hutton', url : 'https://www.shutterstock.com/image-photo/hutton-forest-skelton-cumbria-england-436205128', prid: 5 },
{ name: 'lednice', url : 'https://www.shutterstock.com/image-photo/castle-lednice-czech-republic-europe-unesco-677334976', prid:  6},
{ name: 'hluboka', url : 'https://www.shutterstock.com/image-photo/castle-hluboka-nad-vltavou-czech-republic-57184795', prid: 7 },
{ name: 'neuschanstein2', url : 'https://www.shutterstock.com/image-photo/neuschwanstein-medieval-castle-germany-bavaria-land-726354187?irgwc=1&utm_medium=Affiliate&utm_campaign=Elevated%20Logic%2C%20LLC&utm_source=426523&utm_term=STOCKSNAP_SEARCH-NORMAL_API', prid: 8 }, 
{ name: 'img 1', url : '/img-1/1.jpg', prid: 9 },
{ name: 'img 2', url : '/img-1/12.jpg', prid: 10 },
{ name: 'img 3', url : '/img-1/13.jpg', prid: 11 },
{ name: 'img 4', url : '/img-1/14.jpg', prid: 12 },
{ name: 'img 5', url : '/img-1/15.jpg', prid: 12 },
{ name: 'img 6', url : '/img-1/16.jpg', prid: 13 },
{ name: 'img 7', url : '/img-1/17.jpg', prid:  13 },
{ name: 'img 8', url : '/img-1/18.jpg', prid: 14 },
{ name: 'img 9', url : '/img-1/189.jpg', prid: 15 },
{ name: 'img 21', url : '/img-1/110.jpg', prid: 16 },
{ name: 'img 22', url : '/img-1/11.jpg', prid: 16 },
{ name: 'img 23', url : '/img-1/1121.jpg', prid: 16 },
{ name: 'img 24', url : '/img-1/1133.jpg', prid: 17 },
{ name: 'img 25', url : '/img-1/100.jpg', prid: 18},
{ name: 'img 26', url : '/img-1/1002.jpg', prid:  6 }
];

constructor(private conn: Connection){};
async save() {
    const manager = this.conn.manager;

    for ( let i = 0; i < this.photos.length; i++ ) {
        const ph = new Photo();
        ph.name = this.photos[i].name;
        ph.url = this.photos[i].url;
        ph.profileId = this.photos[i].prid;
        manager.save(ph);
    }

   console.log(`${this.photos.length} entities saved to photo table.`); 
}
}