// Created by Adam Simcoe - 101442161
// Last Updated - April 2nd, 2025

export interface Launch {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details?: string;
    launch_success?: boolean | null;
    launch_site?: {
        site_name: string;
    };
    rocket?: {
        rocket_name?: string;
        rocket_type?: string;
        second_stage?: {
            payloads?: Payload[];
        };
    };
    links?: {
        mission_patch?: string;
        mission_patch_small?: string;
        article_link?: string;
        wikipedia?: string;
        video_link?: string;
    };
    crew?: any[] | null;
}

export interface Payload {
    nationality?: string;
    manufacturer?: string;
    payload_type?: string;
    payload_mass_kg?: number;
    orbit?: string;
    orbit_params?: {
        lifespan_years?: number;
    };
}