import { IdxData } from './idx-data';

// IdxData
export interface Location {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: IdxData;
  AdministrativeArea: IdxData;
}
