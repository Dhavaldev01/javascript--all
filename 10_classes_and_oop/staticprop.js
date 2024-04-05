class User{
    constructor(username){
        this.username =username
    }
    logMe(){
        console.log(`Username  : ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const dhaval = new User("dhaval")
//console.log(dhaval.createId())

class Teacher extends User{
    constructor(username ,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphon " , "I@phone.com")
//iphone.logMe()
console.log(iphone.createId())  // static 