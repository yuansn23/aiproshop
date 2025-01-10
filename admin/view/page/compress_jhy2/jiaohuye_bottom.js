
$(document).ready(function() {
    set_top_html();
    getLinksDetial();
    setdata();
    htmlNr(2);
    default_html_code();
    set_agree_html();
    $('.agreements-mask_popup_close,.agreements-mask_bottom').click(function(){
        $('.modal-dialog').hide()
    })
    set_default_html_2();
});

function set_top_html(){
    var nav_daoh_html = `<div class="nav-daoh">
        <div class="cc_1">
            <img style="width: 1.33rem;" src="${com_extra['img4_pic']}" alt="">
            <div style="margin-left: .4rem;">
                <div class="cc_2">
                    <span class="cc_3">${com_extra['qy_name']}</span>
                    <img class="cc_4" src="${com_extra['img5_pic']}" alt="">
                </div>
                <div class="cc_5">`;
    if( com_extra['qy_desc'] != "" ) {
        var qy_desc = com_extra['qy_desc'].split(",");
        for(var i = 0 ; i < qy_desc.length ; i++){
            if( i == 0 ){
                nav_daoh_html += `<div class="nav_tex">${qy_desc[i]}</div>`;
            }else{
                nav_daoh_html += `<div class="nav_tex" style="margin-left: .13333rem;">${qy_desc[i]}</div>`;
            }
        }
    }
    nav_daoh_html += `</div>
            </div>
        </div>
    </div>`;
    $("div.box").prepend(nav_daoh_html);
    var cc_6_html = `<img class="cc_7" src="${com_extra['img1_pic']}" alt="">
        <div style="margin-left: .2667rem;">
            <div class="cc_8">${com_extra['qy_zj_name']}</div>
            <div class="cc_9">`;
    if( com_extra['qy_zj_sc'] != "" ) {
        var qy_zj_sc = com_extra['qy_zj_sc'].split(",");
        for(var i = 0 ; i < qy_zj_sc.length ; i++){
            if( i == 0 ){
                cc_6_html += `<div class="flgw">${qy_zj_sc[i]}</div>`;
            }else{
                cc_6_html += `<div class="flgw" style="margin-left: 8px;">${qy_zj_sc[i]}</div>`;
            }
        }
    }
    cc_6_html += `</div>
            <div class="cc cc_10">${com_extra['qy_zj_sdesc']}</div>
        </div>`;
    $("div.cc_6").append(cc_6_html);
}

function set_default_html_2() {
    $(".zzsr").text('对方正在输入中...');
    document.title = com_extra['web_title'];
    var newLink = $('<link rel="icon" type="image/x-icon">');
    newLink.attr('href', '//img.sdlian.cn/favicon.ico');
    $('head').append(newLink);
    $(".box_image").append(`<img class="imgth" onclick="imgqh1()"  src="${com_extra['box_image']}" alt="">`);
    var html = `<svg t="1703074261907" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5037" width="0" height="36"><path d="" fill="#ffffff" p-id="5038"></path></svg>`;
    $(".zaax-click").append(html);
    $(".zaax-click").append(com_extra['end_button2']);
}

