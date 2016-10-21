 ;(function ($) {
    "use strict";
    
    $.fn.progressCricle = function(opts){
        var options = $.extend({}, $.fn.progressCricle.defaults, opts);
        return new ProgressCricle(this, options);
    };
    $.fn.progressCricle.defaults = {//默认参数
        color: '#72d0f4',//圆环颜色
        radius: 50//内圆半径（圆环宽度为：内圆半径*0.15）
    };

    function ProgressCricle($ele, options){
        var canvas = $ele[0];
        var context = canvas.getContext('2d');
        var center = options.radius * 1.15;
        var fontSize = options.radius / 2;
        
        function init(){//初始化一些公共数据
            console.log('init');
            //确定canvas宽高
            canvas.width = options.radius * 2.3;
            canvas.height = canvas.width;
            context.lineWidth = options.radius*0.15;
            context.font = fontSize + "px Arial bold";//修改字体大小
            context.fillStyle = options.color;
            context.textAlign = 'center';
            context.textBaseline = 'middle';
        }
        function draw(process){
            console.log('draw')
            //清空canvas，画一个灰色的圆
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.strokeStyle = '#ddd';
            context.beginPath();
            context.arc(center, center, options.radius, 0, Math.PI * 2, true);
            context.stroke();
            //处理数字
            context.moveTo(center, center);
            context.fillText(process+'%', center, center);
            //画表示进度的圆环
            context.strokeStyle = options.color;
            var copy = context.getImageData(0, 0, canvas.width, canvas.height);
            context.putImageData(copy, 0, 0);
            context.beginPath();
            context.arc(center, center, options.radius, -Math.PI*0.5, (process*0.01*2 - 0.5)*Math.PI, false);
            context.stroke();
        }
        return {
            init: init,
            draw: function(process){//参数process用于传入表示进度的数字（最大100）
                draw(process);
            }
        }
    }
})(jQuery);




