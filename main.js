function Student (arrayofMarks, presentDays) {
    var marks;
    var quantityOfMarks;
    var marksSum = 0;
    (function isAnArray () {
        if (Array.isArray(arrayofMarks)) {
            marks = arrayofMarks;
        } else {
            marks = 0;
        }
        quantityOfMarks = marks.length;
    })();
    var workDays = 40;
    var visitedDays = presentDays;
    this.studentSuccess = function () {
        marks.forEach(function (mark) {
            if (typeof mark == 'number' && mark > 0 && mark <= 12) {
                marksSum += mark;
            } else {
                quantityOfMarks--;
            }
        });
        console.log('Average mark = ' + Math.round(marksSum / quantityOfMarks));
        console.log('Student success = ' + Math.round(marksSum / (quantityOfMarks * 12) * 100) + '%');
    };
    this.studentAttendance = function () {
        if (typeof visitedDays == 'number' && visitedDays > 0 && visitedDays <= 40) {
            console.log('Student Attendance = ' + Math.round(visitedDays / workDays * 100) + '%');
        } else {
            console.log('Please check entering number of the student present days!')
        }
    }
}
var test = new Student([12, 5, 8, 10, 9], 38);
test.studentSuccess();
test.studentAttendance();

var test_2 = new Student([11, 5], 25);
test_2.studentAttendance();
test_2.studentSuccess();