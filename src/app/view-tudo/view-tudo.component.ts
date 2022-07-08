import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-tudo',
  templateUrl: './view-tudo.component.html',
  styleUrls: ['./view-tudo.component.css']
})
export class ViewTudoComponent implements OnInit {

  constructor(private api: ApiService) {
    api.viewTodos().subscribe(
      (Response)=>{
        this.data=Response
      }
    )
  }

  ngOnInit(): void {
  }
  data:any=[
    
]
}
