import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../../modules/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductServiceService } from '../../Services/product-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {


  //  productForm !: FormGroup;
  isInEditMode: boolean = false;

  editObjTopatch !: IProduct

  @Output() emitProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>()
  productForm!: FormGroup;


  constructor(
<<<<<<< Updated upstream
    private fb: FormBuilder,
    private _productService: ProductServiceService
=======
      private fb : FormBuilder  
>>>>>>> Stashed changes

  ) {
    this.createProductForm()

  }


  createProductForm() {

    this.productForm = this.fb.group({

      pname: [''],
      price: [''],
      category: [''],
      rating: [''],
      imgUrl: [''],
      offerPrice: [''],
      discount: [''],

    })

  }

  onProductAdd() {


    let productObj: IProduct = {
      pname: this.productForm.value.pname,
      price: (this.productForm.value.price),
      category: this.productForm.value.category,
      rating: (this.productForm.value.rating),
      imgUrl: this.productForm.value.imgUrl,
      productId: Date.now().toString(),
      offerPrice: this.productForm.value.offerPrice,
      discount: this.productForm.value.discount,
    }

    console.log(productObj)

    this.emitProduct.emit(productObj)

    this.productForm.reset()

  }

  ngOnInit(): void {

    this._productService.emitEditObj$.subscribe({
      next: data => {
        this.editObjTopatch = data;
        this.productForm.patchValue(data)
        this.isInEditMode = true
      }
    })
  }

  onUpdate(){

  let updatedObj : IProduct = {
    ...this.productForm.value,
    productId : this.editObjTopatch.productId
  }

  this._productService.updateProduct(updatedObj)

  this.isInEditMode = false;

  this.productForm.reset();

}


}
