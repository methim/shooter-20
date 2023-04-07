namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
    export const enemy3 = SpriteKind.create()
}
namespace StatusBarKind {
    export const Enemyhealth2 = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mySprite.ay = 0
    controller.moveSprite(mySprite, 100, 100)
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(24, 23))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.sayText("Ogranda(press a to start.", 100, false)
    if (controller.A.isPressed()) {
        mySprite.ay = 500
        controller.moveSprite(mySprite, 150, 0)
        scroller.scrollBackgroundWithSpeed(0, 0)
        scene.setBackgroundImage(assets.image`Scary cave`)
        tiles.setCurrentTilemap(tilemap`level8`)
        mySprite.setPosition(3, 77)
        mySprite3 = sprites.create(assets.image`load`, SpriteKind.enemy3)
        mySprite3.setPosition(124, 55)
        scaling.scaleToPercent(mySprite3, 160, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        scaling.scaleToPercent(mySprite3, 180, ScaleDirection.Vertically, ScaleAnchor.Middle)
        statusbar3 = statusbars.create(20, 4, StatusBarKind.Enemyhealth2)
        statusbar3.attachToSprite(mySprite3)
        statusbar3.value = 1000000000000000000
        animation.runImageAnimation(
        mySprite3,
        assets.animation`Ogar`,
        100,
        true
        )
        for (let index = 0; index < 4; index++) {
            animation.runImageAnimation(
            mySprite3,
            assets.animation`Ogar`,
            100,
            true
            )
            pause(1000)
        }
        animation.runImageAnimation(
        mySprite3,
        assets.animation`Ogar`,
        100,
        true
        )
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -230
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (statusbar2.value == 100) {
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight))) {
            projectile2 = sprites.createProjectileFromSprite(assets.image`Boom`, mySprite, 100, 0)
            statusbar2.value = 0
            music.beamUp.play()
            projectile2.startEffect(effects.spray)
        }
    }
    if (statusbar2.value == 100) {
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft))) {
            projectile2 = sprites.createProjectileFromSprite(assets.image`boom`, mySprite, -100, 0)
            statusbar2.value = 0
            music.beamUp.play()
            projectile2.startEffect(effects.spray)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.vy = 230
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    mySprite2.destroy(effects.spray, 500)
    mySprite.setPosition(13, 91)
    scene.setBackgroundImage(assets.image`clouds`)
    tiles.setCurrentTilemap(tilemap`level7`)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile2, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    pause(1000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy3, function (sprite, otherSprite) {
    statusbar3.value += -1
    scene.cameraShake(4, 100)
    projectile.destroy()
    music.thump.play()
    statusbar2.value += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.vy = -230
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -1
    scene.cameraShake(4, 100)
    music.thump.play()
    projectile.destroy()
    statusbar2.value += 1
})
let projectile: Sprite = null
let projectile2: Sprite = null
let statusbar3: StatusBarSprite = null
let mySprite3: Sprite = null
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Sky`)
tiles.setCurrentTilemap(tilemap`level4`)
mySprite = sprites.create(assets.image`Loader`, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 0)
scaling.scaleByPercent(mySprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
scene.cameraFollowSprite(mySprite)
characterAnimations.loopFrames(
mySprite,
assets.animation`C1`,
200,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`C2`,
200,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`C3`,
200,
characterAnimations.rule(Predicate.NotMoving)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`C4`,
500,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`C5`,
200,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
)
mySprite.ay = 500
mySprite2 = sprites.create(assets.image`Easy`, SpriteKind.Enemy)
characterAnimations.loopFrames(
mySprite2,
assets.animation`Grrr`,
500,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite2,
assets.animation`Grrrrr`,
500,
characterAnimations.rule(Predicate.MovingRight)
)
mySprite2.ay = 500
scaling.scaleToPercent(mySprite2, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
mySprite.setPosition(139, 86)
statusbar = statusbars.create(100, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite2)
statusbar.value = 10000
info.setLife(3)
statusbar2 = statusbars.create(20, 4, StatusBarKind.Magic)
statusbar2.attachToSprite(mySprite)
statusbar.setColor(2, 15)
game.setDialogCursor(assets.image`check mark`)
game.splash("wasd and arrow keys to move")
game.splash("'Z' to shoot and B for a specail attack")
mySprite2.follow(mySprite, 20)
mySprite.setStayInScreen(true)
scroller.scrollBackgroundWithSpeed(-5, 0)
forever(function () {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight)) && controller.A.isPressed()) {
        projectile = sprites.createProjectileFromSprite(assets.image`Pew`, mySprite, 190, 0)
        projectile.startEffect(effects.fire, 100)
        music.pewPew.play()
        pause(300)
    }
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft)) && controller.A.isPressed()) {
        projectile = sprites.createProjectileFromSprite(assets.image`pew`, mySprite, -190, 0)
        projectile.startEffect(effects.fire, 100)
        music.pewPew.play()
        pause(300)
    }
})
forever(function () {
    music.playMelody("C5 B C5 B C5 B A G ", 120)
})
forever(function () {
    statusbar2.value += 1
})
