const initState = {
  songDetail: {},
  songIndex: 0,
  lyricList: [],
  lyricIndex: 0,
  hotComment: [],
  playList: [
    {
      name: "舞い落ちる花びら（Fallin' Flower）",
      id: 1436264336,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 1080132,
          name: "SEVENTEEN",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 4,
      crbt: null,
      cf: "",
      al: {
        id: 87234519,
        name: "舞い落ちる花びら (Fallin' Flower)",
        picUrl:
          "https://p1.music.126.net/l-tY-5u9UU1bVXKMPXxYhg==/109951164858594404.jpg",
        tns: [],
        pic_str: "109951164858594404",
        pic: 109951164858594400,
      },
      dt: 212375,
      h: {
        br: 320000,
        fid: 0,
        size: 8496109,
        vd: -79763,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5097683,
        vd: -77213,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3398470,
        vd: -75676,
      },
      a: null,
      cd: "01",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 270336,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7003,
      mv: 10923281,
      publishTime: 1585670400000,
      tns: ["舞落的花瓣"],
    },
    {
      name: "雅俗共赏",
      id: 411214279,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: "许嵩",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 31,
      crbt: null,
      cf: "",
      al: {
        id: 34749138,
        name: "青年晚报",
        picUrl:
          "https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
        tns: [],
        pic: 3431575794705764,
      },
      dt: 249621,
      h: {
        br: 320000,
        fid: 0,
        size: 9987177,
        vd: -22200,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5992323,
        vd: -19600,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3994896,
        vd: -17800,
      },
      a: null,
      cd: "1",
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 5302271,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 14026,
      publishTime: 1461723397683,
    },
  ],
  playListCount: 2,
}

export default function reducer(state = initState, action) {
  // 深拷贝
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case "GET_SONG_DETAIL":
      newState.songDetail = action.songDetail
      return newState
    case "GET_LYRIC":
      newState.lyricList = action.lyricList
      return newState
    case "GET_HOT_COMMENT":
      newState.hotComment = action.hotComment
      return newState
    case "GET_PLAY_LIST":
      newState.playList = action.playList
      return newState
    case "GET_PLAY_LIST_COUNT":
      newState.playListCount = action.playListCount
      return newState
    case "GET_LYRIC_INDEX":
      newState.lyricIndex = action.lyricIndex
      return newState
    case "GET_SONG_INDEX":
      newState.songIndex = action.songIndex
      return newState
    default:
      return state
  }
}
