jQuery.extend({
    getcsv: function (url) {
        var result = null;
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'text',
            async: false,
            success: function (data) {
                result = data;
            }
        });
        return $.csv.toArrays(result);
    }
});