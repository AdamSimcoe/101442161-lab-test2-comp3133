// Created by Adam Simcoe - 101442161
// Last Updated - April 2nd 2025

// Imports
import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { CommonModule } from '@angular/common';
import { MissionFilterComponent } from '../mission-filter/mission-filter.component';
import { RouterModule } from '@angular/router';
import { Launch } from '../../models/launch.model';

// Component
@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MissionFilterComponent],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})

export class MissionListComponent implements OnInit {
  // Hold list of launches
  launches: Launch[] = [];

  // Inject spaceX data service
  constructor(private spacexService: SpacexService) {}

  // Gets all launches on initial load
  ngOnInit(): void {
    this.spacexService.getAllLaunches().subscribe((data) => {
      // Store launch data
      this.launches = data;
    });
  }

  // Get all launches within the selected year
  onYearSelected(year: String): void {
    this.spacexService.getLaunchesByYear(year).subscribe((data) => {
      // Store filterd launch data
      this.launches = data;
    });
  }

  // Clears search filter and re-gets all launches
  onClearFilter(): void {
    this.spacexService.getAllLaunches().subscribe((data) => {
      // Stores launch data
      this.launches = data;
    });
  }
}
