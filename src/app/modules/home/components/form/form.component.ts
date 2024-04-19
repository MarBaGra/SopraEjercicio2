import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/products';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  userForm: FormGroup = this.formBuilder.group({
    productName: [null, [Validators.required, Validators.minLength(4)]],
    price: [
      null,
      [Validators.required, Validators.min(1), Validators.max(999)],
    ],
    description: [null, [Validators.required, Validators.maxLength(350)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSimilarProducts();
  }

  private getSimilarProducts() {}

  sendUserInfo() {
    console.log(
      this.characteresValidator(this.userForm.get('description')?.value)
    );

    const product: Product = {
      product: this.userForm.get('productName')?.value,
      price: this.userForm.get('price')?.value,
      currency: '€',
      rating: 3,
      description: this.userForm.get('description')?.value,
      image: 'src/favicon.ico',
      similarProducts: [],
      reviews: null,
    };

    this.dataService.setCreatedProduct(product);
    this.router.navigate(['/saveSuccess']);

    /*this.formValue = this.userForm.value;
    if(
      this.userForm.controls['productName'].invalid && this.userForm.controls['productName'].touched
    )
    */
  }

  validateField(field: string): boolean {
    return (
      this.userForm.controls[field].invalid &&
      this.userForm.controls[field].touched
    );
  }

  characteresValidator(control: FormControl): boolean {
    const nameRegexp: RegExp = /[!@#$%^&*()_+\-={};':"|,.<>//?]/;
    return control.value && nameRegexp.test(control.value);
  }
}
