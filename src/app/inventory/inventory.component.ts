import { Component } from '@angular/core';

interface InventoryItem {
  name: string;
  quantity: number;
}

interface KeyItem {
  name: string;
  available: boolean;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  inventoryItems: InventoryItem[] = [
    { name: 'Pens', quantity: 10 },
    { name: 'Pencils', quantity: 15 },
    { name: 'Notebooks', quantity: 5 }
  ];

  keyItems: KeyItem[] = [
    { name: 'Office Keys', available: true },
    { name: 'Locker Keys', available: true },
    { name: 'File Cabinet Keys', available: false }
  ];
}
