import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component'; 
import { ConnectedComponent } from './Components/connected/connected.component';
import { HeaderComponent } from './layout/header/header.component';
import { CallhistoryComponent } from './Components/callhistory/callhistory.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { IncomingcallComponent } from './Components/incomingcall/incomingcall.component';
import { CallhistoryemptyComponent } from './Components/callhistoryempty/callhistoryempty.component';
import { CallconnectedComponent } from './Components/callconnected/callconnected.component';
import { CallconnectedwhileonholdComponent } from './Components/callconnectedwhileonhold/callconnectedwhileonhold.component';
import { CallendedComponent } from './Components/callended/callended.component';
import { CallingComponent } from './Components/calling/calling.component';
import { CallingwhileonholdComponent } from './Components/callingwhileonhold/callingwhileonhold.component';
import { CallonholdComponent } from './Components/callonhold/callonhold.component';
import { CallonholdtransferconfirmationComponent } from './Components/callonholdtransferconfirmation/callonholdtransferconfirmation.component';
import { CallonholdwhileconnectedComponent } from './Components/callonholdwhileconnected/callonholdwhileconnected.component';
import { CalltransferconfirmationComponent } from './Components/calltransferconfirmation/calltransferconfirmation.component';
import { CalltransferedComponent } from './Components/calltransfered/calltransfered.component';
import { IncomingcalldialComponent } from './Components/incomingcalldial/incomingcalldial.component';
import { IncomingcallwhileoncallComponent } from './Components/incomingcallwhileoncall/incomingcallwhileoncall.component';
import { IncomingcallwhileonholdComponent } from './Components/incomingcallwhileonhold/incomingcallwhileonhold.component';
import { LoginComponent } from './login/login.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';




export function HttpFactory(http : HttpClient){
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnectedComponent,
    HeaderComponent,
    CallhistoryComponent,
    IncomingcallComponent,
    CallhistoryemptyComponent,
    CallconnectedComponent,
    CallconnectedwhileonholdComponent,
    CallendedComponent,
    CallingComponent,
    CallingwhileonholdComponent,
    CallonholdComponent,
    CallonholdtransferconfirmationComponent,
    CallonholdwhileconnectedComponent,
    CalltransferconfirmationComponent,
    CalltransferedComponent,
    IncomingcalldialComponent,
    IncomingcallwhileoncallComponent,
    IncomingcallwhileonholdComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
