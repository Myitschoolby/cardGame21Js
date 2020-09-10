const game21 = function() {

    const cardCont = document.createElement('div');
    cardCont.classList.add('card_container');

    const score = document.createElement('div');
    score.classList.add('card_score');
    score.innerHTML = 0;

    document.body.appendChild(cardCont);
    document.body.appendChild(score);

    const cards = {
        '2C': 2,
        '2D': 2,
        '2H': 2,
        '2S': 2,
        '3C': 3,
        '3D': 3,
        '3H': 3,
        '3S': 3,
        '4C': 4,
        '4D': 4,
        '4H': 4,
        '4S': 4,
        '5C': 5,
        '5D': 5,
        '5H': 5,
        '5S': 5,
        '6C': 6,
        '6D': 6,
        '6H': 6,
        '6S': 6,
        '7C': 7,
        '7D': 7,
        '7H': 7,
        '7S': 7,
        '8C': 8,
        '8D': 8,
        '8H': 8,
        '8S': 8,
        '9C': 9,
        '9D': 9,
        '9H': 9,
        '9S': 9,
        '10C': 10,
        '10D': 10,
        '10H': 10,
        '10S': 10,
        'AC': 11,
        'AD': 11,
        'AH': 11,
        'AS': 11,
        'JC': 2,
        'JD': 2,
        'JH': 2,
        'JS': 2,
        'KC': 4,
        'KD': 4,
        'KH': 4,
        'KS': 4,
        'QC': 3,
        'QD': 3,
        'QH': 3,
        'QS': 3
    };

    const rand = function(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    };

    const cardBack = `back${rand(1, 6)}`;

    const showResult = function() {
        let count = parseInt(score.innerHTML);

        const result = document.createElement('div');
        result.classList.add('card_result');
        result.innerHTML = 'You lose!';

        if (count <= 21) {
            result.innerHTML = 'You win!';
            result.classList.add('win');
        } else {
            result.classList.add('lose');
        }

        document.body.appendChild(result);

        setTimeout(function() {
            window.location.reload();
        }, (count == 21 ? 10000 : 3000));
    };
    
    const setScore = function(value) {
        let count = parseInt(score.innerHTML);
        count += value;

        score.innerHTML = count;

        if (count > 21 || count == 21) showResult();
    };
    

    const open = function(card, name) {
        if (card.classList.contains('open')) return;

        card.classList.add('open');
        card.classList.add('flip');

        setScore(cards[name]);
        delete cards[name];

        add();
    };
    
    const add = function() {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardArr = Object.keys(cards);
        let randName = cardArr[rand(0, cardArr.length-1)];

        card.innerHTML = `
        <div class="card_item card_front" style="background-image: url(images/${randName}.png);"></div>
        <div class="card_item card_back" style="background-image: url(images/${cardBack}.png);"></div>
        `;

        cardCont.appendChild(card);

        card.addEventListener('click', function() {
            if (!document.querySelector('.card_result')) open(this, randName);
        });
    };

    add();
    
};

window.addEventListener('load', game21);