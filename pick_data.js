const pickData = [
  {
    player: "GAO HAO",
    picks: {
      698249: false,    // NM1: 0
      202756: true,    // NM2: 1
      863249: true,    // NM3: 1
      611753: true,    // NM4: 1
      279481: true,    // NM5: 1
      58970: true,    // NM6: 1
      684163: false,    // HD1: 0
      1118285: true,    // HD2: 1
      65233: true,    // HD3: 1
      240488: true,    // HR1: 1
      775365: false,    // HR2: 0
      104389: false,    // HR3: 0
      675854: false,    // DT1: 0
      34056: true,    // DT2: 1
      299041: false,    // DT3: 0
      733432: false,    // FM1: 0
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "Moonlit111",
    picks: {
      698249: false,    // NM1: 0
      202756: false,    // NM2: 0
      863249: false,    // NM3: 0
      611753: false,    // NM4: 0
      279481: false,    // NM5: 0
      58970: false,    // NM6: 0
      684163: true,    // HD1: 1
      1118285: false,    // HD2: 0
      65233: false,    // HD3: 0
      240488: true,    // HR1: 1
      775365: true,    // HR2: 1
      104389: true,    // HR3: 1
      675854: true,    // DT1: 1
      34056: false,    // DT2: 0
      299041: true,    // DT3: 1
      733432: false,    // FM1: 0
      145669: true,    // FM2: 1
      58063: false,    // FM3: 0
      3276769: false    // 保持0
    }
  },
  {
    player: "Flyer",
    picks: {
      698249: false,    // NM1: 0
      202756: false,    // NM2: 0
      863249: true,    // NM3: 1
      611753: true,    // NM4: 1
      279481: true,    // NM5: 1
      58970: false,    // NM6: 0
      684163: true,    // HD1: 1
      1118285: true,    // HD2: 1
      65233: true,    // HD3: 1
      240488: true,    // HR1: 1
      775365: false,    // HR2: 0
      104389: false,    // HR3: 0
      675854: false,    // DT1: 0
      34056: true,    // DT2: 1
      299041: false,    // DT3: 0
      733432: false,    // FM1: 0
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "Tokirii",
    picks: {
      698249: false,    // NM1: 0
      202756: false,    // NM2: 0
      863249: true,    // NM3: 1
      611753: false,    // NM4: 0
      279481: true,    // NM5: 1
      58970: false,    // NM6: 0
      684163: false,    // HD1: 0
      1118285: true,    // HD2: 1
      65233: true,    // HD3: 1
      240488: true,    // HR1: 1
      775365: false,    // HR2: 0
      104389: false,    // HR3: 0
      675854: true,    // DT1: 1
      34056: false,    // DT2: 0
      299041: true,    // DT3: 1
      733432: false,    // FM1: 0
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "Ruyaya",
    picks: {
      698249: true,    // NM1: 1
      202756: false,    // NM2: 0
      863249: false,    // NM3: 0
      611753: false,    // NM4: 0
      279481: true,    // NM5: 1
      58970: true,    // NM6: 1
      684163: true,    // HD1: 1
      1118285: true,    // HD2: 1
      65233: true,    // HD3: 1
      240488: true,    // HR1: 1
      775365: false,    // HR2: 0
      104389: true,    // HR3: 1
      675854: false,    // DT1: 0
      34056: false,    // DT2: 0
      299041: false,    // DT3: 0
      733432: false,    // FM1: 0
      145669: false,    // FM2: 0
      58063: false,    // FM3: 0
      3276769: false    // 保持0
    }
  },
  {
    player: "Qualifiers",
    picks: {
      698249: true,    // NM1: 1
      202756: false,    // NM2: 0
      863249: true,    // NM3: 1
      611753: true,    // NM4: 1
      279481: true,    // NM5: 1
      58970: false,    // NM6: 0
      684163: false,    // HD1: 0
      1118285: false,    // HD2: 0
      65233: false,    // HD3: 0
      240488: true,    // HR1: 1
      775365: false,    // HR2: 0
      104389: true,    // HR3: 1
      675854: true,    // DT1: 1
      34056: true,    // DT2: 1
      299041: true,    // DT3: 1
      733432: true,    // FM1: 1
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "Diaostrophism",
    picks: {
      698249: true,    // NM1: 1
      202756: false,    // NM2: 0
      863249: false,    // NM3: 0
      611753: false,    // NM4: 0
      279481: true,    // NM5: 1
      58970: false,    // NM6: 0
      684163: false,    // HD1: 0
      1118285: true,    // HD2: 1
      65233: true,    // HD3: 1
      240488: true,    // HR1: 1
      775365: false,    // HR2: 0
      104389: false,    // HR3: 0
      675854: true,    // DT1: 1
      34056: false,    // DT2: 0
      299041: false,    // DT3: 0
      733432: true,    // FM1: 1
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "DAQAO",
    picks: {
      698249: true,    // NM1: 1
      202756: true,    // NM2: 1
      863249: true,    // NM3: 1
      611753: false,    // NM4: 0
      279481: false,    // NM5: 0
      58970: false,    // NM6: 0
      684163: true,    // HD1: 1
      1118285: false,    // HD2: 0
      65233: true,    // HD3: 1
      240488: true,    // HR1: 1
      775365: true,    // HR2: 1
      104389: false,    // HR3: 0
      675854: false,    // DT1: 0
      34056: false,    // DT2: 0
      299041: true,    // DT3: 1
      733432: true,    // FM1: 1
      145669: false,    // FM2: 0
      58063: false,    // FM3: 0
      3276769: false    // 保持0
    }
  },
  {
    player: "aaront",
    picks: {
      698249: false,    // NM1: 0
      202756: false,    // NM2: 0
      863249: false,    // NM3: 0
      611753: true,    // NM4: 1
      279481: false,    // NM5: 0
      58970: true,    // NM6: 1
      684163: true,    // HD1: 1
      1118285: false,    // HD2: 0
      65233: false,    // HD3: 0
      240488: false,    // HR1: 0
      775365: false,    // HR2: 0
      104389: true,    // HR3: 1
      675854: false,    // DT1: 0
      34056: false,    // DT2: 0
      299041: true,    // DT3: 1
      733432: false,    // FM1: 0
      145669: true,    // FM2: 1
      58063: false,    // FM3: 0
      3276769: false    // 保持0
    }
  },
  {
    player: "SBHO",
    picks: {
      698249: true,    // NM1: 1
      202756: true,    // NM2: 1
      863249: true,    // NM3: 1
      611753: false,    // NM4: 0
      279481: true,    // NM5: 1
      58970: false,    // NM6: 0
      684163: true,    // HD1: 1
      1118285: true,    // HD2: 1
      65233: false,    // HD3: 0
      240488: false,    // HR1: 0
      775365: true,    // HR2: 1
      104389: false,    // HR3: 0
      675854: true,    // DT1: 1
      34056: false,    // DT2: 0
      299041: true,    // DT3: 1
      733432: true,    // FM1: 1
      145669: false,    // FM2: 0
      58063: false,    // FM3: 0
      3276769: false    // 保持0
    }
  },
  {
    player: "Zkyler",
    picks: {
      698249: false,    // NM1: 0
      202756: false,    // NM2: 0
      863249: true,    // NM3: 1
      611753: true,    // NM4: 1
      279481: true,    // NM5: 1
      58970: true,    // NM6: 1
      684163: true,    // HD1: 1
      1118285: true,    // HD2: 1
      65233: true,    // HD3: 1
      240488: true,    // HR1: 1
      775365: false,    // HR2: 0
      104389: false,    // HR3: 0
      675854: false,    // DT1: 0
      34056: false,    // DT2: 0
      299041: false,    // DT3: 0
      733432: true,    // FM1: 1
      145669: true,    // FM2: 1
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "13roil",
    picks: {
      698249: true,    // NM1: 1
      202756: true,    // NM2: 1
      863249: false,    // NM3: 0
      611753: true,    // NM4: 1
      279481: true,    // NM5: 1
      58970: true,    // NM6: 1
      684163: true,    // HD1: 1
      1118285: true,    // HD2: 1
      65233: false,    // HD3: 0
      240488: false,    // HR1: 0
      775365: true,    // HR2: 1
      104389: true,    // HR3: 1
      675854: false,    // DT1: 0
      34056: true,    // DT2: 1
      299041: true,    // DT3: 1
      733432: false,    // FM1: 0
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "AbbeyChan6203",
    picks: {
      698249: false,    // NM1: 0
      202756: false,    // NM2: 0
      863249: false,    // NM3: 0
      611753: false,    // NM4: 0
      279481: false,    // NM5: 0
      58970: false,    // NM6: 0
      684163: false,    // HD1: 0
      1118285: false,    // HD2: 0
      65233: false,    // HD3: 0
      240488: false,    // HR1: 0
      775365: false,    // HR2: 0
      104389: false,    // HR3: 0
      675854: false,    // DT1: 0
      34056: false,    // DT2: 0
      299041: false,    // DT3: 0
      733432: false,    // FM1: 0
      145669: false,    // FM2: 0
      58063: false,    // FM3: 0
      3276769: false    // 保持0
    }
  },
  {
    player: "-Whitedog-",
    picks: {
      698249: true,    // NM1: 1
      202756: true,    // NM2: 1
      863249: true,    // NM3: 1
      611753: true,    // NM4: 1
      279481: false,    // NM5: 0
      58970: true,    // NM6: 1
      684163: false,    // HD1: 0
      1118285: false,    // HD2: 0
      65233: true,    // HD3: 1
      240488: true,    // HR1: 1
      775365: true,    // HR2: 1
      104389: true,    // HR3: 1
      675854: false,    // DT1: 0
      34056: true,    // DT2: 1
      299041: false,    // DT3: 0
      733432: true,    // FM1: 1
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "Silent Rock",
    picks: {
      698249: true,    // NM1: 1
      202756: false,    // NM2: 0
      863249: true,    // NM3: 1
      611753: true,    // NM4: 1
      279481: true,    // NM5: 1
      58970: false,    // NM6: 0
      684163: true,    // HD1: 1
      1118285: true,    // HD2: 1
      65233: true,    // HD3: 1
      240488: false,    // HR1: 0
      775365: true,    // HR2: 1
      104389: true,    // HR3: 1
      675854: false,    // DT1: 0
      34056: true,    // DT2: 1
      299041: false,    // DT3: 0
      733432: false,    // FM1: 0
      145669: true,    // FM2: 1
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "7ony",
    picks: {
      698249: true,    // NM1: 1
      202756: true,    // NM2: 1
      863249: true,    // NM3: 1
      611753: false,    // NM4: 0
      279481: true,    // NM5: 1
      58970: false,    // NM6: 0
      684163: true,    // HD1: 1
      1118285: false,    // HD2: 0
      65233: true,    // HD3: 1
      240488: false,    // HR1: 0
      775365: false,    // HR2: 0
      104389: false,    // HR3: 0
      675854: true,    // DT1: 1
      34056: false,    // DT2: 0
      299041: true,    // DT3: 1
      733432: true,    // FM1: 1
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "lelxdme",
    picks: {
      698249: false,    // NM1: 0
      202756: false,    // NM2: 0
      863249: true,    // NM3: 1
      611753: true,    // NM4: 1
      279481: false,    // NM5: 0
      58970: false,    // NM6: 0
      684163: false,    // HD1: 0
      1118285: false,    // HD2: 0
      65233: false,    // HD3: 0
      240488: true,    // HR1: 1
      775365: false,    // HR2: 0
      104389: false,    // HR3: 0
      675854: true,    // DT1: 1
      34056: true,    // DT2: 1
      299041: true,    // DT3: 1
      733432: false,    // FM1: 0
      145669: true,    // FM2: 1
      58063: false,    // FM3: 0
      3276769: false    // 保持0
    }
  },
  {
    player: "My Angel Bronya",
    picks: {
      698249: false,    // NM1: 0
      202756: true,    // NM2: 1
      863249: false,    // NM3: 0
      611753: false,    // NM4: 0
      279481: false,    // NM5: 0
      58970: true,    // NM6: 1
      684163: true,    // HD1: 1
      1118285: false,    // HD2: 0
      65233: false,    // HD3: 0
      240488: true,    // HR1: 1
      775365: true,    // HR2: 1
      104389: true,    // HR3: 1
      675854: true,    // DT1: 1
      34056: true,    // DT2: 1
      299041: true,    // DT3: 1
      733432: false,    // FM1: 0
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "[ RoneKu ]",
    picks: {
      698249: false,    // NM1: 0
      202756: false,    // NM2: 0
      863249: true,    // NM3: 1
      611753: false,    // NM4: 0
      279481: true,    // NM5: 1
      58970: false,    // NM6: 0
      684163: false,    // HD1: 0
      1118285: false,    // HD2: 0
      65233: true,    // HD3: 1
      240488: true,    // HR1: 1
      775365: true,    // HR2: 1
      104389: true,    // HR3: 1
      675854: true,    // DT1: 1
      34056: false,    // DT2: 0
      299041: true,    // DT3: 1
      733432: false,    // FM1: 0
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "-Mqre-",
    picks: {
      698249: false,    // NM1: 0
      202756: false,    // NM2: 0
      863249: true,    // NM3: 1
      611753: false,    // NM4: 0
      279481: true,    // NM5: 1
      58970: false,    // NM6: 0
      684163: false,    // HD1: 0
      1118285: true,    // HD2: 1
      65233: true,    // HD3: 1
      240488: false,    // HR1: 0
      775365: true,    // HR2: 1
      104389: true,    // HR3: 1
      675854: false,    // DT1: 0
      34056: false,    // DT2: 0
      299041: false,    // DT3: 0
      733432: false,    // FM1: 0
      145669: false,    // FM2: 0
      58063: false,    // FM3: 0
      3276769: false    // 保持0
    }
  },
  {
    player: "-Inui Sana-",
    picks: {
      698249: true,    // NM1: 1
      202756: false,    // NM2: 0
      863249: true,    // NM3: 1
      611753: true,    // NM4: 1
      279481: true,    // NM5: 1
      58970: false,    // NM6: 0
      684163: false,    // HD1: 0
      1118285: false,    // HD2: 0
      65233: false,    // HD3: 0
      240488: false,    // HR1: 0
      775365: false,    // HR2: 0
      104389: true,    // HR3: 1
      675854: true,    // DT1: 1
      34056: false,    // DT2: 0
      299041: false,    // DT3: 0
      733432: true,    // FM1: 1
      145669: false,    // FM2: 0
      58063: false,    // FM3: 0
      3276769: false    // 保持0
    }
  },
  {
    player: "Chloe Wing Kiu",
    picks: {
      698249: false,    // NM1: 0
      202756: false,    // NM2: 0
      863249: true,    // NM3: 1
      611753: true,    // NM4: 1
      279481: false,    // NM5: 0
      58970: false,    // NM6: 0
      684163: true,    // HD1: 1
      1118285: false,    // HD2: 0
      65233: false,    // HD3: 0
      240488: true,    // HR1: 1
      775365: true,    // HR2: 1
      104389: true,    // HR3: 1
      675854: false,    // DT1: 0
      34056: false,    // DT2: 0
      299041: true,    // DT3: 1
      733432: false,    // FM1: 0
      145669: false,    // FM2: 0
      58063: false,    // FM3: 0
      3276769: false    // 保持0
    }
  },
  {
    player: "Bochi the osu",
    picks: {
      698249: true,    // NM1: 1
      202756: true,    // NM2: 1
      863249: true,    // NM3: 1
      611753: true,    // NM4: 1
      279481: true,    // NM5: 1
      58970: true,    // NM6: 1
      684163: true,    // HD1: 1
      1118285: false,    // HD2: 0
      65233: false,    // HD3: 0
      240488: true,    // HR1: 1
      775365: false,    // HR2: 0
      104389: false,    // HR3: 0
      675854: false,    // DT1: 0
      34056: true,    // DT2: 1
      299041: true,    // DT3: 1
      733432: true,    // FM1: 1
      145669: false,    // FM2: 0
      58063: false,    // FM3: 0
      3276769: false    // 保持0
    }
  },
  {
    player: "MeowHou",
    picks: {
      698249: false,    // NM1: 0
      202756: true,    // NM2: 1
      863249: true,    // NM3: 1
      611753: true,    // NM4: 1
      279481: true,    // NM5: 1
      58970: true,    // NM6: 1
      684163: false,    // HD1: 0
      1118285: false,    // HD2: 0
      65233: true,    // HD3: 1
      240488: false,    // HR1: 0
      775365: true,    // HR2: 1
      104389: false,    // HR3: 0
      675854: false,    // DT1: 0
      34056: true,    // DT2: 1
      299041: true,    // DT3: 1
      733432: true,    // FM1: 1
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "Summer_Ouo",
    picks: {
      698249: false,    // NM1: 0
      202756: true,    // NM2: 1
      863249: true,    // NM3: 1
      611753: false,    // NM4: 0
      279481: false,    // NM5: 0
      58970: true,    // NM6: 1
      684163: true,    // HD1: 1
      1118285: false,    // HD2: 0
      65233: true,    // HD3: 1
      240488: false,    // HR1: 0
      775365: true,    // HR2: 1
      104389: true,    // HR3: 1
      675854: true,    // DT1: 1
      34056: true,    // DT2: 1
      299041: true,    // DT3: 1
      733432: false,    // FM1: 0
      145669: true,    // FM2: 1
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "koutya_",
    picks: {
      698249: true,    // NM1: 1
      202756: false,    // NM2: 0
      863249: false,    // NM3: 0
      611753: true,    // NM4: 1
      279481: false,    // NM5: 0
      58970: false,    // NM6: 0
      684163: true,    // HD1: 1
      1118285: true,    // HD2: 1
      65233: true,    // HD3: 1
      240488: true,    // HR1: 1
      775365: true,    // HR2: 1
      104389: true,    // HR3: 1
      675854: false,    // DT1: 0
      34056: true,    // DT2: 1
      299041: false,    // DT3: 0
      733432: false,    // FM1: 0
      145669: true,    // FM2: 1
      58063: false,    // FM3: 0
      3276769: false    // 保持0
    }
  },
  {
    player: "oliwakami",
    picks: {
      698249: false,    // NM1: 0
      202756: true,    // NM2: 1
      863249: false,    // NM3: 0
      611753: true,    // NM4: 1
      279481: false,    // NM5: 0
      58970: true,    // NM6: 1
      684163: true,    // HD1: 1
      1118285: true,    // HD2: 1
      65233: false,    // HD3: 0
      240488: true,    // HR1: 1
      775365: true,    // HR2: 1
      104389: false,    // HR3: 0
      675854: true,    // DT1: 1
      34056: true,    // DT2: 1
      299041: false,    // DT3: 0
      733432: false,    // FM1: 0
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "RevengeWolf",
    picks: {
      698249: true,    // NM1: 1
      202756: true,    // NM2: 1
      863249: true,    // NM3: 1
      611753: true,    // NM4: 1
      279481: true,    // NM5: 1
      58970: true,    // NM6: 1
      684163: true,    // HD1: 1
      1118285: true,    // HD2: 1
      65233: false,    // HD3: 0
      240488: false,    // HR1: 0
      775365: false,    // HR2: 0
      104389: false,    // HR3: 0
      675854: true,    // DT1: 1
      34056: true,    // DT2: 1
      299041: false,    // DT3: 0
      733432: true,    // FM1: 1
      145669: false,    // FM2: 0
      58063: false,    // FM3: 0
      3276769: false    // 保持0
    }
  },
  {
    player: "gxytcgxytc",
    picks: {
      698249: true,    // NM1: 1
      202756: false,    // NM2: 0
      863249: false,    // NM3: 0
      611753: true,    // NM4: 1
      279481: true,    // NM5: 1
      58970: false,    // NM6: 0
      684163: false,    // HD1: 0
      1118285: true,    // HD2: 1
      65233: true,    // HD3: 1
      240488: false,    // HR1: 0
      775365: false,    // HR2: 0
      104389: true,    // HR3: 1
      675854: false,    // DT1: 0
      34056: true,    // DT2: 1
      299041: false,    // DT3: 0
      733432: true,    // FM1: 1
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "- kouyuu -",
    picks: {
      698249: true,    // NM1: 1
      202756: true,    // NM2: 1
      863249: true,    // NM3: 1
      611753: true,    // NM4: 1
      279481: false,    // NM5: 0
      58970: true,    // NM6: 1
      684163: true,    // HD1: 1
      1118285: true,    // HD2: 1
      65233: false,    // HD3: 0
      240488: false,    // HR1: 0
      775365: false,    // HR2: 0
      104389: true,    // HR3: 1
      675854: false,    // DT1: 0
      34056: true,    // DT2: 1
      299041: false,    // DT3: 0
      733432: true,    // FM1: 1
      145669: true,    // FM2: 1
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "Fallen_HK",
    picks: {
      698249: true,    // NM1: 1
      202756: true,    // NM2: 1
      863249: true,    // NM3: 1
      611753: false,    // NM4: 0
      279481: true,    // NM5: 1
      58970: false,    // NM6: 0
      684163: false,    // HD1: 0
      1118285: true,    // HD2: 1
      65233: true,    // HD3: 1
      240488: true,    // HR1: 1
      775365: true,    // HR2: 1
      104389: true,    // HR3: 1
      675854: false,    // DT1: 0
      34056: false,    // DT2: 0
      299041: false,    // DT3: 0
      733432: true,    // FM1: 1
      145669: false,    // FM2: 0
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  },
  {
    player: "BurgerKing",
    picks: {
      698249: false,    // NM1: 0
      202756: false,    // NM2: 0
      863249: false,    // NM3: 0
      611753: false,    // NM4: 0
      279481: true,    // NM5: 1
      58970: true,    // NM6: 1
      684163: true,    // HD1: 1
      1118285: true,    // HD2: 1
      65233: true,    // HD3: 1
      240488: true,    // HR1: 1
      775365: true,    // HR2: 1
      104389: false,    // HR3: 0
      675854: true,    // DT1: 1
      34056: false,    // DT2: 0
      299041: true,    // DT3: 1
      733432: false,    // FM1: 0
      145669: true,    // FM2: 1
      58063: true,    // FM3: 1
      3276769: false    // 保持0
    }
  }
];

export default pickData;
