class Employee{
    id
    name
    age
    setInfo(eid,ename, esal){
        console.log(eid+":"+ename+":"+esal)
        this.id = eid
        this.name = ename
        this.sal = esal
    }
    getInfo(){
        console.log(this.id+":"+this.name+":"+this.sal);
    }
}

export {Employee}