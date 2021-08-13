let brightness = 0
let volume = 0
let temperature = 0
let num = 0
num += 1
basic.forever(function () {
    serial.writeValue("num", num)
    num += 1
    serial.writeValue("temperature", temperature)
    temperature = 0
    serial.writeValue("volume", input.soundLevel())
    volume = 0
    serial.writeValue("brightness", brightness)
    brightness = 0
    serial.writeLine("------------------")
    basic.pause(10000)
})
basic.forever(function () {
    brightness = Math.max(input.lightLevel(), brightness)
})
basic.forever(function () {
    volume = Math.max(input.soundLevel(), volume)
})
basic.forever(function () {
    temperature = Math.max(input.temperature(), temperature)
})
