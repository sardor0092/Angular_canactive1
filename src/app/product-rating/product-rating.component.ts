import { Component } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent {


  private unsavedChanges = false;
  selectedRating: number | null = null;

  rateProduct() {
    if (this.selectedRating !== null) {
      console.log('Rating:', this.selectedRating);
      this.unsavedChanges = true;
    }
  }

  saveChanges() {
    console.log('Saving changes...');
    this.unsavedChanges = false;
  }

  hasUnsavedChanges(): boolean {
    return this.unsavedChanges;
  }

}
