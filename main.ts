namespace SpriteKind {
    export const Monster = SpriteKind.create()
    export const FakeMonsters = SpriteKind.create()
    export const NormalThing = SpriteKind.create()
}
/**
 * On game start
 */
/**
 * Battery goes to zero
 * 
 * flashlight off (A button released)
 */
// setTilemap -- do not delete.
function setTilemap () {
    tiles.loadMap(tiles.createMap(tilemap`level`))
    tiles.setTilemap(tilemap`level_0`)
}
// Do not delete, win condition for vivian.
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile7`, function (sprite, location) {
    turnOffTheDark()
    tiles.placeOnRandomTile(sprite, assets.tile`tile3`)
    sprite.setImage(img`
        ....................
        ...................d
        ....fff............d
        ..fffddd...........d
        .ffdfddfd2222222fffd
        .ffdddddf2222222fffd
        .ffdfddfd2222222fffd
        .ffdfdddd2222222fffd
        .ffdddddd2222222fffd
        ..fdddddd22dddd2fffd
        ..ffdddd............
        ...ffff.............
        ....fff.............
        ....ff..............
        ....f...............
        ....................
        `)
    sprite.lifespan = 2000
    safeAndSound = true
    controller.moveSprite(sprite, 0, 0)
})
/**
 * turnOnTheDark: add your code below
 */
/**
 * makeDualityMonster: add your code below
 * 
 * createAllMonsters: add your code below
 */
// Vivian touches a monster
// flashlight on
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // ninja add code here
    if (batteryLife.value > 0) {
        vivian.setImage(img`
            . f f f f f f f f f f f f . . . 
            f f f . f f f f f d d f f f . . 
            f f . f f f f f d d d d f f . . 
            f f . f f f f d d d d d d d f . 
            . . . f f f d d d f d d d f f 5 
            . . . f f d d d d d d d d d 5 . 
            . . . . f d d d d d d d d 5 f . 
            . . . . f 2 2 2 2 2 2 2 5 2 f . 
            . . . . f 2 2 2 2 2 2 2 5 2 f . 
            . . . . f 2 d d 2 2 2 5 2 2 f . 
            . . . . f 2 d d 2 2 5 2 2 2 f . 
            . . . . f 2 2 d 8 4 2 2 2 2 f . 
            . . . . . f 8 d 8 4 5 5 5 5 5 5 
            . . . . . f f f 8 4 f f f f f . 
            . . . . . . f f f f 5 5 f . . . 
            . . . . . . f d d d f f 5 5 d . 
            `)
    }
})
// redoTile -- do not delete.
function redoTile (tileImage: Image) {
    copiedTile = tileImage.clone()
    copiedTile.replace(12, 13)
    copiedTile.replace(11, 1)
    copiedTile.replace(14, 4)
    tiles.coverAllTiles(tileImage, copiedTile)
}
// turnOffTheDark: ninja must complete
function turnOffTheDark () {
    // add code here
    redoTile(assets.tile`tile1`)
    redoTile(assets.tile`tile2`)
    redoTile(assets.tile`tile3`)
    redoTile(assets.tile`tile4`)
    redoTile(assets.tile`tile5`)
    redoTile(assets.tile`tile6`)
    redoTile(assets.tile`tile7`)
    darkIsOff = true
}
// Vivian wins, do not delete
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(true)
})
let darkIsOff = false
let copiedTile: Image = null
let safeAndSound = false
let batteryLife: StatusBarSprite = null
let vivian: Sprite = null
let monster = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Monster)
let daytimeMonster = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.FakeMonsters)
let nighttimeMonster = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.FakeMonsters)
// Images that ninjas can use in makeDualityMonster
let monster1 = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f f 2 f f 2 f f . . . . . 
    . . f f 2 2 f f 2 2 f . . . . . 
    . . f f f f f f f f f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f . f f f f . f . . . . . 
    . f f f . f f f f . f f . . . . 
    . f . . . f f f f . . f f . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f f . . f f . . . . . . 
    `
let monster2 = img`
    . . . . . . . . . . . . . . . . 
    . . d d d . . . d d . . d . . . 
    . . . . d . . d d . . . d . . . 
    . . . . d d . d . . d d . . . . 
    d d d . . d d d . d . . . . d d 
    d d d d 8 d d 8 d d . d d d d . 
    . . . d d d d d d d d d . . . . 
    . d d d 8 d 8 d d d d . . . . . 
    d d . d d d d d d 8 d . . . . . 
    d d . . f f f d d d d . . . . . 
    . d . . . e e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    `
