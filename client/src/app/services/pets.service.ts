import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Pet } from '../models/Pet';



@Injectable({
  providedIn: 'root'
})
export class PetService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getPets(){
    return this.http.get(`${this.API_URI}/pets`);
  }
  getPet(id: string){
    return this.http.get(`${this.API_URI}/pets/${id}`);
  }
  savePet(pet: Pet){
    return this.http.post(`${this.API_URI}/pets/`, pet);
  }
  deletePet(id: string){
    return this.http.delete(`${this.API_URI}/pets/${id}`);
  }
  updatePet(id: number|string, updatedPet: Pet){
    return this.http.put(`${this.API_URI}/pets/${id}`, updatedPet);
  }
}
