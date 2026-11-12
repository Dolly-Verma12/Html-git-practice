
function calculateResult(student) {

    let total = student.java + student.python + student.math;

    let percentage = total / 3;

    let status;

    if (
        student.java >= 33 &&
        student.python >= 33 &&
        student.math >= 33
    ) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    return {
        total: total,
        percentage: percentage.toFixed(2),
        grade: grade,
        status: status
    };

}
