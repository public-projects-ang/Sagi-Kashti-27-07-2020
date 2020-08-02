import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MainHeaderComponent } from './main-header/main-header.component';

import {AutoCompleteModule} from 'primeng/autocomplete';
import {ToastModule} from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import {TabMenuModule} from 'primeng/tabmenu';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { CardModule, } from 'primeng/card';

import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { locationsReducerFunc } from './shared/ngrx/reducers/locations.reducer';
import { LocationsEffects } from './shared/ngrx/effects/locations.effects';
import { SelectedWeatherComponent } from './selected-weather/selected-weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { CardComponent } from './card/card.component';
import {ButtonModule} from 'primeng/button';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    MainHeaderComponent,
    SearchComponent,
    SelectedWeatherComponent,
    ForecastComponent,
    CardComponent,
    FavoriteCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MessageModule,
    TabMenuModule,
    AppRoutingModule,
    AutoCompleteModule,
    HttpClientModule,
    KeyFilterModule,
    ToggleButtonModule,
    ButtonModule,
    CardModule,
    StoreModule.forRoot({ LocationState: locationsReducerFunc }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([LocationsEffects, MessageService]),
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
