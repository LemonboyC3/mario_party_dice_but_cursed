randint2 = 0
_01 = images.create_big_image("""
    . # # # . . . # . .
    . # . # . . # # . .
    . # . # . . . # . .
    . # . # . . . # . .
    . # # # . . # # # .
    """)
_23 = images.create_big_image("""
    . # # # . . # # # .
    . . . # . . . . # .
    . # # # . . # # # .
    . # . . . . . . # .
    . # # # . . . # # .
    """)
_45 = images.create_big_image("""
    . # . # . . # # # .
    . # . # . . # . . .
    . # # # . . # # # .
    . . . # . . . . # .
    . . . # . . # # # .
    """)
_67 = images.create_big_image("""
    . # # # . . # # # .
    . # . . . . . . # .
    . # # # . . . . # .
    . # . # . . . . # .
    . # # # . . . . # .
    """)
_89 = images.create_big_image("""
    . # # # . . # # # .
    . # . # . . # . # .
    . # # # . . # # # .
    . # . # . . . . # .
    . # # # . . # # # .
    """)
_10 = images.create_image("""
    # . # # #
    # . # . #
    # . # . #
    # . # . #
    # . # # #
    """)

def on_forever():
    global randint2
    randint2 = randint(1, 6)
    if randint2 == 1:
        _01.show_image(Math.map(randint(0, 1), 0, 1, 0, 5), 60)
    elif randint2 == 2:
        _23.show_image(Math.map(randint(0, 1), 0, 1, 0, 5), 60)
    elif randint2 == 3:
        _45.show_image(Math.map(randint(0, 1), 0, 1, 0, 5), 60)
    elif randint2 == 4:
        _67.show_image(Math.map(randint(0, 1), 0, 1, 0, 5), 60)
    elif randint2 == 5:
        _89.show_image(Math.map(randint(0, 1), 0, 1, 0, 5), 60)
    else:
        _10.show_image(0, 60)
basic.forever(on_forever)
