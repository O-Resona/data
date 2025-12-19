// pool.js - 地图数据定义文件
const poolData = {
    "Group Stage": [
        { id: "698249", title: "Reol - Asymmetry", mapper: "Skystar", difficulty: "Asphewin's Expert", mod: "NoMod", bg: "https://assets.ppy.sh/beatmaps/310499/covers/cover.jpg" },
        { id: "202756", title: "Yousei Teikoku - The Creator", mapper: "meiikyuu", difficulty: "Nyaten", mod: "NoMod", bg: "https://assets.ppy.sh/beatmaps/41242/covers/cover.jpg" },
        { id: "863249", title: "Yooh - LegenD.", mapper: "Flask", difficulty: "GravitY.", mod: "NoMod", bg: "https://assets.ppy.sh/beatmaps/396839/covers/cover.jpg" },
        { id: "611753", title: "Hitori Tori - perthed again (yambabom remix)", mapper: "Asphyxia", difficulty: "Zapy's Extra", mod: "NoMod", bg: "https://assets.ppy.sh/beatmaps/268693/covers/cover.jpg" },
        { id: "279481", title: "FOLiACETATE - Heterochromia Iridis", mapper: "ktgster", difficulty: "Terror", mod: "NoMod", bg: "https://assets.ppy.sh/beatmaps/106443/covers/cover.jpg" },
        { id: "58970", title: "Susumu Hirasawa - SWITCHED-ON LOTUS", mapper: "Starrodkirby86", difficulty: "KIRBY Mix Deluxe", mod: "NoMod", bg: "https://assets.ppy.sh/beatmaps/16457/covers/cover.jpg" },
        { id: "684163", title: "Pierce The Veil - King For A Day (feat Kellin Quinn)", mapper: "pishifat", difficulty: "Ex", mod: "Hidden", bg: "https://assets.ppy.sh/beatmaps/297909/covers/cover.jpg" },
        { id: "1118285", title: "An - Catanoph", mapper: "Lavender", difficulty: "Extra(OWC Version)", mod: "Hidden", bg: "https://assets.ppy.sh/beatmaps/527069/covers/cover.jpg" },
        { id: "65233", title: "IOSYS - Poinsettia", mapper: "Aakiha", difficulty: "Lunatic", mod: "Hidden", bg: "https://assets.ppy.sh/beatmaps/18382/covers/cover.jpg" },
        { id: "240488", title: "t+pazolite - cheatreal", mapper: "caren_sk", difficulty: "Extra", mod: "HardRock", bg: "https://assets.ppy.sh/beatmaps/88180/covers/cover.jpg" },
        { id: "775365", title: "TOTTO - Wadatsumi", mapper: "Desperate-kun", difficulty: "Snaggle's Insane", mod: "HardRock", bg: "https://assets.ppy.sh/beatmaps/351828/covers/cover.jpg" },
        { id: "104389", title: "Glamour of the Kill - A Hope in Hell", mapper: "ykcarrot", difficulty: "Hopeless", mod: "HardRock", bg: "https://assets.ppy.sh/beatmaps/31814/covers/cover.jpg" },
        { id: "675854", title: "Hatsunetsumiko's - Two Fates", mapper: "happy30", difficulty: "Destiny", mod: "DoubleTime", bg: "https://assets.ppy.sh/beatmaps/301400/covers/cover.jpg" },
        { id: "34056", title: "Kagamine Ren - Kumo no Iseki", mapper: "v2b", difficulty: "ignore's Insane", mod: "DoubleTime", bg: "https://assets.ppy.sh/beatmaps/8069/covers/cover.jpg" },
        { id: "299041", title: "senya - Youyoumu no Gotoku", mapper: "Satellite", difficulty: "Satellite", mod: "DoubleTime", bg: "https://assets.ppy.sh/beatmaps/110985/covers/cover.jpg" },
        { id: "733432", title: "Camellia - Fastest Crash", mapper: "sukiNathan", difficulty: "RLC's Paroxysm", mod: "FreeMod", bg: "https://assets.ppy.sh/beatmaps/331025/covers/cover.jpg" },
        { id: "145669", title: "EZFG - Hurting for a Very Hurtful Pain", mapper: "tutuhaha", difficulty: "Dance", mod: "FreeMod", bg: "https://assets.ppy.sh/beatmaps/46848/covers/cover.jpg" },
        { id: "58063", title: "beatMARIO - Night of Knights", mapper: "DJPop", difficulty: "SOLO", mod: "FreeMod", bg: "https://assets.ppy.sh/beatmaps/15920/covers/cover.jpg" },
        { id: "3276769", title: "DJ SHARPNEL - FAKE PROMISE", mapper: "Nana Abe", difficulty: "NISEMONO", mod: "TieBreaker", bg: "https://assets.ppy.sh/beatmaps/1604660/covers/cover.jpg" }
    ],
    "Quarter Finals": [
        // 这里可以添加四分之一决赛的地图数据
        // 格式示例：
        // { id: "123456", title: "Example Title", mapper: "Example Mapper", difficulty: "Example Difficulty", mod: "NoMod", bg: "https://example.com/cover.jpg" }
    ],
    "Semi Finals": [
        // 这里可以添加半决赛的地图数据
    ],
    "Finals": [
        // 这里可以添加决赛的地图数据
    ]
};

// 导出一个获取所有地图的函数（平铺所有轮次的地图）
function getAllMaps() {
    let allMaps = [];
    for (const round in poolData) {
        if (poolData.hasOwnProperty(round)) {
            // 为每个地图添加轮次信息
            const roundMaps = poolData[round].map(map => ({
                ...map,
                round: round
            }));
            allMaps = allMaps.concat(roundMaps);
        }
    }
    return allMaps;
}

// 导出为一个全局变量，让index.js可以访问
window.poolData = poolData;

// 导出一个获取指定轮次地图的函数
function getMapsByRound(roundName) {
    return poolData[roundName] || [];
}

// 导出轮次列表
function getRoundNames() {
    return Object.keys(poolData);
}

// 导出数据（用于模块化导入）
export { poolData, getAllMaps, getMapsByRound, getRoundNames };