/*
Doc. Start
48HR Game Development

".44 Cal"
*/

kaboom({
    width:496,
    height:496,
    scale:1.69,
})
//setGravity(200)
loadRoot('assets/')
loadSprite('p1', 'p1.png')
loadSprite('p2', 'p2.png')
loadSprite('p3', 'p3.png')
loadSprite('p4', 'p4.png')
loadRoot('tiles/')
loadSprite('cobble', 'cobble.png')
loadSprite('water', 'water1.png')
const lvl1 = addLevel([
    // 16x1 tiles
    'øøøøøøøøøøøøøøøøøøøøøøøøøøøøøøø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'øøøøøøøøøøøøøøøøøøøøøøøøøøøøøøø',],{
        tileWidth:16,
        tileHeight:16,
        tiles:{
            "ø": () => [
                sprite('cobble')],
            'x': () => [
                sprite('water1')]
        }
    })
const SPEED = 69
const p1 = add([
    sprite('p1'),
    scale(1),
    area(),
    pos(32,32)
])
const p2 = add([
    sprite('p2'),
    scale(1),
    area(),
    pos(450,450)
])
const p3 = add([
    sprite('p3'),
    scale(1),
    area(),
    pos(450,32)
])
const p4 = add([
    sprite('p4'),
    scale(1),
    area(),
    pos(32,450)
])
onKeyDown('w', () => {
    p1.move(0, -SPEED)
})
onKeyDown('a', () => {
    p1.move(-SPEED, 0)
})
onKeyDown('s', () => {
    p1.move(0, SPEED)
})
onKeyDown('d', () => {
    p1.move(SPEED, 0)
})
onKeyDown('i', () => {
    p2.move(0, -SPEED)
})
onKeyDown('j', () => {
    p2.move(-SPEED, 0)
})
onKeyDown('k', () => {
    p2.move(0, SPEED)
})
onKeyDown('l', () => {
    p2.move(SPEED, 0)
})
onKeyDown('t', () => {
    p3.move(0, -SPEED)
})
onKeyDown('f', () => {
    p3.move(-SPEED, 0)
})
onKeyDown('g', () => {
    p3.move(0, SPEED)
})
onKeyDown('h', () => {
    p3.move(SPEED, 0)
})
onKeyDown('-', () => {
    p4.move(0, -SPEED)
})
onKeyDown('=', () => {
    p4.move(0, -SPEED)
})
onKeyDown('p', () => {
    p4.move(-SPEED, 0)
})
onKeyDown('[', () => {
    p4.move(0, SPEED)
})
onKeyDown(']', () => {
    p4.move(SPEED, 0)
})