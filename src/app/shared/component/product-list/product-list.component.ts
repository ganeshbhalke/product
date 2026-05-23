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

  producArr=this._productService.productArr

  constructor(private _productService: ProductServiceService
    
  ) { }

  ngOnInit(): void {
  }



  onRemoveprod(id: string) {
    this.emitremovepro.emit(id);
    this._productService.openSnackBar(
      `Product is with id ${id} removed successfully!!!!!!!`,
    );
  }

  onEdit(editObj:IProduct){
    this._productService.emitEditObj$.next(editObj)
  }






}
