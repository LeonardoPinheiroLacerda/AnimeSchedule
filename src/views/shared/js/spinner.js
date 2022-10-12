const spinner = document.querySelector('#spinner');

function showSpinner(){
    spinner.classList.add('d-flex');
    spinner.classList.remove('d-none');
}

function hideSpinner(){
    spinner.classList.add('d-none');
    spinner.classList.remove('d-flex');
}