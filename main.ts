radio.onReceivedNumber(function (receivedNumber) {
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
