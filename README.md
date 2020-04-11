# Employee Tracker

Repository: https://github.com/aarkitekkt/employee-tracker

Deployed: https://fc-employees.herokuapp.com/

## Overview
​
The purpose of this application is use React JS to provide a complete list of employees and allow the user to search, sort and filter employees.

### Gallery
​
Search by name:
![Search](/assets/search.gif "Search Employees By Name")

Filter/Sort:
![Home](/assets/filter.gif "Filter/Sort")

​
### Problem

A challenge faced with this application was sorting the array of employees by object keys given a selected parameter.

### Solution
​
When a sorting parameter is selected by the user, the state is updated.  A array.sort() statement was written for each possible criteria and using an if statement, the state was compared to each criteria in order to sort the array correctly and save to a new variable.  This new array is the set as the new state which React renders to the page.

## Tech and Features Used
​
* React
* BootStrap
​
## How to use
​
When the page is loaded, the complete list of employees is rendered in a table.  A form gives the user options to search by name, filter by position, and sort by name, position, and role.  Click reset to return to the complete list of employees.

## Technical Overview
​
1. When the page is loaded, a table takes the current employees state and maps a new table row for each employee in the array.
2. The employee state is derived from a seperate object array containing information for all employees.
3. As a name is typed into the search input, a function dynamically updates the search state.  When submitted, a .filter() method returns any employee where the name matches the searched name. If no matches are found, an h3 is rendered saying no matches exist.
4. When a filter criteria is selected from the form, the filter state is dynamically updated.  When a filter criteria is submited, a filter() methed returns all employees where the position is the same as the filter state and saved to a new array.  This new array is set as the new employee state which is rendered to the page table.  
5. When a sort criteria is selected, the sort state is dynamically updated. An if statement is used to determine which .sort() method is used to sort the employee array and save the new array.  This new array is set as the new employee state and rendered to the table.
6. A reset button sets the employee state to the original array which is rendered to the table.
