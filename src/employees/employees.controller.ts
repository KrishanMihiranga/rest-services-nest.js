import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {

    constructor(private employeeService: EmployeesService) {
    }

    @Get()
    getAllEmployees() {
        return this.employeeService.getAllEmployees();
    }

    @Post()
    createEmployee(
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('designation') designation: string,
        @Body('nearestCity') nearestCity: string,
        @Body('tier') tier: number
    ) {
        return this.employeeService.createEmployee(firstName, lastName, designation, nearestCity, tier)
    }

    @Put()
    updateEmployee(
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('designation') designation: string,
        @Body('nearestCity') nearestCity: string,
        @Body('tier') tier: number
    ) {
        return this.employeeService.updateEmployee(firstName, lastName, designation, nearestCity, tier)
    }

    @Delete()
    deleteEmployee(@Body('firstName') firstName: string) {
        return this.employeeService.deleteEmployee(firstName)
    }
}

