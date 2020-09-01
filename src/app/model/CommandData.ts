import {UserData} from './UserData';
import {ProductData} from './ProductData';

export class CommandData {
  public id: string;
  public dateCommande: string;
  public  dateCommandef:string;
  public numero: string;
  public livraison: string;
  public user: UserData;
  public produit: ProductData[]
}
