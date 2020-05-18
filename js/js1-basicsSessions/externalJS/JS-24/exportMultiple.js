let fname = "Kundan", lname = "Keshidi", desgn = "developer", sal = 90000

class Employee{

    id
    name
    age

    constructor(){
        console.log("Employee constructor");
    }

    setInfo(eid, ename, esal){
        this.id = eid
        this.name = ename
        this.sal = esal
    }
    
    getInfo(){
        console.log(this.id+":"+this.name+":"+this.sal)
    }
}

class Manager extends Employee{
    dept
    constructor(){
        super()
        console.log("Manager constructor")
    }

    setDept(dep){
        this.dept = dep
    }

    getDept(){
        console.log(this.dept)
    }
}

let add = (a,b,c) => a+b+c
export default a => a
export {Manager, fname, lname, desgn, sal, add}