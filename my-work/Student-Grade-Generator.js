function calculateGrade() {
    // Prompt the user for input
    let marks = prompt("Enter student marks (between 0 and 100):");

    // Parse the input as a number
    marks = parseFloat(marks);

    // Check if the input is a valid number
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input. Marks should be between 0 and 100.");
        return;
    }

    // Determine the grade based on the marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Display the result
    alert(`Student Grade: ${grade}`);
}

// Call the function
calculateGrade();
