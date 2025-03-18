// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const HqLocation = 42;
    return Math.abs(pickupLocation - HqLocation);
}
function distanceFromHqInFeet(pickupLocation) {
    return Math.abs(pickupLocation - 42) * 264;
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264
    if(
        distance <= 400
    ) {
        return 0;
    }
    else if(
        distance > 400 && distance <= 2000
    ) {
        return (distance - 400) * 0.02
    }
    else if(
        distance > 2000 && distance <= 2500
    ) {
        return 25;
    }
    else{
        return "cannot travel that far";
    }

}