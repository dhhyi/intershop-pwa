import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { IconModule } from 'ish-core/icon.module';
import { FormsSharedModule } from '../forms/forms.module';

import { AddressFormDEComponent } from './components/address-form-de/address-form-de.component';
import { AddressFormDEFactory } from './components/address-form-de/address-form-de.factory';
import { AddressFormDefaultComponent } from './components/address-form-default/address-form-default.component';
import { AddressFormDefaultFactory } from './components/address-form-default/address-form-default.factory';
import { AddressFormFRComponent } from './components/address-form-fr/address-form-fr.component';
import { AddressFormFRFactory } from './components/address-form-fr/address-form-fr.factory';
import { AddressFormGBComponent } from './components/address-form-gb/address-form-gb.component';
import { AddressFormGBFactory } from './components/address-form-gb/address-form-gb.factory';
import { AddressFormUSComponent } from './components/address-form-us/address-form-us.component';
import { AddressFormUSFactory } from './components/address-form-us/address-form-us.factory';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { CustomerAddressFormComponent } from './components/customer-address-form/customer-address-form.component';
import { ADDRESS_FORM_FACTORY, AddressFormFactoryProvider } from './configurations/address-form-factory.provider';

const components = [
  AddressFormComponent,
  AddressFormDEComponent,
  AddressFormDefaultComponent,
  AddressFormFRComponent,
  AddressFormGBComponent,
  AddressFormUSComponent,
];

@NgModule({
  imports: [CommonModule, FormsSharedModule, IconModule, NgbPopoverModule, ReactiveFormsModule, TranslateModule],
  declarations: [...components, CustomerAddressFormComponent],
  exports: [...components, CustomerAddressFormComponent],
  providers: [
    AddressFormFactoryProvider,
    { provide: ADDRESS_FORM_FACTORY, useClass: AddressFormDefaultFactory, multi: true },
    { provide: ADDRESS_FORM_FACTORY, useClass: AddressFormDEFactory, multi: true },
    { provide: ADDRESS_FORM_FACTORY, useClass: AddressFormFRFactory, multi: true },
    { provide: ADDRESS_FORM_FACTORY, useClass: AddressFormGBFactory, multi: true },
    { provide: ADDRESS_FORM_FACTORY, useClass: AddressFormUSFactory, multi: true },
  ],
})
export class AddressFormsSharedModule {}