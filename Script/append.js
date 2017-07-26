function create_category(c) {
    console.log('  Adding checkbox for ' + c + '...');
    return '<label for="c_' + c + '">' + c + '</label><input type="checkbox" id=c_' + c + '>';
}

function create_stats(s) {
    console.log('  Adding checkbox for ' + s + '...');
    return '<label for="s_' + s + '">' + s + '</label><input type="checkbox" id=s_' + s + '>';
}