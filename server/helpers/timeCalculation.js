module.exports = (bike, policeman) => {
    let bikeCoefficient = 0;
    if (bike.color !== 'black') {
        bikeCoefficient += 25
    } else bikeCoefficient += 10;
    if (bike.price >= 10000) {
        bikeCoefficient += 25
    } else bikeCoefficient += 10;
    const totalCoefficient = (policeman.skill + bikeCoefficient) / 2;
    return totalCoefficient;
}
