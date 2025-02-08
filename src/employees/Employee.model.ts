export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    nearestCity: string;
    tier: EmployeeTier;
    status: EmployeeStatus;
}

export enum EmployeeTier {
    TIER_ONE = 'TIER_ONE',
    TIER_TWO = 'TIER_TWO',
    TIER_THREE = 'TIER_THREE',
    TIRE_FOUR = 'TIRE_FOUR',
    TIER_ZERO = 'TIER_ZERO',
}

export enum EmployeeStatus{
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    SUSPENDED = 'SUSPENDED',
    TERMINATED = 'TERMINATED',
}