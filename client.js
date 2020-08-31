console.log( 'js' );
$(document).ready(onReady);
let employeeInfo = [];

function onReady() {
}//end onReady
$(document).on( 'click', '#submitButton', addEmployee);
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
            $('span').css('background-color', 'red');
        }
    }
    let finalMonthlyCosts = monthlyCosts/12;
    let el = $('#totalMonthlyIn');
    el.empty();
    el.append(finalMonthlyCosts);
}//end calculateSalary

function displayEmployeeInfo(){
    console.log( 'in displayEmployeeInfo' );
    let el = $( '#employeeInfoOut' );
    el.empty();
    for (let i = 0; i < employeeInfo.length; i++ ) {
    el.append(`<tr><td>First Name: ${ employeeInfo[i].FirstName}</td>
    <td>Last Name: ${ employeeInfo[i].LastName}</td>
    <td class="ID">ID Number:  ${ employeeInfo[i].ID}</td>
    <td>Title: ${ employeeInfo[i].Title}</td>
    <td>Annual Salary: $${ employeeInfo[i].AnnualSalary}</td>
    <td><button class="delete" data-id"button">Delete</button></td></tr>
    `);
    }
    clearInput();
}//end displayEmployeeInfo
 function clearInput(){
    console.log( 'in clearInput');
    $('#firstNameIn').val('')
    $('#lastNameIn').val('')
    $('#idIn').val('')
    $('#titleIn').val('')
    $('#annualSalaryIn').val('')
    deleteButton();
}//end clearInput
//$(document).on('click', '#delete', deleteRow);
function deleteButton(){
  $('.delete').on('click', deleteRow )
}
function checkID(ID){
    if (ID === employeeInfo.length)
    return ID;
}
    
function deleteRow(){
    
    let valU = $(this).closest('tr').find('.ID').text();
     console.log( valU );
     let match = employeeInfo.findIndex(function(item) {
         return item.ID == checkID(valU)
     });
    console.log(match)
    $(this).closest('tr').remove(); 
    employeeInfo.splice(match)
    calculateSalary();
    let monthlyCosts = 0;
    for (let i = 0; i < employeeInfo.length; i++) {
        monthlyCosts +=  Number(employeeInfo[i].AnnualSalary);
        if (monthlyCosts/12 < 20000) {
            $('span').css('background-color', 'white');
        }
     }
}//end deleteRow