
var change = $('.imgx_change'),
    origin = $('.imgx_origin'),
    width_change = change.width(),
    width_origin = origin.width(),
    height_origin = origin.height(),
    ScreenWidth = window.screen.width,
    ScreenHeight = window.screen.height;


$("#vals").keydown(function (event) {
    if (event.which == 13) {
        //初始給值
        var inputvalue = $("#vals").val();
        var result_x = inputvalue / width_origin;
        $('#result_value_x').html(result_x);
        $('.imgx_change').width(inputvalue);
        //y值
        var height_change = change.height();
        var result_y = height_change / height_origin;
        $('#result_value_y').html(result_y);
        console.log("x值:" + result_x  +"<br>" + "y值: " + result_y );
        //增加值
        $('#add1').on('click', function () {
            var a = ++inputvalue
             //x值
            var result_x = a / width_origin;
            $('.imgx_change').width(a);
            $("#vals").val(a);
            $('#result_value_x').html(result_x);

            //y值
            var height_change = change.height();
            var result_y = height_change / height_origin;
            $('#result_value_y').html(result_y);
        });

        //減少值
        $('#reduce1').on('click', function () {
            var b = --inputvalue
            var result_x = b / width_origin;
            $('.imgx_change').width(b);
            $("#vals").val(b);
            $('#result_value_x').html(result_x);
            //y值
            var height_change = change.height();
            var result_y = height_change / height_origin;
            $('#result_value_y').html(result_y);

        });

    };
});
console.log('螢幕寬:' + ScreenWidth + '/' + '螢幕高:' + ScreenHeight);