function default_html_code(){
    let path_d = 'M695.296 346.112c11.776 0 23.552 1.024 34.816 2.048-31.232-146.432-187.904-254.976-366.592-254.976-199.68 0-363.52 136.192-363.52 308.736 0 99.84 54.272 181.76 145.408 245.248l-36.352 109.056L236.032 692.736c45.568 9.216 81.92 18.432 127.488 18.432 11.264 0 22.528-0.512 33.792-1.536-7.168-24.064-11.264-49.664-11.264-76.288 0.512-158.208 136.704-287.232 309.248-287.232zM497.664 240.64c31.232 0 56.32 25.088 56.32 56.32s-25.088 56.32-56.32 56.32-56.32-25.088-56.32-56.32 25.088-56.32 56.32-56.32zM243.2 353.792c-31.232 0-56.32-25.088-56.32-56.32s25.088-56.32 56.32-56.32 56.32 25.088 56.32 56.32-25.088 56.32-56.32 56.32zM1024.512 630.784c0-145.408-145.408-263.68-308.736-263.68-173.056 0-309.248 118.272-309.248 263.68s136.192 263.68 309.248 263.68c36.352 0 72.704-9.216 109.056-18.432l99.84 54.784-27.136-90.624c72.704-54.784 126.976-127.488 126.976-209.408z m-403.456-40.96c-22.016 0-39.936-17.92-39.936-39.936s17.92-39.936 39.936-39.936 39.936 17.92 39.936 39.936-17.92 39.936-39.936 39.936z m199.68 2.56c-22.016 0-39.936-17.92-39.936-39.936s17.92-39.936 39.936-39.936 39.936 17.92 39.936 39.936-17.92 39.936-39.936 39.936z';
    $(".towx_btn svg.icon path").attr('d',path_d);
}

function showAgree () {
    $('.modal-dialog').show()
}


//绑定数据
function setdata(){
    index=1;
    var finish_index=com_b_data['img_finish_index'];
    console.log(com_b_data);
    var jsArray=com_b_data['pros'];
    console.log(jsArray,888);
    for(var i=0;i<finish_index;i++)
    {
        //var stitle=jsArray[i]["title"];
        var childs=jsArray[i].child.split(',');
        var bos=jsArray[i].bo_jsy.split(',');
        console.log(jsArray[i]);
        for(var j=0;j<childs.length;j++){
            if(i!=finish_index-1){//判断是不是最后一个
                //判断是否是结束
                if(bos[j]==1){
                    dataMap[childs[j]]={title:jsArray[i].jsy,child: []};
                }
                else
                {
                    dataMap[childs[j]]={title:jsArray[i+1].title,child: jsArray[i+1].child.split(',')};
                }
            }
            else
            {
                if(bos[j]==1){
                    dataMap[childs[j]]={title:jsArray[i].jsy,child: []};
                }
                else
                {
                    dataMap[childs[j]]={title:'end',child:[]};
                }
            }
        }
    }
    data[0].title=com_b_data['pros_title'];
    var sc1=com_b_data['child'];
    data[0].child=sc1.split(',');

    //console.log(dataMap);
}

function img_qh() {
    $('.box_image').show()
    $('.box').hide()
}
function imgqh1() {
    $('.box_image').hide()
    $('.box').show()
}


let dataNum = data
$('.imgBut').attr('src', data[0].imgBut)
// $('.imgTx').attr('src',data[0].imgTx)
if (data[0].imgTop != '') {
    // $('.nav-daoh').hide()
    $('.box-img').css('margin-top', '0')
}
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

const time = `${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}`;

let dataHtml = ''
data[0].sjjktjs.forEach(item => {
    dataHtml += `
      <div class="box-list-item">
        <div class="box-list-item-left">
          <img class="box-list-img imgTx" src="${item.imgTxs}" alt="">
        </div>
        <div class="box-list-item-right">
          <div style="font-size: 13px;" class="sjjKt">${item.title}<span style="margin-left:.4rem;color: #999;">${time}</span></div>
          <div class="box-items sjjktjs" >${item.cout}</div>
        </div>
      </div>
    `
})
$('.box-list1').append(dataHtml)


// $('.sjjKt').text(data[0].sjjKt)
// $('.sjjktjs').text(data[0].sjjktjs)

$('.boxTesx1').text(data[0].boxTesx1)
$('.boxTesx2').text(data[0].boxTesx2)
$('.boxTesx3').text(data[0].boxTesx3)
$('.box-foot').text(data[0].gsName)
$('.boxTesx2').css('color', data[0].color2)
$('.boxTesx1,.boxTesx2,.boxTesx3').css('fontSize', data[0].boxTesxFont + 'px')

let html1 = ''

