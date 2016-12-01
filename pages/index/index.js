//index.js
//获取应用实例
var app = getApp()

function Img(filename, ext=".png",state) {
    const IMG_FILES_FOLDER = "../../img/";
    let SUBFIX = ext;

    if (state === undefined) {
        return [
        IMG_FILES_FOLDER,
        filename,
        SUBFIX
        ].join("");
    } else {
        return [
        IMG_FILES_FOLDER,
        filename,
        "-",
        state,
        SUBFIX
        ].join("");
    }
}

Page({
  data: {
    dataForTabbar: 
    [
    {
                iCount: 1, //未读数目
                sIconUrl: Img("train"), //按钮图标
                sTitle: "段内", //按钮名称
            },
            {
                iCount: 99, //未读数目
                sIconUrl: Img("file"), //按钮图标
                sTitle: "文件", //按钮名称
            },
            {
                iCount: 0, //未读数目
                sIconUrl: Img("chat"), //按钮图标
                sTitle: "交流", //按钮名称
            },
            {
                iCount: 0, //未读数目
                sIconUrl: Img("me"), //按钮图标
                sTitle: "我", //按钮名称
            },
            ],
            functionRow:
            [
            {
                data :[{
                    iconUrl:Img("train"), 
                    text:"段内考试"
                },
                {
                    iconUrl:Img("me"), text:"波形图"
                },
                {
                    iconUrl:Img("me"), text:"波形图"
                },
                {
                    iconUrl:Img("me"), text:"波形图"
                }]
            },
            {
                data :[{
                    iconUrl:Img("train"), 
                    text:"段内考试"
                },
                {
                    iconUrl:Img("me"), text:"波形图"
                },
                {
                    iconUrl:Img("me"), text:"波形图"
                },
                {
                    iconUrl:Img("me"), text:"波形图"
                }]
            }                
            ],
            news : 
            [
            {"title":"slfdakjdksjfaksldjfl",
            "imgUrl":"",
            "newsContent":"dsafjksldajfklsdajflksdajlfkjdsakl"
            ,"time":"2016/9/10 10:00"
            ,"type":"段内新闻"
        },
        {"title":"slfdakjdksjfaksldjfl",
        "imgUrl":"",
        "newsContent":"daksljfklsadjfklsjdaklfjasdkljfklsdajfklsjdaklfjsdaklfjklsdajfklsdajklfjsakldjflksajfklsajdflk"
        ,"time":"2016/9/10 10:00"
        ,"type":"质检报告"
    },
    {"title":"slfdakjdksjfaksldjfl",
    "imgUrl":Img("news1", ".jpg"),
    "newsContent":"dsafjksldajfklsdajflksdajlfkjdsakl"
    ,"time":"2016/9/10 10:00"
    ,"type":"安全信息"
},
{"title":"slfdakjdksjfaksldjfl",
"imgUrl":Img("me"),
"newsContent":"dsafjksldajfklsdajflksdajlfkjdsakl"
,"time":"2016/9/10 10:00"
,"type":"安全信息"
},
{"title":"slfdakjdksjfaksldjfl",
"imgUrl":Img("me"),
"newsContent":"dsafjksldajfklsdajflksdajlfkjdsakl"
,"time":"2016/9/10 10:00"
,"type":"安全信息"
},
{"title":"slfdakjdksjfaksldjfl",
"imgUrl":Img("train"),
"newsContent":"dsafjksldajfklsdajflksdajlfkjdsakl"
,"time":"2016/9/10 10:00"
,"type":"安全信息"
},
{"title":"slfdakjdksjfaksldjfl",
"imgUrl":Img("me"),
"newsContent":"daksljfklsadjfklsjdaklfjasdkljfklsdajfklsjdaklfjsdaklfjklsdajfklsdajklfjsakldjflksajfklsajdflk"
,"time":"2016/9/10 10:00"
,"type":"安全信息"
},
{"title":"slfdakjdksjfaksldjfl",
"imgUrl":Img("me"),
"newsContent":"dsafjksldajfklsdajflksdajlfkjdsakl"
,"type":"安全信息"
,"time":"2016/9/10 10:00"
},
]
},

tapa : function (event) {
let tabName = event.target.dataset.v;
        wx.showToast({
            title:tabName,
            icon : "success",
            success : function(){
            }
        })
},

onTabItemTap : function (event){
        let tabName = event.target.dataset.key;
        wx.showToast({
            title:tabName,
            icon : "success",
            success : function(){
            }
        })
    }

}
)