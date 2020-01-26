
function createNewUser() {
    var user = {
        getLogin(){
            let login = firstName[0].toLowerCase() + lastName.toLowerCase();
            return login;
        }
    };
    var firstName, lastName;
    user.setFirstName = function (newFirstName) {
         firstName = newFirstName;
    };
    user.setLastName = function (newLastName) {
        lastName = newLastName;
    };
    user.setFirstName(prompt('Write your first name'));
    user.setLastName(prompt('Write your last name'));
    return user.getLogin();
}
console.log(createNewUser());