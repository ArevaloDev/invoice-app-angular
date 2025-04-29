import { Client } from "./client.interface";
import { Company } from "./company.interface";
import { Item } from "./item.interface";

export interface Invoice{
  id:number;
  name:string;
  client:Client;
  company:Company;
  items:Item[];
  total?:number;

}
