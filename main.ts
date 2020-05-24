namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0 && mySprite.image == img`
. . . . f f f f f . . . 
. . f f e e e e e f . . 
. f f e e e e e e e f . 
f f f f e e e e e e e f 
f f f f f e e e 4 e e f 
f f f f e e e 4 4 e e f 
f f f f 4 4 4 4 4 e f f 
f f 4 e 4 f f 4 4 e f f 
. f 4 d 4 d d d d f f . 
. f f f 4 d d b b f . . 
. . f e e 4 4 4 e f . . 
. . 4 d d e 1 1 1 f . . 
. . e d d e 1 1 1 f . . 
. . f e e f 6 6 6 f . . 
. . . f f f f f f . . . 
. . . . f f f . . . . . 
`) {
        mySprite.vy = -160
    } else if (mySprite.vy == 0) {
        mySprite.vy = -110
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (is_facing_right) {
        projectile = sprites.createProjectileFromSprite(img`
. 5 . 
5 5 5 
. 5 . 
`, mySprite, 150, 0)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
. 5 . 
5 5 5 
. 5 . 
`, mySprite, -150, 0)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (is_facing_right) {
        projectile = sprites.createProjectileFromSprite(img`
2 2 2 2 . 
2 2 2 2 . 
`, mySprite, 150, 0)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
2 2 2 2 . 
2 2 2 2 . 
`, mySprite, -150, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . . f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. . f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. . f f e e f b f e e f f 
. . . f 4 4 f 1 e 4 e f . 
. . . f 4 4 4 4 e f f f . 
. . . f f e e e e e f . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 6 6 6 f e e f . . 
. . . . f f f f f f . . . 
. . . . . . f f f . . . . 
`)
    is_facing_right = false
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . f f f f f . . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f . . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f . . 
. f e 4 e 1 f 4 4 f . . . 
. f f f e 4 4 4 4 f . . . 
. . f e e e e e f f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . f e e f 6 6 6 f . . . 
. . . f f f f f f . . . . 
. . . . f f f . . . . . . 
`)
    is_facing_right = true
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . f f f f f . . . 
. . f f e e e e e f . . 
. f f e e e e e e e f . 
f f f f e e e e e e e f 
f f f f f e e e 4 e e f 
f f f f e e e 4 4 e e f 
f f f f 4 4 4 4 4 e f f 
f f 4 e 4 f f 4 4 e f f 
. f 4 d 4 d d d d f f . 
. f f f 4 d d b b f . . 
. . f e e 4 4 4 e f . . 
. . 4 d d e 1 1 1 f . . 
. . e d d e 1 1 1 f . . 
. . f e e f 6 6 6 f . . 
. . . f f f f f f . . . 
. . . . f f f . . . . . 
`)
})
let projectile: Sprite = null
let is_facing_right = false
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . f f f f f . . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f . . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f . . 
. f e 4 e 1 f 4 4 f . . . 
. f f f e 4 4 4 4 f . . . 
. . f e e e e e f f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . f e e f 6 6 6 f . . . 
. . . f f f f f f . . . . 
. . . . f f f . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(9)
mySprite.ay = 200
tiles.setTilemap(tiles.createTilemap(
            hex`1e000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5],
            TileScale.Sixteen
        ))
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
is_facing_right = true
let jumper = false
