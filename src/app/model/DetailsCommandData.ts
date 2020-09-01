import {ProductData} from './ProductData';
import {CommandData} from './CommandData';

export class DetailsCommandData {
  public id: string;
  public quantite: string;
  public montant: string;
  public produit: ProductData;
  public commandes: CommandData;
}
