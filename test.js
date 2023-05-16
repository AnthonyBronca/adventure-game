
class Account {
    constructor(name) {
        this.name = name;
    }
}
class Admin extends Account {
    static admins = []

    // static addAdmin() {
    //     this.admins.push(this)
    // }
    constructor(name) {
        super(name)
        this.totalAdmins = 0;
        Admin.admins.push(this)
    }

    changeUserName(user, account, newName) {
        if (Admin.admins.includes(account)) {
            user.name = newName
            return user;
        } else {
            throw new Error('You are not an admin')
        }
    }

    static getAdmins() {
        return this.admins
    }

    static addAdmin() {
        this.admins.push(this)
    }
}




const anthony = new Admin('Anthony')
const ryan = new Account('Ryan');

function pressButton() {
    anthony.changeUserName(ryan, ryan, 'hello')
}
// pressButton()
// console.log(ryan)
// console.log(Admin.admins)


window.addEventListener('DOMContentLoaded', () => {
    document.cookie = `${ryan.name} ` + dateString;

    const title = document.getElementsByTagName('h1');
    title[0].innerText = `User: ${ryan.name}`
    // console.log(title[0].inn)
    let date = new Date();
    let dateString = date.toLocaleString();

    let cookieName = document.cookie.split(' ');
    console.log(cookieName)
    // if (cookieName[0] === '')


})
