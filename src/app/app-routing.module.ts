import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { ConnectedComponent } from './Components/connected/connected.component';
import { CallhistoryComponent } from './Components/callhistory/callhistory.component';
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
import { SignUpComponent } from './sign-up/sign-up.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'home', component:HomeComponent},
  {path:'sign-up', component:SignUpComponent},
  { path: 'connected', component: ConnectedComponent },
  { path: 'callhistory', component: CallhistoryComponent },
  { path: 'incomingcall', component: IncomingcallComponent },
  { path: 'callhistoryempty', component: CallhistoryemptyComponent },
  { path: 'callconnected', component: CallconnectedComponent },
  { path: 'callconnectedwhileonhold', component: CallconnectedwhileonholdComponent },
  { path: 'callended', component: CallendedComponent },  
  { path: 'calling', component: CallingComponent },  
  { path: 'callingwhileonhold', component: CallingwhileonholdComponent },  
  { path: 'callonhold', component: CallonholdComponent }, 
  { path: 'callonholdtransferconfirmation', component: CallonholdtransferconfirmationComponent }, 
  { path: 'callonholdwhileconnected', component: CallonholdwhileconnectedComponent },
  { path: 'calltransferconfirmation', component: CalltransferconfirmationComponent },
  { path: 'calltransfered', component: CalltransferedComponent },
  { path: 'incomingcalldial', component: IncomingcalldialComponent },
  { path: 'incomingcallwhileoncall', component: IncomingcallwhileoncallComponent },
  { path: 'incomingcallwhileonhold', component: IncomingcallwhileonholdComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
