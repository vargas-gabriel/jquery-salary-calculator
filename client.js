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
    console.log('in calculateSalary ')
    let monthlyCosts = 0;
    for (let i = 0; i < employeeInfo.length; i++) {
        monthlyCosts +=  Number(employeeInfo[i].AnnualSalary);
        if (monthlyCosts/12 > 20000) {
            $('h4').css('background-color', 'red');

        }
    }// -logic/math issue
    let finalMonthlyCosts = monthlyCosts/12;
    let el = $('#totalMonthlyIn');
    el.empty();
    el.append(finalMonthlyCosts);
}

function displayEmployeeInfo(){
    console.log( 'in displayEmployeeInfo' );
    let el = $( '#employeeInfoOut' );
    el.empty();
    for (let i = 0; i < employeeInfo.length; i++ ) {
        el.append(`<tr><td>First Name: ${ employeeInfo[i].FirstName}</td>
        <td>Last Name: ${ employeeInfo[i].LastName}</td>
        <td>ID: ${ employeeInfo[i].ID}</td>
        <td>Title: ${ employeeInfo[i].Title}</td>
        <td>Annual Salary: $${ employeeInfo[i].AnnualSalary}</td>
        <td><button class="delete">Delete</button></td>
        </tr>`);
    }
    clearInput();
    deleteButton();
}
function clearInput(){
    console.log( 'in clearInput');
    $('#firstNameIn').val('')
    $('#lastNameIn').val('')
    $('#idIn').val('')
    $('#titleIn').val('')
    $('#annualSalaryIn').val('')
}
function deleteButton(){
    $('.delete').on('click', deleteRow)
}
function deleteRow(){
$(this).closest('tr').remove();

}


