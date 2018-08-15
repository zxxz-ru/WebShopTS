import { Connection, EntityManager } from 'typeorm';
import { User } from '../entity/user';
import { Profile } from '../entity/profile';

export class User_Profile {
readonly users = [
{ login: 'eingahCo', password: '8g!3XD8a' },
{ login: 'WooGhioX', password: '@{ZD*dZ9' },
{ login: 'oobaduHo', password: 'X<8LDj5z' },
{ login: 'auyekohT', password: '&\<D(:0u' },
{ login: 'ChoohoZu', password: 'ReJK6(2r' },
{ login: 'ueChohsh', password: 'zP+k+0U(' },
{ login: 'ahShooVa', password: ';461K}b4' },
{ login: 'Yibohdis', password: 'v}^K+l9|' },
{ login: 'GeepeeMe', password: '6>OHe:Yq' },
{ login: 'xieGohth', password: 'IMr4_Ids' },  
{ login: 'Phohgooz', password: '&VdJM3cP' }, 
{ login: 'Eenaniep', password: '&1\U9Shg' },
{ login: 'faeceeCe', password: 's*JU6ah0' },
{ login: 'Pohzapho', password: 'Hqf=De{8' },
{ login: 'Oepaesiu', password: 'A1L0tOS5' },
{ login: 'eePeithi', password: '~8hfK7P6' },
{ login: 'baiNaica', password: ']VLh^|7D' },
{ login: 'iiXeiwie', password: '}CO-+2@g' }
];
readonly profiles = [
{ firstName: 'Ed', lastName : 'Chase', age: 33 },
{ firstName: 'Jennifer', lastName : 'Davis', age: 37 },
{ firstName: 'Johnny', lastName : 'Lollobrigida', age: 79 },
{ firstName: 'Bette', lastName : 'Nicholson', age: 33 },
{ firstName: 'Grace', lastName : 'Mostel', age: 35 },
{ firstName: 'Matthew', lastName : 'Johansson', age: 67 },
{ firstName: 'Joe', lastName : 'Swank', age: 32 },
{ firstName: 'Christian', lastName : 'Gable', age: 71 },
{ firstName: 'Zero', lastName : 'Cage', age: 78 },
{ firstName: 'Karl', lastName : 'Berry', age: 72 },
{ firstName: 'Uma', lastName : 'Wood', age: 36 },
{ firstName: 'Vivien', lastName : 'Bergen', age: 26 },
{ firstName: 'Cuba', lastName : 'Olivier', age: 64 },
{ firstName: 'Fred', lastName : 'Costner', age: 20 },
{ firstName: 'Helen', lastName : 'Voight', age: 26 },
{ firstName: 'Dan', lastName : 'Torn', age: 79 },
{ firstName: 'Bob', lastName : 'Fawcett', age: 18 },
{ firstName: 'Lucille', lastName : 'Tracy', age: 59 }
];

constructor(private conn: Connection){};
async saveUserProfile() {
    let length: number;
    this.users.length == this.profiles.length ? length = this.users.length :
    this.users.length < this.profiles.length ? length = this.users.length :
    length = this.profiles.length;    
    const manager = this.conn.manager;

    for ( let i = 0; i < length; i++ ) {
        const user = new User();
        user.login = this.users[i].login;
        user.password = this.users[i].password;
        const profile = new Profile();
        profile.firstName = this.profiles[i].firstName;
        profile.lastName = this.profiles[i].lastName;
        profile.age = this.profiles[i].age;
        profile.id = i + 1;
        manager.save(user);
        manager.save(profile);
    }

   console.log(`${length} entities saved to user-profile.`); 
}
}