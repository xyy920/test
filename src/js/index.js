// $(function () {
  $(".head").load("head.html");
  $("#search").click(function () {
    $(".input_info").show();
    $(".black").show();
  });
  $("#close").click(function () {
    $(".input_info").hide();
    $(".black").hide();
  });

  $(".shousuo").click(function () {
    if ($(".slider").css("display") == "none") {
      $(".shousuo img").prop("src", "../images/sanjiaoxing.png")
      $(".shousuo img").css("transform", "rotate(90deg)");
    } else if ($(".slider").css("display") == "block") {
      $(".shousuo img").prop("src", "../images/sanjiaoxing_1.png")
      $(".shousuo img").css("transform", "rotate(-90deg)");
    }
    $(".slider").fadeToggle("show");

    $(".shousuo").toggleClass('selected');

  });
  // nav收缩展开
  $('.nav-item>a').on('click', function () {
    if (!$('.slider-nav').hasClass('nav-mini')) {
      if ($(this).next().css('display') == "none") {
        //展开未展开
        $('.nav-item').children('ul').slideUp(300);
        $(this).next('ul').slideDown(300);
        $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
      } else {
        //收缩已展开
        $(this).next('ul').slideUp(300);
        $('.nav-item.nav-show').removeClass('nav-show');
      }
    }
  });
  //nav-mini切换
  $('#mini').on('click', function () {
    if (!$('.slider-nav').hasClass('nav-mini')) {
      $('.nav-item.nav-show').removeClass('nav-show');
      $('.nav-item').children('ul').removeAttr('style');
      $('.slider-nav').addClass('nav-mini');
    } else {
      $('.slider-nav').removeClass('nav-mini');
    }
  });
  $("#retract1").click(function () {
    $(".add_main_1").slideToggle("slow");
  });
  $("#retract2").click(function () {
    $(".add_main_2").slideToggle("slow");
  });
  $("#add").click(function () {
    $(".right_add").show();
    $(".black").show();
  });

  $("#close").click(function () {
    $(".right_add").hide();
    $(".black").hide();
  });
  $(".tabone, .tab-content").click(function () {
    $(".zzry").show();
    $(".newgr").hide();
    $('.tab').children().removeClass('tabchoose').eq($(this).index()).addClass('tabchoose');

  });
  $(".tabtwo, .tab-content").click(function () {
    $(".newgr").show();
    $(".zzry").hide();
    $('.tab').children().removeClass('tabchoose').eq($(this).index()).addClass('tabchoose');
  });
  $(".navgater a").click(function () {
    var pic = './images/tab_0' + $(this).index() + '_01.png';
    $("a .nav .n-img img").eq($(this).index()).prop("src", pic);
    console.log($(this).index());
    console.log(pic)
  });
  // $("tbody tr:odd").addClass("odd");
  $("tbody tr:even").addClass("even");
//   layui.use('laydate', function () {
//     var laydate = layui.laydate;
//     //执行一个laydate实例
//     laydate.render({
//       elem: '#test', //指定元素
//       //show: true //直接显示
//     });
//     // lay('#test1').on('click', function (e) { //假设 test1 是一个按钮
//     //   laydate.render({
//     //     elem: '#test',
//     //     show: true //直接显示
//     //       ,
//     //     closeStop: '#test1' //这里代表的意思是：点击 test1 所在元素阻止关闭事件冒泡。如果不设定，则无法弹出控件
//     //   });
//     // });
//   });

// })
