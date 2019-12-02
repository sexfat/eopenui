
var change = $('.imgx_change'),
    origin = $('.imgx_origin'),
    //寬度
    width_change = change.width(),
    width_origin = origin.width(),
    //高度
    height_origin = origin.height(),
    height_change = change.height(),
    //螢幕截悉度
    ScreenWidth = window.screen.width,
    ScreenHeight = window.screen.height;




$("#vals_x").keydown(function (event) {
    if (event.which == 13) {
        //初始給值
        var inputvalue = $("#vals_x").val();
        var result_x = inputvalue / width_origin;
        $('#result_value_x').html(result_x);
        $('.imgx_change').width(inputvalue);
        console.log('寬度比例：'+ result_x);
       
       
        //增加值
        $('#add_x').on('click', function () {
            var a = ++inputvalue
             //x值
            var result_x = a / width_origin;
            $('.imgx_change').width(a);
            $("#vals_x").val(a);
            $('#result_value_x').html(result_x);
            console.log('寬度比例：'+ result_x);
           
        });

        //減少值
        $('#reduce_x').on('click', function () {
            var b = --inputvalue
            var result_x = b / width_origin;
            $('.imgx_change').width(b);
            $("#vals_x").val(b);
            $('#result_value_x').html(result_x);
            console.log('寬度比例：'+ result_x);


        });

    };
});


//高度值


$("#vals_y").keydown(function (event) {
    if (event.which == 13) {
        //初始給值
        var inputvalue = $("#vals_y").val();
        var result_y = inputvalue / height_origin;
        $('#result_value_y').html(result_y);
        $('.imgx_change').height(inputvalue);
        console.log('高度比例：'+ result_y);
        
        //增加值
        $('#add_y').on('click', function () {
            var a = ++inputvalue
             //x值
            var result_y = a / height_origin;
            $('.imgx_change').height(a);
            $("#vals_y").val(a);
            $('#result_value_y').html(result_y);
            console.log('高度比例：'+ result_y);
        });

        //減少值
        $('#reduce_y').on('click', function () {
            var b = --inputvalue
            var result_y = b / height_origin;
            $('.imgx_change').height(b);
            $("#vals_y").val(b);
            $('#result_value_y').html(result_y);
            console.log('高度比例：'+ result_y);

        });

    };
});


