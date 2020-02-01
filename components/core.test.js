const bestCombination = require('./core');
// normal case.
test('case 1 {t1:2, t2:1, t3:1}', () => {
    const test1 = {
        t1: 2,
        t2: 1,
        t3: 1,
    } 
    const getMax = bestCombination(test1);
    console.log(getMax);
  expect(getMax.total).toBe(13);
});

test('case 2 {t1:2, t2:2, t3:1, t4:1, t5:1}', () => {
    const test2 = {
        t1: 2,
        t2: 2,
        t3: 1,
        t4: 1,
        t5: 1,
    } 
    const getMax = bestCombination(test2);
    console.log(getMax);
    expect(getMax.total).toBe(31);
});

test('case 3 {t1:2, t2:2, t3:2, t4:1, t5:1}', () => {
    const test3 = {
        t1: 2,
        t2: 2,
        t3: 2,
        t4: 1,
        t5: 1,
    } 
    const getMax = bestCombination(test3);
    console.log(getMax);
  expect(getMax.total).toBe(40);
});


test('case 4 {t1:3, t2:2, t3:2, t4:2, t5:1}', () => {
    const test4 = {
        t1: 3,
        t2: 2,
        t3: 2,
        t4: 2,
        t5: 1,
    }
    const getMax = bestCombination(test4);
    console.log(getMax);
  expect(getMax.total).toBe(48);
});

// limit cases

test('case 5 with ceros {t1:3, t2:2, t3:2, t4:2, t5:0}', () => {
    const test4 = {
        t1: 3,
        t2: 2,
        t3: 2,
        t4: 2,
        t5: 0
    }
    const getMax = bestCombination(test4);
    console.log(getMax);
  expect(getMax.total).toBe(43);
});

// unexpected case
test('case 6 empty object {}', () => {
    const test4 = { }
    const getMax = bestCombination(test4);
    console.log(getMax);
  expect(getMax).toBe(undefined);
});

