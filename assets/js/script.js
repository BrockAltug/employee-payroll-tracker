// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];

  // get the number of employees to add
  const employeeCount = prompt("Enter the number of employees to add:");

  // loop through the number of employees to add
  for (let i = 0; i < employeeCount; i++) {
    // get the employee's first name
    const firstName = prompt("Enter the employee's first name:");

    // get the employee's last name
    const lastName = prompt("Enter the employee's last name:");

    // get the employee's salary
    const salary = parseFloat(prompt("Enter the employee's salary:"));

    // create an employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    // add the employee object to the employees array
    employees.push(employee);
  }

  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;

  // loop through the employees array and add up the salaries
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }

  // calculate the average salary
  const averageSalary = totalSalary / employeesArray.length;

  // display the average salary
  alert(`The average salary is: ${averageSalary.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  })}`);
  // log the average salary
  console.log(`The average salary is: ${averageSalary.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  })}`);

  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
