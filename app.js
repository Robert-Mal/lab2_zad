const _ = require('lodash');

const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5,4,3,5,2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4, 3, 3],
            weight: 5
        }
    ]
}

function calculateWeightedAverage(user) {
    let numerator = 0;
    let denominator = 0;
    _.forEach(user.allGrades, (subject) => {
        numerator += _.sum(_.map(subject.grades, (a) => { return a * subject.weight }));
        denominator += subject.weight * subject.grades.length;
    })

    return {user: user.name + ' ' + user.surname, average: (numerator / denominator)};
}

console.log(calculateWeightedAverage(user));