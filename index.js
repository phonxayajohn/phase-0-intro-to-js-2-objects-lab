// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "42 Wallaby Way"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployee = {
        ...employee,
        [key]: value
    };
    return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const removeEmployee = {
        ...employee
    }

    delete removeEmployee[key];
    return removeEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}