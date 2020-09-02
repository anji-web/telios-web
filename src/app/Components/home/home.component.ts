import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public translate: TranslateService){
    this.translate.addLangs(['en', 'nl', 'es']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|nl|es/) ? browserLang : 'en');
  }

  ngOnInit(): void {
        
  }
  
  changeLang(lang){
    console.log(lang);
    sessionStorage.setItem("lang", lang);  
    this.translate.use(lang);
  }

  
  
}
