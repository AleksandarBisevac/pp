/* Initialize two arrays. The first one should contain student names, the second one the
number of points for each student. Display student's names with their corresponding
grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 ->; 8,
81-90 -> 9,
91-100 -> 10.
Input:
// [ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99,
51, 83, 59 ]
Output:
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
the exam. */

function grades(students, points) {
  var grade;
  var messagePass;
  var messageFail;
  var result = "";
  for (var i = 0; i < students.length; i++) {
    if (points[i] < 51) {
      grade = 5;
      messageFail =
        students[i] +
        " acquired " +
        points[i] +
        " and failed to complete the exam";
      result += messageFail + "\n";
    } else if (points[i] >= 51 && points[i] < 60) {
      grade = 6;
      messagePass =
        students[i] + " acquired " + points[i] + " and earned " + grade + ".";
      result += messagePass + "\n";
    } else if (points[i] >= 60 && points[i] < 70) {
      grade = 7;
      messagePass =
        students[i] + " acquired " + points[i] + " and earned " + grade + ".";
      result += messagePass + "\n";
    } else if (points[i] >= 70 && points[i] < 80) {
      grade = 8;
      messagePass =
        students[i] + " acquired " + points[i] + " and earned " + grade + ".";
      result += messagePass + "\n";
    } else if (points[i] >= 80 && points[i] < 90) {
      grade = 9;
      messagePass =
        students[i] + " acquired " + points[i] + " and earned " + grade + ".";
      result += messagePass + "\n";
    } else {
      grade = 10;
      messagePass =
        students[i] + " acquired " + points[i] + " and earned " + grade + ".";
      result += messagePass + "\n";
    }
  }
  return result;
}

console.log(
  grades(
    ["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
    [50, 39, 63, 72, 99, 51, 83, 59]
  )
);
