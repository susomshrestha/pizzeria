import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: any = [];
  categoryForm: FormGroup;
  addModal: Boolean;

  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder) {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getCategories();
    
  }

  openAddModal() {
    this.addModal = true;
  }

  closeAddModal() {
    this.addModal = false;
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(res => {
      if(res) {
        this.categories = res;
      }
    })
  }

  addCategory() {
    if(this.categoryForm.valid) {
      this.categoryService.addCategory(this.categoryForm.value.name).subscribe(res => {
        console.log(res)
      })
    }
  }

}
