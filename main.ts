input.onButtonPressed(Button.A, function () {
    makerbit.runMp3Command(Mp3Command.PLAY_NEXT_TRACK)
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.B, function () {
    makerbit.playMp3Track(2, 2)
    basic.showArrow(ArrowNames.South)
})
radio.setGroup(8)
makerbit.connectSerialMp3(DigitalPin.P12, DigitalPin.P13)
makerbit.setMp3Volume(22)
serial.redirectToUSB()
pins.setPull(DigitalPin.P10, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
basic.showIcon(IconNames.Pitchfork)
basic.forever(function () {
    serial.writeValue("InfraRed Obstacle1 ", pins.digitalReadPin(DigitalPin.P12))
    serial.writeValue("InfraRed Obstacle2 ", pins.digitalReadPin(DigitalPin.P13))
    serial.writeValue("InfraRed Obstacle3 ", pins.digitalReadPin(DigitalPin.P14))
    serial.writeValue("InfraRed Obstacle4 ", pins.digitalReadPin(DigitalPin.P15))
    basic.pause(2000)
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P10) < 25 && pins.analogReadPin(AnalogPin.P10) > 10) {
        radio.sendNumber(10)
        serial.writeValue("Key A", pins.analogReadPin(AnalogPin.P10))
    } else if (pins.analogReadPin(AnalogPin.P10) < 130 && pins.analogReadPin(AnalogPin.P10) > 120) {
        radio.sendNumber(11)
        serial.writeValue("Key B", pins.analogReadPin(AnalogPin.P10))
    } else if (pins.analogReadPin(AnalogPin.P10) < 210 && pins.analogReadPin(AnalogPin.P10) > 190) {
        radio.sendNumber(12)
        serial.writeValue("Key C", pins.analogReadPin(AnalogPin.P10))
    } else if (pins.analogReadPin(AnalogPin.P10) < 230 && pins.analogReadPin(AnalogPin.P10) > 220) {
        radio.sendNumber(13)
        serial.writeValue("Key D", pins.analogReadPin(AnalogPin.P10))
    } else if (pins.analogReadPin(AnalogPin.P10) < 300 && pins.analogReadPin(AnalogPin.P10) > 290) {
        radio.sendNumber(14)
        serial.writeValue("Key E", pins.analogReadPin(AnalogPin.P10))
    }
})
