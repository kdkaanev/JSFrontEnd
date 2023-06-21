function schoolRegister(input){
  let students = [];
  let student = {};
  let newYear = [];
  for (let line of input) {
    let info = line.split(", ");
    students.push(info);
  }
  students.forEach((element) => {
    let name = element[0].split(": ")[1];
    let gradeStr = element[1].split(": ")[1];
    let grade = Number(gradeStr);
    let averageScoreStr = element[2].split(": ")[1];
    let averageScore = Number(averageScoreStr);
    if (averageScore < 3) {
      student = {
        name: name,
        grade: grade,
        averageScore: averageScore,
      };
    } else {
      student = {
        name: name,
        grade: grade++,
        averageScore: averageScore,
      };
    }
    newYear.push(student);
  });
  newYear.sort((a, b) => a.grade - b.grade);
  newYear.forEach((element) => {
    console.log(
      `${element.name} is graduated with ${element.averageScore}`
    );
  
    }
  )
}



schoolRegister(
    [
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
            "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
            "Student name: George, Grade: 8, Graduated with an average score: 2.83",
            "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
            "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
            "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
            "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
            "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
            "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
            "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
            "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
            "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
        ]
        
)