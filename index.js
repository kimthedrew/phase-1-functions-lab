// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    const Hq = '42'
    if (distance > Hq) {
    return distance - Hq;
    } else {
    return Hq - distance;
    }
}
function distanceFromHqInFeet(distance) {
    distanceFromHqInBlocks(distance)
    const Hq = '42'
    if (distance > Hq) {
        return (distance - Hq)*264;
    } else {
        return (Hq - distance)*264;
    }
}
function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start)*264;
    } else {
        return (start - destination)*264;
    }
    
}
function calculatesFarePrice(start, destination){
    
    let distanceinfeet = distanceTravelledInFeet(start, destination);
    if (distanceinfeet <= 400) {
        return 0;
    } else if (distanceinfeet > 400 && distanceinfeet <= 2000)  {
        return (distanceinfeet-400) * 0.02;
    } else if (distanceinfeet > 2000 && distanceinfeet <=2500) {
        return 25;
    } else if (distanceinfeet > 2500) {
        return 'cannot travel that far';
    }
}