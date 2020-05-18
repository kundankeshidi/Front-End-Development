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

class Manager{
    dept
    constructor(){
  //      super()
        console.log("Manager constructor")
    }

    setDept(dep){
        this.dept = dep
    }

    getDept(){
        console.log(this.dept)
    }
}

export {Employee, Manager}