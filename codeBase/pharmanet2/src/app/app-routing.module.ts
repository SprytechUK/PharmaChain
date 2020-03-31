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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

import { ProductComponent } from './Product/Product.component';

import { ManufacturerComponent } from './Manufacturer/Manufacturer.component';
import { DistributorComponent } from './Distributor/Distributor.component';
import { RetailerComponent } from './Retailer/Retailer.component';
import { AdminComponent } from './Admin/Admin.component';
import {SidebarManufacturerComponent } from './sidebar-manufacturer/sidebar-manufacturer.component';
import {SidebarAdminComponent} from './sidebar-admin/sidebar-admin.component';
import {SidebarDistributorComponent} from './sidebar-distributor/sidebar-distributor.component';
import {SidebarRetailerComponent} from './sidebar-retailer/sidebar-retailer.component';
import {MoveProductComponent} from './MoveProduct/MoveProduct.component';
import {VeiwParticipantsComponent} from './veiw-participants/veiw-participants.component';
import{ViewDistributorComponent} from './view-distributor/view-distributor.component';
import {ViewRetailerComponent} from './view-retailer/view-retailer.component';
import {ViewAdminComponent} from './view-admin/view-admin.component';
import{ViewProductComponent} from './view-product/view-product.component';
import {AllTransactionsComponent} from './all-transactions/all-transactions.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  { path: 'Product', component: ProductComponent },
  { path: 'Manufacturer', component: ManufacturerComponent },
  { path: 'Distributor', component: DistributorComponent },
  { path: 'Retailer', component: RetailerComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'MoveProduct', component: MoveProductComponent },
  { path: 'SidebarManufacturer', component: SidebarManufacturerComponent},
  { path:'SidebarAdmin', component:SidebarAdminComponent},
  { path:'ViewManufacturer',component:VeiwParticipantsComponent},
  {path:'ViewDistributor', component:ViewDistributorComponent},
  {path:'ViewRetailer', component:ViewRetailerComponent},
  {path:'ViewAdmin', component:ViewAdminComponent},
  {path:'ViewProduct', component:ViewProductComponent},
  {path:'SidebarDistributor', component:SidebarDistributorComponent},
  {path:'SidebarRetailer',component:SidebarRetailerComponent},
  {path:'Transactions', component:AllTransactionsComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
