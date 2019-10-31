layui.use(['laypage', 'layer'], function () {
    var laypage = layui.laypage,
        layer = layui.layer;

    //不显示首页尾页
    laypage.render({
        elem: 'demo',
        count: 100,
        first: false,
        last: false
    });
});