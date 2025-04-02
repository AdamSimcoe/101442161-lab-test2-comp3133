// Created by Adam Simcoe - 101442161
// Last Updated - April 2nd, 2025

// Imports
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Component
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101442161-lab-test2-comp3133';
}
