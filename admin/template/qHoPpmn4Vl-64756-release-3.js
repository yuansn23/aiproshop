/* start create_time:2025-01-04 13:46:26 */
    function get_sign(){
        return $("div.box").attr('s');
    }
    var desc_html = [];
    var flow_top = 0;
    var new_base_url = get_this_new_base_url();
    var com_extra = [];
    com_extra['links_id'] = "qHoPpmn4Vl";
    com_extra['sign'] = get_sign();
    com_extra['scene'] = get_query_string();
    com_extra['time'] = get_time();
    var company_name = "广东良道律师事务所<br>31440000MD021548X8";
    var email_name = "";
    com_extra['agree_status'] = "0";
    com_extra['com_status'] = "1";
    com_extra['mobile_code'] = "0";
    com_extra['web_title'] = "全国逾期纠纷法律援助";
    com_extra['box_image'] = "";
    com_extra['end_button2'] = "微信咨询，在线法务";
    com_extra['img1_pic'] = "https://img.sdlian.cn/admin/static/upload/h5/2025-01-04/cfN20250104134440418.png";
    com_extra['img4_pic'] = "https://img.sdlian.cn/admin/static/upload/h5/2024-08-29/S3e20240829193212779.png";
    com_extra['img5_pic'] = "https://img.sdlian.cn/admin/static/upload/h5/2024-08-29/tOA20240829193224063.png";
    com_extra['qy_name'] = "全国逾期纠纷法律援助";
    com_extra['qy_desc'] = " 资质认证,金牌律师,服务好评";
    com_extra['qy_zj_sdesc'] = "执业<strong>5</strong>年 评分<strong>5.0</strong>分 服务众多逾期客户";
    com_extra['qy_zj_name'] = "当值在线法务";
    com_extra['qy_zj_sc'] = "信用卡逾期,网贷逾期,借款逾期";
    let tzurl='';
    var com_b_data = [];
    com_b_data['pros_title'] = '您这边具体债务问题是？';
    com_b_data['child'] = '网贷逾期,信用卡逾期,房贷/车贷逾期,抵押贷/信贷逾期,其它债务逾期问题';
    com_b_data['end_text1'] = "好的，您的情况已了解。请稍等.... ";
    com_b_data['end_button1'] = "在线律师微信咨询";
    com_b_data['nickname'] = '在线法律顾问 ';
    com_b_data['img_finish_index'] = 5;
    com_b_data['pros'] = [{"title":"\u60a8\u8fd9\u8fb9\u5177\u4f53\u503a\u52a1\u95ee\u9898\u662f\uff1f","child":"\u7f51\u8d37\u903e\u671f,\u4fe1\u7528\u5361\u903e\u671f,\u623f\u8d37\/\u8f66\u8d37\u903e\u671f,\u62b5\u62bc\u8d37\/\u4fe1\u8d37\u903e\u671f,\u5176\u5b83\u503a\u52a1\u903e\u671f\u95ee\u9898","bo_jsy":"0,0,1,1,0","jsy":"\u975e\u5e38\u62b1\u6b49\uff0c\u60a8\u7684\u903e\u671f\u6682\u65e0\u6cd5\u53d7\u7406\uff0c\u611f\u8c22\u4fe1\u4efb\uff01","last":0},{"title":"\u903e\u671f\u603b\u91d1\u989d\u591a\u5c11\u5462\uff1f","child":"3\u4e07\u4ee5\u4e0b,3\u4e07-10\u4e07,10-20\u4e07,20\u4e07\u4ee5\u4e0a","bo_jsy":"1,0,0,0","jsy":"\u975e\u5e38\u62b1\u6b49\uff0c\u7531\u4e8e\u8be5\u6848\u4ef6\u903e\u671f\u91d1\u989d\u8fc7\u5c0f\u65e0\u6cd5\u53d7\u7406\uff0c\u611f\u8c22\u60a8\u7684\u4fe1\u4efb\uff01 ","last":0},{"title":"\u903e\u671f\u4e86\u591a\u4e45\u4e86\u5462\uff1f","child":"\u5373\u5c06\u903e\u671f,3\u4e2a\u6708\u4ee5\u5185,3\u4e2a\u6708\u523012\u4e2a\u6708,12\u4e2a\u6708\u4ee5\u4e0a","bo_jsy":"0,0,0,0","jsy":"","last":0},{"title":"\u73b0\u9636\u6bb5\u662f\u5426\u88ab\u5e73\u53f0\u8d77\u8bc9\uff1f","child":"\u5df2\u88ab\u8d77\u8bc9,\u672a\u8d77\u8bc9","bo_jsy":"1,0","jsy":"\u975e\u5e38\u62b1\u6b49\uff0c\u5df2\u88ab\u5e73\u53f0\u8d77\u8bc9\u6848\u4ef6\u6682\u65e0\u6cd5\u53d7\u7406\uff0c\u611f\u8c22\u4fe1\u4efb\uff01","last":0},{"title":"\u60a8\u7684\u60c5\u51b5\u662f\u53ef\u4ee5\u534f\u5546\u903e\u671f\u5904\u7406\u7684\uff0c\u4f60\u671f\u671b\u7684\u534f\u5546\u7ed3\u679c\uff1f","child":"\u5b9a\u5236\u5316\u8fd8\u6b3e\u65b9\u6848,\u8c03\u89e3\u534f\u5546","bo_jsy":"0,0","jsy":"","last":1}];
    com_b_data['img1_pic'] = 'https://img.sdlian.cn/admin/static/upload/h5/2025-01-04/cfN20250104134440418.png';
    let data = [{
        imgPf: 'https://img.sdlian.cn/admin/static/upload/h5/2023-10-23/Pkk20231023161201270.png',
        imgBut: 'https://img.sdlian.cn/admin/static/upload/h5/2023-12-11/H0c20231211173321449.png',
        boxTesx1: '回答问题>',
        boxTesx2: '添加企业微信咨询',
        boxTesx3: '>分析案情',
        color2: 'red',
        boxTesxFont: '17',
        sjjKt: '在线法律顾问 ',
        sjjktjs: [{
            title: '在线法律顾问 ',
            imgTxs: 'https://img.sdlian.cn/admin/static/upload/h5/2025-01-04/cfN20250104134440418.png',
            cout: "<span style='color: rgb(0, 0, 0);'>您好，我们是律所机构，帮您解决 </span><span style='color: rgb(255, 0, 0);'>信用卡逾期，网贷逾期问题</span><span style='color: rgb(0, 0, 0);'>，可为您办理定制化还款方案，我律所严格遵守个人隐私保密协议。</span>"
        }],
        gsName: '广东良道律师事务所<br>31440000MD021548X8',
        title1: '',
        child1: [],
        title: '',
        child: [],
        title2: '',
        child2: [],
        title6: '',
        child6: [],
        title7: '好的，您的情况已了解。请稍等',
        child7: [],
    }]
    let dataMap = {
    };
    let dataName = [
                { title: '好的，您的情况已了解。请稍等.... ', child: [] },
                            { title: "我这边刚审核了一下最新的政策，您这边的逾期问题是可以协商处理的，因为当前是临时窗口，<span style='color: rgb(255, 0, 0);'>请添加我的微信，为您安排专业律师1v1沟通制定逾期协商方案。</span>", child: ['在线律师微信咨询'] },
                    { title: '由于当前咨询人数较多，如有怠慢，请您主动给律所律师发消息，我们会加快与您沟通联系！', child: [] }
            ]
/* end create_time:2025-01-04 13:46:26 */