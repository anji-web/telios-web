import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from "../../service/data.service";
import { error } from '@angular/compiler/src/util';
import { UserList } from 'src/app/data/UserList';

@Component({
  selector: 'app-connected',
  templateUrl: './connected.component.html',
  styleUrls: ['./connected.component.css']
})
export class ConnectedComponent implements OnInit {
  user: UserList[];
  constructor(public translate: TranslateService, private dataService: DataService) {
    translate.addLangs(['en', 'nl', 'es']);
    translate.setDefaultLang('en');
    translate.use(sessionStorage.getItem('lang'))
   }

  ngOnInit(): void {
    this.fetchListData();
  }

  fetchListData(){
    this.dataService.getListUser().subscribe(
      {
        next: data => this.user = data,
        error: err => console.log(err)
      }
    )
  }

}