function htmlNr(isd) {
    setTimeout(() => {
        if ($('.box-tests').text().trim().indexOf(com_b_data['end_text1']) != -1) {
            // console.log($('.box-sa').height());
            $('html,body').animate({
                scrollTop: 2000
            }, 1000);
        }
    }, 1500);
    let html = '';
    console.log(data,'data',isd);
    for (let i = 0; i < data.length; i++) {
        let chaildhtml = '';
        if (data[i].child) {
            for (let s = 0; s < data[i].child.length; s++) {
                if(data[i].child[s]==com_b_data['end_button1'])
                {
                    chaildhtml += `<div class="box-list-item-but" onclick="jump()">
                              ${data[i].child[s]}
                            </div>`
                }
                else
                {
                    chaildhtml += `<div class="box-list-item-but" onclick="butBox(this)">
                              ${data[i].child[s]}
                            </div>`
                }
            }
        }
        html += `<div class="box-list-item box-tc bubble">
                <div class="box-list-item-left">
                  <img class="box-list-img" src="${com_b_data['img1_pic']}" alt="">
                </div>
                <div class="box-list-item-right">
                  <div style="font-size: 12px;color: #333;">${com_b_data['nickname']}<span style="margin-left:.4rem;color: #999;">${time}</span></div>
                  <div class="box-items box-itt" >
                    <span class="box-tests">${data[i].title}</span>
                    <div class="but-hied" style="margin-top: 10px;text-align: center;">
                      ${chaildhtml}
                    </div>
                  </div>
                </div>
              </div>`
    }
    data = dataNum
    $('.box-sa').append(html); // 将生成的HTML内容附加到.box-tc元素中
    console.log($('.box-tests').eq($('.box-tests').length-1).text().trim(),com_b_data['end_text1']);
    // if ($('.box-tests').eq($('.box-tests').length - 1).text().trim() == com_b_data['end_text1'] && isd !== 3) {
    //     // console.log(123);
    //     data = dataName
    //     htmlNr(3)
    //     $('.box-list').css('padding-bottom','1.8677rem')
    //     $('.box-bot').show()
    //     return;
    // }
}
function ingTp(i) {
    if (i == '2') {
        $('.imgTsp').hide()
    }
    let num = $(".box-tesx").offset().top
    $('html,body').animate({
        scrollTop: num - 40
    }, 2000);
}
$('.box-bot').click(function () {
    jump();
    //window.location.href = 'http://api.bangka.cn/admin/view/links_lists/jd_bindingCard.html'
})
function call_douyin_form(){
    var jiaohuye_desc = desc_html.join("");
    //console.log("jiaohuye_desc=="+jiaohuye_desc);
    $.ajax({
        url: new_base_url + 'admin/api/web.php?act=call_douyin_form',
        type: 'POST',
        async:false,  //同步
        dataType: 'json',
        data: {
            "links_id": com_extra['links_id'],
            "ip":"",
            "scene_param":com_extra['scene'],
            "pv_time":com_extra['time'],
            "jiaohuye_desc":jiaohuye_desc
        },
        success: function (result) {
            if (result.status == "success") {
            }else{
            }
        },
        error: function (err) {
            //toast("网络异常,请联系客服处理！");
            // console.log("err:"+JSON.stringify(err));
            //$('#myModal').modal('toggle');
        }
    });
}
function getLinksDetial() {
    $.ajax({
        url: new_base_url + "admin/api/web.php?links=" + com_extra['links_id'], // url:"https://wailian2.cn/web/links/test",
        data: {
            "sign": com_extra['sign'],
            "token": "",
            "scene_param":com_extra['scene']
        },
        success: function(result) {
            if (result.status == "success") {
                if (result.links.type == 2) {
                    usersStatistics();
                }
                var styles = JSON.parse(result.links.styles);
                if (styles.redirect_style == 1) {
                    //window.location.href = result.links.urlscheme;
                }
                tzurl= result.links.urlscheme;
            }
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        }
    });
}
function usersStatistics() {
    var usersview = localStorage.getItem("usersview" + com_extra['links_id']);
    if (!usersview && typeof(usersview) != "undefined" && usersview != 0) {
        var bsions = new Bsion(new_base_url + "admin/api/web.php?act=links_ip_statistics", {
            "links_id": com_extra['links_id'],
            "sorts": "1"
        }, true, false);
        bsions.device();
        localStorage.setItem("usersview" + com_extra['links_id'], com_extra['links_id']);
    } else {
        console.log(com_extra['links_id'] + "重复用户！");
        //test
        var bsions = new Bsion(new_base_url + "admin/api/web.php?act=links_ip_statistics", {
            "links_id": com_extra['links_id'],
            "sorts": "1"
        }, true, false);
        bsions.device();
    }
}
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-10976787172/YfObCIL944AaEOT1kfIo',
      'value': 5.0,
      'currency': 'USD',
      'event_callback': callback
  });
  return false;
}

