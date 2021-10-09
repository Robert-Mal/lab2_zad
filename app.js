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

function findSubjectWithWeight(user, weight) {
    return _.find(user.allGrades, (subject) => { return subject.weight === weight})
}

console.log(findSubjectWithWeight(user, 1));

const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
];

function getMails(mails) {
    let list = _.filter(mails, (mail) => { return typeof mail === 'string' })
    let re = /\w+@\w+\.\w+/i;
    console.log(_.sortBy(_.filter(list, (mail) => { return re.test(mail)})));
}

getMails(collections);