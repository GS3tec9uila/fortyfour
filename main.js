/*
Doc. Start
48HR Game Development

".44 Cal"
*/

kaboom({
    width:420 + 69,
    height:420 + 69,
    scale:1.0,
})
setGravity(200)
loadRoot('assets/')
loadSprite('p1', 'p1.png')
loadSprite('back', 'back.jpeg')
const back = add([
    sprite('back'),
    area(),
    pos(0,0),
    area(),
    body({isStatic: true}),
    {speed: 69},
])
const map = addLevel([
    '                               ',
    '                               ',
    '                               ',
    'ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ',],{
    tileWidth:16,
    tileHeight:16,
    tiles: {
    ƒ: () => [
        rect(16, 16),
        opacity(0),
        area(),
        body({isStatic:true})]}})
const SPEED = 69
const player = add([
    sprite('p1'),
    scale(.5),
    body(),
    area({shape: new Rect(vec2(0), 26, 32), offset: vec2(38,32)}),
    pos(0,0)])
onKeyDown('w', () => {
    player.move(0, -SPEED)
})
onKeyDown('a', () => {
    player.move(-SPEED, 0)
})
onKeyDown('s', () => {
    player.move(0, SPEED)
})
onKeyDown('d', () => {
    player.move(SPEED, 0)
})