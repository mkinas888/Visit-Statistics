const getAverage = require('./stats');

describe('getAverage', () => {
  let oneWeek = [
    { date: new Date('2018-01-01'), visits: 32 },
    { date: new Date('2018-01-02'), visits: 82 },
    { date: new Date('2018-01-03'), visits: 74 },
    { date: new Date('2018-01-04'), visits: 35 },
    { date: new Date('2018-01-05'), visits: 54 },
    { date: new Date('2018-01-06'), visits: 64 },
    { date: new Date('2018-01-07'), visits: 44 },
  ];

  test('average of one week', () => {
    expect(getAverage(oneWeek)).toEqual({
      averageVisits: 55,
    });
  });

  test('week days average of one week', () => {
    expect(getAverage(oneWeek, true)).toEqual({
      Monday: {
        averageVisits: 32,
      },
      Tuesday: {
        averageVisits: 82,
      },
      Wednesday: {
        averageVisits: 74,
      },
      Thursday: {
        averageVisits: 35,
      },
      Friday: {
        averageVisits: 54,
      },
      Saturday: {
        averageVisits: 64,
      },
      Sunday: {
        averageVisits: 44,
      },
    });
  });
});

describe('getAverage', () => {
  let firstWeek = [
    { date: new Date('2018-01-01'), visits: 32 },
    { date: new Date('2018-01-02'), visits: 82 },
    { date: new Date('2018-01-03'), visits: 74 },
    { date: new Date('2018-01-04'), visits: 38 },
    { date: new Date('2018-01-05'), visits: 54 },
    { date: new Date('2018-01-06'), visits: 64 },
    { date: new Date('2018-01-07'), visits: 44 },
  ];
  let secondWeek = [
    { date: new Date('2018-01-13'), visits: 24 },
    { date: new Date('2018-01-14'), visits: 56 },
    { date: new Date('2018-01-12'), visits: 94 },
    { date: new Date('2018-01-11'), visits: 32 },
    { date: new Date('2018-01-10'), visits: 68 },
    { date: new Date('2018-01-09'), visits: 84 },
    { date: new Date('2018-01-08'), visits: 52 },
  ];

  let series = firstWeek.concat(secondWeek);

  test('average of series', () => {
    expect(getAverage(series)).toEqual({
      averageVisits: 57,
    });
  });

  test('week days average of series', () => {
    expect(getAverage(series, true)).toEqual({
      Monday: {
        averageVisits: 42,
      },
      Tuesday: {
        averageVisits: 83,
      },
      Wednesday: {
        averageVisits: 71,
      },
      Thursday: {
        averageVisits: 35,
      },
      Friday: {
        averageVisits: 74,
      },
      Saturday: {
        averageVisits: 44,
      },
      Sunday: {
        averageVisits: 50,
      },
    });
  });
});

describe('getAverage', () => {
  let firstWeek = [
    { date: new Date('2018-01-01'), visits: 34 },
    { date: new Date('2018-01-03'), visits: 74 },
    { date: new Date('2018-01-04'), visits: 38 },
    { date: new Date('2018-01-05'), visits: 54 },
    { date: new Date('2018-01-06'), visits: 64 },
    { date: new Date('2018-01-07'), visits: 44 },
  ];
  let secondWeek = [
    { date: new Date('2018-01-06'), visits: 24 },
    { date: new Date('2018-01-07'), visits: 56 },
    { date: new Date('2018-01-04'), visits: 32 },
    { date: new Date('2018-01-03'), visits: 68 },
    { date: new Date('2018-01-02'), visits: 84 },
    { date: new Date('2018-01-01'), visits: 52 },
  ];

  let series = firstWeek.concat(secondWeek);

  test('average of series with the same date', () => {
    expect(getAverage(series)).toEqual({
      averageVisits: 52,
    });
  });

  test('week days average of series with the same date', () => {
    expect(getAverage(series, true)).toEqual({
      Monday: {
        averageVisits: 43,
      },
      Tuesday: {
        averageVisits: 84,
      },
      Wednesday: {
        averageVisits: 71,
      },
      Thursday: {
        averageVisits: 35,
      },
      Friday: {
        averageVisits: 54,
      },
      Saturday: {
        averageVisits: 44,
      },
      Sunday: {
        averageVisits: 50,
      },
    });
  });
});

describe('getAverage', () => {
  let firstWeek = [
    { date: new Date('2018-01-01'), visits: 34 },
    { date: new Date('2018-01-03'), visits: 74 },
    { date: new Date('2018-01-04'), visits: 38 },
  ];
  let secondWeek = [
    { date: new Date('2018-01-10'), visits: 68 },
    { date: new Date('2018-01-09'), visits: 84 },
    { date: new Date('2018-01-08'), visits: 52 },
    { date: new Date('2018-01-15'), visits: 70 },
  ];

  let series = firstWeek.concat(secondWeek);

  test('average of series without some week days', () => {
    expect(getAverage(series)).toEqual({
      averageVisits: 60,
    });
  });

  test('week days average of series without some week days', () => {
    expect(getAverage(series, true)).toEqual({
      Monday: {
        averageVisits: 52,
      },
      Tuesday: {
        averageVisits: 84,
      },
      Wednesday: {
        averageVisits: 71,
      },
      Thursday: {
        averageVisits: 38,
      },
      Friday: {
        averageVisits: 0,
      },
      Saturday: {
        averageVisits: 0,
      },
      Sunday: {
        averageVisits: 0,
      },
    });
  });
});

describe('getAverage', () => {
  let week = [];

  test('average of empty series', () => {
    expect(getAverage(week)).toEqual({
      averageVisits: 0,
    });
  });

  test('week days average of empty series', () => {
    expect(getAverage(week, true)).toEqual({
      Monday: {
        averageVisits: 0,
      },
      Tuesday: {
        averageVisits: 0,
      },
      Wednesday: {
        averageVisits: 0,
      },
      Thursday: {
        averageVisits: 0,
      },
      Friday: {
        averageVisits: 0,
      },
      Saturday: {
        averageVisits: 0,
      },
      Sunday: {
        averageVisits: 0,
      },
    });
  });
});



