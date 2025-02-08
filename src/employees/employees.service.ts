import { Injectable } from '@nestjs/common';
import { Employee, EmployeeStatus, EmployeeTier } from './Employee.model';
import { v1 as uuid } from 'uuid';
import { EmployeeSearchDto } from './EmployeeSearch.dto';
import { EmployeeUpdateDto } from './EmployeeUpdate.dto';

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
            tier,
            status: EmployeeStatus.ACTIVE
        }
        this.employees.push(Employee)
        return Employee;
    }

    employeeSearch(employeeSearchDto: EmployeeSearchDto) {
        const { status, name } = employeeSearchDto;
        let employees = this.getAllEmployees();

        if (status) {
            employees = employees.filter(employee => employee.status === status);
        }
        if (name) {
            employees = employees.filter(employee => employee.firstName.includes(name) || employee.lastName.includes(name));
        }
        return employees;
    }

    getEmployeeById(id: string): Employee | undefined {
        const employees = this.getAllEmployees();
        return employees.find(employee => employee.id === id);
    }

    updateEmployee(employeeUpdateDto: EmployeeUpdateDto): Employee | undefined {
        const { id, city } = employeeUpdateDto;
        let employee = this.getEmployeeById(id)!;
        employee.nearestCity = city;
        return employee;
    }

    deleteEmployee(id: string):boolean {
        let employees = this.getAllEmployees();
        this.employees = employees.filter(employee => employee.id!== id);
        return (employees.length != this.employees.length)
    }
}
