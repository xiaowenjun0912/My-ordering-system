$(function () {
    // $(".rexiao").mouseenter(function () {
    //     $(".box1").removeClass("active1")
    // });
    $(".btn div").click(function () {
        // alert(1);
        // console.log(1);
        $(this).addClass("active2").siblings("div").removeClass("active2");
    });
    // 点击切换页面
    $(".btn .btn1").click(function () {
        // alert(1);
        $(".fanye").css({
            'display': 'block'
        });
        $(".comemoney").css({
            'display': 'block'
        });
        // alert(1);

        // comemoney
    });

    $(".btn .btn2").click(function () {
        // alert(1);
        $(".fanye").css({
            'display': 'none'
        });
        $(".comemoney").css({
            'display': 'none'
        });

    });
    // 5个
    $(".fivege").click(function () {
        // alert(1);
        $(".cover").css({
            'display': 'block'
        })

    });
    $(".gonggao").click(function () {
        $(".cover").css({
            'display': 'block'
        })

    });
    // 叉叉
    $(".cover .close").click(function () {
        // console.log(1)
        $(this).parent().css({
            'display': 'none'
        })

    });
    $(".gonggao .name").click(function () {
        alert("朕今日无事公布,退朝")
    });
    // $(".content").animate({left:"800px",opcity:.3},100000);
    // $(".name").animate({left:"500px",opcity:.3},100000);
    // setTimeout(() => {
    //     alert("你已经呵呵了一分钟,嘻嘻")
    // }, 60000);

    // 热销榜的栏目切换
    $(".box1").click(function () {
        $(".pic1").show().siblings("div").hide();
        $(this).addClass("active1").siblings("div").removeClass("active1");
    });
    $(".box2").click(function () {
        $(".pic2").show().siblings("div").hide();
        $(this).addClass("active1").siblings("div").removeClass("active1");


    });
    $(".box3").click(function () {
        $(".pic3").show().siblings("div").hide();
        $(this).addClass("active1").siblings("div").removeClass("active1");

    });
    $(".box4").click(function () {
        $(".pic4").show().siblings("div").hide();
        $(this).addClass("active1").siblings("div").removeClass("active1");

    });
    var hong = 0; //红点
    var sum = 0; //总数
    var sum1 = 0;
    var sum3 = 0;
    var num1 = 0;
    var song = 30; //送
    // 第一页第一个 加
    $(".add1").click(function () {
        // 点击滑出来的按钮
        $(".data1").css({
            'visibility': 'visible'
        })
        $(".comemoney .right").css({
            'display': 'block'
        });
        $(".addmore1").css({
            "visibility": "visible",
            "right": 120,
            "display": "block"
        }).addClass("move").removeClass("home");
        num1++;
        hong++;
        sum1 = (num1 + 1) * 10;
        sum1 = sum1 - 10;
        sum = sum1 + sum2 + sum3 + 4;
        // 我个人的总和
        $(".comemoney .all1").html(sum);
        $(".hong").html(hong);

        // 点击小圆点中间的数据自加
        $(".data1").fadeIn(100).html(num1);

        // 还有多少钱起送
        if (sum >= 30) {
            $(".comemoney .right").html("去结算").css({
                'background': 'green'
            })
        } else {
            var song = 30;

            song = Math.abs(song - sum);
            $(".comemoney .right").html('¥还差<span class="send">30</span>元起送')
            $(".comemoney .send").text(song)
        }

        // 弹出来一个小球
        $(".tan").stop().show().addClass("tan1").hide(1000)
        // 购物车颜色变鲜艳
        $(".buyCar").css({
            'display': 'none'
        })
    });





    // 第二张图片点击累加的按钮
    var num2 = 0;
    var sum2 = 0;
    $(".add2").click(function () {
        $(".data2").css({
            'visibility': 'visible'
        })
        $(".addmore2").css({
            "visibility": "visible",
            "right": 120,
            "display": "block"
        }).addClass("move").removeClass("home");
        $(".comemoney .right").css({
            'display': 'block'
        });
        num2++;
        sum2 = (num2 + 1) * 14;
        sum2 = sum2 - 14;
        // console.log(sum1);
        sum = sum1 + sum2 + sum3 + 4;
        $(".comemoney .all1").html(sum);
        hong++;
        $(".hong").html(hong);
        // 还有多少钱起送
        if (sum >= 30) {
            $(".comemoney .right").html("去结算").css({
                'background': 'green'
            })
        } else {
            var song = 30;

            song = Math.abs(song - sum);
            $(".comemoney .right").html('¥还差<span class="send">30</span>元起送').css({
                'background': '#1f2831'
            })
            $(".comemoney .send").text(song)

        }

        // 点击小圆点中间的数据自加
        $(".data2").fadeIn(100).html(num2);
        // 弹出来一个小球
        $(".tan2").stop().show().addClass("tan1").hide(1000)
         // 购物车颜色变鲜艳
         $(".buyCar").css({
            'display': 'none'
        })
    });


    // 第三种图片点击右边累加的按钮
    var num3 = 0;
    var sum3 = 0;
    $(".add3").click(function () {
        $(".data3").css({
            'visibility': 'visible'
        })
        $(".addmore3").css({
            "visibility": "visible",
            "right": 120,
            "display": "block"
        }).addClass("move").removeClass("home");
        $(".comemoney .right").css({
            'display': 'block'
        });

        num3++;
        sum3 = (num3 + 1) * 99;
        sum3 = sum3 - 99;
        sum = sum1 + sum2 + sum3 + 4;
        $(".comemoney .all1").text(sum);
        hong++;
        $(".hong").html(hong);
        // 还有多少钱起送
        // 还有多少钱起送
        if (sum >= 30) {
            $(".comemoney .right").html("去结算").css({
                'background': 'green'
            })
        } else {
            var song = 30;

            song = Math.abs(song - sum);
            $(".comemoney .right").html('¥还差<span class="send">30</span>元起送')
            $(".comemoney .send").text(song)
        }
          // 点击小圆点中间的数据自加
          $(".data3").fadeIn(100).html(num3)
          // 弹出来一个小球
          $(".tan3").stop().show().addClass("tan1").hide(1000)
         // 购物车颜色变鲜艳
         $(".buyCar").css({
            'display': 'none'
        })
    });



    // 第一个图片点击返回小圆 左边减按钮
    $(".addmore1").click(function () {
        num1--;
        hong--;
         // 购物车颜色暗淡
         if(hong==0){

            $(".buyCar").css({
               'display': 'block'
           })
        // 点击失效
        // $(this).css({'disabled':'true'})
  
    }else{
        // alert(123);
        // $(".addmore1").remove();
        // $(this).css({'disabled':'false'})
        // $(".addmore1").bind("click");


    }
        sum1 = (num1 + 1) * 10;
        sum1 = sum1 - 10;
        sum = sum1 + sum2 + sum3 + 4;
        // 我个人的总和
        $(".comemoney .all1").html(sum);
        $(".hong").html(hong);
        // 点击小圆点中间的数据自加
        $(".data1").fadeIn(100).html(num1);
        if (num1 < 1) {
            num1 = 0;
            $(this).removeClass("move").addClass("home").fadeOut(500)
            $(".data1").css({
                'visibility': 'hidden'
            })
            $(".comemoney .send").text(30)
            $(".comemoney .all1").html(0);
            // 如果单项为0 ,其他点餐数不为0,照收4元不减
            if (num2 > 0 || num3 > 0) {
                sum = sum1 + sum2 + sum3 + 4;
                $(".comemoney .all1").html(sum);
            } else {
                sum = sum1 + sum2 + sum3;
                $(".comemoney .all1").html(sum);
            }
        }
        // 还有多少钱起送
        if (sum >= 30) {
            $(".comemoney .right").html("去结算").css({
                'background': 'green'
            })
        } else {
            var song = 30;
            song = Math.abs(song - sum);
            $(".comemoney .right").html('¥还差<span class="send">30</span>元起送')
            $(".comemoney .send").text(song)
            $(".right").css({
                'background-color': '#1f2831'
            })

        }
         // 购物车颜色变鲜艳
         $(".buyCar").css({
            'display': 'block'
        })
    })

    // 第二图片左边点击减的按钮
    $(".addmore2").click(function () {
        num2--;
        hong--;
         // 购物车颜色暗淡
         if(hong==0){

            $(".buyCar").css({
               'display': 'block'
           })
        }
        sum2 = (num2 + 1) * 14;
        sum2 = sum2 - 14;
        sum = sum1 + sum2 + sum3 + 4;
        // 我个人的总和
        $(".comemoney .all1").html(sum);
        $(".hong").html(hong);
        // console.log(sum);
        // 点击小圆点中间的数据自加
        $(".data2").fadeIn(100).html(num2);
        if (num2 < 1) {
            num2 = 0;
            // 动画
            $(this).removeClass("move").addClass("home").fadeOut(500)
            $(".data2").css({
                'visibility': 'hidden'
            })
            $(".comemoney .send").text(30)
            $(".comemoney .all1").html(0)
            // 如果单项为0 ,其他点餐数不为0,照收4元不减
            if (num1 > 0 || num3 > 0) {
                sum = sum1 + sum2 + sum3 + 4;
                $(".comemoney .all1").html(sum);
            } else {
                sum = sum1 + sum2 + sum3;
                $(".comemoney .all1").html(sum);
            }
        }
        // 还有多少钱起送
        if (sum >= 30) {
            $(".comemoney .right").html("去结算").css({
                'background': 'green'
            })
        } else {
            var song = 30;
            song = Math.abs(song - sum);
            $(".comemoney .right").html('¥还差<span class="send">30</span>元起送')
            $(".comemoney .send").text(song)
            $(".right").css({
                'background-color': '#1f2831'
            })
        }
         // 购物车颜色变鲜艳
         $(".buyCar").css({
            'display': 'block'
        })
    })
     // 第3图片左边点击减的按钮
     $(".addmore3").click(function () {
        num3--;
        hong--;
         // 购物车颜色暗淡
         if(hong==0){

            $(".buyCar").css({
               'display': 'block'
           })
        }
        sum3 = (num3 + 1) * 99;
        sum3 = sum3 - 99;
        sum = sum1 + sum2 + sum3 + 4;
        // 我个人的总和
        $(".comemoney .all1").html(sum);
        $(".hong").html(hong);
        // console.log(sum);
        // 点击小圆点中间的数据自加
        $(".data3").fadeIn(100).html(num3);
        if (num3 < 1) {
            num3 = 0;
            // 动画
            $(this).removeClass("move").addClass("home").fadeOut(500)
            $(".data3").css({
                'visibility': 'hidden'
            })
            $(".comemoney .send").text(30)
            $(".comemoney .all1").html(0)
            // 如果单项为0 ,其他点餐数不为0,照收4元不减
            if (num1 > 0 || num2 > 0) {
                sum = sum1 + sum2 + sum3 + 4;
                $(".comemoney .all1").html(sum);
            } else {
                sum = sum1 + sum2 + sum3;
                $(".comemoney .all1").html(sum);
            }
        }
        // 还有多少钱起送
        if (sum >= 30) {
            $(".comemoney .right").html("去结算").css({
                'background': 'green'
            })
        } else {
            var song = 30;
            song = Math.abs(song - sum);
            $(".comemoney .right").html('¥还差<span class="send">30</span>元起送')
            $(".comemoney .send").text(song)
            $(".right").css({
                'background-color': '#1f2831'
            })
        }
        
    })












})