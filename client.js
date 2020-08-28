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
        el.append(`<li> FirstName: ${ employeeInfo[i].FirstName}  LastName: ${ employeeInfo[i].LastName }  ID: 
    ${ employeeInfo[i].ID }  Title: ${ employeeInfo[i].Title}  AnnualSalary: ${ employeeInfo[i].AnnualSalary} </li>` );
    }
    
}