var category, stats, data, selected_category, selected_stats;
var items = [];
var item = -1;

function init() {
    console.log('Loading categories...');
    category = $.getcsv('Data/category.csv');

    console.log('Loading stats...');
    stats = $.getcsv('Data/stats.csv');

    console.log('Loading data...');
    data = $.getcsv('Data/data.csv');

    console.log(category);
    console.log(stats);
    console.log(data);
}

function generate() {
    var i, j, c, s;

    console.log('Generating category checkboxes...');
    for (i = 1; i < category.length; i++) {
        c = category[i][0];
        $('#categories').append(create_category(c));
    }

    console.log('Generating stats checkboxes...');
    for (j = 1; j < stats.length; j++) {
        s = stats[j][0];
        $('#stats').append(create_stats(s));
    }
}

function buttons() {
    console.log('Adding [Filter] functionality...');
    $('#filter').click(function () {
        console.log('Filtering items...');
        filter();
        shuffle();
    });

    console.log('Adding [Get] functionality...');
    $('#pick').click(function () {
        item++;
        if (item >= items.length) {
            shuffle();
            item = 0;
        }
        $('#picked').html(items[item]);
    });
}

$(document).ready(function () {
    init();
    generate();
    buttons();
});

