import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SiteNavbarComponent } from './site-navbar/site-navbar.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminBooksComponent } from './admin/admin-books/admin-books.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SiteNavbarComponent,
    HomeComponent,
    BooksComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminBooksComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'books', component: BooksComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent },
      { path: 'order-success', component: OrderSuccessComponent },
      { path: 'my/orders', component: MyOrdersComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin/books', component: AdminBooksComponent },
      { path: 'admin/orders', component: AdminOrdersComponent }
    ])

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
