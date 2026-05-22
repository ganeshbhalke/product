import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../modules/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductServiceService } from '../../Services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Output() emitremovepro: EventEmitter<string> = new EventEmitter<string>();
  @Input() productArr !: Array<IProduct>;

  constructor( private _snackBar:ProductServiceService) { }

  ngOnInit(): void {
  }

  onRemoveprod(id: string) {
    this.emitremovepro.emit(id);
   this._snackBar.openSnackBar(
  `Product is with id ${id} removed successfully!!!!!!!`,
);
  }





}
