// Created by Adam Simcoe - 101442161
// Last Updated - April 2nd, 2025

// Imports
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Component
@Component({
  selector: 'app-mission-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mission-filter.component.html',
  styleUrl: './mission-filter.component.css'
})

export class MissionFilterComponent {
  // Hold user year input
  year: string = '';

  // Emit year to mission list component on search
  @Output() filter = new EventEmitter<string>();

  // Emit clear event when clear button clicked
  @Output() clear = new EventEmitter<void>();

  // Search function
  onFilter(): void {
    // Convert user input to String and trim
    const yearStr = String(this.year).trim();

    // If input not empty send to mission list component
    if (yearStr !== '') {
      this.filter.emit(yearStr);
    }
  }

  onClear(): void {
    this.year = '';
    this.clear.emit();
  }
}
