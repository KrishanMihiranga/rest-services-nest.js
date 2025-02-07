import { Injectable } from '@nestjs/common';
import { Employee, EmployeeTier } from './Employee.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class EmployeesService {
    private employees: Employee[] = [];

    getAllEmployees() {
        return this.employees;
    }

    createEmployee(firstName: string, lastName: string, designation: string, nearestCity: string, tier: EmployeeTier) {
        const Employee = {
            id: uuid(),
            firstName,
            lastName,
            designation,
            nearestCity,
            tier
        }
        this.employees.push(Employee)
        return Employee;
    }

    updateEmployee(firstName: string, lastName: string, designation: string, nearestCity: string, tier: EmployeeTier) {
        
        const updatedEmployee = this.employees.find(employee => employee.firstName === firstName);

        if(updatedEmployee) {
            updatedEmployee.designation = designation;
            updatedEmployee.lastName = lastName;
            updatedEmployee.nearestCity = nearestCity;
            updatedEmployee.tier = tier;
            return updatedEmployee;
        }
        return this.employees;    
    }

    deleteEmployee(firstName: string) {
        const index = this.employees.findIndex(employee => employee.firstName === firstName);
        if (index !== -1) {
            this.employees.splice(index, 1);
        }
        return this.employees;
    }
}
