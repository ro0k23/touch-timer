let time = 0
let start = 0
input.onLogoEvent(TouchButtonEvent.Released, function () {
    time = input.runningTime() - start
    basic.showNumber(Math.idiv(time, 1000))
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Heart)
})
