sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    Frank = sprites.create(assets.image`Frank`, SpriteKind.Food)
    Frank.setPosition(randint(1, 160), 120)
})
info.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER!")
    game.setGameOverEffect(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(Frank)
    info.changeScoreBy(6)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Frank: Sprite = null
let Bucky_Barnes = sprites.create(assets.image`Bucky Barnes`, SpriteKind.Player)
Bucky_Barnes.setStayInScreen(true)
controller.moveSprite(Bucky_Barnes)
Bucky_Barnes.setPosition(130, 31)
Frank = sprites.create(assets.image`Frank`, SpriteKind.Food)
Frank.setPosition(121, 83)
Frank.setStayInScreen(true)
let Hydra = sprites.create(assets.image`Hydra`, SpriteKind.Enemy)
Hydra.setStayInScreen(true)
Hydra.follow(Bucky_Barnes, 20)
Hydra.setPosition(20, 19)
info.setLife(5)
