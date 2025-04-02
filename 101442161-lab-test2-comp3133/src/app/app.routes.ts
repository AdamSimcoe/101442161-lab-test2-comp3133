// Created by Adam Simcoe - 101442161
// Last Updated - April 2nd, 2025

// Imports
import { Routes } from '@angular/router';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { MissionDetailsComponent } from './components/mission-details/mission-details.component';

// Page Route Navigation
export const routes: Routes = [
    { path: '', component: MissionListComponent },
    { path: 'details/:flight_number', component: MissionDetailsComponent }
];
