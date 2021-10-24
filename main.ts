

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(0, 1)
    led.plot(0, 2)
    led.plot(0, 3)
    led.plot(0, 4)
    led.plot(1, 4)
    led.plot(2, 4)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(0, 1)
    led.plot(0, 2)
    led.plot(0, 3)
    led.plot(0, 4)
    led.plot(2, 0)
    led.plot(1, 0)
    led.plot(2, 2)
    led.plot(1, 2)
})
