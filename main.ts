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
basic.showIcon(IconNames.Pitchfork)
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
        radio.sendNumber(10)
    } else if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
        radio.sendNumber(11)
    } else if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        radio.sendNumber(12)
    } else if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P0)) {
        radio.sendNumber(13)
    } else if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
        radio.sendNumber(14)
    }
})
