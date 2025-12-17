// 选手数据 - 重新组织为两个大组
const PLAYERS_DATA = {
    "title": "Carry Yourself Tournament X WOChao Cup Grouping Result",
    "description": "本系统用于将32名选手分为8个小组，分为Summits Group(A,B,C,D)和Trials Group(E,F,G,H)。抽签将从Low Seed开始，依次进行Mid Seed、High Seed和Top Seed的抽签。",
    "backgroundImage": "",
    "groups": {
        "summits": {
            "name": "Summits Group",
            "groupIds": ["A", "B", "C", "D"], // 对应索引 0-3
            "players": {
                "top": [
                    {"id": 1, "name": "GAO HAO", "avatar": "ava/GAO HAO.png"},
                    {"id": 2, "name": "Moonlit111", "avatar": "ava/Moonlit111.png"},
                    {"id": 3, "name": "Flyer", "avatar": "ava/Flyer.png"},
                    {"id": 4, "name": "Tokirii", "avatar": "ava/Tokirii.png"}
                ],
                "high": [
                    {"id": 5, "name": "Ruyaya", "avatar": "ava/Ruyaya.png"},
                    {"id": 6, "name": "Qualifiers", "avatar": "ava/Qualifiers.png"},
                    {"id": 7, "name": "Diaostrophism", "avatar": "ava/Diaostrophism.png"},
                    {"id": 8, "name": "DAQAO", "avatar": "ava/DAQAO.png"}
                ],
                "mid": [
                    {"id": 9, "name": "aaront", "avatar": "ava/aaront.png"},
                    {"id": 10, "name": "SBHO", "avatar": "ava/SBHO.png"},
                    {"id": 11, "name": "Zkyler", "avatar": "ava/Zkyler.png"},
                    {"id": 12, "name": "13roil", "avatar": "ava/13roil.png"}
                ],
                "low": [
                    {"id": 13, "name": "AbbeyChan6203", "avatar": "ava/AbbeyChan6203.png"},
                    {"id": 14, "name": "-Whitedog-", "avatar": "ava/-Whitedog-.png"},
                    {"id": 15, "name": "Silent Rock", "avatar": "ava/Silent Rock.png"},
                    {"id": 16, "name": "7ony", "avatar": "ava/7ony.png"}
                ]
            }
        },
        "trials": {
            "name": "Trials Group",
            "groupIds": ["E", "F", "G", "H"], // 对应索引 4-7
            "players": {
                "top": [
                    {"id": 17, "name": "lelxdme", "avatar": "ava/lelxdme.png"},
                    {"id": 18, "name": "My Angel Bronya", "avatar": "ava/My Angel Bronya.png"},
                    {"id": 19, "name": "[ RoneKu ]", "avatar": "ava/[ RoneKu ].png"},
                    {"id": 20, "name": "-Mqre-", "avatar": "ava/-Mqre-.png"}
                ],
                "high": [
                    {"id": 21, "name": "-Inui Sana-", "avatar": "ava/-Inui Sana-.png"},
                    {"id": 22, "name": "Chloe Wing Kiu", "avatar": "ava/Chloe Wing Kiu.png"},
                    {"id": 23, "name": "Bochi the osu", "avatar": "ava/Bochi the osu.png"},
                    {"id": 24, "name": "MeowHou", "avatar": "ava/MeowHou.png"}
                ],
                "mid": [
                    {"id": 25, "name": "Summer_Ouo", "avatar": "ava/Summer_Ouo.png"},
                    {"id": 26, "name": "koutya_", "avatar": "ava/koutya_.png"},
                    {"id": 27, "name": "oliwakami", "avatar": "ava/oliwakami.png"},
                    {"id": 28, "name": "RevengeWolf", "avatar": "ava/RevengeWolf.png"}
                ],
                "low": [
                    {"id": 29, "name": "gxytcgxytc", "avatar": "ava/gxytcgxytc.png"},
                    {"id": 30, "name": "- kouyuu -", "avatar": "ava/- kouyuu -.png"},
                    {"id": 31, "name": "Fallen_HK", "avatar": "ava/Fallen_HK.png"},
                    {"id": 32, "name": "BurgerKing", "avatar": "ava/BurgerKing.png"}
                ]
            }
        }
    }
};