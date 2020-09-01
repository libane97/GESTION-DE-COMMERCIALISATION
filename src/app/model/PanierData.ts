import {ItemProduct} from './ItemProduct';
import {UserData} from './UserData';

export class PanierData{
  constructor(name:string){this.name=name;}
  public name:string;
  public items:Map<number,ItemProduct>=new Map();
  public user:UserData;
}
