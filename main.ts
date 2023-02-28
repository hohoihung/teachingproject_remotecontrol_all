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
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.showIcon(IconNames.Pitchfork)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 25 && pins.analogReadPin(AnalogPin.P0) > 10) {
        radio.sendNumber(10)
        serial.writeValue("Key A", pins.analogReadPin(AnalogPin.P0))
    } else if (pins.analogReadPin(AnalogPin.P0) < 130 && pins.analogReadPin(AnalogPin.P0) > 120) {
        radio.sendNumber(11)
        serial.writeValue("Key B", pins.analogReadPin(AnalogPin.P0))
    } else if (pins.analogReadPin(AnalogPin.P0) < 210 && pins.analogReadPin(AnalogPin.P0) > 190) {
        radio.sendNumber(12)
        serial.writeValue("Key C", pins.analogReadPin(AnalogPin.P0))
    } else if (pins.analogReadPin(AnalogPin.P0) < 230 && pins.analogReadPin(AnalogPin.P0) > 220) {
        radio.sendNumber(13)
        serial.writeValue("Key D", pins.analogReadPin(AnalogPin.P0))
    } else if (pins.analogReadPin(AnalogPin.P0) < 300 && pins.analogReadPin(AnalogPin.P0) > 290) {
        radio.sendNumber(14)
        serial.writeValue("Key E", pins.analogReadPin(AnalogPin.P0))
    }
})
