import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(`${BASE_URL}/getAllEmployees`);
export const createEmployee = () => axios.post(`${BASE_URL}/addEmployee`, employee);
export const getEmployee = (employeeId) => axios.get(`${BASE_URL}/getEmployee/${employeeId}`);
export const updateEmployee = (employeeId, employee) => axios.put(`${BASE_URL}/updateEmployee/${employeeId}`, employee);
export const deleteEmployee = (employeeId, employee) => axios.delete(`${BASE_URL}/deleteEmployee/${employeeId}`);

