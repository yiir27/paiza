const lines = [
    '100 40 2000'
]

const brakingDistance = (distanceData) => {
    const [weight , speed, brakeStrong] = distanceData.split(' ');
    return Math.floor(weight * speed ** 2 / (2 * brakeStrong));
}

console.log(brakingDistance(lines[0]));

//shinnjiさん
class Car {
    constructor([ m, v, f ]) {
        this.mass         = m
        this.velocity     = v
        this.brakingForce = f
    }
    
    get kineticEnergy() {
        return 1/2 * this.mass * this.velocity**2
    }
    get brakingDistance() {
        return this.kineticEnergy / this.brakingForce
    }
    showBrakingDistanceAsInt() {
        console.log(~~this.brakingDistance)
    }
}

const car = new Car(lines[0].split(' ').map(Number))
car.showBrakingDistanceAsInt();