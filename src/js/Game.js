import goblinImg from '../img/goblin.png';

export default class Game {
    constructor() {
        this.boardSize = 4;
        this.gameContainer = document.getElementById('game-container');
        this.cells = [];
        this.character = null;
        this.currentPosition = -1;
    }

    init() {
        this.drawBoard();
        this.createCharacter();
        setInterval(() => this.moveCharacter(), 1000);
    }

    drawBoard() {
        for (let i = 0; i < this.boardSize ** 2; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            this.gameContainer.appendChild(cell);
            this.cells.push(cell);
        }
    }

    createCharacter() {
        const characterEl = document.createElement('img');
        characterEl.src = goblinImg;
        characterEl.classList.add('goblin');
        this.character = characterEl;
    }

    moveCharacter() {
        let newPosition;

        do {
            newPosition = Math.floor(Math.random() * this.cells.length);
        } while (newPosition === this.currentPosition);

        this.currentPosition = newPosition;
        this.cells[this.currentPosition].appendChild(this.character);
    }
}