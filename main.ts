function soinua2 () {
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(100)
}
function soinua1 () {
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(100)
}
if (input.buttonIsPressed(Button.A)) {
    soinua1()
}
if (input.buttonIsPressed(Button.B)) {
    soinua2()
}