let monster3 = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 2 . . . . . 
    . . . . . . . 2 c c 2 2 2 . . . 
    . . . . . . . 2 d c c c 2 . . . 
    . . 2 2 2 2 2 2 d d d c 2 . . . 
    . . 2 2 c d d d d d d c 2 . . . 
    . . 2 c c d d d d d d c 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . f 5 5 f f 5 5 f . . . . 
    . . . . f 5 f f f f 5 f . . . . 
    . . . . f f f a a f f f . . . . 
    . . . . . . a a a a . . . . . . 
    . . . . . . a a a a . . . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . a a . a a . a a . . . . 
    . . . . a . . a . . . a . . . . 
    `
let monster4 = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f e e e e f f f . . . 
    . . . f f e e e e e e f f . . . 
    . . . f e 2 2 e e 2 2 e f . . . 
    . . . f e e 2 e e 2 e e f . . . 
    . f f f e e e e e e e e f f f . 
    . f f f e e e 2 2 e e e f f f . 
    . f f f e e e e e e e e f f f . 
    . . . . . . . f f . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f . f f . f . . . . . 
    . . . . . f . f f . f . . . . . 
    . . . . . f . f f . f . . . . . 
    . . . . . . . f f . . . . . . . 
    `
let normalThing1 = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . f f f f f f f f f f f f f . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . f f . f f f f f f f . f f . 
    . . 2 2 . 2 2 2 2 2 2 2 . 2 2 . 
    . . f f . f f f f f f f . f f . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    `
let normalThing2 = img`
    . . . . . . . . . . . . . . . . 
    . d d d d d d d d d d d d . . . 
    . . d d d d d d d d d d . . . . 
    . . . d d d d d d d d . . . . . 
    . . . . d d d d d d . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . . . . d d . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    `
let normalThing3 = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
let normalThing4 = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 d d d d 5 5 5 . . . 
    . . . 5 5 d d d d d d 5 5 . . . 
    . . . 5 d 9 d d d d 9 d 5 . . . 
    . . . 5 d d d d d d d d 5 . . . 
    . 5 5 5 d d 3 3 3 3 d d 5 5 5 . 
    . 5 5 5 d d d 3 3 d d d 5 5 5 . 
    . 5 5 5 d d d d d d d d 5 5 5 . 
    . . . . . . . c c . . . . . . . 
    . . . . . c c c c c c . . . . . 
    . . . . . c . c c . c . . . . . 
    . . . . . c . c c . c . . . . . 
    . . . . . c . c c . c . . . . . 
    . . . . . . . c c . . . . . . . 
    `
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888811111111111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888881111111111111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888111111111bb1111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888881111111111b1b111111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888811111111111bbb111bb1111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888881111111111111bb11bbb1111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888881111111111111bbbbb1b1111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888811111111111111bb11bbb1111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888811111111111111b1111bb1111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888111111111111111b1111b11111111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888111111111111111b111b1bb111111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888811111bb11111111bbbbb11bb11111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888811111bb11111b1111b11111b11111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888811111bbbb111b1111b11111b11111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888111111bb111111111bb11111b1111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888811111111111111111b11b111bbb11888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888881bb1111111111111b11b1bb1bbb11888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888811b1111111111111b1bb1b11bbb11888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888811111111111111bbbb1b1b11bb111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888111111111bb111bbb11bbbbbb1111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888811111111bb111bbbbb1111111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888111111111111111bbb1111111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888111111111111111111111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888111b11111111111111111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888811bb11111111b1111111111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888811111111111bb111111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888111111111111111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888881111111111111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888811111111111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
setTilemap()
vivian = sprites.create(img`
    . f f f f f f f f f f f f . . . 
    f f f . f f f f f b b f f f . . 
    f f . f f f f f b b b b f f . . 
    f f . f f f f b b b b b b b f . 
    . . . f f f b b b f b b b f f . 
    . . . f f b b b b b b b b b f . 
    . . . . f b b b b b b b b b f . 
    . . . . f c c c c c c c c c f . 
    . . . . f c c c c c c c c c f . 
    . . . . f c b b c c c c c c f . 
    . . . . f c b b c c c c c c f . 
    . . . . f c c b 8 8 c c c c f . 
    . . . . . f 8 b 8 8 c c c c f . 
    . . . . . f f f 8 8 f f f f f . 
    . . . . . 6 f f f f f f f . . . 
    . . . . . . f b b b f f b b b . 
    `, SpriteKind.Player)
controller.moveSprite(vivian, 80, 60)
tiles.placeOnRandomTile(vivian, assets.tile`tile3`)
scene.cameraFollowSprite(vivian)
// must create this function before code can run.
// createAllMonsters()
batteryLife = statusbars.create(20, 4, StatusBarKind.Health)
batteryLife.attachToSprite(vivian)
batteryLife.setColor(6, 15)
// Update battery lifespan
game.onUpdate(function () {
	
})
