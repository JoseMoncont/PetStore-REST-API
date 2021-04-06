import { Component, HostBinding, OnInit } from '@angular/core';
import { Pet }  from '../../models/Pet';
import { ActivatedRoute, Router } from '@angular/router';

import { PetService } from '../../services/pets.service';


@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  @HostBinding('class') classes ='row';
  pet: Pet ={
    id:0,
    name: '',
    category: '',
    photoUrls: '',
    status: '',
    tags: '',
    created_at: new Date()
  }
  edit: boolean = false;

  constructor( private petService: PetService, private router: Router, private activedRoute: ActivatedRoute){}

  ngOnInit(){
    const params = this.activedRoute.snapshot.params;
    if (params.id){
      this.petService.getPet(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.pet = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }
  saveNewPet(){
    delete this.pet.created_at;
    delete this.pet.id;
    this.petService.savePet(this.pet)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/pets']);
      },
      err => console.error(err)
    )

  }
  updatePet(){
    delete this.pet.created_at;
    this.petService.updatePet(this.pet.id!, this.pet)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/pets']);
      },
      err => console.log(err)

    )
  }


}
