const term = require('terminal-kit').terminal;


function terminalControls() {
    term.grabInput({ mouse: 'button' });
    term.on('key', (key, matches, data) => {

        switch (key) {
            case 'UP': term.up(1); break;
            case 'DOWN': term.down(1); break;
            case 'LEFT': term.left(-1); break;
            case 'RIGHT': term.right(1); break;
            default:
                term.noFormat(
                    Buffer.isBuffer(data.code) ?
                        data.code :
                        String.fromCharCode(data.code)
                );
                break;
        }

        if (key === 'ESCAPE') {
            process.exit();
        }
    });
    term.on('mouse', (name, data) => {
        // console.log(name)
        if ((name.endsWith('MOUSE_WHEEL_'))) {
            term.moveTo(data.x, data.y);
        }
        if (data.y === 1 && (data.x >= 0 && data.x < 6)) {
            console.clear()
            term.bell()
            process.exit()
        }
    })

}

function startGame() {
    term.red('EXIT')
    term.windowTitle('Adventure Game')
    terminalControls()


}


console.clear();
startGame()
