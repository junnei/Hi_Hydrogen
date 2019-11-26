import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import * as Location from "expo-location";
import * as Permissions from 'expo-permissions';
import MapView from "react-native-maps";
import * as FileSystem from 'expo-file-system';
import * as Asset from 'expo-asset';

const Images = [
  { uri: "https://geo3.ggpht.com/cbk?panoid=RappYG37z75S3dKeJlRGZA&output=thumbnail&cb_client=search.gws-prod.gps&thumb=2&w=408&h=240&yaw=291.12143&pitch=0&thumbfov=100" },
  { uri: "https://lh5.googleusercontent.com/p/AF1QipM-ab7daQabVz226s86RdTZUDZxLOzqid8AhUan=w408-h725-k-no" },
  { uri: "https://geo0.ggpht.com/cbk?panoid=hZmnHiJat0yn9hwl9p6iRg&output=thumbnail&cb_client=search.gws-prod/maps/local-details-localweb.gps&thumb=2&w=408&h=240&yaw=142.79875&pitch=0&thumbfov=100" },
  { uri: "https://geo0.ggpht.com/cbk?panoid=9mmQL3si5pXa-UyAbCKlkA&output=thumbnail&cb_client=search.gws-prod.gps&thumb=2&w=408&h=240&yaw=240.28049&pitch=0&thumbfov=100" }
]

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class MapScreen extends Component {
  state = {
    markers: [
      {
        coordinate: {
          latitude: 37.55585119,
          longitude: 126.7681842,
        },
        title: "오곡동충전소(LPG)",
        description: "서울 강서구 벌말로 271",
        image: Images[0],
      },
      {
        coordinate: {
          latitude: 37.55515204,
          longitude: 126.768813,
        },
        title: "강서가스충전소(LPG)",
        description: "서울 강서구 벌말로 266(오곡동)",
        image: Images[1],
      },
      {
        coordinate: {
          latitude: 37.53811217,
          longitude: 126.798145,
        },
        title: "(주)삼표에너지 김포충전소(LPG)",
        description: "서울 강서구 오정로 390",
        image: Images[2],
      },
      {
        coordinate: {
          latitude: 37.58149883,
          longitude: 126.7996743,
        },
        title: "복지개화충전소",
        description: "서울 강서구 개화동로 416",
        image: Images[3],
      },
      {
        coordinate: {
          latitude: 37.60028336,
          longitude: 126.8007122,
        },
        title: "서울씨엔지(주)강서Clean Station(CNG)",
        description: "서울 강서구 개화동로8길 17(공용차고지)",
        image: Images[4],
      },
{
        coordinate: {
          latitude: 37.59071425,
          longitude: 126.8057799,
        },
        title: "한경에너지(LPG)",
        description: "서울 강서구 개화동로 255 LPG 충전소",
        image: Images[5],
      },
{
        coordinate: {
          latitude: 37.58044382,
          longitude: 126.814874,
        },
        title: "김포교통(주)방화CNG충전소(CNG)",
        description: "서울 강서구 금낭화로 170 김포교통주식회사",
        image: Images[6],
      },
{
        coordinate: {
          latitude: 37.58516465,
          longitude: 126.817205,
        },
        title: "방화동LPG충전소(LPG)",
        description: "서울 강서구 양천로27길 261-40",
        image: Images[7],
      },
{
        coordinate: {
          latitude: 37.54271137,
          longitude: 126.8173815,
        },
        title: "활주로충전소(LPG)",
        description: "서울 강서구 방화대로 26",
        image: Images[8],
      },
{
        coordinate: {
          latitude: 37.49157271,
          longitude: 126.8201796,
        },
        title: "(주)귀뚜라미에너지 온수CNG충전소(CNG)",
        description: "서울 구로구 부일로 841",
        image: Images[9],
      },
{
        coordinate: {
          latitude: 37.57270292,
          longitude: 126.8261113,
        },
        title: "복지마곡충전소(LPG)",
        description: "서울 강서구 양천로 200",
        image: Images[10],
      },
{
        coordinate: {
          latitude: 37.53899411,
          longitude: 126.8267325,
        },
        title: "비케이서비스산업(주)(LPG)",
        description: "서울 양천구 남부순환로 311 LPG충전소",
        image: Images[11],
      },
{
        coordinate: {
          latitude: 37.50706799,
          longitude: 126.8292433,
        },
        title: "오승프라임산업(주)(LPG)",
        description: "서울 구로구 신정로 59 궁동 LPG충전소",
        image: Images[12],
      },
{
        coordinate: {
          latitude: 37.52433363,
          longitude: 126.8306816,
        },
        title: "중부운수(주)(CNG)",
        description: "서울 양천구 지양로 106 중부운수",
        image: Images[13],
      },
{
        coordinate: {
          latitude: 37.57225632,
          longitude: 126.8309798,
        },
        title: "대영가스 충전소(LPG)",
        description: "서울 강서구 양천로 242 A동(충전소사무동)",
        image: Images[14],
      },
{
        coordinate: {
          latitude: 37.53124231,
          longitude: 126.8318655,
        },
        title: "(주)대흥가스(LPG)",
        description: "서울 양천구 남부순환로 411 LPG충전소",
        image: Images[15],
      },
{
        coordinate: {
          latitude: 37.52064894,
          longitude: 126.8372045,
        },
        title: "(주)남양가스(LPG)",
        description: "서울 양천구 남부순환로 538 남양가스충전소",
        image: Images[16],
      },
{
        coordinate: {
          latitude: 37.50731791,
          longitude: 126.8375925,
        },
        title: "(주)귀뚜라미에너지 양천CNG충전소(CNG)",
        description: "서울 양천구 신정로7길 17 양천공영차고지",
        image: Images[17],
      },
{
        coordinate: {
          latitude: 37.49280078,
          longitude: 126.8376458,
        },
        title: "대성산업(주)오류동충전소(LPG)",
        description: "서울 구로구 경인로8길 31",
        image: Images[18],
      },
{
        coordinate: {
          latitude: 37.50700702,
          longitude: 126.8390053,
        },
        title: "수도에너지(주)(LPG)",
        description: "서울 양천구 신정로 146",
        image: Images[19],
      },
{
        coordinate: {
          latitude: 37.52978689,
          longitude: 126.8472219,
        },
        title: "대흥에너지산업(주)(LPG)",
        description: "서울 강서구 곰달래로24길 19",
        image: Images[20],
      },
{
        coordinate: {
          latitude: 37.5533363,
          longitude: 126.8586301,
        },
        title: "공항로충전소(LPG)",
        description: "서울 강서구 공항대로 468 공항로충전소",
        image: Images[21],
      },
{
        coordinate: {
          latitude: 37.4965812,
          longitude: 126.8606084,
        },
        title: "개봉충전소(LPG)",
        description: "서울 구로구 경인로 364 개봉LPG충전소",
        image: Images[22],
      },
{
        coordinate: {
          latitude: 37.55840232,
          longitude: 126.8608115,
        },
        title: "대양가스충전소(LPG)",
        description: "서울 강서구 양천로 551 대양가스충전소",
        image: Images[23],
      },
{
        coordinate: {
          latitude: 37.52558135,
          longitude: 126.8639988,
        },
        title: "목동충전소(LPG)",
        description: "서울 양천구 목동로 193 SK충전소",
        image: Images[24],
      },
{
        coordinate: {
          latitude: 37.50710058,
          longitude: 126.8709958,
        },
        title: "복지신정충전소(LPG)",
        description: "서울 양천구 안양천로 669 (신정동 외5필지)",
        image: Images[25],
      },
{
        coordinate: {
          latitude: 37.58161171,
          longitude: 126.8780603,
        },
        title: "서울씨엔지(주)상암CNG충전소(CNG)",
        description: "서울 마포구 가양대로 125 (상암동)",
        image: Images[26],
      },
{
        coordinate: {
          latitude: 37.59383235,
          longitude: 126.8861704,
        },
        title: "서울씨엔지(주) 은평CNG충전소(CNG)",
        description: "서울 은평구 수색로24길 19 시내버스공영차고지",
        image: Images[27],
      },
{
        coordinate: {
          latitude: 37.51744135,
          longitude: 126.8885945,
        },
        title: "(주)세지(LPG)",
        description: "서울 영등포구 선유로 37 세지충전소",
        image: Images[28],
      },
{
        coordinate: {
          latitude: 37.46188189,
          longitude: 126.8984925,
        },
        title: "(주)중앙에너비스 삼중가스지점(LPG)",
        description: "서울 금천구 시흥대로 316",
        image: Images[29],
      },
{
        coordinate: {
          latitude: 37.53623671,
          longitude: 126.899143,
        },
        title: "기린에너지(LPG)",
        description: "서울 영등포구 선유로52길 5 기린충전소",
        image: Images[30],
      },
{
        coordinate: {
          latitude: 37.57893929,
          longitude: 126.900297,
        },
        title: "신흥에너지산업(주)(LPG)",
        description: "서울 은평구 수색로 199 신흥에너지산업",
        image: Images[31],
      },
{
        coordinate: {
          latitude: 37.57774991,
          longitude: 126.9016875,
        },
        title: "(주)삼표에너지 수색충전소(LPG)",
        description: "서울 은평구 수색로 181 삼표에너지",
        image: Images[32],
      },
{
        coordinate: {
          latitude: 37.48436468,
          longitude: 126.9019622,
        },
        title: "동일석유(주)남부충전소(LPG)",
        description: "서울 구로구 시흥대로 573",
        image: Images[33],
      },
{
        coordinate: {
          latitude: 37.57383354,
          longitude: 126.9061432,
        },
        title: "연일가스산업(주)(LPG)",
        description: "서울 서대문구 수색로 123 연일가스주유소",
        image: Images[34],
      },
{
        coordinate: {
          latitude: 37.64692604,
          longitude: 126.9094463,
        },
        title: "은평뉴타운CNG충전소(CNG)",
        description: "서울 은평구 통일로 1190 은평뉴타운CNG충전소",
        image: Images[35],
      },
{
        coordinate: {
          latitude: 37.6459709,
          longitude: 126.9094999,
        },
        title: "은평서부충전소(LPG)",
        description: "서울 은평구 통일로 1186 은평서부충전소 제1동",
        image: Images[36],
      },
{
        coordinate: {
          latitude: 37.44974297,
          longitude: 126.9117383,
        },
        title: "범일에너지주식회사(CNG)",
        description: "서울 금천구 금하로 738 범일CNG충전소",
        image: Images[37],
      },
{
        coordinate: {
          latitude: 37.49936861,
          longitude: 126.9287667,
        },
        title: "동일석유(주)동주충전소(LPG)",
        description: "서울 동작구 상도로 74 가동",
        image: Images[38],
      },
{
        coordinate: {
          latitude: 37.47353085,
          longitude: 126.9340851,
        },
        title: "신림충전소(LPG)",
        description: "서울 관악구 신림로 170(신림동)",
        image: Images[39],
      },
{
        coordinate: {
          latitude: 37.47103944,
          longitude: 126.9384953,
        },
        title: "엘티씨엔지(주)신림동CNG충전소(CNG)",
        description: "서울 관악구 신림로 98",
        image: Images[40],
      },
{
        coordinate: {
          latitude: 37.47380367,
          longitude: 126.9534985,
        },
        title: "명화가스(주)(LPG)",
        description: "서울 관악구 관악로 96",
        image: Images[41],
      },
{
        coordinate: {
          latitude: 37.56454791,
          longitude: 126.9759778,
        },
        title: "광신기계공업(주) (CNG)",
        description: "서울 중구 덕수궁길 15 서울특별시청별관",
        image: Images[42],
      },
{
        coordinate: {
          latitude: 37.47901857,
          longitude: 126.9821318,
        },
        title: "수도석유(주)방배충전소(LPG)",
        description: "서울 서초구 동작대로 26 수도석유(주)방배충전소",
        image: Images[43],
      },
{
        coordinate: {
          latitude: 37.47318012,
          longitude: 126.9954302,
        },
        title: "서초충전소(LPG)",
        description: "서울 서초구 남부순환로 2224",
        image: Images[44],
      },
{
        coordinate: {
          latitude: 37.61814366,
          longitude: 126.9987177,
        },
        title: "예스코(주)정릉2차CNG충전소(CNG)",
        description: "서울 성북구 보국문로 204",
        image: Images[45],
      },
{
        coordinate: {
          latitude: 37.61676676,
          longitude: 126.9997559,
        },
        title: "(주)예스코서비스정릉1차충전소(CNG)",
        description: "서울 성북구 보국문로 187",
        image: Images[46],
      },
{
        coordinate: {
          latitude: 37.51896738,
          longitude: 127.0119182,
        },
        title: "(주)영동가스(LPG)",
        description: "서울 서초구 잠원로 181 영동가스",
        image: Images[47],
      },
{
        coordinate: {
          latitude: 37.65855185,
          longitude: 127.0143836,
        },
        title: "강북씨앤지주식회사(CNG)",
        description: "서울 도봉구 삼양로 620",
        image: Images[48],
      },
{
        coordinate: {
          latitude: 37.63433536,
          longitude: 127.0218593,
        },
        title: "국제가스공업(주)(LPG)",
        description: "서울 강북구 덕릉로24길 6",
        image: Images[49],
      },
{
        coordinate: {
          latitude: 37.63622892,
          longitude: 127.0245433,
        },
        title: "서울와사공업(주)(LPG)",
        description: "서울 강북구 도봉로 318 SK LPG 충전소",
        image: Images[50],
      },
{
        coordinate: {
          latitude: 37.60797393,
          longitude: 127.0304043,
        },
        title: "우일에너지(주)(LPG)",
        description: "서울 성북구 종암로 201 우일에너지",
        image: Images[51],
      },
{
        coordinate: {
          latitude: 37.64437024,
          longitude: 127.0327293,
        },
        title: "동원가스충전소(LPG)",
        description: "서울 도봉구 도봉로 430 (창동) 동원충전소",
        image: Images[52],
      },
{
        coordinate: {
          latitude: 37.63444867,
          longitude: 127.0355575,
        },
        title: "한성운수(주)번동CNG충전소(CNG)",
        description: "서울 강북구 한천로 939 (관리과)",
        image: Images[53],
      },
{
        coordinate: {
          latitude: 37.49055704,
          longitude: 127.0357797,
        },
        title: "(주)진양가스(LPG)",
        description: "서울 강남구 도곡로 142",
        image: Images[54],
      },
{
        coordinate: {
          latitude: 37.54962512,
          longitude: 127.0392493,
        },
        title: "(주)예스코서비스뚝섬크린스테이션(CNG)",
        description: "서울 성동구 광나루로 76",
        image: Images[55],
      },
{
        coordinate: {
          latitude: 37.68743972,
          longitude: 127.0396896,
        },
        title: "아진교통(주)아진CNG충전소(CNG)",
        description: "서울 도봉구 도봉산길 50",
        image: Images[56],
      },
{
        coordinate: {
          latitude: 37.59105136,
          longitude: 127.0410294,
        },
        title: "(주)홍릉가스충전소(LPG)",
        description: "서울 동대문구 회기로 44 ",
        image: Images[57],
      },
{
        coordinate: {
          latitude: 37.66063063,
          longitude: 127.0414169,
        },
        title: "케이와이에너지 (주)한영충전소(LPG)",
        description: "서울 도봉구 도봉로 627",
        image: Images[58],
      },
{
        coordinate: {
          latitude: 37.69043887,
          longitude: 127.0425789,
        },
        title: "(주)대륜이엔에스도봉공영CNG충전소(CNG)",
        description: "서울 도봉구 도봉로 961 도봉권역공영차고지",
        image: Images[59],
      },
{
        coordinate: {
          latitude: 37.62828601,
          longitude: 127.0440091,
        },
        title: "(주)청학에너지(LPG)",
        description: "서울 강북구 한천로 833",
        image: Images[60],
      },
{
        coordinate: {
          latitude: 37.65192507,
          longitude: 127.0443917,
        },
        title: "(주)사랑CNG충전소(CNG)",
        description: "서울 도봉구 노해로 317-6",
        image: Images[61],
      },
{
        coordinate: {
          latitude: 37.69261875,
          longitude: 127.0445618,
        },
        title: "(주)평안에너지 도봉충전소(LPG)",
        description: "서울 도봉구 도봉로 983",
        image: Images[62],
      },
{
        coordinate: {
          latitude: 37.54871347,
          longitude: 127.0450072,
        },
        title: "서울숲충전소(LPG)",
        description: "서울 성동구 왕십리로 124 (성수동1가)",
        image: Images[63],
      },
{
        coordinate: {
          latitude: 37.46665908,
          longitude: 127.0460923,
        },
        title: "코원에너지서비스(주)서초공영CNG충전소(CNG)",
        description: "서울 서초구 양재대로 254 (염곡동)",
        image: Images[64],
      },
{
        coordinate: {
          latitude: 37.55043076,
          longitude: 127.052422,
        },
        title: "대성산업(주)동부충전소(LPG)",
        description: "서울 성동구 광나루로 200",
        image: Images[65],
      },
{
        coordinate: {
          latitude: 37.62591607,
          longitude: 127.0526858,
        },
        title: "흥안에너지(주)월계CNG충전소(CNG)",
        description: "서울 노원구 월계로 280",
        image: Images[66],
      },
{
        coordinate: {
          latitude: 37.67152615,
          longitude: 127.0554284,
        },
        title: "(주)노일가스(LPG)",
        description: "서울 노원구 동일로 1601 동일로가스",
        image: Images[67],
      },
{
        coordinate: {
          latitude: 37.68739407,
          longitude: 127.0559937,
        },
        title: "복지노원충전소(LPG)",
        description: "서울 노원구 동일로 1778",
        image: Images[68],
      },
{
        coordinate: {
          latitude: 37.56301784,
          longitude: 127.0586443,
        },
        title: "장안동가스충전소(LPG)",
        description: "서울 동대문구 천호대로 353 장안동가스충전소",
        image: Images[69],
      },
{
        coordinate: {
          latitude: 37.58971722,
          longitude: 127.0596336,
        },
        title: "수도에너지(주)동서울충전소(LPG)",
        description: "서울 동대문구 망우로 57",
        image: Images[70],
      },
{
        coordinate: {
          latitude: 37.61326966,
          longitude: 127.0606384,
        },
        title: "(주)장위가스(LPG)",
        description: "서울 성북구 화랑로 291",
        image: Images[71],
      },
{
        coordinate: {
          latitude: 37.65917607,
          longitude: 127.0627588,
        },
        title: "흥안에너지CNG충전소(CNG)",
        description: "서울 노원구 노원로 487",
        image: Images[72],
      },
{
        coordinate: {
          latitude: 37.62745817,
          longitude: 127.0634433,
        },
        title: "진아복지에너지(주)월계CNG충전소(CNG)",
        description: "서울 노원구 마들로 145 진아교통",
        image: Images[73],
      },
{
        coordinate: {
          latitude: 37.47903309,
          longitude: 127.0657072,
        },
        title: "(주)도선제이엔디아이엔씨(CNG)",
        description: "서울 강남구 양재대로 486 도선여객정비공장",
        image: Images[74],
      },
{
        coordinate: {
          latitude: 37.64932803,
          longitude: 127.0670994,
        },
        title: "(주)평안에너지상계충전소(LPG)",
        description: "서울 노원구 동일로210길 86 상계충전소",
        image: Images[75],
      },
{
        coordinate: {
          latitude: 37.57628824,
          longitude: 127.0672416,
        },
        title: "복지장안충전소(LPG)",
        description: "서울 동대문구 한천로 169",
        image: Images[76],
      },
{
        coordinate: {
          latitude: 37.61691451,
          longitude: 127.0726145,
        },
        title: "태능가스(주)(LPG)",
        description: "서울 노원구 화랑로 405 태능가스충전소",
        image: Images[77],
      },
{
        coordinate: {
          latitude: 37.49791636,
          longitude: 127.0755576,
        },
        title: "남서울가스(주)(LPG)",
        description: "서울 강남구 남부순환로 3154 남서울가스충전소",
        image: Images[78],
      },
{
        coordinate: {
          latitude: 37.59424815,
          longitude: 127.0757899,
        },
        title: "동일석유(주)황금충전소(LPG)",
        description: "서울 중랑구 망우로 209",
        image: Images[79],
      },
{
        coordinate: {
          latitude: 37.56510711,
          longitude: 127.0765928,
        },
        title: "한양에너지(주)(LPG)",
        description: "서울 광진구 동일로 381 한양에너지(주)",
        image: Images[80],
      },
{
        coordinate: {
          latitude: 37.49945575,
          longitude: 127.078163,
        },
        title: "대치에너지주식회사(LPG)",
        description: "서울 강남구 남부순환로 3179",
        image: Images[81],
      },
{
        coordinate: {
          latitude: 37.57969363,
          longitude: 127.0792368,
        },
        title: "(주)풍림에너지(LPG)",
        description: "서울 중랑구 동일로 553",
        image: Images[82],
      },
{
        coordinate: {
          latitude: 37.57343282,
          longitude: 127.0850284,
        },
        title: "주식회사 예스코서비스 면목북부충전소(CNG)",
        description: "서울 중랑구 면목로 230 북부운수",
        image: Images[83],
      },
{
        coordinate: {
          latitude: 37.50349309,
          longitude: 127.0868768,
        },
        title: "잠실LPG충전소(LPG)",
        description: "서울 송파구 삼전로 47 잠실LPG충전소",
        image: Images[84],
      },
{
        coordinate: {
          latitude: 37.61272033,
          longitude: 127.1010489,
        },
        title: "신내LPG충전소(LPG)",
        description: "서울 중랑구 용마산로 691",
        image: Images[85],
      },
{
        coordinate: {
          latitude: 37.60067211,
          longitude: 127.1018645,
        },
        title: "망우충전소(LPG)",
        description: "서울 중랑구 망우로 449",
        image: Images[86],
      },
{
        coordinate: {
          latitude: 37.50820234,
          longitude: 127.1035541,
        },
        title: "홍익에너지(주)(LPG)",
        description: "서울 송파구 석촌호수로 242 홍익에너지LPG주유소",
        image: Images[87],
      },
{
        coordinate: {
          latitude: 37.48293119,
          longitude: 127.1051057,
        },
        title: "(주)수서에너지(LPG)",
        description: "서울 강남구 밤고개로 127 수서LPG충전소",
        image: Images[88],
      },
{
        coordinate: {
          latitude: 37.47649172,
          longitude: 127.1053375,
        },
        title: "강남복지충전소(LPG)",
        description: "서울 강남구 밤고개로 200",
        image: Images[89],
      },
{
        coordinate: {
          latitude: 37.63893643,
          longitude: 127.1096526,
        },
        title: "복지공릉충전소(LPG)",
        description: "서울 노원구 화랑로 826 (공릉동)",
        image: Images[90],
      },
{
        coordinate: {
          latitude: 37.55184556,
          longitude: 127.1276092,
        },
        title: "암사충전소(LPG)",
        description: "서울 강동구 올림픽로 791 GS칼텍스",
        image: Images[91],
      },
{
        coordinate: {
          latitude: 37.53641768,
          longitude: 127.1290357,
        },
        title: "(주)경기에너지(LPG)",
        description: "서울 강동구 천호대로 1056",
        image: Images[92],
      },
{
        coordinate: {
          latitude: 37.50623934,
          longitude: 127.1316418,
        },
        title: "오금가스충전소(LPG)",
        description: "서울 송파구 마천로 103 오금가스충전소",
        image: Images[93],
      },
{
        coordinate: {
          latitude: 37.47551414,
          longitude: 127.1316477,
        },
        title: "MG새마을금고 송파충전소(LPG)",
        description: "서울 송파구 위례중앙로 37",
        image: Images[94],
      },
{
        coordinate: {
          latitude: 37.46950542,
          longitude: 127.1318201,
        },
        title: "코원에너지서비스(주)송파1CNG충전소(CNG)",
        description: "서울 송파구 장지동 579",
        image: Images[95],
      },
{
        coordinate: {
          latitude: 37.46933327,
          longitude: 127.1324513,
        },
        title: "코원에너지서비스(주)위례충전소(CNG)",
        description: "서울 송파구 헌릉로 869 일원 (위례택지개발지구 차1블럭)",
        image: Images[96],
      },
{
        coordinate: {
          latitude: 37.4805533,
          longitude: 127.1369149,
        },
        title: "송파씨엔지충전(주)(CNG)",
        description: "서울 송파구 충민로6길 61-23",
        image: Images[97],
      },
{
        coordinate: {
          latitude: 37.52545777,
          longitude: 127.1464776,
        },
        title: "복지둔촌충전소(LPG)",
        description: "서울 강동구 동남로 563",
        image: Images[98],
      },
{
        coordinate: {
          latitude: 37.54506393,
          longitude: 127.1700337,
        },
        title: "복지상일충전소(LPG)",
        description: "서울 강동구 천호대로 1452",
        image: Images[99],
      },
{
        coordinate: {
          latitude: 37.56376642,
          longitude: 127.1746829,
        },
        title: "코원에너지서비스(주)강동CNG충전소(CNG)",
        description: "서울 강동구 아리수로 426 시내버스공영차고지",
        image: Images[100],
      },
    ],
    region: {
      latitude: 37.55585119,
      longitude: 126.7681842,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };
  
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      console.log(latitude,longitude);
      this.setState({
        region: {
          latitude:126.7996743,
          longitude:37.58149883,
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        }
        });
    } catch(error){
      Alert.alert("Can't find you.", "So sad");
    }
  };
  


  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    this.getLocation();
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});

AppRegistry.registerComponent("mapfocus", () => screens);