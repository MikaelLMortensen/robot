radio.onReceivedString(function (receivedString) {
    arr = receivedString.split(";")
    speedLeft = parseFloat(arr[0])
    basic.clearScreen()
    if (speedLeft < 0){
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        # # . . .
        `)
        kitronik_motor_driver.motorOn(
            kitronik_motor_driver.Motors.Motor1, 
            kitronik_motor_driver.MotorDirection.Reverse, 
            Math.abs(speedLeft))
    } else {
        basic.showLeds(`
        # # . . .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
        kitronik_motor_driver.motorOn(
            kitronik_motor_driver.Motors.Motor1, 
            kitronik_motor_driver.MotorDirection.Forward, 
            Math.abs(speedLeft))
    }
    speedRight = parseFloat(arr[1])
    if (speedRight < 0){
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # #
        . . . # #
        `)
        kitronik_motor_driver.motorOn(
            kitronik_motor_driver.Motors.Motor2, 
            kitronik_motor_driver.MotorDirection.Reverse, 
            Math.abs(speedRight))

    } else {
        basic.showLeds(`
        . . . # #
        . . . # #
        . . . . .
        . . . . .
        . . . . .
        `)
        kitronik_motor_driver.motorOn(
            kitronik_motor_driver.Motors.Motor2, 
            kitronik_motor_driver.MotorDirection.Forward, 
            Math.abs(speedRight))
    }
})


let arr: string[] = []
let speedRight = 0
let speedLeft = 0
basic.forever(function () {
	
})
