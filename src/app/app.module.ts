import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/components/product/product.component";
import { ProductsComponent } from "./product/components/products/products.component";
import { ContactComponent } from "./contact/contact.component";
import { DemoComponent } from "./demo/demo.component";
import { SharedModule } from "./shared/shared.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductDetailComponent } from "./product/components/product-detail/product-detail.component";
import { LayoutComponent } from "./layout/layout.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    LayoutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
