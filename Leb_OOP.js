class UserTemplate {
    constructor(name, password, age) {
        this.name = name
        this.password = password
        this.age = age
        this.cr_date = cr_date
    }

    login() {
        this.connected = true
        console.log('your login status :', this.connected)
    }
    logout() {
        this.connected = false
        console.log('your login status :', this.connected)
    }
    chk_status() {
        if(this.connected = true) {
            console.log('status login :', this.connected)
        }
            console.log('status logout :', this.connected)
    }
}