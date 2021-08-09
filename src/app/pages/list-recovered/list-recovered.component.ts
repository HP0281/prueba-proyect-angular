import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceRecoveredService } from 'src/app/services/service-recovered.service';

@Component({
  selector: 'app-list-recovered',
  templateUrl: './list-recovered.component.html',
  styleUrls: ['./list-recovered.component.css']
})
export class ListRecoveredComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  };

  constructor(private router: Router, public dbrecovered: ServiceRecoveredService) { }

  ngOnInit(): void {
    this.getRecovered();
  }
  getRecovered(){
    this.dbrecovered.getRecovereds().subscribe(
      res => {
        this.dbrecovered.recovereds = res;
      },
      err => console.log(err)
    )
  }
  onEditar(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['editRecovered'], this.navigationExtras);
  }
  eliminar(id){
    console.log(id);
    return this.dbrecovered.deleteRecovered(id).subscribe(
      (resp) => {
        this.getRecovered();
        alert("Dato eliminado");
      },
      (err) => console.error(err)
    );
  }
}
