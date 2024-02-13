/*
Doc. Start
48HR Game Development

".44 Cal"
*/

kaboom({
    width:496,
    height:496,
    scale:2,
})
//setGravity(0)
loadRoot('assets/')
loadSprite('nrg', 'nrg.png')
loadSprite('cobble', 'greyBricks.png')
loadSprite('gem', 'gem.png')
loadSprite('healthpack', 'heal.png')
loadSprite('iceBricks','iceBricks.png')
loadSprite('idleFlash', '/player/flash/idle/idleFlash9.png')
// loadSprite('G19', 'G19.png')
//     loadSprite('357', '357.png')
const lvl1 = addLevel([
    // 16x16 Tiles on a 30x30 Tile Map (496x496)
    'øøøøøøøøøøøøøøøøøøøøøøøøøøøøøøø',
    'ø                 ø           ø',
    'ø b c                         ø',
    'ø                             ø',
    'ø            øøøøøø     g     ø',
    'ø    ø       ø                ø',
    'ø    ø       ø                ø',
    'ø    ø   øøøøø                ø',
    'ø    ø g ø                    ø',
    'øøøøøø   ø                    ø',
    'ø        ø                    ø',
    'ø      g ø                    ø',
    'ø        ø                    ø',
    'ø                             ø',
    'ø                    g        ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø      g                      ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø                             ø',
    'ø    g             g          ø',
    'ø                      a      ø',
    'ø                             ø',
    'ø                             ø',
    'ø                         c b ø',
    'ø                             ø',
    'øøøøøøøøøøøøøøøøøøøøøøøøøøøøøøø',],{
        tileWidth:16,
        tileHeight:16,
        tiles:{
            "ø": () => [
                sprite('cobble'),
                area(),
                body({isStatic: true})],
            "o": () => [
                sprite('iceBricks'),
                area(),
                body({isStatic: true})],
            "g": () => [
                sprite('gem'),
                scale(.4), // 69, Nice
                area(),
                body({isStatic: false})],
            "a": () => [
                sprite('healthpack'),
                scale(.25),
                area(),
                body({isStatic: false})],
            "b": () => [
                sprite('nrg'),
                scale(0.3),
                area(),
                body({isStatic: false}),]}})       
const SPEED = 55
const player = add([
    sprite('idleFlash'),
    pos(80,40),
    scale(.15),
    rotate(90),
    area(),
    body(),
    "friendly",
    "player",
    state('idle',['idle', 'walk', 'reload', 'fire', 'health','pickup', 'meleeSaw'],{
        'idle':['idle', 'walk', 'reload', 'fire', 'health', 'meleeSaw', 'pickup'],
        'walk':['idle', 'walk', 'reload', 'fire', 'health', 'meleeSaw', 'pickup'],
        'reload':['idle', 'walk', 'reload', 'fire', 'health', 'meleeSaw', 'pickup'],
        'fire':['idle', 'walk', 'reload', 'fire', 'health', 'meleeSaw', 'pickup'],
        'health':['idle', 'walk', 'reload', 'fire', 'health', 'meleeSaw', 'pickup'],
        'meleeSaw': ['idle', 'walk', 'reload', 'fire', 'health', 'meleeSaw', 'pickup'],
        'pickup': ['idle', 'walk', 'reload', 'fire', 'health', 'meleeSaw', 'pickup'],
    }),{
    direction: 'down',
    armed: false,
    melee: true,
    medmg: 1,
    prdmg: 0,}])
const cpudick = add([
    sprite('idleFlash'),
    pos(420, 455),
    scale(.15),
    area(),
    body(),
    rotate(180),
    "enemy",
    "player",
])
onKeyDown('up', () => {
    player.move(0, -SPEED)
})
onKeyDown('left', () => {
    player.move(-SPEED, 0)
})
onKeyDown('down', () => {
    player.move(0, SPEED)
})
onKeyDown('right', () => {
    player.move(SPEED, 0)
})
player.onCollide("enemy", (enemy) => {
   destroy(enemy)
})
player.onCollideUpdate("enemy", () => {})