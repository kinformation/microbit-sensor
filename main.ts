let volume = 0
let brightness = 0
let temperature = 0
let num = 0
basic.forever(function () {
    temperature = Math.max(input.temperature(), temperature)
    brightness = Math.max(input.lightLevel(), brightness)
    volume = Math.max(input.soundLevel(), volume)
})
basic.forever(function () {
    serial.writeValue("num", num)
    num += 1
    serial.writeValue("temperature", temperature)
    temperature = 0
    serial.writeValue("volume", volume)
    volume = 0
    serial.writeValue("brightness", brightness)
    brightness = 0
    serial.writeLine("------------------")
    basic.pause(10000)
})
