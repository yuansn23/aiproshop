(function flexible (window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1

    // adjust body font size
    function setBodyFontSize () {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        }
        else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    function setRemUnit () {
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))

$(document).ready(function() {
    $("button[eid='event']").click(function(){
        var  id = $(this).attr("id") ;
        $("div[pid='"+id+"_r']").show();
        //testadd1
        var event_html = $(this).html();
        //console.log("event_html="+event_html);
        var parent_html = $(this).parent().parent().html();
        var divIndex = parent_html.indexOf("<div");
        if (divIndex !== -1) {
            var parent_html = parent_html.substring(0, divIndex); // 从开头到<div>标签之前的部分进行截取
            //console.log("parent_html="+parent_html);
        } else {
            console.log("未找到<div>标签");
        }
        parent_html = parent_html.trim().replace(/\n|\r|\t|/g,'');
        var desc_str= (desc_html.length+1)+"."+parent_html+" "+event_html+";";
        desc_html.push(desc_str);
        $(this).parent().parent().find("button").hide();
    });
});

$(function () {
    setTimeout(function(){
        $("#diyi_one").show();
    },800);
    setTimeout(function(){
        $("#diyi").show();
    },1600);
});

function show_finish_chat(){
    setTimeout(function(){
        $("#finish_chat").show();
    }, 600);
    return false;
}
function show_page_finish_chat(){
    setTimeout(function(){
        $("#page_finish_chat").show();
    }, 600);
    return false;
}

function show_next_ask(year_id){
    setTimeout(function(){
        $("#"+year_id).show();
        if( flow_top != 0 ){
            //跟随滚动
            setTimeout(function(){
                console.log( flow_top );
                $("html, body").animate({ scrollTop: $('body')[0].scrollHeight-flow_top }, 1200);
            }, 100);
        }
    }, 800);
}