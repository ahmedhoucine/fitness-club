import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  selectedItem: any = null;
  categories: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchItems();
    this.fetchCategories();
  }

  fetchItems() {
    this.http.get<any[]>('http://localhost:8080/api/v1/items').subscribe(
      (response) => {
        console.log('Items fetched successfully:', response);
        this.items = response;
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }
  fetchCategories() {
    this.http.get<any[]>('http://localhost:8080/api/v1/categories').subscribe(
      (response) => {
        console.log('Items fetched successfully:', response);
        this.categories = response;
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }
  

  deleteItem(id: string) {

      const url = `http://localhost:8080/api/v1/categories/${id}`;
      this.http.delete(url).subscribe(
        () => {
          console.log('Category deleted successfully');
          this.fetchCategories(); // Refresh categories after deletion
        },
        (error) => {
          console.error('Error deleting category:', error);
          this.fetchCategories(); // Refresh categories even if there's an error
        }
      );
    
    
  }
  

  editItem(id: string) {
    const url = `http://localhost:8080/api/v1/items/${id}`;
    this.http.get<any>(url).subscribe(
      (response) => {
        console.log('Item details:', response);
        this.selectedItem = response;
        // Here you can perform any action with the item details, such as displaying them in a modal
      },
      (error) => {
        console.error('Error fetching item details:', error);
      }
    );
  }
  

  
    
  submitmodification(form: NgForm,id:string){
    const url = `http://localhost:8080/api/v1/items/${id}`;
    const newItem = {
      name: form.value.itemName,
      description: form.value.description,
      price: form.value.price,
      categoryId: form.value.category
    };

    this.http.patch<any>(url, newItem)
      .subscribe(
        response => {
          console.log('Item modified successfully:', response);
          // Optionally, you can reset the form after successful submission
          this.fetchItems();
          this.selectedItem=null;
        },
        error => {
          console.error('Error modifing item:', error);
        }
      );

  }
}