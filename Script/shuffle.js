function shuffle() {
    console.log('Shuffling items...');
    var m = items.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = items[m];
        items[m] = items[i];
        items[i] = t;
    }
    console.log(items);
}