import { Component, HostBinding, OnInit } from '@angular/core';
import { PetService } from '../../services/pets.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: any = [];
  @HostBinding('class') classes = 'row';

  constructor( private petService: PetService) { }

  ngOnInit(): void {
    this.getPets();
  }
  getPets(){
    this.petService.getPets().subscribe(
      res => {
        this.pets = res;
      },
      err => console.error(err)
    );
  }
  deletePet(id: string){
    this.petService.deletePet(id).subscribe(
      res => {
        console.log(res);
        this.getPets();
      },
      err => console.log(err)
    )
  }

}