function jump(){
	gtag_report_conversion();
    call_douyin_form();
    var usersview = localStorage.getItem("usersview59" + com_extra['links_id']);
    if (!usersview && typeof(usersview) != "undefined" && usersview != 0) {
        showdialog();
    } else {
        console.log("usersview59"+ com_extra['links_id'] +"重复用户！");
        //test
        window.location.href = tzurl;
        //showdialog();
    }
}
function showdialog(){
    window.location.href = tzurl;
}
function butBox(element) {
    $('.zzsr').show()
    $('.box-list').css('padding-bottom','7.2rem')
    // console.log($('.box-tests').text().trim());
    if ($('.box-tests').text().trim().indexOf('因为当前是临时咨询，请添加我的微信，我为您安排专业法务，并且为您制定追回欠款的方案。点击咨询，在线法务') != -1) {
        window.location.href = 'http://api.bangka.cn/admin/view/links_lists/jd_bindingCard.html'
    }
    $('.but-hied').hide()
    let num = $(".box-tc").eq($(".box-tc").length - 1).offset().top
    html1 = `<div class="box-list-my bubble">
              <div class="box-list-my1 ">
                ${$(element).html()}
              </div>
            </div>`

    const selectedData = dataMap[$(element).html().trim()] || {};
    var parent_html = $(element).parent().parent().find(".box-tests").html();
    //console.log("parent_html==",parent_html);
    parent_html = parent_html.trim().replace(/\n|\r|\t|/g,'');
    var event_html = $(element).html();
    event_html = event_html.trim().replace(/\n|\r|\t|/g,'');
    var desc_str = (desc_html.length+1)+"."+parent_html+" "+event_html+";";
    desc_html.push(desc_str);
    console.log("desc_html==",desc_html);
    if(selectedData.title=='end'){
        data = dataName;
        $('.box-list').css('padding-bottom','1.8677rem')
        $('.box-bot').show()
    }
    else
    {
        data = [selectedData];
    }
    $('.box-sa').append(html1)
    setTimeout(() => {
        htmlNr(1) // 更新页面内容
        $('html, body').animate({
            scrollTop: Math.ceil(num)
        },1500);
        $('.zzsr').hide()
    }, 1000);
}

function set_company(){
    if( com_extra['agree_status'] == "0" && com_extra['com_status'] == "1" ){
        var html = "";
        html += '<div id="com_css">';
        html += company_name;
        html += '</div>';
        $("body").append(html);
    }else if(com_extra['agree_status'] == "1" ){
        var html = "";
        html+=`
            <div class="agreements agreements--" style="height:45px;">
                <div class="agreements-tip">
                    <div class="agreements-tip-top">
                        <span>
                            <span>${company_name}</span>
                            <span style="margin: 0px 8px;">|</span>
                        </span>
                        <span class="agreements-tip_privacy" onclick="showAgree()" >《个人信息保护声明》</span>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="argee_dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog"  style=" pointer-events: auto;">
                    <div class="agreements-mask_popup agreementsPopup">
                        <div class="agreements-mask_popup_close" data-dismiss="modal" aria-label="Close">×</div>
                        <div class="agreements-mask_body">&nbsp;</div>
                        <div class="agreements-mask_bottom" data-dismiss="modal">
                            <div class="agreements-mask_agree">我已阅读</div>
                        </div>
                    </div>
                </div>
            </div>`;
        $("body").append(html);
    }
}

