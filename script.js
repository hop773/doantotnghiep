(function(){
    var script = {
 "downloadEnabled": true,
 "defaultVRPointer": "laser",
 "children": [
  "this.MainViewer",
  "this.Container_E12E97BC_FC5E_3EF0_41BB_846FF6F501CC",
  "this.Container_EE05509D_FD91_02BD_41EF_9AA91BF3F817",
  "this.Container_E5BB554E_FD93_039E_41E6_CA88984403B5",
  "this.HTMLText_1B417888_0B13_AC7C_41A1_5FCA0700A4F3",
  "this.IconButton_047915E6_0AF0_A7B4_419E_B4D24A966C32",
  "this.Container_1949E009_0CC4_4EFC_41A1_1A3EDD7D64F5"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "start": "this.playAudioList([this.audio_CCF8D53A_FC66_53F0_41DF_E83B2E065B96]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5B8A54E_FD93_039E_41E3_948216944E04], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist,this.DropDown_EE05F09D_FD91_02BD_41DF_1E01DAA2A683_playlist,this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_E5BB654E_FD93_039E_41EB_C8BE372978C3].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B48FD77D_94DF_DF87_41BF_91651A01F658",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF50E69_91BD_82E3_41A5_74B449D46960",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF68425_91BB_8660_41E1_E437243C84C2",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF68425_91BB_8660_41E1_E437243C84C2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF40526_91BB_8661_41C2_A4514F9033D3",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF585CE_91BB_8620_41D8_753803B9D59D",
   "begin": "this.setEndToItemIndex(this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist, 17, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_camera"
  }
 ],
 "id": "DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 77.6,
  "pitch": -3.98
 },
 "id": "panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -90.44,
  "pitch": 0
 },
 "id": "camera_02FB740C_0F2B_F90B_417A_93ADB6F576C4"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 97.98,
  "pitch": 2.25
 },
 "id": "panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 86.84,
  "pitch": -0.32
 },
 "id": "panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -23.87,
  "pitch": 0
 },
 "id": "camera_035D3311_0F2B_FF1D_419E_E71A8B8791F5"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -29.32,
  "pitch": 0
 },
 "id": "camera_03E26348_0F2B_FF0B_41A0_DADF3C7CA719"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -104.78,
  "pitch": 1.2
 },
 "id": "panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 85.14,
  "pitch": -13.03
 },
 "id": "panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 89.05,
  "pitch": -21.92
 },
 "id": "panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 160.12,
  "pitch": 0
 },
 "id": "camera_0161D2E1_0F2B_F93D_4191_0C864C2F3A6E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 116.82,
  "pitch": 0
 },
 "id": "camera_010E4449_0F2B_F90D_419B_9FD921C90E26"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -98.18,
  "pitch": 0
 },
 "id": "camera_02D18430_0F2B_F91B_41AD_5BDEED12E9DF"
},
{
 "label": "S\u1ea3nh t\u1ea7ng 1 (T\u00f2a nh\u00e0 8 t\u1ea7ng)",
 "hfovMin": "120%",
 "id": "panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F",
 "overlays": [
  "this.overlay_EF3542AE_FBEA_5690_41B7_616F8256AA76",
  "this.overlay_EF32A2AE_FBEA_5690_41D3_185B78FA5515",
  "this.overlay_EF3292AE_FBEA_5690_41E2_C3C1CA0E1ADD",
  "this.overlay_EF3282AE_FBEA_5690_41E5_67644495ABC1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 81.86,
   "panorama": "this.panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E",
   "backwardYaw": 150.68,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -76.82,
   "panorama": "this.panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2",
   "backwardYaw": 93.51,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EB055868_FBEA_3190_41D8_15F9580FE297",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -128.59,
   "panorama": "this.panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4",
   "backwardYaw": 95.88,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 57.92,
  "pitch": 1.92
 },
 "id": "panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -45.55,
  "pitch": 0
 },
 "id": "camera_03A2B4A7_0F2B_F905_4182_71C395D66F15"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -25.98,
  "pitch": 0
 },
 "id": "camera_028EC3E2_0F2B_FF3F_41A8_F1E6B9B792C7"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -24,
  "pitch": 0
 },
 "id": "camera_0106A2D4_0F2B_F91B_41A2_6662E7BA1AD3"
},
{
 "label": "Ph\u00f2ng th\u1ef1c h\u00e0nh qu\u1ea3n tr\u1ecb m\u1ea1ng view 2",
 "hfovMin": "120%",
 "id": "panorama_B48FD77D_94DF_DF87_41BF_91651A01F658",
 "overlays": [
  "this.overlay_8A8FAEF0_967F_7227_41B9_CC136C40D24E",
  "this.overlay_8AC8B8CC_967D_1E7F_41C0_86862C81A6BD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 83.77,
   "panorama": "this.panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B",
   "backwardYaw": 89.56,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -112.57,
  "pitch": 0
 },
 "id": "camera_024BD3A7_0F2B_FF05_4176_E3DED0294C3D"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 82.98,
  "pitch": -8.21
 },
 "id": "panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -23.07,
  "pitch": 0
 },
 "id": "camera_02A1F3BF_0F2B_FF05_417E_FD26AF025CFA"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 89.49,
  "pitch": -23.39
 },
 "id": "panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -84.12,
  "pitch": 0
 },
 "id": "camera_03F56355_0F2B_FF05_4181_987F1140ACF0"
},
{
 "label": "V\u0103n ph\u00f2ng khoa CNTT view 1",
 "hfovMin": "120%",
 "id": "panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C",
 "overlays": [
  "this.overlay_B036C3A0_94E4_F6BC_41D1_25A12EABDFE2",
  "this.overlay_8151DB2A_9613_323B_41B9_8F438FCBAA43"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -25.22,
   "panorama": "this.panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4",
   "backwardYaw": 82.45,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 82.84,
   "panorama": "this.panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC",
   "backwardYaw": 83.53,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 45.35,
  "pitch": -16.52
 },
 "id": "panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 86.69,
  "pitch": -0.98
 },
 "id": "panorama_EB055868_FBEA_3190_41D8_15F9580FE297_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 91.22,
  "pitch": -1.68
 },
 "id": "panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 93.97,
  "pitch": -23.27
 },
 "id": "panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -1.99,
  "pitch": 0
 },
 "id": "camera_0344F30A_0F2B_FF0F_4176_80E1A8AEEF4E"
},
{
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_E5B8A54E_FD93_039E_41E3_948216944E04",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "label": "C\u1eeda v\u0103n ph\u00f2ng khoa CNTT",
 "hfovMin": "120%",
 "id": "panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4",
 "overlays": [
  "this.overlay_80AAA70F_945D_5F84_41AE_43E2ED5BFEB2",
  "this.overlay_8D196549_945C_D38C_41CB_132CE952D067",
  "this.overlay_80FDC9FF_945C_F284_41D5_A1DE4DF20446",
  "this.overlay_983333AC_9613_123E_41BE_6ED5D43575A3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 178.13,
   "panorama": "this.panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E",
   "backwardYaw": 86.77,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 82.45,
   "panorama": "this.panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C",
   "backwardYaw": -25.22,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F",
   "class": "AdjacentPanorama"
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -96.23,
  "pitch": 0
 },
 "id": "camera_017B845D_0F2B_F905_415E_784683E608BF"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -1.87,
  "pitch": 0
 },
 "id": "camera_0109D2CB_0F2B_F90D_4190_28E5E0A941D4"
},
{
 "label": "H\u00e0nh lang t\u1ea7ng 6 (t\u00f2a nh\u00e0 8 t\u1ea7ng)",
 "hfovMin": "120%",
 "id": "panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7",
 "overlays": [
  "this.overlay_E63E635D_FC3E_57B3_41EC_B1DB3DA7C33A",
  "this.overlay_E63F935D_FC3E_57B3_41E3_95BBA7C80A13",
  "this.overlay_E63FB35D_FC3E_57B3_4195_69DB275056C9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 156.13,
   "panorama": "this.panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74",
   "backwardYaw": 151.81,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 156.93,
   "panorama": "this.panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D",
   "backwardYaw": 154.02,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 168.36,
   "panorama": "this.panorama_9DF50E69_91BD_82E3_41A5_74B449D46960",
   "backwardYaw": -100.56,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -95.94,
  "pitch": 0
 },
 "id": "camera_023FB37E_0F2B_FF07_419F_9948AB0F5104"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 93.99,
  "pitch": 2.36
 },
 "id": "panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 94.15,
  "pitch": -3.22
 },
 "id": "panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 78.53,
  "pitch": 1.94
 },
 "id": "panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 89.4,
  "pitch": -0.1
 },
 "id": "panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_camera"
},
{
 "label": "Ph\u00f2ng th\u1ef1c h\u00e0nh c\u00f4ng ngh\u1ec7 ph\u1ea7n m\u1ec1m 1 view 2",
 "hfovMin": "120%",
 "id": "panorama_9DF40526_91BB_8661_41C2_A4514F9033D3",
 "overlays": [
  "this.overlay_B5090D25_9425_7384_41D8_643BB0128D12",
  "this.overlay_827CDEB1_962D_7229_41C0_C5E231927C7C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 83.04,
   "panorama": "this.panorama_9DF68425_91BB_8660_41E1_E437243C84C2",
   "backwardYaw": 65.33,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_t.jpg",
 "hfovMax": 93
},
{
 "label": "Ph\u00f2ng b\u1ea3o tr\u00ec m\u00e1y t\u00ednh v\u00e0 m\u1ea1ng view 2",
 "hfovMin": "120%",
 "id": "panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2",
 "overlays": [
  "this.overlay_81841BC2_9423_D6FC_41A1_A47C9802FDD1",
  "this.overlay_83B788B9_9613_3E19_41C0_724B92E506AE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 49.25,
   "panorama": "this.panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD",
   "backwardYaw": 90.04,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_t.jpg",
 "hfovMax": 93
},
{
 "label": "H\u00e0nh lang t\u1ea7ng 7 (t\u00f2a nh\u00e0 8 t\u1ea7ng)",
 "hfovMin": "120%",
 "id": "panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74",
 "overlays": [
  "this.overlay_EB95B8E9_FC5E_3290_41D0_05A0CDE3D902",
  "this.overlay_EB95C8E9_FC5E_3290_41D4_073EF44FBBFC",
  "this.overlay_EB95E8E9_FC5E_3290_41E3_19199937EB45"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 84.4,
   "panorama": "this.panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28",
   "backwardYaw": 178.01,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 151.81,
   "panorama": "this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7",
   "backwardYaw": 156.13,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -96.16,
   "panorama": "this.panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53",
   "backwardYaw": 2.87,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -168,
  "pitch": 0
 },
 "id": "camera_014BD465_0F2B_F905_414F_B295FA50334A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 79.44,
  "pitch": 0
 },
 "id": "camera_029F13EE_0F2B_FF07_41A0_C752127B9A63"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 94.26,
  "pitch": 4.53
 },
 "id": "panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB055868_FBEA_3190_41D8_15F9580FE297",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB055868_FBEA_3190_41D8_15F9580FE297_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B48FD77D_94DF_DF87_41BF_91651A01F658",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF50E69_91BD_82E3_41A5_74B449D46960",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF68425_91BB_8660_41E1_E437243C84C2",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF68425_91BB_8660_41E1_E437243C84C2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF40526_91BB_8661_41C2_A4514F9033D3",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF585CE_91BB_8620_41D8_753803B9D59D",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist, 25, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_camera"
  }
 ],
 "id": "ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist"
},
{
 "label": "Ph\u00f2ng th\u1ef1c h\u00e0nh c\u00f4ng ngh\u1ec7 ph\u1ea7n m\u1ec1m 2 view 1",
 "hfovMin": "120%",
 "id": "panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C",
 "overlays": [
  "this.overlay_BDC0E8B1_94EC_D29C_41E2_AFA59625EDBE",
  "this.overlay_8A26DC01_9674_F5E6_41DD_FE0641EA4F11"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 166.9,
   "panorama": "this.panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53",
   "backwardYaw": 81.78,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 98.85,
   "panorama": "this.panorama_9DF585CE_91BB_8620_41D8_753803B9D59D",
   "backwardYaw": 88.64,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_t.jpg",
 "hfovMax": 93
},
{
 "label": "C\u1eeda ph\u00f2ng th\u1ef1c h\u00e0nh qu\u1ea3n tr\u1ecb m\u1ea1ng",
 "hfovMin": "120%",
 "id": "panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8",
 "overlays": [
  "this.overlay_1E58F0F1_0CC7_CF2C_41A4_BC36AF67D960",
  "this.overlay_1FAE1BD2_0CC4_B16C_4193_806970BA5D3E",
  "this.overlay_1FB2B4A0_0CC5_F72C_4163_50A448E87F88"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 84.43,
   "panorama": "this.panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B",
   "backwardYaw": -19.88,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 154.78,
  "pitch": 0
 },
 "id": "camera_02C7B425_0F2B_F93A_41A7_AB2BBE02B3F5"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -95.6,
  "pitch": 0
 },
 "id": "camera_013C3442_0F2B_F97F_41A4_F81401D2BD23"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -97.55,
  "pitch": 0
 },
 "id": "camera_03A1531F_0F2B_FF05_419F_1480C224EB99"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -130.75,
  "pitch": 0
 },
 "id": "camera_03941341_0F2B_FF7D_4177_78CEC5CC8458"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 94.15,
  "pitch": -8.73
 },
 "id": "panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -96.47,
  "pitch": 0
 },
 "id": "camera_03BFB325_0F2B_FF05_4184_1A2540E833C8"
},
{
 "label": "H\u00e0nh lang t\u1ea7ng 2 (t\u00f2a nh\u00e0 8 t\u1ea7ng)",
 "hfovMin": "120%",
 "id": "panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E",
 "overlays": [
  "this.overlay_EAC7B805_FBE6_7193_41E4_A983A6153ED9",
  "this.overlay_EAC78805_FBE6_7193_41EA_E8F5FC190B08",
  "this.overlay_EAC79806_FBE6_7190_41EA_BDF08F7F5B6C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 86.77,
   "panorama": "this.panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4",
   "backwardYaw": 178.13,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 149.91,
   "panorama": "this.panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D",
   "backwardYaw": 156,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 150.68,
   "panorama": "this.panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F",
   "backwardYaw": 81.86,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_t.jpg",
 "hfovMax": 93
},
{
 "label": "Ph\u00f2ng th\u1ef1c h\u00e0nh c\u00f4ng ngh\u1ec7 ph\u1ea7n m\u1ec1m 1 view 1",
 "hfovMin": "120%",
 "id": "panorama_9DF68425_91BB_8660_41E1_E437243C84C2",
 "overlays": [
  "this.overlay_8A8F2194_942F_F284_41BD_979AD715D7A1",
  "this.overlay_85DDCC79_9633_1619_41C1_E99B236E0F69"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -63.18,
   "panorama": "this.panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28",
   "backwardYaw": 90.43,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 65.33,
   "panorama": "this.panorama_9DF40526_91BB_8661_41C2_A4514F9033D3",
   "backwardYaw": 83.04,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_t.jpg",
 "hfovMax": 93
},
{
 "label": "S\u00e2n tr\u01b0\u1eddng",
 "hfovMin": "120%",
 "id": "panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2",
 "overlays": [
  "this.overlay_83D7AD1E_938A_7C5A_418F_07CD68AC3BF8",
  "this.overlay_83D2188B_9396_643A_41DD_097E57207663",
  "this.overlay_82644891_9397_E426_41B0_7427B5054611",
  "this.overlay_81F51A7E_9427_D184_41CA_5F33BBEBFB61"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -32.27,
   "panorama": "this.panorama_EB055868_FBEA_3190_41D8_15F9580FE297",
   "backwardYaw": -54.78,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -157.19,
   "panorama": "this.panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4",
   "backwardYaw": 67.43,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 93.51,
   "panorama": "this.panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F",
   "backwardYaw": -76.82,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_t.jpg",
 "hfovMax": 93
},
{
 "label": "C\u1eeda ph\u00f2ng b\u1ed9 m\u00f4n",
 "hfovMin": "120%",
 "id": "panorama_9DF50E69_91BD_82E3_41A5_74B449D46960",
 "overlays": [
  "this.overlay_82027C87_9465_5284_41DC_6FF2790955F4",
  "this.overlay_823918ED_9467_7287_41E0_DAEA2FA81C09",
  "this.overlay_8C5168AA_9464_B28C_41D2_4F78B94206A1",
  "this.overlay_8B1BA618_9675_15E7_41D9_5D9C8BFABD67"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -100.56,
   "panorama": "this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7",
   "backwardYaw": 168.36,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 81.82,
   "panorama": "this.panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112",
   "backwardYaw": 134.45,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -96.6,
  "pitch": 0
 },
 "id": "camera_0122043C_0F2B_F90B_41AD_71D8D327E58B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -114.67,
  "pitch": 0
 },
 "id": "camera_0118A44F_0F2B_F905_419D_F54D44221AEB"
},
{
 "label": "Ph\u00f2ng b\u1ed9 m\u00f4n view 2",
 "hfovMin": "120%",
 "id": "panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9",
 "overlays": [
  "this.overlay_B5EBEB5D_9424_D784_41DE_CB65D87D9C74",
  "this.overlay_84531431_9635_F626_41C4_30D46A5D737D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9DF50E69_91BD_82E3_41A5_74B449D46960",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 83.4,
   "panorama": "this.panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112",
   "backwardYaw": 84.06,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 83.84,
  "pitch": 0
 },
 "id": "camera_02348384_0F2B_FFFB_4185_50D3F09CDE68"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 86.42,
  "pitch": 0.25
 },
 "id": "panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_camera"
},
{
 "label": "Ph\u00f2ng th\u1ef1c h\u00e0nh c\u00f4ng ngh\u1ec7 ph\u1ea7n m\u1ec1m 2 view 2",
 "hfovMin": "120%",
 "id": "panorama_9DF585CE_91BB_8620_41D8_753803B9D59D",
 "overlays": [
  "this.overlay_B40AD862_94DD_B1BC_4192_89A57E1C6217",
  "this.overlay_83282BB1_962F_1229_41DB_26D573EED522"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 88.64,
   "panorama": "this.panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C",
   "backwardYaw": 98.85,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_t.jpg",
 "hfovMax": 93
},
{
 "label": "H\u00e0nh lang t\u1ea7ng 4 (t\u00f2a nh\u00e0 8 t\u1ea7ng)",
 "id": "panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D",
 "overlays": [
  "this.overlay_EFEE4C87_FBDA_D29F_41D7_3915C222E12C",
  "this.overlay_EFEE7C87_FBDA_D29F_41E6_39D69CF089A8",
  "this.overlay_EFEE0C88_FBDA_D291_41E7_CA3D33B9FC67"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 156,
   "panorama": "this.panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E",
   "backwardYaw": 149.91,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 154.02,
   "panorama": "this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7",
   "backwardYaw": 156.93,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8",
   "class": "AdjacentPanorama"
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_t.jpg",
 "hfovMax": 93
},
{
 "class": "FadeOutEffect",
 "duration": 200,
 "id": "effect_764B50D0_5098_666A_41CA_D502B62644A1",
 "easing": "quad_in"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -81.15,
  "pitch": 0
 },
 "id": "camera_03A584AE_0F2B_F907_41A2_954EFFA4D70E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -30.09,
  "pitch": 0
 },
 "id": "camera_0257E3B9_0F2B_FF0D_419D_87D84DE067A1"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -95.57,
  "pitch": 0
 },
 "id": "camera_01692457_0F2B_F905_418B_ECC14557F9DF"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -98.14,
  "pitch": 0
 },
 "id": "camera_0110E2DB_0F2B_F90D_4179_25C98FF54216"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -86.41,
  "pitch": 0
 },
 "id": "camera_039F633B_0F2B_FF0D_41AC_D074211D3F28"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 84.49,
  "pitch": 2.77
 },
 "id": "panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_camera"
},
{
 "label": "C\u1ed5ng tr\u01b0\u1eddng",
 "hfovMin": "120%",
 "id": "panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4",
 "overlays": [
  "this.overlay_9C729A36_937A_246A_41E1_B755D72E2025",
  "this.overlay_8240282A_937A_647A_41D0_416E163DA85A",
  "this.overlay_9C6F3503_9376_2C2A_41D1_53A06E5332E5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EB055868_FBEA_3190_41D8_15F9580FE297",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 67.43,
   "panorama": "this.panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2",
   "backwardYaw": -157.19,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 95.88,
   "panorama": "this.panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F",
   "backwardYaw": -128.59,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_t.jpg",
 "hfovMax": 93
},
{
 "label": "Ph\u00f2ng th\u1ef1c h\u00e0nh qu\u1ea3n tr\u1ecb m\u1ea1ng view 1",
 "hfovMin": "120%",
 "id": "panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B",
 "overlays": [
  "this.overlay_8A01C0D1_967D_2E69_41C0_D63322C5BA73",
  "this.overlay_8AF9A581_967D_36E6_41DC_8E47D7D080E8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -19.88,
   "panorama": "this.panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8",
   "backwardYaw": 84.43,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 89.56,
   "panorama": "this.panorama_B48FD77D_94DF_DF87_41BF_91651A01F658",
   "backwardYaw": 83.77,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -97.16,
  "pitch": 0
 },
 "id": "camera_01578474_0F2B_F91B_418B_0ED55B866CD0"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -89.57,
  "pitch": 0
 },
 "id": "camera_03C2935B_0F2B_FF0D_4184_FC05A4F26B51"
},
{
 "label": "C\u1eeda ph\u00f2ng th\u1ef1c h\u00e0nh c\u00f4ng ngh\u1ec7 ph\u1ea7n m\u1ec1m 1",
 "hfovMin": "120%",
 "id": "panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28",
 "overlays": [
  "this.overlay_B5B84D85_9465_7284_41CC_DF906BEECC1A",
  "this.overlay_8CFD23C3_946D_56FC_41A9_E1086DD923B7",
  "this.overlay_995BEC02_963F_35EA_419E_C69B65D7E7C9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 178.01,
   "panorama": "this.panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74",
   "backwardYaw": 84.4,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 90.43,
   "panorama": "this.panorama_9DF68425_91BB_8660_41E1_E437243C84C2",
   "backwardYaw": -63.18,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7",
   "class": "AdjacentPanorama"
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -93.23,
  "pitch": 0
 },
 "id": "camera_02F52418_0F2B_F90B_41A4_C468E74ACF29"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 125.22,
  "pitch": 0
 },
 "id": "camera_0279939D_0F2B_FF05_4177_5209B63D6D00"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 86.47,
  "pitch": -3.45
 },
 "id": "panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -177.13,
  "pitch": 0
 },
 "id": "camera_03AB1318_0F2B_FF0B_41A0_548F4D9EC400"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -13.1,
  "pitch": 0
 },
 "id": "camera_0200738A_0F2B_FF0F_41AB_C38F5B2AA751"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB055868_FBEA_3190_41D8_15F9580FE297",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB055868_FBEA_3190_41D8_15F9580FE297_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B48FD77D_94DF_DF87_41BF_91651A01F658",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF50E69_91BD_82E3_41A5_74B449D46960",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF68425_91BB_8660_41E1_E437243C84C2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF68425_91BB_8660_41E1_E437243C84C2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF40526_91BB_8661_41C2_A4514F9033D3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9DF585CE_91BB_8620_41D8_753803B9D59D",
   "camera": "this.panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "label": "Ph\u00f2ng b\u1ed9 m\u00f4n view 1",
 "hfovMin": "120%",
 "id": "panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112",
 "overlays": [
  "this.overlay_8BD7C079_9423_D18C_41C6_1BCCA944D9A3",
  "this.overlay_84713EE8_9637_1227_41C8_A045E84FE0B3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 134.45,
   "panorama": "this.panorama_9DF50E69_91BD_82E3_41A5_74B449D46960",
   "backwardYaw": 81.82,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 84.06,
   "panorama": "this.panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9",
   "backwardYaw": 83.4,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -86.49,
  "pitch": 0
 },
 "id": "camera_03F8F34E_0F2B_FF07_41A7_66F4705B7732"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -11.64,
  "pitch": 0
 },
 "id": "camera_01A0B47C_0F2B_F90B_4192_7BEDAC331DC4"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 22.81,
  "pitch": 0
 },
 "id": "camera_0213A391_0F2B_FF1D_41AD_40F4125E2B79"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 103.18,
  "pitch": 0
 },
 "id": "camera_0245D3B3_0F2B_FF1D_419E_A90CF0BF0DBF"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -96.96,
  "pitch": 0
 },
 "id": "camera_03DF9362_0F2B_FF3F_41A0_2EAFF2916936"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4",
   "begin": "this.setEndToItemIndex(this.DropDown_EE05F09D_FD91_02BD_41DF_1E01DAA2A683_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2",
   "begin": "this.setEndToItemIndex(this.DropDown_EE05F09D_FD91_02BD_41DF_1E01DAA2A683_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB055868_FBEA_3190_41D8_15F9580FE297",
   "begin": "this.setEndToItemIndex(this.DropDown_EE05F09D_FD91_02BD_41DF_1E01DAA2A683_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB055868_FBEA_3190_41D8_15F9580FE297_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F",
   "begin": "this.setEndToItemIndex(this.DropDown_EE05F09D_FD91_02BD_41DF_1E01DAA2A683_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E",
   "begin": "this.setEndToItemIndex(this.DropDown_EE05F09D_FD91_02BD_41DF_1E01DAA2A683_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D",
   "begin": "this.setEndToItemIndex(this.DropDown_EE05F09D_FD91_02BD_41DF_1E01DAA2A683_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7",
   "begin": "this.setEndToItemIndex(this.DropDown_EE05F09D_FD91_02BD_41DF_1E01DAA2A683_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74",
   "begin": "this.setEndToItemIndex(this.DropDown_EE05F09D_FD91_02BD_41DF_1E01DAA2A683_playlist, 7, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_camera"
  }
 ],
 "id": "DropDown_EE05F09D_FD91_02BD_41DF_1E01DAA2A683_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -28.19,
  "pitch": 0
 },
 "id": "camera_02BCD3D1_0F2B_FF1D_419E_5491B2C0A3F1"
},
{
 "label": "V\u0103n ph\u00f2ng khoa CNTT view 2",
 "hfovMin": "120%",
 "id": "panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC",
 "overlays": [
  "this.overlay_B3907B47_94E7_5783_41C0_3A67B7C92AAC",
  "this.overlay_8E7AD9A9_9617_1E39_41AE_E7DB87D70FD2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 83.53,
   "panorama": "this.panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C",
   "backwardYaw": 82.84,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_t.jpg",
 "hfovMax": 93
},
{
 "label": "C\u1eeda ph\u00f2ng b\u1ea3o tr\u00ec m\u00e1y t\u00ednh v\u00e0 m\u1ea1ng",
 "hfovMin": "120%",
 "id": "panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D",
 "overlays": [
  "this.overlay_1EF445EE_0CC4_5134_418B_C0B557D35D77",
  "this.overlay_1E70145E_0CC4_5714_4197_A92C165F67BF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 12,
   "panorama": "this.panorama_EB055868_FBEA_3190_41D8_15F9580FE297",
   "backwardYaw": 95.64,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 93.59,
   "panorama": "this.panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD",
   "backwardYaw": -116.69,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 51.41,
  "pitch": 0
 },
 "id": "camera_026EB397_0F2B_FF05_41A0_0AEE9E698458"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 147.73,
  "pitch": 0
 },
 "id": "camera_0144446B_0F2B_F90D_41A0_C8C7F89730DB"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -84.36,
  "pitch": 0
 },
 "id": "camera_03D52370_0F2B_FF1B_4190_70A67BD34C4A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 85.63,
  "pitch": -1.2
 },
 "id": "panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 65.75,
  "pitch": -3.18
 },
 "id": "panorama_9DF68425_91BB_8660_41E1_E437243C84C2_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -91.36,
  "pitch": 0
 },
 "id": "camera_03828332_0F2B_FF1F_41A4_F20AD8AED3BF"
},
{
 "label": "Ph\u00f2ng b\u1ea3o tr\u00ec m\u00e1y t\u00ednh v\u00e0 m\u1ea1ng view 1",
 "hfovMin": "120%",
 "id": "panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD",
 "overlays": [
  "this.overlay_868F5091_9427_529C_41DF_37CEA3F42982",
  "this.overlay_820A3FE9_962D_1226_41E1_4AECF7AC30B4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -116.69,
   "panorama": "this.panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D",
   "backwardYaw": 93.59,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 90.04,
   "panorama": "this.panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2",
   "backwardYaw": 49.25,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -98.22,
  "pitch": 0
 },
 "id": "camera_03B4132C_0F2B_FF0B_4150_BF70464A1BC8"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 71.39,
  "pitch": -11.81
 },
 "id": "panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 88.19,
  "pitch": 0.6
 },
 "id": "panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_camera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_CCF8D53A_FC66_53F0_41DF_E83B2E065B96.ogg",
  "mp3Url": "media/audio_CCF8D53A_FC66_53F0_41DF_E83B2E065B96.mp3"
 },
 "id": "audio_CCF8D53A_FC66_53F0_41DF_E83B2E065B96",
 "data": {
  "label": "nh\u1ea1c-hehe-Made-with-Clipchamp"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 63.31,
  "pitch": 0
 },
 "id": "camera_02229377_0F2B_FF05_41A3_53457903DB56"
},
{
 "label": "C\u1eeda ph\u00f2ng th\u1ef1c h\u00e0nh c\u00f4ng ngh\u1ec7 ph\u1ea7n m\u1ec1m 2",
 "hfovMin": "120%",
 "id": "panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53",
 "overlays": [
  "this.overlay_8F132FC6_9465_CE84_41D1_88B0BA22DB54",
  "this.overlay_88B84E5D_945D_5184_41DF_375FCB65F5D2",
  "this.overlay_85A11923_963D_3E29_41E2_7AD53E4579A0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 2.87,
   "panorama": "this.panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74",
   "backwardYaw": -96.16,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 81.78,
   "panorama": "this.panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C",
   "backwardYaw": 166.9,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_t.jpg",
 "hfovMax": 93
},
{
 "label": "H\u00e0nh lang t\u1ea7ng 1 (T\u00f2a nh\u00e0 4 t\u1ea7ng)",
 "id": "panorama_EB055868_FBEA_3190_41D8_15F9580FE297",
 "overlays": [
  "this.overlay_EB056869_FBEA_3193_41E4_BBD5877CC42C",
  "this.overlay_1DE60D5B_0CC3_D11C_4190_F3F711D549D2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 95.64,
   "panorama": "this.panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D",
   "backwardYaw": 12,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -54.78,
   "panorama": "this.panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2",
   "backwardYaw": -32.27,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_t.jpg",
 "hfovMax": 93
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -89.96,
  "pitch": 0
 },
 "id": "camera_02EAE400_0F2B_F8FB_41A2_F22DDEDBB800"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "MainViewer",
 "left": 0,
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "toolTipShadowVerticalLength": 0,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "top": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.64,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "shadow": false,
 "children": [
  "this.Container_E12EC7BC_FC5E_3EF0_41E3_9D6B481D6995"
 ],
 "id": "Container_E12E97BC_FC5E_3EF0_41BB_846FF6F501CC",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_E12E97BC_FC5E_3EF0_41BB_846FF6F501CC, false, 0, this.effect_764B50D0_5098_666A_41CA_D502B62644A1, 'hideEffect', false)",
 "contentOpaque": false,
 "class": "Container",
 "layout": "absolute",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Label_EE05A09D_FD91_02BD_41DF_50C0E556F878",
  "this.Container_EE05809D_FD91_02BD_41E9_A9FC73C05CF9",
  "this.Image_E8809774_FDF1_0F82_41E5_C3E79692D2C1",
  "this.IconButton_EF9865FA_FDFC_2BB2_41D0_99D4A8F1A4A5"
 ],
 "id": "Container_EE05509D_FD91_02BD_41EF_9AA91BF3F817",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": true,
 "top": "0.11%",
 "gap": 10,
 "borderSize": 0,
 "height": 61,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "layout": "absolute",
 "data": {
  "name": "--BUTTON SET"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_E5BB554E_FD93_039E_41E6_CA88984403B5",
 "width": 63.1,
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "bottom": "0%",
 "propagateClick": true,
 "minWidth": 1,
 "height": 332,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "layout": "absolute",
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "shadowBlurRadius": 7,
 "height": "37.486%",
 "id": "HTMLText_1B417888_0B13_AC7C_41A1_5FCA0700A4F3",
 "left": "0.9%",
 "width": "33.052%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.91,
 "paddingRight": 20,
 "paddingLeft": 20,
 "shadowHorizontalLength": 2,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.19,
 "scrollBarVisible": "rollOver",
 "borderRadius": 10,
 "top": "9.37%",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "shadowVerticalLength": 2,
 "paddingBottom": 10,
 "paddingTop": 20,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText53815"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vmin;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:4.08vmin;\"><B>\u0110\u00f3ng g\u00f3p x\u00e2y d\u1ef1ng</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.21vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:0.77vmin;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vmin;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.32vmin;\"><B>Ng\u01b0\u1eddi th\u1ef1c hi\u1ec7n: Nguy\u1ec5n Tu\u1ea5n Linh</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.11vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:0.77vmin;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vmin;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.32vmin;\"><B>Gi\u1ea3ng vi\u00ean h\u01b0\u1edbng d\u1eabn: Nguy\u1ec5n Qu\u1ed1c Kh\u00e1nh</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.32vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:0.77vmin;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vmin;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:1.32vmin;\">V\u1edbi m\u1ee5c ti\u00eau mang \u0111\u1ebfn m\u1ed9t c\u00e1i nh\u00ecn t\u1ed5ng quan v\u00e0 ch\u00e2n th\u1ef1c nh\u1ea5t v\u1ec1 khoa C\u00f4ng ngh\u1ec7 Th\u00f4ng tin, Tr\u01b0\u1eddng \u0110\u1ea1i h\u1ecdc C\u00f4ng nghi\u1ec7p Vi\u1ec7t Tr\u00ec, ch\u00fang t\u00f4i \u0111\u00e3 x\u00e2y d\u1ef1ng tour tham quan 3D hi\u1ec7n \u0111\u1ea1i v\u00e0 s\u1ed1ng \u0111\u1ed9ng. \u0110\u00e2y l\u00e0 c\u01a1 h\u1ed9i \u0111\u1ec3 c\u00e1c b\u1ea1n h\u1ecdc sinh v\u00e0 ph\u1ee5 huynh c\u00f3 th\u1ec3 tr\u1ea3i nghi\u1ec7m v\u00e0 kh\u00e1m ph\u00e1 m\u00f4i tr\u01b0\u1eddng h\u1ecdc t\u1eadp, c\u01a1 s\u1edf v\u1eadt ch\u1ea5t, c\u0169ng nh\u01b0 c\u00e1c ho\u1ea1t \u0111\u1ed9ng nghi\u00ean c\u1ee9u v\u00e0 ph\u00e1t tri\u1ec3n t\u1ea1i khoa. Ch\u00fang t\u00f4i hy v\u1ecdng r\u1eb1ng, th\u00f4ng qua tour tham quan n\u00e0y, c\u00e1c b\u1ea1n s\u1ebd c\u00f3 th\u00eam nhi\u1ec1u th\u00f4ng tin h\u1eefu \u00edch \u0111\u1ec3 \u0111\u01b0a ra quy\u1ebft \u0111\u1ecbnh \u0111\u00fang \u0111\u1eafn cho t\u01b0\u01a1ng lai h\u1ecdc t\u1eadp v\u00e0 ngh\u1ec1 nghi\u1ec7p c\u1ee7a m\u00ecnh.</SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0.5
},
{
 "id": "IconButton_047915E6_0AF0_A7B4_419E_B4D24A966C32",
 "left": "1.21%",
 "width": 40,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_047915E6_0AF0_A7B4_419E_B4D24A966C32_rollover.png",
 "bottom": "2.21%",
 "propagateClick": false,
 "minWidth": 0,
 "height": 40,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "if(!this.HTMLText_1B417888_0B13_AC7C_41A1_5FCA0700A4F3.get('visible')){ this.setComponentVisibility(this.HTMLText_1B417888_0B13_AC7C_41A1_5FCA0700A4F3, true, 0, null, null, false) } else { this.setComponentVisibility(this.HTMLText_1B417888_0B13_AC7C_41A1_5FCA0700A4F3, false, 0, null, null, false) }",
 "class": "IconButton",
 "data": {
  "name": "Button6727"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_047915E6_0AF0_A7B4_419E_B4D24A966C32.png",
 "pressedIconURL": "skin/IconButton_047915E6_0AF0_A7B4_419E_B4D24A966C32_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_047915E6_0AF0_A7B4_419E_B4D24A966C32_pressed_rollover.png"
},
{
 "children": [
  "this.IconButton_E5B8A54E_FD93_039E_41E3_948216944E04",
  "this.IconButton_E5B8B54E_FD93_039E_41E4_16E8436FBD35",
  "this.IconButton_E5BB654E_FD93_039E_41EB_C8BE372978C3"
 ],
 "id": "Container_1949E009_0CC4_4EFC_41A1_1A3EDD7D64F5",
 "left": "89%",
 "right": "0.48%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "0.78%",
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "borderSize": 0,
 "height": "10.695%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "class": "Container",
 "layout": "absolute",
 "data": {
  "name": "Container13631"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_E5BB654E_FD93_039E_41EB_C8BE372978C3",
 "width": 50,
 "right": "0%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 50,
 "top": "41.55%",
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_E5BB654E_FD93_039E_41EB_C8BE372978C3.png",
 "pressedIconURL": "skin/IconButton_E5BB654E_FD93_039E_41EB_C8BE372978C3_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_E5BB654E_FD93_039E_41EB_C8BE372978C3_pressed_rollover.png"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_E5B8B54E_FD93_039E_41E4_16E8436FBD35",
 "left": "35.66%",
 "width": 50,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 50,
 "top": "41.55%",
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "IconButton MUTE"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_E5B8B54E_FD93_039E_41E4_16E8436FBD35.png",
 "pressedIconURL": "skin/IconButton_E5B8B54E_FD93_039E_41E4_16E8436FBD35_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_E5B8B54E_FD93_039E_41E4_16E8436FBD35_pressed_rollover.png"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E, this.camera_03E26348_0F2B_FF0B_41A0_DADF3C7CA719); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.86,
   "hfov": 3.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.73
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2634B029_0D44_4F3C_41A2_9DC540A3F7DB",
   "pitch": 7.73,
   "yaw": 81.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.04,
   "distance": 50
  }
 ],
 "id": "overlay_EF3542AE_FBEA_5690_41B7_616F8256AA76",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2, this.camera_03F8F34E_0F2B_FF07_41A7_66F4705B7732); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.82,
   "hfov": 10.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.47
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2634D029_0D44_4F3C_41A8_C5D79AF34D2A",
   "pitch": -9.47,
   "yaw": -76.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.14,
   "distance": 100
  }
 ],
 "id": "overlay_EF32A2AE_FBEA_5690_41D3_185B78FA5515",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4, this.camera_03F56355_0F2B_FF05_4181_987F1140ACF0); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.59,
   "hfov": 6.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.61
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26341029_0D44_4F3C_4164_1E0356BD4B79",
   "pitch": -4.61,
   "yaw": -128.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.48,
   "distance": 50
  }
 ],
 "id": "overlay_EF3292AE_FBEA_5690_41E2_C3C1CA0E1ADD",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.78,
   "hfov": 6.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.22
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2635B029_0D44_4F3C_4199_D594B5C4E949",
   "pitch": -4.22,
   "yaw": -44.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.91,
   "distance": 50
  }
 ],
 "id": "overlay_EF3282AE_FBEA_5690_41E5_67644495ABC1",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B, this.camera_02FB740C_0F2B_F90B_417A_93ADB6F576C4); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.77,
   "hfov": 2.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.01
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2631602B_0D44_4F3C_4180_C85EC2D90BA0",
   "pitch": -4.01,
   "yaw": 83.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.29,
   "distance": 100
  }
 ],
 "id": "overlay_8A8FAEF0_967F_7227_41B9_CC136C40D24E",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.63,
   "hfov": 2.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.58
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.63,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 109,
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.58,
   "hfov": 2.4
  }
 ],
 "id": "overlay_8AC8B8CC_967D_1E7F_41C0_86862C81A6BD",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4, this.camera_03A1531F_0F2B_FF05_419F_1480C224EB99); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.22,
   "hfov": 9.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.19
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -25.22,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 440,
      "height": 348
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.19,
   "hfov": 9.67
  }
 ],
 "id": "overlay_B036C3A0_94E4_F6BC_41D1_25A12EABDFE2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC, this.camera_03BFB325_0F2B_FF05_4184_1A2540E833C8); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.84,
   "hfov": 3.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.72
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2633602A_0D44_4F3C_41A1_3884096F89BA",
   "pitch": 0.72,
   "yaw": 82.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.25,
   "distance": 100
  }
 ],
 "id": "overlay_8151DB2A_9613_323B_41B9_8F438FCBAA43",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_E5B8A54E_FD93_039E_41E3_948216944E04",
 "left": "0%",
 "width": 50,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 50,
 "top": "41.55%",
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "IconButton GYRO"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_E5B8A54E_FD93_039E_41E3_948216944E04.png",
 "pressedIconURL": "skin/IconButton_E5B8A54E_FD93_039E_41E3_948216944E04_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_E5B8A54E_FD93_039E_41E3_948216944E04_pressed_rollover.png"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.01,
   "hfov": 5.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.12
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2632F02A_0D44_4F3C_418E_5AEBDC005955",
   "pitch": 6.12,
   "yaw": -7.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.86,
   "distance": 100
  }
 ],
 "id": "overlay_80AAA70F_945D_5F84_41AE_43E2ED5BFEB2",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.36,
   "hfov": 8.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.56
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2632002A_0D44_4F3C_4195_EE7B3AECAA43",
   "pitch": -28.56,
   "yaw": 29.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.77,
   "distance": 50
  }
 ],
 "id": "overlay_8D196549_945C_D38C_41CB_132CE952D067",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C, this.camera_02C7B425_0F2B_F93A_41A7_AB2BBE02B3F5); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.45,
   "hfov": 8.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.72
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 82.45,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 401,
      "height": 452
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.72,
   "hfov": 8.83
  }
 ],
 "id": "overlay_80FDC9FF_945C_F284_41D5_A1DE4DF20446",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E, this.camera_02F52418_0F2B_F90B_41A4_C468E74ACF29); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.13,
   "hfov": 3.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.47
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2633902A_0D44_4F3C_41A9_F5A5BBAFCE5B",
   "pitch": -1.47,
   "yaw": 178.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.52,
   "distance": 100
  }
 ],
 "id": "overlay_983333AC_9613_123E_41BE_6ED5D43575A3",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74, this.camera_02BCD3D1_0F2B_FF1D_419E_5491B2C0A3F1); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.13,
   "hfov": 3.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.7
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263EC02B_0D44_4F3C_418E_59C729B35DB9",
   "pitch": 9.7,
   "yaw": 156.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.24,
   "distance": 50
  }
 ],
 "id": "overlay_E63E635D_FC3E_57B3_41EC_B1DB3DA7C33A",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D, this.camera_028EC3E2_0F2B_FF3F_41A8_F1E6B9B792C7); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.93,
   "hfov": 3.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.43
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263E602B_0D44_4F3C_41A4_5FD589B7F0FA",
   "pitch": -9.43,
   "yaw": 156.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.88,
   "distance": 50
  }
 ],
 "id": "overlay_E63F935D_FC3E_57B3_41E3_95BBA7C80A13",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF50E69_91BD_82E3_41A5_74B449D46960, this.camera_029F13EE_0F2B_FF07_41A0_C752127B9A63); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.36,
   "hfov": 2.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.05
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263FB02B_0D44_4F3C_41A9_80791A5DC0A1",
   "pitch": -1.05,
   "yaw": 168.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.65,
   "distance": 100
  }
 ],
 "id": "overlay_E63FB35D_FC3E_57B3_4195_69DB275056C9",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.06,
   "hfov": 2.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.2
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 91.06,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 111,
      "height": 114
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.2,
   "hfov": 2.43
  }
 ],
 "id": "overlay_B5090D25_9425_7384_41D8_643BB0128D12",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF68425_91BB_8660_41E1_E437243C84C2, this.camera_0118A44F_0F2B_F905_419D_F54D44221AEB); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.04,
   "hfov": 2.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.58
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2639302E_0D44_4F34_4197_09A4A9ECB533",
   "pitch": -10.58,
   "yaw": 83.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.69,
   "distance": 100
  }
 ],
 "id": "overlay_827CDEB1_962D_7229_41C0_C5E231927C7C",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.59,
   "hfov": 4.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.05
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 57.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 194,
      "height": 214
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.05,
   "hfov": 4.24
  }
 ],
 "id": "overlay_81841BC2_9423_D6FC_41A1_A47C9802FDD1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD, this.camera_02EAE400_0F2B_F8FB_41A2_F22DDEDBB800); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.25,
   "hfov": 3.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.26
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26376029_0D44_4F3C_419F_FBEBA1468984",
   "pitch": -12.26,
   "yaw": 49.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.44,
   "distance": 100
  }
 ],
 "id": "overlay_83B788B9_9613_3E19_41C0_724B92E506AE",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7, this.camera_035D3311_0F2B_FF1D_419E_E71A8B8791F5); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.81,
   "hfov": 6.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.99
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263AE02D_0D44_4F34_41A4_BBDAB012C2BE",
   "pitch": -9.99,
   "yaw": 151.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.98,
   "distance": 50
  }
 ],
 "id": "overlay_EB95B8E9_FC5E_3290_41D0_05A0CDE3D902",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53, this.camera_03AB1318_0F2B_FF0B_41A0_548F4D9EC400); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.16,
   "hfov": 2.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.89
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263A002D_0D44_4F34_41A2_FF98B8C68B7D",
   "pitch": -0.89,
   "yaw": -96.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.17,
   "distance": 100
  }
 ],
 "id": "overlay_EB95C8E9_FC5E_3290_41D4_073EF44FBBFC",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28, this.camera_0344F30A_0F2B_FF0F_4176_80E1A8AEEF4E); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.4,
   "hfov": 2.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.26
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263BB02D_0D44_4F34_41A8_4C941704292B",
   "pitch": -1.26,
   "yaw": 84.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.42,
   "distance": 100
  }
 ],
 "id": "overlay_EB95E8E9_FC5E_3290_41E3_19199937EB45",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53, this.camera_03B4132C_0F2B_FF0B_4150_BF70464A1BC8); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.9,
   "hfov": 11.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.86
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 166.9,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 542,
      "height": 779
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.86,
   "hfov": 11.92
  }
 ],
 "id": "overlay_BDC0E8B1_94EC_D29C_41E2_AFA59625EDBE",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF585CE_91BB_8620_41D8_753803B9D59D, this.camera_03828332_0F2B_FF1F_41A4_F20AD8AED3BF); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.85,
   "hfov": 3.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.62
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2627E02E_0D44_4F34_4169_9253ACA131D9",
   "pitch": 2.62,
   "yaw": 98.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.51,
   "distance": 100
  }
 ],
 "id": "overlay_8A26DC01_9674_F5E6_41DD_FE0641EA4F11",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B, this.camera_0161D2E1_0F2B_F93D_4191_0C864C2F3A6E); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.43,
   "hfov": 7.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.51
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 84.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 340,
      "height": 411
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.51,
   "hfov": 7.47
  }
 ],
 "id": "overlay_1E58F0F1_0CC7_CF2C_41A4_BC36AF67D960",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.21,
   "hfov": 7.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.53
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263EA02B_0D44_4F3C_4196_707EFCD35CC2",
   "pitch": 7.53,
   "yaw": -9.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.32,
   "distance": 100
  }
 ],
 "id": "overlay_1FAE1BD2_0CC4_B16C_4193_806970BA5D3E",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.45,
   "hfov": 8.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.3
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263EE02B_0D44_4F3C_4190_44E661970C6B",
   "pitch": -29.3,
   "yaw": 31.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.73,
   "distance": 50
  }
 ],
 "id": "overlay_1FB2B4A0_0CC5_F72C_4163_50A448E87F88",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D, this.camera_0106A2D4_0F2B_F91B_41A2_6662E7BA1AD3); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.91,
   "hfov": 4.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.6
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2635F029_0D44_4F3C_41A6_A5A6AE18B10E",
   "pitch": 9.6,
   "yaw": 149.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.68,
   "distance": 50
  }
 ],
 "id": "overlay_EAC7B805_FBE6_7193_41E4_A983A6153ED9",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F, this.camera_0110E2DB_0F2B_F90D_4179_25C98FF54216); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.68,
   "hfov": 6.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.72
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26350029_0D44_4F3C_4197_3D3AA5E34CE6",
   "pitch": -9.72,
   "yaw": 150.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.02,
   "distance": 50
  }
 ],
 "id": "overlay_EAC78805_FBE6_7193_41EA_E8F5FC190B08",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4, this.camera_0109D2CB_0F2B_F90D_4190_28E5E0A941D4); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.77,
   "hfov": 3.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.86
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26355029_0D44_4F3C_41A1_2672B9DE169B",
   "pitch": -0.86,
   "yaw": 86.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.01,
   "distance": 100
  }
 ],
 "id": "overlay_EAC79806_FBE6_7190_41EA_BDF08F7F5B6C",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28, this.camera_03C2935B_0F2B_FF0D_4184_FC05A4F26B51); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.18,
   "hfov": 18.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.8
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -63.18,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 828,
      "height": 809
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.8,
   "hfov": 18.2
  }
 ],
 "id": "overlay_8A8F2194_942F_F284_41BD_979AD715D7A1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF40526_91BB_8661_41C2_A4514F9033D3, this.camera_03DF9362_0F2B_FF3F_41A0_2EAFF2916936); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.33,
   "hfov": 3.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.44
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2638702D_0D44_4F34_419C_35442EFDF88B",
   "pitch": 1.44,
   "yaw": 65.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.12,
   "distance": 100
  }
 ],
 "id": "overlay_85DDCC79_9633_1619_41C1_E99B236E0F69",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB055868_FBEA_3190_41D8_15F9580FE297, this.camera_0279939D_0F2B_FF05_4177_5209B63D6D00); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.27,
   "hfov": 9.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.86
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26086028_0D44_4F3C_4199_C3E7E0831D88",
   "pitch": -9.86,
   "yaw": -32.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.9,
   "distance": 100
  }
 ],
 "id": "overlay_83D7AD1E_938A_7C5A_418F_07CD68AC3BF8",
 "data": {
  "label": "H\u00e0nh lang t\u1ea7ng 1 (T\u00f2a nh\u00e0 4 t\u1ea7ng)"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4, this.camera_024BD3A7_0F2B_FF05_4176_E3DED0294C3D); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.19,
   "hfov": 8.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.22
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2609A028_0D44_4F3C_41A5_9F7467F68DF2",
   "pitch": -9.22,
   "yaw": -157.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.23,
   "distance": 100
  }
 ],
 "id": "overlay_83D2188B_9396_643A_41DD_097E57207663",
 "data": {
  "label": "C\u1ed5ng tr\u01b0\u1eddng"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F, this.camera_0245D3B3_0F2B_FF1D_419E_A90CF0BF0DBF); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.51,
   "hfov": 23.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 54
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.21
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 93.51,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 1077,
      "height": 292
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.21,
   "hfov": 23.35
  }
 ],
 "id": "overlay_82644891_9397_E426_41B0_7427B5054611",
 "data": {
  "label": "H\u00e0nh Lang t\u1ea7ng 1 (T\u00f2a nh\u00e0 8 t\u1ea7ng)"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.54,
 "yaw": -12.18,
 "pitch": 36.49,
 "bleaching": 0.68,
 "id": "overlay_81F51A7E_9427_D184_41CA_5F33BBEBFB61"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.39,
   "hfov": 8.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.29
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263FD02C_0D44_4F34_4171_A656E6B596E0",
   "pitch": -28.29,
   "yaw": -79.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.9,
   "distance": 50
  }
 ],
 "id": "overlay_82027C87_9465_5284_41DC_6FF2790955F4",
 "data": {
  "label": "Arrow 06b Right"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.58,
   "hfov": 8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.53
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263F602C_0D44_4F34_418A_018C3DBF5248",
   "pitch": -19.53,
   "yaw": -82.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8,
   "distance": 50
  }
 ],
 "id": "overlay_823918ED_9467_7287_41E0_DAEA2FA81C09",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112, this.camera_03A2B4A7_0F2B_F905_4182_71C395D66F15); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.82,
   "hfov": 8.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.49
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 81.82,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 394,
      "height": 404
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.49,
   "hfov": 8.59
  }
 ],
 "id": "overlay_8C5168AA_9464_B28C_41D2_4F78B94206A1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7, this.camera_01A0B47C_0F2B_F90B_4192_7BEDAC331DC4); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.56,
   "hfov": 4.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.72
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263C202C_0D44_4F34_41A5_6A9A41895F6E",
   "pitch": 0.72,
   "yaw": -100.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.26,
   "distance": 100
  }
 ],
 "id": "overlay_8B1BA618_9675_15E7_41D9_5D9C8BFABD67",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.95,
   "hfov": 4.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.02
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263D202C_0D44_4F34_4192_1DC0B18DCA2F",
   "pitch": -24.02,
   "yaw": 45.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.44,
   "distance": 50
  }
 ],
 "id": "overlay_B5EBEB5D_9424_D784_41DE_CB65D87D9C74",
 "data": {
  "label": "Arrow 06a Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112, this.camera_023FB37E_0F2B_FF07_419F_9948AB0F5104); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.4,
   "hfov": 3.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.74
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263D402C_0D44_4F34_4158_AC50BE49900C",
   "pitch": -12.74,
   "yaw": 83.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.67,
   "distance": 100
  }
 ],
 "id": "overlay_84531431_9635_F626_41C4_30D46A5D737D",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.58,
   "hfov": 2.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 81.58,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 121,
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.35,
   "hfov": 2.66
  }
 ],
 "id": "overlay_B40AD862_94DD_B1BC_4192_89A57E1C6217",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C, this.camera_03A584AE_0F2B_F907_41A2_954EFFA4D70E); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.64,
   "hfov": 2.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.54
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2624802E_0D44_4F34_41A9_8C053A4217C4",
   "pitch": -6.54,
   "yaw": 88.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.3,
   "distance": 100
  }
 ],
 "id": "overlay_83282BB1_962F_1229_41DB_26D573EED522",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7, this.camera_02A1F3BF_0F2B_FF05_417E_FD26AF025CFA); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.02,
   "hfov": 3.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.44
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2630102A_0D44_4F3C_419C_DC67915AC6E4",
   "pitch": 10.44,
   "yaw": 154.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.93,
   "distance": 50
  }
 ],
 "id": "overlay_EFEE4C87_FBDA_D29F_41D7_3915C222E12C",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E, this.camera_0257E3B9_0F2B_FF0D_419D_87D84DE067A1); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156,
   "hfov": 4.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.22
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2631A02A_0D44_4F3C_4191_D5961241BD56",
   "pitch": -10.22,
   "yaw": 156,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.67,
   "distance": 50
  }
 ],
 "id": "overlay_EFEE7C87_FBDA_D29F_41E6_39D69CF089A8",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.45,
   "hfov": 2.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.04
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2631C02A_0D44_4F3C_419C_E83302418822",
   "pitch": -1.04,
   "yaw": 87.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.5,
   "distance": 100
  }
 ],
 "id": "overlay_EFEE0C88_FBDA_D291_41E7_CA3D33B9FC67",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F, this.camera_026EB397_0F2B_FF05_41A0_0AEE9E698458); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.88,
   "hfov": 3.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.97
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_260B8027_0D44_4F34_419E_956D5A6A5263",
   "pitch": -2.97,
   "yaw": 95.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.01,
   "distance": 50
  }
 ],
 "id": "overlay_9C729A36_937A_246A_41E1_B755D72E2025",
 "data": {
  "label": "H\u00e0nh lang t\u1ea7ng 1 (T\u00f2a nh\u00e0 8 t\u1ea7ng)"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.41,
   "hfov": 2.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.85
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26088028_0D44_4F3C_4191_FECCDEA67782",
   "pitch": -1.85,
   "yaw": 36.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.87,
   "distance": 50
  }
 ],
 "id": "overlay_8240282A_937A_647A_41D0_416E163DA85A",
 "data": {
  "label": "H\u00e0nh lang t\u1ea7ng 1 (T\u00f2a nh\u00e0 4 t\u1ea7ng)"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2, this.camera_0213A391_0F2B_FF1D_41AD_40F4125E2B79); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.43,
   "hfov": 3.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.34
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2608C028_0D44_4F3C_4195_1314D06BCF8A",
   "pitch": -5.34,
   "yaw": 67.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.35,
   "distance": 100
  }
 ],
 "id": "overlay_9C6F3503_9376_2C2A_41D1_53A06E5332E5",
 "data": {
  "label": "S\u00e2n tr\u01b0\u1eddng"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8, this.camera_01692457_0F2B_F905_418B_ECC14557F9DF); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.88,
   "hfov": 13.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.52
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -19.88,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 628,
      "height": 609
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.52,
   "hfov": 13.81
  }
 ],
 "id": "overlay_8A01C0D1_967D_2E69_41C0_D63322C5BA73",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B48FD77D_94DF_DF87_41BF_91651A01F658, this.camera_017B845D_0F2B_F905_415E_784683E608BF); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.56,
   "hfov": 2.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.95
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2631F02B_0D44_4F3C_41A6_1B613AA045A1",
   "pitch": 1.95,
   "yaw": 89.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.75,
   "distance": 100
  }
 ],
 "id": "overlay_8AF9A581_967D_36E6_41DC_8E47D7D080E8",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30,
   "hfov": 9.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.61
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263B202D_0D44_4F34_41A1_31A954613B14",
   "pitch": -32.61,
   "yaw": 30,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.04,
   "distance": 50
  }
 ],
 "id": "overlay_B5B84D85_9465_7284_41CC_DF906BEECC1A",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF68425_91BB_8660_41E1_E437243C84C2, this.camera_010E4449_0F2B_F90D_419B_9FD921C90E26); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.43,
   "hfov": 7.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 23
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.87
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 90.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 351,
      "height": 513
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.87,
   "hfov": 7.73
  }
 ],
 "id": "overlay_8CFD23C3_946D_56FC_41A9_E1086DD923B7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74, this.camera_013C3442_0F2B_F97F_41A4_F81401D2BD23); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.01,
   "hfov": 2.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.29
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2638902D_0D44_4F34_4189_DDA8FA76CC21",
   "pitch": -1.29,
   "yaw": 178.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 100
  }
 ],
 "id": "overlay_995BEC02_963F_35EA_419E_C69B65D7E7C9",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF50E69_91BD_82E3_41A5_74B449D46960, this.camera_02D18430_0F2B_F91B_41AD_5BDEED12E9DF); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.45,
   "hfov": 4.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.23
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 134.45,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 199,
      "height": 199
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.23,
   "hfov": 4.38
  }
 ],
 "id": "overlay_8BD7C079_9423_D18C_41C6_1BCCA944D9A3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9, this.camera_0122043C_0F2B_F90B_41AD_71D8D327E58B); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.06,
   "hfov": 3.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.09
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_263D802C_0D44_4F34_417E_50AE6AF720AE",
   "pitch": 4.09,
   "yaw": 84.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.61,
   "distance": 100
  }
 ],
 "id": "overlay_84713EE8_9637_1227_41C8_A045E84FE0B3",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.81,
   "hfov": 3.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.84
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 91.81,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 142,
      "height": 139
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.84,
   "hfov": 3.1
  }
 ],
 "id": "overlay_B3907B47_94E7_5783_41C0_3A67B7C92AAC",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C, this.camera_01578474_0F2B_F91B_418B_0ED55B866CD0); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.53,
   "hfov": 2.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.28
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2630F02A_0D44_4F3C_41AA_10867452E044",
   "pitch": -10.28,
   "yaw": 83.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.7,
   "distance": 100
  }
 ],
 "id": "overlay_8E7AD9A9_9617_1E39_41AE_E7DB87D70FD2",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB055868_FBEA_3190_41D8_15F9580FE297, this.camera_03D52370_0F2B_FF1B_4190_70A67BD34C4A); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12,
   "hfov": 4.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.37
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2636D028_0D44_4F3C_418D_AAE741E37F90",
   "pitch": -20.37,
   "yaw": 12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.66,
   "distance": 100
  }
 ],
 "id": "overlay_1EF445EE_0CC4_5134_418B_C0B557D35D77",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD, this.camera_02229377_0F2B_FF05_41A3_53457903DB56); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.59,
   "hfov": 7.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.4
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 93.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 320,
      "height": 326
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.4,
   "hfov": 7.04
  }
 ],
 "id": "overlay_1E70145E_0CC4_5714_4197_A92C165F67BF",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D, this.camera_039F633B_0F2B_FF0D_41AC_D074211D3F28); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.69,
   "hfov": 21.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.82
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -116.69,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 983,
      "height": 1349
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.82,
   "hfov": 21.59
  }
 ],
 "id": "overlay_868F5091_9427_529C_41DF_37CEA3F42982",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2, this.camera_03941341_0F2B_FF7D_4177_78CEC5CC8458); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.04,
   "hfov": 3.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.27
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2637E029_0D44_4F3C_41A4_6D5DD7709927",
   "pitch": -0.27,
   "yaw": 90.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.52,
   "distance": 100
  }
 ],
 "id": "overlay_820A3FE9_962D_1226_41E1_4AECF7AC30B4",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C, this.camera_0200738A_0F2B_FF0F_41AB_C38F5B2AA751); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.78,
   "hfov": 9.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 81.78,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 451,
      "height": 394
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44,
   "hfov": 9.91
  }
 ],
 "id": "overlay_8F132FC6_9465_CE84_41D1_88B0BA22DB54",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.81,
   "hfov": 6.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.61
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2626E02E_0D44_4F34_4175_0CB4463E4ADE",
   "pitch": -14.61,
   "yaw": 164.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.69,
   "distance": 50
  }
 ],
 "id": "overlay_88B84E5D_945D_5184_41DF_375FCB65F5D2",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74, this.camera_02348384_0F2B_FFFB_4185_50D3F09CDE68); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.87,
   "hfov": 4.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.95
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2626302E_0D44_4F34_41A1_8BC7BD862621",
   "pitch": -1.95,
   "yaw": 2.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.3,
   "distance": 100
  }
 ],
 "id": "overlay_85A11923_963D_3E29_41E2_7AD53E4579A0",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2, this.camera_0144446B_0F2B_F90D_41A0_C8C7F89730DB); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.78,
   "hfov": 7.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.18
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26091028_0D44_4F3C_4194_2F047CF92A88",
   "pitch": -13.18,
   "yaw": -54.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.02,
   "distance": 50
  }
 ],
 "id": "overlay_EB056869_FBEA_3193_41E4_BBD5877CC42C",
 "data": {
  "label": "S\u00e2n tr\u01b0\u1eddng"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D, this.camera_014BD465_0F2B_F905_414F_B295FA50334A); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.64,
   "hfov": 9.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.44
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2636B028_0D44_4F3C_41A2_6B57B83DFDAC",
   "pitch": -1.44,
   "yaw": 95.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.15,
   "distance": 100
  }
 ],
 "id": "overlay_1DE60D5B_0CC3_D11C_4190_F3F711D549D2",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_E12ED7BC_FC5E_3EF0_41D7_04F5E15B2B27",
  "this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_E12EC7BC_FC5E_3EF0_41E3_9D6B481D6995",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "bottom": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "7%",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "layout": "vertical",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "UVN Da Lat",
 "id": "Label_EE05A09D_FD91_02BD_41DF_50C0E556F878",
 "left": 92,
 "width": 1089,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "text": "MÔ HÌNH THAM QUAN ẢO kHOA CÔNG NGHỆ THÔNG TIN ĐẠI HỌC CÔNG NGHIỆP VIỆT TRÌ",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "minWidth": 1,
 "height": 61,
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Label",
 "fontSize": "2.21vmin",
 "fontColor": "#333333",
 "fontStyle": "normal",
 "horizontalAlign": "left",
 "data": {
  "name": "Label Company Name"
 },
 "fontWeight": "bold",
 "shadow": false
},
{
 "children": [
  "this.DropDown_EE05F09D_FD91_02BD_41DF_1E01DAA2A683",
  "this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1"
 ],
 "id": "Container_EE05809D_FD91_02BD_41E9_A9FC73C05CF9",
 "width": 430.13,
 "right": "5.01%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 15,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "paddingLeft": 0,
 "minWidth": 1,
 "height": 60,
 "top": "0%",
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "layout": "horizontal",
 "data": {
  "name": "-button set container"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 1126,
 "maxWidth": 1065,
 "id": "Image_E8809774_FDF1_0F82_41E5_C3E79692D2C1",
 "left": "0.42%",
 "width": "4.463%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_E8809774_FDF1_0F82_41E5_C3E79692D2C1.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "4.92%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "81.967%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image14499"
 },
 "horizontalAlign": "center",
 "shadow": false
},
{
 "id": "IconButton_EF9865FA_FDFC_2BB2_41D0_99D4A8F1A4A5",
 "width": 40,
 "right": "1.15%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": 40,
 "top": "15%",
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_E12E97BC_FC5E_3EF0_41BB_846FF6F501CC, true, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "Button1170"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EF9865FA_FDFC_2BB2_41D0_99D4A8F1A4A5.png",
 "pressedIconURL": "skin/IconButton_EF9865FA_FDFC_2BB2_41D0_99D4A8F1A4A5_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_EF9865FA_FDFC_2BB2_41D0_99D4A8F1A4A5_pressed_rollover.png"
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2634B029_0D44_4F3C_41A2_9DC540A3F7DB",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_2634D029_0D44_4F3C_41A8_C5D79AF34D2A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_26341029_0D44_4F3C_4164_1E0356BD4B79",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF3552AE_FBEA_5690_41B5_FFB9818EF54F_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2635B029_0D44_4F3C_4199_D594B5C4E949",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B48FD77D_94DF_DF87_41BF_91651A01F658_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_2631602B_0D44_4F3C_4180_C85EC2D90BA0",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DC47DDA_91BB_8620_41AE_046DCD42479C_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_2633602A_0D44_4F3C_41A1_3884096F89BA",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_2632F02A_0D44_4F3C_418E_5AEBDC005955",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_2632002A_0D44_4F3C_4195_EE7B3AECAA43",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DC3DD8C_91BD_8620_41B5_2D910A9015D4_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_2633902A_0D44_4F3C_41A9_F5A5BBAFCE5B",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_263EC02B_0D44_4F3C_418E_59C729B35DB9",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_263E602B_0D44_4F3C_41A4_5FD589B7F0FA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E63E435D_FC3E_57B0_41EA_6BB1DCC3FFE7_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_263FB02B_0D44_4F3C_41A9_80791A5DC0A1",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF40526_91BB_8661_41C2_A4514F9033D3_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_2639302E_0D44_4F34_4197_09A4A9ECB533",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF1A767_91BB_82EF_41E0_9B093976E0D2_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_26376029_0D44_4F3C_419F_FBEBA1468984",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_263AE02D_0D44_4F34_41A4_BBDAB012C2BE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_263A002D_0D44_4F34_41A2_FF98B8C68B7D",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9A78E9_FC5E_3290_41C7_7DD68F175E74_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_263BB02D_0D44_4F34_41A8_4C941704292B",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B493C0D7_94DF_D283_417C_DDC3CDD61E7C_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_2627E02E_0D44_4F34_4169_9253ACA131D9",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_263EA02B_0D44_4F3C_4196_707EFCD35CC2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1ED89358_0CCD_B11C_418C_2616DD1980D8_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_263EE02B_0D44_4F3C_4190_44E661970C6B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2635F029_0D44_4F3C_41A6_A5A6AE18B10E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_26350029_0D44_4F3C_4197_3D3AA5E34CE6",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EAC64805_FBE6_7193_41AB_C8227B1A637E_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_26355029_0D44_4F3C_41A1_2672B9DE169B",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF68425_91BB_8660_41E1_E437243C84C2_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_2638702D_0D44_4F34_419C_35442EFDF88B",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 33,
 "levels": [
  {
   "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_26086028_0D44_4F3C_4199_C3E7E0831D88",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DCE58E6_91BB_8FE0_41DF_C916277629E2_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_2609A028_0D44_4F3C_41A5_9F7467F68DF2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_263FD02C_0D44_4F34_4171_A656E6B596E0",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_263F602C_0D44_4F34_418A_018C3DBF5248",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF50E69_91BD_82E3_41A5_74B449D46960_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_263C202C_0D44_4F34_41A5_6A9A41895F6E",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_263D202C_0D44_4F34_4192_1DC0B18DCA2F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF4D45C_91BA_8621_41D4_D96791B667F9_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_263D402C_0D44_4F34_4158_AC50BE49900C",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF585CE_91BB_8620_41D8_753803B9D59D_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_2624802E_0D44_4F34_41A9_8C053A4217C4",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2630102A_0D44_4F3C_419C_DC67915AC6E4",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_2631A02A_0D44_4F3C_4191_D5961241BD56",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFEE5C87_FBDA_D29F_41D7_701FDB24D82D_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_2631C02A_0D44_4F3C_419C_E83302418822",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 33,
 "levels": [
  {
   "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_260B8027_0D44_4F34_419E_956D5A6A5263",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 33,
 "levels": [
  {
   "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_26088028_0D44_4F3C_4191_FECCDEA67782",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 33,
 "levels": [
  {
   "url": "media/panorama_9F77CAD1_91BD_8220_41DD_7ABC22ABAAB4_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_2608C028_0D44_4F3C_4195_1314D06BCF8A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B48FB432_94DF_F19C_4195_87515F5E3E8B_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_2631F02B_0D44_4F3C_41A6_1B613AA045A1",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_263B202D_0D44_4F34_41A1_31A954613B14",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF27F4D_91BD_8220_41CF_4571AAE9CE28_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_2638902D_0D44_4F34_4189_DDA8FA76CC21",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF7641F_91BA_8620_41CC_D67BAF5DD112_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_263D802C_0D44_4F34_417E_50AE6AF720AE",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF4BE1F_91BA_8220_41D3_C8A513DB70FC_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_2630F02A_0D44_4F3C_41AA_10867452E044",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_199D1E15_0CCC_D314_4185_F1313D68DA1D_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2636D028_0D44_4F3C_418D_AAE741E37F90",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF46656_91BB_8221_41DF_ACA7CB2B9BDD_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_2637E029_0D44_4F3C_41A4_6D5DD7709927",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2626E02E_0D44_4F34_4175_0CB4463E4ADE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9DF2302D_91BD_7E60_41D9_B76210F71F53_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_2626302E_0D44_4F34_41A1_8BC7BD862621",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_26091028_0D44_4F3C_4194_2F047CF92A88",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB055868_FBEA_3190_41D8_15F9580FE297_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2636B028_0D44_4F3C_41A2_6B57B83DFDAC",
 "frameCount": 24
},
{
 "shadow": false,
 "children": [
  "this.Image_F2413F5E_FD8F_3FBE_41E0_21B994709E2C",
  "this.Button_F24A0512_FDB1_0386_41D6_D22C6FE0A9FB"
 ],
 "id": "Container_E12ED7BC_FC5E_3EF0_41D7_04F5E15B2B27",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0
 ],
 "height": 59,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#0066FF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "itemThumbnailBorderRadius": 16,
 "id": "ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B",
 "rollOverItemLabelFontSize": "13px",
 "width": "99.948%",
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "verticalAlign": "middle",
 "paddingLeft": 30,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "itemMinHeight": 50,
 "selectedItemBackgroundOpacity": 0,
 "itemOpacity": 1,
 "propagateClick": false,
 "minWidth": 1,
 "height": "91.154%",
 "playList": "this.ThumbnailGrid_E12E87BC_FC5E_3EF0_41D3_CB6F3CE9141B_playlist",
 "rollOverItemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailOpacity": 1,
 "itemMinWidth": 50,
 "borderSize": 0,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "class": "ThumbnailGrid",
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemThumbnailShadowVerticalLength": 9,
 "scrollBarColor": "#666666",
 "itemHeight": 160,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemLabelFontSize": "13px",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "rollOverItemThumbnailShadowOpacity": 1,
 "rollOverItemLabelFontWeight": "bold",
 "selectedItemLabelFontColor": "#0066FF",
 "itemLabelFontWeight": "bold",
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": "13px",
 "itemThumbnailHeight": 119,
 "itemLabelGap": 18,
 "paddingRight": 30,
 "itemThumbnailShadow": false,
 "itemLabelFontColor": "#666666",
 "borderRadius": 5,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "rollOverItemBackgroundColorRatios": [],
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 197,
 "itemMaxWidth": 1000,
 "itemBackgroundColorDirection": "horizontal",
 "itemHorizontalAlign": "center",
 "paddingBottom": 64,
 "gap": 47,
 "itemMaxHeight": 1000,
 "paddingTop": 30,
 "itemWidth": 200,
 "itemPaddingBottom": 3,
 "selectedItemLabelFontWeight": "bold",
 "click": "this.setComponentVisibility(this.Container_E12E97BC_FC5E_3EF0_41BB_846FF6F501CC, false, 0, null, null, false)",
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList5161"
 },
 "rollOverItemBorderSize": 0,
 "rollOverItemBackgroundColor": [],
 "horizontalAlign": "center",
 "rollOverItemLabelFontColor": "#333333",
 "rollOverItemThumbnailShadowColor": "#CCCCCC",
 "itemLabelFontFamily": "Oswald Regular",
 "itemLabelPosition": "bottom"
},
{
 "rollOverPopUpFontColor": "#333333",
 "fontFamily": "Tahoma",
 "shadowSpread": 1,
 "data": {
  "name": "DropDown 1"
 },
 "shadowBlurRadius": 6,
 "id": "DropDown_EE05F09D_FD91_02BD_41DF_1E01DAA2A683",
 "popUpBackgroundOpacity": 1,
 "width": 176,
 "rollOverBackgroundColor": [
  "#CCCCCC"
 ],
 "backgroundColorDirection": "vertical",
 "popUpShadow": true,
 "popUpFontColor": "#333333",
 "shadowColor": "#000000",
 "paddingRight": 15,
 "backgroundOpacity": 1,
 "paddingLeft": 15,
 "shadowHorizontalLength": 3,
 "minHeight": 1,
 "arrowColor": "#333333",
 "shadowOpacity": 0,
 "borderRadius": 0,
 "pressedRollOverArrowColor": "#000000",
 "popUpPaddingTop": 10,
 "popUpShadowSpread": 1,
 "selectedPopUpFontColor": "#333333",
 "shadowVerticalLength": 0,
 "popUpShadowOpacity": 0,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "playList": "this.DropDown_EE05F09D_FD91_02BD_41DF_1E01DAA2A683_playlist",
 "popUpBorderRadius": 0,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "propagateClick": false,
 "popUpShadowBlurRadius": 6,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "gap": 0,
 "borderSize": 0,
 "height": 60,
 "label": "Ngoại cảnh",
 "popUpPaddingLeft": 15,
 "popUpGap": 2,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#CCCCCC"
 ],
 "paddingBottom": 0,
 "fontSize": "18.9563px",
 "popUpShadowColor": "#000000",
 "arrowBeforeLabel": false,
 "class": "DropDown",
 "popUpShadowVerticalLength": 0,
 "fontStyle": "normal",
 "pressedRollOverBackgroundColor": [
  "#CCCCCC"
 ],
 "fontColor": "#333333",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": true,
 "popUpBackgroundColor": "#FFFFFF",
 "selectedPopUpBackgroundColor": "#CCCCCC",
 "fontWeight": "bold",
 "rollOverPopUpBackgroundColor": "#CCCCCC",
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "popUpShadowHorizontalLength": 3
},
{
 "rollOverPopUpFontColor": "#333333",
 "fontFamily": "Tahoma",
 "shadowSpread": 1,
 "shadowBlurRadius": 6,
 "id": "DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1",
 "popUpBackgroundOpacity": 1,
 "width": 170.95,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CCCCCC"
 ],
 "backgroundColorDirection": "vertical",
 "popUpShadow": true,
 "popUpFontColor": "#333333",
 "backgroundOpacity": 1,
 "paddingRight": 15,
 "paddingLeft": 15,
 "shadowHorizontalLength": 3,
 "minHeight": 1,
 "arrowColor": "#333333",
 "shadowOpacity": 0,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "popUpPaddingTop": 10,
 "popUpShadowSpread": 1,
 "selectedPopUpFontColor": "#333333",
 "popUpShadowOpacity": 0,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "playList": "this.DropDown_EA966EC5_FDF1_3E82_41C7_D6D87EF404E1_playlist",
 "popUpBorderRadius": 0,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "propagateClick": false,
 "popUpShadowBlurRadius": 6,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "gap": 0,
 "borderSize": 0,
 "height": 60,
 "label": "Các phòng ",
 "popUpPaddingLeft": 15,
 "popUpGap": 2,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#CCCCCC"
 ],
 "paddingBottom": 0,
 "fontSize": "18.9563px",
 "popUpShadowColor": "#000000",
 "pressedRollOverBackgroundColor": [
  "#CCCCCC"
 ],
 "arrowBeforeLabel": false,
 "class": "DropDown",
 "popUpShadowVerticalLength": 0,
 "fontStyle": "normal",
 "fontColor": "#333333",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "DropDown 1"
 },
 "shadow": true,
 "popUpBackgroundColor": "#FFFFFF",
 "selectedPopUpBackgroundColor": "#CCCCCC",
 "fontWeight": "bold",
 "rollOverPopUpBackgroundColor": "#CCCCCC",
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "popUpShadowHorizontalLength": 3
},
{
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "Image_F2413F5E_FD8F_3FBE_41E0_21B994709E2C",
 "width": "7.065%",
 "right": "0%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_F2413F5E_FD8F_3FBE_41E0_21B994709E2C.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "8.73%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "75%",
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_E12E97BC_FC5E_3EF0_41BB_846FF6F501CC, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4245"
 },
 "horizontalAlign": "center",
 "shadow": false
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Nirmala UI",
 "rollOverBackgroundOpacity": 0,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_F24A0512_FDB1_0386_41D6_D22C6FE0A9FB",
 "left": "0.78%",
 "width": 131,
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 1,
 "height": 40,
 "top": "15.25%",
 "pressedBackgroundOpacity": 0,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Danh s\u00e1ch",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "gap": 5,
 "class": "Button",
 "fontSize": "23px",
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, true, 0, null, null, false)",
 "layout": "horizontal",
 "rollOverShadow": false,
 "iconWidth": 0,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "data": {
  "name": "Button house info"
 },
 "fontWeight": "bold",
 "shadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ]
}],
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "minWidth": 20,
 "creationPolicy": "inAdvance",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "vrPolyfillScale": 0.5,
 "contentOpaque": false,
 "class": "Player",
 "scripts": {
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "data": {
  "name": "Player435"
 },
 "layout": "absolute",
 "shadow": false,
 "scrollBarColor": "#000000",
 "buttonToggleFullscreen": "this.IconButton_E5BB654E_FD93_039E_41EB_C8BE372978C3",
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_E5B8B54E_FD93_039E_41E4_16E8436FBD35",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
