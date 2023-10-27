function calculateCropSuitability(AQI, WQI, crop) {
    // Define suitability criteria for air quality and water quality.
    const airQualityThreshold = 50; // Adjust as needed.
    const waterQualityThreshold = 70; // Adjust as needed.

    // Calculate suitability scores based on AQI and WQI.
    const airQualityScore = AQI <= airQualityThreshold ? 100 : 100 - ((AQI - airQualityThreshold) * 2);
    const waterQualityScore = WQI >= waterQualityThreshold ? 100 : 100 - ((waterQualityThreshold - WQI) * 2);

    // Calculate the overall suitability score.
    const overallSuitability = (airQualityScore + waterQualityScore) / 2;

    return {
        crop,
        airQualityScore,
        waterQualityScore,
        overallSuitability,
    };
}
