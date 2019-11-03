export default function createInputs(maxValue = 100, valuesCount = 10) {
    const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
    const getRandomSign = arg => arg > maxValue / 2 ? arg : -arg;

    const inputs = new Array(valuesCount);
    for (let i = 0; i < valuesCount; i++) {
        inputs[i] = getRandomSign(getRandomInt(maxValue));
    }
    return inputs;
};