function set_agree_html() {
    set_company();
    var html = "";
    html += '<div className="agreements-mask_title">《个人信息保护声明》</div>';
    html += '<p>该声明由本页面创建者（即下文的“我们/公司”）向您提供，包含涉及您个人信息权益的重要约定，请您在提供个人信息前仔细阅读。如有问题，可联系本页面创建者。我们/公司非常重视用户信息的保护。您在使用我们的相关服务（以下简称“服务”），并在相应页面填写个人信息前，请您务必仔细阅读本声明。您一旦主动在页面提供您的个人信息并进行提交操作，即意味着您同意我们按照本声明收集、使用您的相关信息。</p>';
    html += '<p><strong>公司名称: '+company_name+'</strong></p>';
    html += '<p><strong>电子邮箱: '+email_name+'</strong></p>';
    html += '<p>';
    html += '<p><strong>一、个人信息的收集</strong></p>';
    html += '<p>1、我们提供服务时，可能会收集下列与您有关的个人信息：</p>';
    html += '<p>您在使用本页面所涉及的表单、智能电话、卡券领取、客服工具等功能中提供的信息，包括姓名、手机号及使用本页面提供的产品/服务涉及的必要信息。</p>';
    html += '<p><strong>请您注意，具体需要提供的信息可能会根据我们提供的产品/服务的不同而有所差异，请以向您展示的产品/服务以及所对应的要求提供相关个人信息，我们会在产品/服务页面或下文向您说明相关个人信息的收集和使用规则。</strong></p>';
    html += '<p>2、您需要注意的是，以上个人信息均是您自愿提供。<strong>您有权拒绝提供，但可能无法正常使用相应的服务、功能或者无法达到服务拟达到的效果。</strong></p>';
    html += '<p><strong>二、个人信息的使用</strong></p>';
    html += '<p>1、您同意，我们可以通过以下方式对个人信息进行使用：</p>';
    html += '<p> <strong>（1）我们收集您的姓名、手机号以及其他必要信息，如您的意向车系或车型、所在城市，用于及时与您取得联系，并与您沟通产品或服务的相关事宜。</strong></p>';
    html += '<p><strong>（2）为了更好的提供服务，您在通过电话或客服工具与我们沟通时，我们会记录您的手机号及相关沟通情况。</strong> </p>';
    html += '<p> <strong>（3）如您拟查询、修改、删除、撤回授权您提交的个人信息的，或对个人信息保护问题有任何疑问或投诉，您可以与我们联系，我们将尽快配合处理。</strong> </p>';
    html += '<p>2、我们将严格保护您的个人信息安全。我们将采用适当制度、组织和安全技术等措施来保护您的个人信息不被未经授权的访问、使用或泄漏。</p>';
    html += '<p> <strong>3、为了实现上述目的，我们可能会委托我们的技术合作伙伴（例如呼叫服务商）为您提供服务，并由其在服务范围内进行合法、正当、必要地使用。</strong> </p>';
    html += '<p><strong>三、未成年人信息的特殊保护</strong></p>';
    html += '<p>1、若您是未满18周岁的未成年人，在使用本功能前，应在您的父母或其他监护人监护、指导下共同阅读并同意本隐私政策。</p>';
    html += '<p>2、若您是未满14周岁的未成年人的监护人，在使用本功能前，应为您的被监护人阅读并同意本隐私政策。</p>';
    html += '<p><strong>四、适用法律</strong></p>';
    html += '<p>本声明适用中华人民共和国法律。</p>';
    html += '<p><strong>五、变更</strong></p>';
    html += '<p>我们会适时对本声明进行修订，该等修订构成本声明的一部分。公司会将修改后的声明予以发布。在该种情况下，若您继续使用我们的服务，即表示同意接受经修订的声明的约束。</p>';
    html += '</p>';
    $(".agreements-mask_body").html(html);
}