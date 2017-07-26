function get_selected(option, option_type) {
    var _out = [];
    var opt;
    for (var o = 1; o < option.length; o++) {
        opt = option[o][0];
        if ($('#' + option_type + '_' + opt).prop('checked')) {
            _out.push(opt);
        }
    }

    console.log("  Filter choices added: " + _out);
    return _out;
}

function filter_by(option, index) {
    console.log('  Filtering by: ' + option + '...');

    var len_i = items.length;
    var len_o = option.length;
    var _out = [];

    var itm;
    for (var i = 0; i < len_i; i++) {
        itm = items[i];

        for (var o = 0; o < len_o; o++) {
            if (itm[index] === option[o]) {
                _out.push(itm);
                o = len_o;
            }
        }
    }

    return _out;
}

function filter() {
    // Reset array.
    items = [];

    // Get checkbox values.
    console.log('  Getting stats values...');
    selected_stats = get_selected(stats, "s");
    console.log('  Getting category values...');
    selected_category = get_selected(category, "c");

    // Add all to items.
    items = data;

    // Filter list by stats.
    if (selected_stats[0] !== "All") {
        items = filter_by(selected_stats, 1);
    }
    console.log(items);

    // Filter list by category.
    if (selected_category[0] !== "All") {
        items = filter_by(selected_category, 2);
    }
    console.log(items);

    // Convert list to string of Names.
    console.log('  Converting array to string...')
    for (var i = 0; i < items.length; i++) {
        items[i] = items[i][0];
    }
    console.log(items);
}
