function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok");
        return;
    }

    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints <= 12) {
        console.log(`Points: ${demeritPoints}`);
    } else {
        console.log("License suspended");
    }
}

// Example usage:
const carSpeed = 80;
calculateDemeritPoints(carSpeed);
