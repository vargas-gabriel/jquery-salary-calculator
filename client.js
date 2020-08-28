console.log( 'js' );
$(document).ready(onReady);
function onReady() {
    $('#submitButton').on('click', addEmployee);
}
function addEmployee(){
    console.log( 'you clicked me' );
}