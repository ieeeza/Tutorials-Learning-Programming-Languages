// anonnymous obejcts = Objects without a name. Not directly referenced. Less syntax. No need for unique names.

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}

let cards = [new Card("A", "Hearts"),
            new Card("A", "Spades"),
            new Card("A", "Diamonds"),
            new Card("A", "Clubs"),];

cards.forEach(card => console.log(`${card.value} ${card.suit}`));

