console.log( 'js' );
$(document).ready(onReady);
let employeeInfo = [];

function onReady() {
    $('#submitButton').on('click', addEmployee);
}//end onReady
function addEmployee(){
    console.log( 'you clicked me' );
    const newItem = {
        FirstName: $('#firstNameIn').val() ,
        LastName: $('#lastNameIn').val(),
        ID: $('#idIn').val(),
        Title: $('#titleIn').val(),
        AnnualSalary: $('#annualSalaryIn').val()
    }//end new item
    console.log( 'newItem:', newItem );
    employeeInfo.push( newItem );
    console.log( employeeInfo );
    calculateSalary();
    displayEmployeeInfo();
}//end addEmployee

function calculateSalary(){
    console.log( 'in calculateSalary');

}

function displayEmployeeInfo(){
    console.log( 'in displayEmployeeInfo' );
    let el = $( '#employeeInfoOut' );
    el.empty();
    for (let i = 0; i < employeeInfo.length; i++ ) {
        el.append(`<tr> <th>First Name: ${ employeeInfo[i].FirstName}</th><th>Last Name: ${ employeeInfo[i].LastName}</th><th>ID: ${ employeeInfo[i].ID}</th><th>Title: ${ employeeInfo[i].Title}</th><th>Annual Salary: ${ employeeInfo[i].AnnualSalary}</th></tr>` );
    }
    clearInput();
}
function clearInput(){
    console.log( 'in clearInput');
    $('#firstNameIn').reset()
    $('#firstNameIn').reset()
    $('#idIn').reset()
    $('#titleIn').reset()
    $('#annualSalaryIn').reset()
}