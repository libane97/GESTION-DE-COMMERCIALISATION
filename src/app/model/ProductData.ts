import {CategorieData} from './CategorieData';

export class ProductData {
 public id: string;
 public libelle: string;
 public description: string;
 public quantite: string ;
 public prix: string;
 public photo: string;
 public categorie: CategorieData;
}
