const multiplayer = new Multiplayer(document);
const localTetris = multiplayer.createPlayer();
const connection = new Connection();
connection.connect("ws://localhost:8080")

const keyListener = (event) => {
    [
        [37, 39, 81, 87, 40],
    ].forEach((key, index) => {

        const player = localTetris.player;
        let btn = event.keyCode
        if (event.type === "keydown") {
            if (btn === key[0]) {
                player.move(-1)
            }
            if (btn === key[1]) {
                player.move(1)
            }
            if (btn === key[2]) {
                player.rotate(-1);
            }
            if (btn === key[3]) {
                player.rotate(1)
            }
        }
        if (btn === key[4]) {
            if (event.type === "keydown") {
                if (player.dropInterval !== player.dropFast) {
                    player.drop();
                    player.dropInterval = player.dropFast;
                }
               
            } else {
                player.dropInterval = player.dropSlow
            }

        }
    })

}

document.addEventListener('keydown', keyListener)
document.addEventListener('keyup', keyListener)

