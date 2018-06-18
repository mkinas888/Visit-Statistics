const getAverage = (series, isEachWeekDayAverage = false) => {
    let finalAverage = {};
    let entriesNumber = 0;
    if(isEachWeekDayAverage) {
        finalAverage = {
            Monday: {
                averageVisits: 0
            },
            Tuesday: {
                averageVisits: 0
            },
            Wednesday: {
                averageVisits: 0
            },
            Thursday: {
                averageVisits: 0
            },
            Friday: {
                averageVisits: 0
            },
            Saturday: {
                averageVisits: 0
            },
            Sunday: {
                averageVisits: 0
            }
        }
    } else {
        finalAverage = {averageVisits: 0};
        series.forEach( elem => {
            ++entriesNumber;
            finalAverage.averageVisits += elem.visits;
        });
        finalAverage.averageVisits /= entriesNumber;
    }
    return finalAverage;
};

module.exports = getAverage;
