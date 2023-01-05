import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SecondTodoComponent } from './components/second-todo/second-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SecondTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
