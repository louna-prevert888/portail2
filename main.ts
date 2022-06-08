input.onButtonPressed(Button.A, function () {
    servos.P2.setAngle(20)
    pins.digitalWritePin(DigitalPin.P14, 1)
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onButtonPressed(Button.B, function () {
    servos.P2.setAngle(130)
    pins.digitalWritePin(DigitalPin.P14, 1)
})
basic.forever(function () {
	
})
