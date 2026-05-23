import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProduct } from '../modules/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  emitEditObj$ : Subject<IProduct> = new Subject<IProduct>()

  constructor(
    private _snackBar:MatSnackBar
  ) { }



  openSnackBar(msg:string){
    this._snackBar.open(msg,'Close',{
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:3000
    }
      
    )
  }




}
