let randint2 = 0
let _01 = images.createBigImage(`
    . # # # . . . # . .
    . # . # . . # # . .
    . # . # . . . # . .
    . # . # . . . # . .
    . # # # . . # # # .
    `)
let _23 = images.createBigImage(`
    . # # # . . # # # .
    . . . # . . . . # .
    . # # # . . # # # .
    . # . . . . . . # .
    . # # # . . . # # .
    `)
let _45 = images.createBigImage(`
    . # . # . . # # # .
    . # . # . . # . . .
    . # # # . . # # # .
    . . . # . . . . # .
    . . . # . . # # # .
    `)
let _67 = images.createBigImage(`
    . # # # . . # # # .
    . # . . . . . . # .
    . # # # . . . . # .
    . # . # . . . . # .
    . # # # . . . . # .
    `)
let _89 = images.createBigImage(`
    . # # # . . # # # .
    . # . # . . # . # .
    . # # # . . # # # .
    . # . # . . . . # .
    . # # # . . # # # .
    `)
let _10 = images.createImage(`
    # . # # #
    # . # . #
    # . # . #
    # . # . #
    # . # # #
    `)
basic.forever(function () {
    while (!(input.isGesture(Gesture.SixG))) {
        randint2 = randint(1, 6)
        if (randint2 == 1) {
            _01.showImage(Math.map(randint(0, 1), 0, 1, 0, 5), 60)
        } else if (randint2 == 2) {
            _23.showImage(Math.map(randint(0, 1), 0, 1, 0, 5), 60)
        } else if (randint2 == 3) {
            _45.showImage(Math.map(randint(0, 1), 0, 1, 0, 5), 60)
        } else if (randint2 == 4) {
            _67.showImage(Math.map(randint(0, 1), 0, 1, 0, 5), 60)
        } else if (randint2 == 5) {
            _89.showImage(Math.map(randint(0, 1), 0, 1, 0, 5), 60)
        } else {
            _10.showImage(0, 60)
        }
    }
})
