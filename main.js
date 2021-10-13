let player1 = {
    name: 'Scorpion',
    hp:100,
    img:"http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon:["knife", "gun", "pick"],
    attack: function (){
        alert(this.name + "fight...")
    }
};

let player2 = {
    name: 'Sonya',
    hp:99,
    img:"http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon:["arrow", "brain"],
    attack: function (){
        alert(this.name + "fight...")
    }
};

function createPlayer(className, player){
    let $div = document.createElement('div');
    $div.classList.add(className)
    let $divProgress = document.createElement('div');
    $divProgress.classList.add('progressbar');
    let $divCharacter = document.createElement('div');
    $divCharacter.classList.add('character');
    $div.appendChild($divProgress);
    $div.appendChild($divCharacter);
    let $divName = document.createElement('div');
    $divName.classList.add('name');
    $divName.innerText = player.name;
    let $divLife = document.createElement('div');
    $divLife.classList.add('life');
    $divLife.innerText = player.hp;
    $divLife.style.width = '100%';
    $divProgress.appendChild($divName);
    $divProgress.appendChild($divLife);
    let $img = document.createElement("img");
    $img.src = player.img;
    $divCharacter.appendChild($img);
    let $arena = document.querySelector('.arenas');
    $arena.appendChild($div);
}

createPlayer('player1', player1);
createPlayer('player2', player2)