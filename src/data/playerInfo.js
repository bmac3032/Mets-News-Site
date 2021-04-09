const playersInfo = [
  // Pitchers
  {
    name: "Jacob Barnes",
    position: "Pitcher",
    number: "40",
    HT: "6'2",
    WT: "231",
    DOB: "04/14/1990",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/606930.jpg",
    id: 1,
  },
  {
    name: "Miguel Castro",
    position: "Pitcher",
    number: "50",
    HT: "6'7",
    WT: "205",
    DOB: "12/24/1994",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/612434.jpg",
    id: 2,
  },
  {
    name: "Jacob deGrom",
    position: "Pitcher",
    number: "48",
    HT: "6'4",
    WT: "180",
    DOB: "06/19/1988",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/594798.jpg",
    id: 3,
  },
  {
    name: "Edwin Diaz",
    position: "Pitcher",
    number: "39",
    HT: "6'3",
    WT: "165",
    DOB: "03/22/1994",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/621242.jpg",
    id: 4,
  },
  {
    name: "Jeurys Familia",
    position: "Pitcher",
    number: "27",
    HT: "6'3",
    WT: "240",
    DOB: "10/10/1989",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/544727.jpg",
    id: 5,
  },
  {
    name: "Robert Gsellman",
    position: "Pitcher",
    number: "44",
    HT: "6'4",
    WT: "200",
    DOB: "07/18/1993",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/607229.jpg",
    id: 6,
  },
  {
    name: "Trevor Hildenberger",
    position: "Pitcher",
    number: "35",
    HT: "6'2",
    WT: "205",
    DOB: "12/15/1990",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/657610.jpg",
    id: 7,
  },
  {
    name: "Aaron Loup",
    position: "Pitcher",
    number: "32",
    HT: "5'11",
    WT: "210",
    DOB: "12/19/1987",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/571901.jpg",
    id: 8,
  },
  {
    name: "John Lucchesi",
    position: "Pitcher",
    number: "47",
    HT: "6'5",
    WT: "225",
    DOB: "06/06/1993",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/664192.jpg",
    id: 9,
  },
  {
    name: "Trevor May",
    position: "Pitcher",
    number: "65",
    HT: "6'5",
    WT: "240",
    DOB: "09/23/1989",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/543507.jpg",
    id: 10,
  },
  {
    name: "David Peterson",
    position: "Pitcher",
    number: "23",
    HT: "6'6",
    WT: "240",
    DOB: "09/23/1989",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/656849.jpg",
    id: 11,
  },
  {
    name: "Marcus Stroman",
    position: "Pitcher",
    number: "0",
    HT: "5'7",
    WT: "180",
    DOB: "05/01/1991",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/573186.jpg",
    id: 12,
  },
  {
    name: "Taijuan Walker",
    position: "Pitcher",
    number: "99",
    HT: "6'4",
    WT: "180",
    DOB: "08/13/1992",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/592836.jpg",
    id: 13,
  },
  // Catchers
  {
    name: "James McCann",
    position: "Catcher",
    number: "33",
    HT: "6'3",
    WT: "220",
    DOB: "06/13/1990",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/543510.jpg",
    id: 14,
  },
  {
    name: "Tomas Nido",
    position: "Catcher",
    number: "3",
    HT: "6'0",
    WT: "211",
    DOB: "04/12/1994",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/621512.jpg",
    id: 15,
  },
  // Infielders
  {
    name: "Pete Alonso",
    position: "1B",
    number: "20",
    HT: "6'3",
    WT: "245",
    DOB: "12/07/1994",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/624413.jpg",
    id: 16,
  },
  {
    name: "J.D. Davis",
    position: "3B",
    number: "28",
    HT: "6'3",
    WT: "218",
    DOB: "04/27/1993",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/605204.jpg",
    id: 17,
  },
  {
    name: "Luis Guillorme",
    position: "2B",
    number: "13",
    HT: "5'10",
    WT: "190",
    DOB: "09/27/1994",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/641645.jpg",
    id: 18,
  },
  {
    name: "Francisco Lindor",
    position: "SS",
    number: "12",
    HT: "5'11",
    WT: "190",
    DOB: "11/14/1993",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/596019.jpg",
    id: 19,
  },
  {
    name: "Jeff McNeil",
    position: "Utility",
    number: "6",
    HT: "6'1",
    WT: "195",
    DOB: "05/02/1991",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/643446.jpg",
    id: 20,
  },
  {
    name: "Jonathan Villar",
    position: "2B",
    number: "1",
    HT: "6'0",
    WT: "195",
    DOB: "05/02/1991",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/542340.jpg",
    id: 21,
  },
  // Outfielders
  {
    name: "Albert Almora Jr",
    position: "CF",
    number: "4",
    HT: "6'2",
    WT: "190",
    DOB: "04/16/1994",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/546991.jpg",
    id: 22,
  },
  {
    name: "Michael Conforto",
    position: "RF",
    number: "30",
    HT: "6'1",
    WT: "215",
    DOB: "05/02/1991",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/624424.jpg",
    id: 23,
  },
  {
    name: "Brandon Nimmo",
    position: "LF",
    number: "9",
    HT: "6'3",
    WT: "206",
    DOB: "03/27/1993",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/607043.jpg",
    id: 24,
  },
  {
    name: "Kevin Pillar",
    position: "Outfielder",
    number: "11",
    HT: "6'0",
    WT: "200",
    DOB: "01/04/1989",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/607680.jpg",
    id: 25,
  },
  {
    name: "Dom Smith",
    position: "Outfielder",
    number: "2",
    HT: "6'0",
    WT: "239",
    DOB: "06/15/1995",
    img: "https://securea.mlb.com/mlb/images/players/head_shot/642086.jpg",
    id: 26,
  },
];

export default playersInfo;
