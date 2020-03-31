import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.hyperledger_composer.scms{
   export class Product extends Asset {
      productId: string;
      productName: string;
      ProductSize: string;
      owner: Participant;
   }
   export class Manufacturer extends Participant {
      email: string;
      firstName: string;
      lastName: string;
      type: string;
   }
   export class Distributor extends Participant {
      email: string;
      firstName: string;
      lastName: string;
      type: string;
   }
   export class Retailer extends Participant {
      email: string;
      firstName: string;
      lastName: string;
      type: string;
   }
   export class Admin extends Participant {
      email: string;
      firstName: string;
      lastName: string;
      type: string;
   }
   export class MoveProduct extends Transaction {
      product: Product;
      newOwner: Participant;
   }
// }
