// Created by Adam Simcoe - 101442161
// Last Updated - April 2nd, 2025

// Imports
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch.model';

// Component
@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.css'
})
export class MissionDetailsComponent implements OnInit {
  // Hold mission data
  mission: Launch | null = null;

  constructor(
    private route: ActivatedRoute,
    // Fetch mission data from API
    private spacexService: SpacexService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get flight num from route params
    const flightNum = this.route.snapshot.paramMap.get('flight_number');

    // If flight num exists, get mission details
    if (flightNum) {
      this.spacexService.getMissionByFlightNum(flightNum).subscribe((data) => {
        // Store mission data
        this.mission = data;
      });
    }
  }
  // Navigation to return to mission list page
  goBack(): void {
    this.router.navigate(['/']);
  }
}
