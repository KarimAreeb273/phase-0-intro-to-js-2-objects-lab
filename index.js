// Write your solution in this file!
const employee = { 
    name: "areeb",
    streetAddress: "home"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee};
    newObj[key] = value;
    return newObj;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee; 
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}