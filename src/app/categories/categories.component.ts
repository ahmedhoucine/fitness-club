import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: any[] = [];
  selectedCategory: any = null;

  constructor(private http: HttpClient) {
    this.fetchCategories();
  }

  fetchCategories() {
    this.http.get<any[]>('http://localhost:8080/api/v1/categories').subscribe(
      (response) => {
        console.log('response', response);
        this.categories = response;
      },
      (error) => {
        console.log('error', error);
      },
      () => {
        console.log('complete');
      }
    );
  }


  

  deleteCategory(id: string) {
    const url = `http://localhost:8080/api/v1/categories/${id}`; // Ensure the ID is properly encoded
    this.http.delete(url).subscribe(
      () => {
        console.log('Category deleted successfully');
        this.fetchCategories();
      },
      (error) => {
        console.log('Error deleting category:', error);
      }
    );
  }

  editCategory(id: string) {
    const url = `http://localhost:8080/api/v1/categories/${id}`;
    this.http.get<any>(url).subscribe(
      (response) => {
        console.log('category details:', response);
        this.selectedCategory = response;
        // Here you can perform any action with the item details, such as displaying them in a modal
      },
      (error) => {
        console.error('Error fetching category details:', error);
      }
    );
  }

  submitmodification(form: NgForm,id:string){
    const url = `http://localhost:8080/api/v1/categories/${id}`;
    const newCategory = { name: form.value.categoryName };

    this.http.patch<any>(url, newCategory)
      .subscribe(
        response => {
          console.log('Item modified successfully:', response);
          // Optionally, you can reset the form after successful submission
          this.fetchCategories();
          this.selectedCategory=null;
        },
        error => {
          console.error('Error modifing item:', error);
        }
      );

  }
}
