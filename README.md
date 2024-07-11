# Employee Project Collaboration Analyzer

This application identifies the pair of employees who have worked together on common projects for the longest period of time.

## Features

- Upload a CSV file containing employee project data.
- Identify pairs of employees who have worked together on common projects.
- Display results in a datagrid with columns for Employee ID #1, Employee ID #2, Project ID, and Days Worked.
- Supports multiple date formats for input.
- `DateTo` can be `NULL`, which is treated as today's date.

## Sample Data

### Input CSV Format

The input CSV file should have the following columns:
- EmpID: Employee ID
- ProjectID: Project ID
- DateFrom: Start date of the project
- DateTo: End date of the project (can be `NULL` for ongoing projects)

Example:

EmpID,ProjectID,DateFrom,DateTo
143,12,2013-11-01,2014-01-05
218,10,2012-05-16,NULL
143,10,2009-01-01,2011-04-27


### Sample Output

The output will be a table showing the pairs of employees who have worked together on common projects for the longest period:

Employee ID #1 | Employee ID #2 | Project ID | Days Worked
143 | 218 | 10 | 8




## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

git clone https://github.com/kaneva91/Kalina-Kaneva-employees.git
cd Kalina-Kaneva-employees 

2. Install dependencies:

npm install
# or
yarn install

3. Start the development server:

npm run dev
# or
yarn dev
