import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { IncomeComponent } from './components/income/income.component';
import {MatButtonModule} from '@angular/material/button';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InsightsComponent } from './components/insights/insights.component';
import { StretchcardsComponent } from './components/stretchcards/stretchcards.component';
import { ProgressCardComponent } from './components/progress-card/progress-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    InsightsComponent,
    DashboardComponent,
    IncomeComponent,
    ExpensesComponent,
    CategoriesComponent,
    SidebarComponent,
    StretchcardsComponent,
    ProgressCardComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbProgressbarModule,
    NgbModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent, DashboardComponent, IncomeComponent]
})
export class AppModule { }
