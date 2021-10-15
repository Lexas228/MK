let $arena = document.querySelector('.arenas');
let player1 = {
    player: 1,
    name: 'Scorpion',
    hp:100,
    img:"http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["knife", "gun", "pick"],
    attack: function (){
        hit(player2, this.weapon[Math.floor(Math.random() * this.weapon.length)]);
    }
};

let player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img:"http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["arrow", "brain"],
    attack: function (){
        hit(player1, this.weapon[Math.floor(Math.random() * this.weapon.length)]);
    }
};


function createElementWithClassName(tag, className) {
    let $div = document.createElement(tag);
    if (className) {
       $div.classList.add(className);
    }
    return $div;
}

function createPlayer(player){
    let $div = createElementWithClassName('div','player' + player.player);
    let $divProgress = createElementWithClassName('div','progressbar')
    let $divCharacter = createElementWithClassName('div','character')
    $div.appendChild($divProgress);
    $div.appendChild($divCharacter);
    let $divName = createElementWithClassName('div', 'name')
    $divName.innerText = player.name;
    let $divLife = createElementWithClassName('div', 'life')
    $divLife.style.width = player.hp + '%';
    $divProgress.appendChild($divName);
    $divProgress.appendChild($divLife);
    let $img = createElementWithClassName('img')
    $img.src = player.img;
    $divCharacter.appendChild($img);
    return $div;
}
function getRandomDamage(maxDamage){
    return Math.ceil(Math.random() * maxDamage);
}
function hit(player, weapon){
    player.hp -= getRandomDamage(mapOfDamage.get(weapon));
    if(player.hp < 0) player.hp = 0;
}

function playerWin(player){
    const $winTitle = createElementWithClassName('div', 'winTitle');
    $winTitle.innerText = player.name + ' win!';
    return $winTitle;
}

const $divPlayer1 = createPlayer(player1);
const $divPlayer2 = createPlayer(player2);
$arena.appendChild($divPlayer1);
$arena.appendChild($divPlayer2);
const $button = document.querySelector('.button');
const $divLifePlayer1 = document.querySelector('.player1 .life')
const $divLifePlayer2 = document.querySelector('.player2 .life')
const mapOfPlayer = new Map();
mapOfPlayer.set(player1, $divLifePlayer1);
mapOfPlayer.set(player2, $divLifePlayer2);
const mapOfOpposite = new Map();
mapOfOpposite.set(player1, player2);
mapOfOpposite.set(player2, player1);
const mapOfDamage = new Map();
mapOfDamage.set('brain', 20);
mapOfDamage.set('arrow', 15);
mapOfDamage.set('knife', 10);
mapOfDamage.set('pick', 22);
mapOfDamage.set('gun', 25);


$button.addEventListener('click', function () {
    mapOfPlayer.forEach((div, player) => {
        player.attack();
        let opponent = mapOfOpposite.get(player);
        let opponentLife = mapOfPlayer.get(opponent);
        opponentLife.style.width = opponent.hp + '%';
        if(opponent.hp === 0){
            $arena.appendChild(playerWin(player));
            $button.disabled = true;
        }
    })
});
