const getAverage = (series, isEachWeekDayAverage = false) => {
    let finalAverage = {};
    let entriesNumber = 0;
    let mondayEntries = 0, tuesdayEntries = 0, wednesdayEntries = 0, thursdayEntries = 0, 
        fridayEntries = 0, saturdayEntries = 0, sundayEntries = 0;
    if(isEachWeekDayAverage) {
        finalAverage = {
            "Monday": {
                averageVisits: 0
            },
            "Tuesday": {
                averageVisits: 0
            },
            "Wednesday": {
                averageVisits: 0
            },
            "Thursday": {
                averageVisits: 0
            },
            "Friday": {
                averageVisits: 0
            },
            "Saturday": {
                averageVisits: 0
            },
            "Sunday": {
                averageVisits: 0
            }
        }
        series.forEach( elem =>{
            let whichDay = elem.date.getDay();
            switch(whichDay) {
                case 0:
                    ++sundayEntries;
                    finalAverage.Sunday.averageVisits += elem.visits;
                    break;
                case 1:
                    ++mondayEntries;
                    finalAverage.Monday.averageVisits += elem.visits;
                    break;
                case 2:
                    ++tuesdayEntries;
                    finalAverage.Tuesday.averageVisits += elem.visits;
                    break;
                case 3:
                    ++wednesdayEntries;
                    finalAverage.Wednesday.averageVisits += elem.visits;
                    break;
                case 4:
                    ++thursdayEntries;
                    finalAverage.Thursday.averageVisits += elem.visits;
                    break;
                case 5:
                    ++fridayEntries;
                    finalAverage.Friday.averageVisits += elem.visits;
                    break;
                case 6:
                    ++saturdayEntries;
                    finalAverage.Saturday.averageVisits += elem.visits;
                    break;
            }
        });
        finalAverage.Sunday.averageVisits /= sundayEntries;
        finalAverage.Monday.averageVisits /= mondayEntries;
        finalAverage.Tuesday.averageVisits /= tuesdayEntries;
        finalAverage.Wednesday.averageVisits /= wednesdayEntries;
        finalAverage.Thursday.averageVisits /= thursdayEntries;
        finalAverage.Friday.averageVisits /= fridayEntries;
        finalAverage.Saturday.averageVisits /= saturdayEntries;
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
