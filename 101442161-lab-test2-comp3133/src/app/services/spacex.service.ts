// Created by Adam Simcoe - 101442161
// Last Updated - April 2nd 2025

// Imports
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch.model';

// Make class injectable 
@Injectable({
  providedIn: 'root'
})

export class SpacexService {

  // Inject httpclient
  private http = inject(HttpClient);

  // Url for spaceX launch data
  private launchesUrl = 'https://api.spacexdata.com/v3/launches';

  // Get all launches from API
  getAllLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.launchesUrl);
  }

  // Get all launches that match filtered launch year
  getLaunchesByYear(year: String): Observable<Launch[]> {
    const yearUrl = `${this.launchesUrl}?launch_year=${year}`;

    return this.http.get<Launch[]>(yearUrl);
  }

  // Get all launch details of specific mission based off flight num
  getMissionByFlightNum(flightNum: String): Observable<Launch> {
    const detailsUrl = `${this.launchesUrl}/${flightNum}`;

    return this.http.get<Launch>(detailsUrl);
  }
}
