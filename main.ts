radio.onReceivedString(function (receivedString) {
    arr = receivedString.split(";")
    speedLeft = parseFloat(arr[0])
    if (speedLeft < 0) {
        kitronik_klip_motor.motorOn(
            kitronik_klip_motor.Motors.Motor1, 
            kitronik_klip_motor.MotorDirection.Reverse, Math.abs(speedLeft))
    } else {
        kitronik_klip_motor.motorOn(
            kitronik_klip_motor.Motors.Motor1, 
            kitronik_klip_motor.MotorDirection.Forward, speedLeft)
    }
    speedRight = parseFloat(arr[1])
    if (speedRight < 0) {
        kitronik_klip_motor.motorOn(
            kitronik_klip_motor.Motors.Motor2, 
            kitronik_klip_motor.MotorDirection.Reverse, Math.abs(speedLeft))
    } else {
        kitronik_klip_motor.motorOn(
            kitronik_klip_motor.Motors.Motor2, 
            kitronik_klip_motor.MotorDirection.Forward, speedLeft)
    }
    //basic.showString(speedLeft.toString() + ";" + speedRight.toString())
})
let speedRight = 0
let speedLeft = 0
let arr: string[] = []
radio.setGroup(256)
