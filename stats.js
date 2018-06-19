const getAverage = (series, isEachWeekDayAverage = false) => {
    let finalAverage = {};
    let entriesNumber = 0;
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if(isEachWeekDayAverage) {
        // if none entries in series the average is zero
        finalAverage = {
            'Monday': {
                averageVisits: 0
            },
            'Tuesday': {
                averageVisits: 0
            },
            'Wednesday': {
                averageVisits: 0
            },
            'Thursday': {
                averageVisits: 0
            },
            'Friday': {
                averageVisits: 0
            },
            'Saturday': {
                averageVisits: 0
            },
            'Sunday': {
                averageVisits: 0
            }
        }
        // check each week day
        for(let i = 0; i < 7; i++) {
            entriesNumber = 0;
            for(let j = 0; j < series.length; j++) {
                // execute if week day is correct
                if(series[j].date.getDay() === i) {
                    ++entriesNumber;
                    finalAverage[weekDays[i]].averageVisits += series[j].visits;
                }
            }
            // if any entries that day 
            if(entriesNumber !== 0) {
                finalAverage[weekDays[i]].averageVisits /= entriesNumber;
            }
        }
    } else {
        finalAverage = {
            averageVisits: 0
        };
        // loop through all entries
        series.forEach( elem => {
            ++entriesNumber;
            finalAverage.averageVisits += elem.visits;
        });
        // if series isn't empty
        if(entriesNumber !== 0) {
            finalAverage.averageVisits /= entriesNumber;
        }
    }
    return finalAverage;
};

module.exports = getAverage;
