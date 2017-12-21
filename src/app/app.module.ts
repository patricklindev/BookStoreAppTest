import { AdminAuthGuard } from './admin-auth-guard.service';
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
import { AuthGuard } from './auth-guard.service';
import { BookFormComponent } from './admin/book-form/book-form.component';
import { CategoryService } from './services/category.service';
// import { IUserLogin, ITokenApiResponse, ICategory, Book } from './shared/interfaces';

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
    LoginComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'books', component: BooksComponent },
      { path: 'login', component: LoginComponent },
      { path: 'shoppingcart', component: ShoppingCartComponent },

      { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path: 'ordersuccess', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },

      { path: 'admin/books/new', component: BookFormComponent, canActivate: [AuthGuard, AdminAuthGuard]  },
      { path: 'admin/books', component: AdminBooksComponent, canActivate: [AuthGuard, AdminAuthGuard]  },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard] }
    ])

  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
