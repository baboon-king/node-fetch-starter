const headerNumList = [
  "139",
  "138",
  "137",
  "136",
  "135",
  "134",
  "159",
  "158",
  "157",
  "150",
  "151",
  "152",
  "188",
  "187",
  "182",
  "183",
  "184",
  "178",
  "130",
  "131",
  "132",
  "156",
  "155",
  "186",
  "185",
  "176",
  "133",
  "153",
  "189",
  "180",
  "181",
  "177",
];

export const randomPhone = () => {
  const headerNum = headerNumList[parseInt(Math.random() * 10, 10)];
  const bodyNum = Math.random().toString().replace("0.", "").slice(0, 8);
  return headerNum + bodyNum;
};
