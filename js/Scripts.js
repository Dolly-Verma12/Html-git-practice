
function calculateAvg(stu_name = "Unknown", ...marks) {
    let sum = 0;

    for (let mark of marks) {
        sum += mark;
    }

    let avg = marks.length > 0 ? sum / marks.length : 0;

    console.log("Student Name:", stu_name);
    console.log("Total Marks:", sum);
    console.log("Average Marks:", avg);
}

calculateAvg("Rahul", 80, 90, 70, 85);
calculateAvg("Priya", 95, 88, 92);
