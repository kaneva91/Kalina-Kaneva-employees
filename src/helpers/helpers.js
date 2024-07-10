
import moment from 'moment';

const parseDate = (dateStr) => {
    return dateStr.trim() === 'NULL' ? moment(new Date()) : moment(new Date(dateStr));
};

const getOverlapDays = (period1, period2) => {
    const start = moment.max([period1.start, period2.start]);
    const end = moment.min([period1.end, period2.end]);
    return end.diff(start, 'days');
};

export const findLongestWorkingPair = (employees) => {
    const projectEmployees = {};

    employees.forEach(row => {
        const { EmpID, ProjectID, DateFrom, DateTo } = row;
        if (!projectEmployees[ProjectID]) {
            projectEmployees[ProjectID] = [];
        }
        projectEmployees[ProjectID].push({
            EmpID: parseInt(EmpID),
            start: parseDate(DateFrom),
            end: parseDate(DateTo)
        });
    });

    let longestDuration = 0;
    let bestPair = null;

    for (const projectId in projectEmployees) {
        const employees = projectEmployees[projectId];
        for (let i = 0; i < employees.length; i++) {
            for (let j = i + 1; j < employees.length; j++) {
                const overlap = getOverlapDays(employees[i], employees[j]);
                if (overlap > longestDuration) {
                    longestDuration = overlap;
                    bestPair = {
                        emp1: employees[i].EmpID,
                        emp2: employees[j].EmpID,
                        projectId,
                        duration: overlap
                    };
                }
            }
        }
    }

    return bestPair;
};