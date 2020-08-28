console.log( 'js' );
$(document).ready(onReady);
let employeeInfo = [];

function onReady() {
    $('#submitButton').on('click', addEmployee);
}//end onReady
function addEmployee(){
    console.log( 'you clicked me' );
    const newItem = {
        FirstName: $('#firstNameIn').val(),
        LastName: $('#lastNameIn').val(),
        ID: $('#idIn').val(),
        Title: $('#titleIn').val(),
        AnnualSalary: $('#annualSalaryIn').val()
    }//end new item
    console.log( 'newItem:', newItem );
    employeeInfo.push( newItem );
    console.log( employeeInfo );
    calculateSalary();
}//end addEmployee

function calculateSalary(){
    
}

function displayEmployeeInfo(){
    console.log( 'in displayEmployeeInfo' );
}