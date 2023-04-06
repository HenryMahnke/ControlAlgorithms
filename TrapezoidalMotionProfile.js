function trapezoidalMotionProfile(maxVelocity, MaxAcceleration, distance) {
    // Calculate the time to accelerate to maximum velocity
    const accelTime = maxVelocity / MaxAcceleration;
  
    // Calculate the distance traveled during acceleration
    const accelDistance = 0.5 * MaxAcceleration * Math.pow(accelTime, 2);
  
    // Calculate the time to decelerate from maximum velocity
    const decelTime = maxVelocity / MaxAcceleration;
  
    // Calculate the distance traveled during deceleration
    const decelDistance = 0.5 * MaxAcceleration * Math.pow(decelTime, 2);
  
    // Calculate the distance traveled at maximum velocity
    const constVelocityDistance = distance - accelDistance - decelDistance;
  
    // Calculate the time spent at maximum velocity
    const constVelocityTime = constVelocityDistance / maxVelocity;
  
    // Calculate the total time for the motion profile
    const totalTime = accelTime + decelTime + constVelocityTime;
  
    // Create an array to hold the position values
    const positions = [];
  
    // Calculate the position at each time step
    for (let t = 0; t <= totalTime; t += 0.01) {
      let position;
  
      if (t < accelTime) {
        // Accelerating
        position = 0.5 * MaxAcceleration * Math.pow(t, 2);
      } else if (t >= accelTime && t < (totalTime - decelTime)) {
        // Constant velocity
        position = accelDistance + (maxVelocity * (t - accelTime));
      } else {
        // Decelerating
        position = distance - (0.5 * MaxAcceleration * Math.pow((totalTime - t), 2));
      }
  
      positions.push(position);
    }
  
    return positions;
  }

console.log(trapezoidalMotionProfile(20, 10, 100))