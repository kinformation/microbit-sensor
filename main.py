volume = 0
temperature = 0
brightness = 0
num = 0

def on_forever():
    global brightness
    brightness = max(input.light_level(), brightness)
basic.forever(on_forever)

def on_forever2():
    global num, temperature, brightness, volume
    serial.write_value("num", num)
    num += 1
    serial.write_value("temperature", temperature)
    temperature = 0
    serial.write_value("brightness", brightness)
    brightness = 0
    serial.write_value("volume", input.sound_level())
    volume = 0
    serial.write_line("------------------")
    basic.pause(10000)
basic.forever(on_forever2)

def on_forever3():
    global volume
    volume = max(input.sound_level(), volume)
basic.forever(on_forever3)

def on_forever4():
    global temperature
    temperature = max(input.temperature(), temperature)
basic.forever(on_forever4)
