function handleFormSubmit(e){
    e.preventDefault();
    if(editButton.textContent === 'Edit Profile'){
        editButton.textContent = 'Save Profile';
        hide(firstNameText);
        hide(lastNameText);
        show(firstNameInput);
        show(lastNameInput);
    }
    else{
        editButton.textContent = 'Edit Profile';
        hide(firstNameInput);
        hide(lastNameInput);
        show(firstNameText);
        show(lastNameText);
    }
}