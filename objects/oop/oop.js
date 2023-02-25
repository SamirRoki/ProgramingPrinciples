

function Person (name,surname){
    this.name = name;
    this.surname = surname;
}
Person.prototype.fullName = function(){
    return this.name + ''+ this.surname;
}




function Employee (name,surname,job,salary){
    Person.call (this, name, surname);
    this.job = job;
    this.salary = salary;
};
Employee.prototype.getData = function(){
    return 'name:'+ this.name + ',' + 'surname:' + this.surname + ',' + 'salary:' + this.salary + '€';
     
};
Employee.prototype.getSalary = function(){
    return this.salary +'€';
};
Employee.prototype.increaseSalary = function(){
    return 'newSalary:' + this.salary * 1.1 + '€';
};

var pera = new Employee ('pera', 'Peric', 'junior programer','1500');
console.log(pera.getSalary());
console.log(pera.increaseSalary());
console.log(pera.getData());

function Developer (name,surname,job,salary,specialization){
    Employee.call (this, name,surname,job,salary)
    this.specialization = specialization;

};
Developer.prototype.getSpecialization = function(){
    return 'specialization:' + this.specialization;

}


function Manager (name,surname,job,salary,specialization,department){
    Developer.call (this, name,surname,job,salary,specialization)
    this.department = department;
};
Manager.prototype.getDepartment = function(){
    return 'department:' + this.department;
}

var hasan = new Manager ('Hasan','Hasanovic','programer','2500€','JavaScript','frontend');


console.log(hasan.getDepartment());

