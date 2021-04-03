class Student{
    #studentId = 0;
    #studentName = "";
    #studentAddress= "";
    #totalCGPA = 0.0;
    #totalCredits = 0;

    constructor(id, name, address){
        this.#studentId = id;
        this.#studentName = name;
        this.#studentAddress = address;
    }

    getStudentId(){
        return this.#studentId;
    }

    getStudentName(){
        return this.#studentName;
    }

    getStudentAddress(){
        return this.#studentAddress;
    }

    getCgpa(){
        var cgpa =  this.#totalCGPA / this.#totalCredits;
        if(this.#totalCredits == 0.0){
            return 0.0;
        }
        return cgpa;
    }

    setStudentAddress(address){
        this.#studentAddress = address;
    }

    getTotalCredits(){
        return this.#totalCredits
    }

    addGrade(grade, credits){
        var numericGrade = 0.0;
        switch (grade) {
            case "A+": numericGrade = 4.00; break;
            case "A" : numericGrade = 3.75; break;
            case "A-": numericGrade = 3.50; break;
            case "B+": numericGrade = 3.25; break;
            case "B" : numericGrade = 3.00; break;
            case "B-": numericGrade = 2.75; break;
            case "C+": numericGrade = 2.50; break;
            case "C" : numericGrade = 2.25; break;
            case "D" : numericGrade = 2.00; break;
            case "F" : numericGrade = 0.00; break;
        }
        this.#totalCredits += credits;
        this.#totalCGPA += (numericGrade * credits);
    }

    toString() {
        return this.#studentId + " " + this.#studentName + " " + this.#studentAddress + " " + this.getCgpa();
    }
}

let student = new Student(5);
// you can not assign array limit so Student(5) is not valid limitation
// let student = [];
student[0] = new Student(100, "Abul", "Uttara");
student[1] = new Student(101, "Babul", "Kalabagan");
student[2] = new Student(102, "Kabul", "Malibagh");
student[3] = new Student(103, "Abul", "Mirpur");
student[4] = new Student(104, "Putul", "Nakhalpara");

student[0].addGrade("A+", 1);
student[4].addGrade("A", 3);
student[3].addGrade("B+", 3);
student[3].addGrade("C+", 3);
student[2].addGrade("C+", 3);
student[1].addGrade("B+", 3);
student[1].addGrade("A+", 3);

// let student_sorted_cgpa = student.sort((a,b) => a-b);
// console.log(student_sorted_cgpa);

let studentData = [];
for(var i in student){
    studentData.push(student[i].getCgpa());
}
// console.log(studentData);

let student_sorted_cgpa = studentData.sort((a,b) => a-b);
console.log(student_sorted_cgpa);