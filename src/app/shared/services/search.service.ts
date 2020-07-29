import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import {Location} from '../interfaces/location';
import {map, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // 5WQZn6KRKHepKjrGMjp8cZGlqEqIA7Hx
  // curl -X GET "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=5WQZn6KRKHepKjrGMjp8cZGlqEqIA7Hx&q=jerusal"
  key = 'DPU6SrzqEqDpmhqxFqECfj6a6O6GIzmI';
  mockListResB: Location[] = [
    {
      Version: 1,
      Key: '213225',
      Type: 'City',
      Rank: 30,
      LocalizedName: 'Jerusalem',
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel'
      },
      AdministrativeArea: {
        ID: 'JM',
        LocalizedName: 'Jerusalem'
      }
    },
    {
      Version: 1,
      Key: '250835',
      Type: 'City',
      Rank: 65,
      LocalizedName: 'Jerusalem',
      Country: {
        ID: 'NZ',
        LocalizedName: 'New Zealand'
      },
      AdministrativeArea: {
        ID: 'MWT',
        LocalizedName: 'Manawatu-Wanganui'
      }
    },
    {
      Version: 1,
      Key: '128752',
      Type: 'City',
      Rank: 65,
      LocalizedName: 'Jerusalen',
      Country: {
        ID: 'SV',
        LocalizedName: 'El Salvador'
      },
      AdministrativeArea: {
        ID: 'PA',
        LocalizedName: 'La Paz'
      }
    },
    {
      Version: 1,
      Key: '32864',
      Type: 'City',
      Rank: 75,
      LocalizedName: 'Jerusalen',
      Country: {
        ID: 'BO',
        LocalizedName: 'Bolivia'
      },
      AdministrativeArea: {
        ID: 'B',
        LocalizedName: 'El Beni'
      }
    },
    {
      Version: 1,
      Key: '221483',
      Type: 'City',
      Rank: 75,
      LocalizedName: 'Jerusalem',
      Country: {
        ID: 'JM',
        LocalizedName: 'Jamaica'
      },
      AdministrativeArea: {
        ID: '10',
        LocalizedName: 'Westmoreland'
      }
    },
    {
      Version: 1,
      Key: '2310187',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalém',
      Country: {
        ID: 'BR',
        LocalizedName: 'Brazil'
      },
      AdministrativeArea: {
        ID: 'MT',
        LocalizedName: 'Mato Grosso'
      }
    },
    {
      Version: 1,
      Key: '1376675',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      Country: {
        ID: 'CZ',
        LocalizedName: 'Czechia'
      },
      AdministrativeArea: {
        ID: '20',
        LocalizedName: 'Central Bohemian'
      }
    },
    {
      Version: 1,
      Key: '3537004',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      Country: {
        ID: 'IE',
        LocalizedName: 'Ireland'
      },
      AdministrativeArea: {
        ID: 'KE',
        LocalizedName: 'County Kildare'
      }
    },
    {
      Version: 1,
      Key: '1062987',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      Country: {
        ID: 'MX',
        LocalizedName: 'Mexico'
      },
      AdministrativeArea: {
        ID: 'DUR',
        LocalizedName: 'Durango'
      }
    },
    {
      Version: 1,
      Key: '2115414',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      Country: {
        ID: 'US',
        LocalizedName: 'United States'
      },
      AdministrativeArea: {
        ID: 'OH',
        LocalizedName: 'Ohio'
      }
    }
  ];

  mockListRes: Location[] = [
    {
      Version: 1,
      Key: '328328',
      Type: 'City',
      Rank: 10,
      LocalizedName: 'London',
      Country: {
        ID: 'GB',
        LocalizedName: 'United Kingdom'
      },
      AdministrativeArea: {
        ID: 'LND',
        LocalizedName: 'London'
      }
    },
    {
      Version: 1,
      Key: '44945',
      Type: 'City',
      Rank: 35,
      LocalizedName: 'Londrina',
      Country: {
        ID: 'BR',
        LocalizedName: 'Brazil'
      },
      AdministrativeArea: {
        ID: 'PR',
        LocalizedName: 'Paraná'
      }
    },
    {
      Version: 1,
      Key: '55489',
      Type: 'City',
      Rank: 35,
      LocalizedName: 'London',
      Country: {
        ID: 'CA',
        LocalizedName: 'Canada'
      },
      AdministrativeArea: {
        ID: 'ON',
        LocalizedName: 'Ontario'
      }
    },
    {
      Version: 1,
      Key: '329139',
      Type: 'City',
      Rank: 41,
      LocalizedName: 'Londonderry',
      Country: {
        ID: 'GB',
        LocalizedName: 'United Kingdom'
      },
      AdministrativeArea: {
        ID: 'DRS',
        LocalizedName: 'Derry City and Strabane'
      }
    },
    {
      Version: 1,
      Key: '31679',
      Type: 'City',
      Rank: 63,
      LocalizedName: 'Londerzeel',
      Country: {
        ID: 'BE',
        LocalizedName: 'Belgium'
      },
      AdministrativeArea: {
        ID: 'VBR',
        LocalizedName: 'Flemish Brabant'
      }
    },
    {
      Version: 1,
      Key: '2174076',
      Type: 'City',
      Rank: 65,
      LocalizedName: 'Londonderry',
      Country: {
        ID: 'US',
        LocalizedName: 'United States'
      },
      AdministrativeArea: {
        ID: 'NH',
        LocalizedName: 'New Hampshire'
      }
    },
    {
      Version: 1,
      Key: '2551',
      Type: 'City',
      Rank: 75,
      LocalizedName: 'Londengo',
      Country: {
        ID: 'AO',
        LocalizedName: 'Angola'
      },
      AdministrativeArea: {
        ID: 'BGU',
        LocalizedName: 'Benguela'
      }
    },
    {
      Version: 1,
      Key: '203973',
      Type: 'City',
      Rank: 75,
      LocalizedName: 'Londa',
      Country: {
        ID: 'IN',
        LocalizedName: 'India'
      },
      AdministrativeArea: {
        ID: 'KA',
        LocalizedName: 'Karnataka'
      }
    },
    {
      Version: 1,
      Key: '229017',
      Type: 'City',
      Rank: 75,
      LocalizedName: 'Londokomanana',
      Country: {
        ID: 'MG',
        LocalizedName: 'Madagascar'
      },
      AdministrativeArea: {
        ID: 'M',
        LocalizedName: 'Mahajanga'
      }
    },
    {
      Version: 1,
      Key: '258033',
      Type: 'City',
      Rank: 75,
      LocalizedName: 'Londol',
      Country: {
        ID: 'PG',
        LocalizedName: 'Papua New Guinea'
      },
      AdministrativeArea: {
        ID: 'EPW',
        LocalizedName: 'Enga'
      }
    }
  ];
  constructor(private http: HttpClient) { }
  getResults(input: string) {
    console.log(' getResults()  a ');
    console.log(' input = ');
    console.log(input);
    let params = new HttpParams().set('q', input);
    params = params.set('apikey', this.key);
    // tslint:disable-next-line: object-literal-shorthand
    // return this.http.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete`, { params: params })
    // .pipe(
    //   tap(  (res: Location[]) => {
    //     console.log('@@@@@@@@@@@@@@@@@@@@ res s = ');
    //     console.log(res);
    //   })
    // );
    // console.log(' this.mockListRes = ');
    // console.log(this.mockListRes);
    return of(this.mockListRes);
  }
}
