/*
Doc. Start
48HR Game Development

".44 Cal"
*/

kaboom({
    width:512,
    height:512,
    scale:1.69,
})
//setGravity(200)
loadRoot('assets/')
loadSprite('cobble', 'cobble.png')
loadSprite('p1', 'p1.png')
loadSprite('back', 'back.jpeg')
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
                sprite('cobble'),
            ]
        }
    })
const SPEED = 69
const player = add([
    sprite('p1'),
    scale(.5),
    area(),
    pos(32,32)])
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