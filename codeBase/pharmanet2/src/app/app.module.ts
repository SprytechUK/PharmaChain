/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ProductComponent } from './Product/Product.component';

import { ManufacturerComponent } from './Manufacturer/Manufacturer.component';
import { DistributorComponent } from './Distributor/Distributor.component';
import { RetailerComponent } from './Retailer/Retailer.component';
import { AdminComponent } from './Admin/Admin.component';

import { MoveProductComponent } from './MoveProduct/MoveProduct.component';
import { VeiwParticipantsComponent } from './veiw-participants/veiw-participants.component';
import { SidebarManufacturerComponent } from './sidebar-manufacturer/sidebar-manufacturer.component';
import { ViewDistributorComponent } from './view-distributor/view-distributor.component';
import { ViewRetailerComponent } from './view-retailer/view-retailer.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SidebarDistributorComponent } from './sidebar-distributor/sidebar-distributor.component';
import { SidebarRetailerComponent } from './sidebar-retailer/sidebar-retailer.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { HeaderComponent } from './header/header.component';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ManufacturerComponent,
    DistributorComponent,
    RetailerComponent,
    AdminComponent,
    MoveProductComponent,
    VeiwParticipantsComponent,
    SidebarManufacturerComponent,
    ViewDistributorComponent,
    ViewRetailerComponent,
    SidebarAdminComponent,
    ViewAdminComponent,
    ViewProductComponent,
    SidebarDistributorComponent,
    SidebarRetailerComponent,
    AllTransactionsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
