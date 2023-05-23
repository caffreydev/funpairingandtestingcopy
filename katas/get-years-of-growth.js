function getYearsOfGrowth(startPop, endPop, growthPercentage, netMigration ) {
    let years = 0;
    let currentPop = startPop; 

    while (currentPop < endPop) {
        const growth = (currentPop * growthPercentage) / 100;
        currentPop += growth + netMigration;
        years++;
    }
    return years;
}

module.exports = getYearsOfGrowth;
 