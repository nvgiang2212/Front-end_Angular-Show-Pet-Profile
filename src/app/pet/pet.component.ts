import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName ='Shiba';
  petImage ='https://kenh14cdn.com/2017/194293871240289215242677516314723596369920n-1514197071799.jpg';

  constructor() { }

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }

  ngOnInit() {
  }

}
