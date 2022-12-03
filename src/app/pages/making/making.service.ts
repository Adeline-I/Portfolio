import { Injectable } from '@angular/core';
import { MAKINGS } from 'src/app/datas/making.data';
import { Making } from 'src/app/models/making.model';

@Injectable({
  providedIn: 'root'
})
export class MakingService {

  constructor() { }

  getMakingList(): Making[] {
    return MAKINGS;
  }
}
