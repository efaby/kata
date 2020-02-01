const combinations = {
    1: 3,
    2: 5,
    3: 10,
    4: 20,
    5: 25
}
let sumCombination = 0;
let combinatiosData = []
let resultArraysCombinations = [];

const getMaxPotionIterations = (data, max) => {
    let resultObject = {};
    const keysPotion = Object.keys(data);
    if (!keysPotion.length) {
        resultArraysCombinations.push({total: sumCombination, details: combinatiosData})
        return false;
    }
    keysPotion
        .forEach((ind, index) => {
            let valueInd = data[ind];
            if (index < max) {
                valueInd = valueInd -1;
            }
            if (valueInd > 0) {
                resultObject[ind] = valueInd;
            }
        });
    
    sumCombination += combinations[max];
    combinatiosData.push(`${max} pociones distintas causan un ${combinations[max]}% de daño`);
    const keysPotionResult = Object.keys(resultObject);
    const lengtTemp = keysPotionResult.length;
    let newMax =  lengtTemp < max ? lengtTemp : max;
    const sumItems = keysPotionResult.reduce((ant, act)=>{
        return ant+ resultObject[act];
    },0);

    newMax = newMax === 2 && sumItems == 2 ? 1 : newMax;
    return getMaxPotionIterations(resultObject, newMax);
}

const getBestCombinaion = (inputPotions) => {
    const data = initialFilterCeros(inputPotions);
    resultArraysCombinations = [];
    for (let index = 1; index <= Object.keys(data).length; index++) {
        sumCombination = 0;
        combinatiosData = [];
        getMaxPotionIterations(data, index);   
    }
    const res = resultArraysCombinations.sort((a, b) => a.total - b.total);
    return res[res.length-1];
}

const initialFilterCeros = (data) => {
    const arrayObject = Object.keys(data);
    const dataResult = {};
    arrayObject
        .forEach((ind, index) => {
            let valueInd = data[ind];
            if (valueInd > 0) {
                dataResult[ind] = valueInd;
            }
        });
    return dataResult;
}

module.exports = getBestCombinaion;