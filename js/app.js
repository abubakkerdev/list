let addClassList = document.querySelector(".addClassList");
let classListArr = [
  {
    uname: "sdfdsf",
    batch: "MERN-2201",
    topic: "Backend",
    time: "6.00pm - 8.00pm",
    date: "March 3, 2024",
  },
];

let classListData = "";

classListArr.map((element, index) => {
  classListData += `
    <tr>
        <th scope="row">#${index + 1}</th>
        <td>${element.uname}</td>
        <td>${element.batch}</td>
        <td>${element.topic}</td>
        <td>${element.time}</td>
        <td>${element.date}</td>
        <td>✔</td>
    </tr>
    `;
});

classListData += `
<tr>
    <th scope="row">#${classListArr.length + 1}</th>
    <td colspan="5" align="end"><span>Total Class</span></td>
    <td><span>= ${classListArr.length}</span></td>
</tr>
`;

addClassList.innerHTML = classListData;

let addSupportList = document.querySelector(".addSupportList");
let supportListArr = [
  {
    uname: "Sabbir",
    batch: "MERN-2309",
    topic: "Design",
    time: "4.00pm - 4.23pm",
    date: "March 12, 2024",
  },
  {
    uname: "Sahed Rahman",
    batch: "FDR-2314",
    topic: "Design",
    time: "12.55pm - 1.05pm",
    date: "March 13, 2024",
  },
  {
    uname: "Kabir",
    batch: "FDR-2403",
    topic: "Design",
    time: "1.15pm - 1.27pm",
    date: "March 13, 2024",
  },
  {
    uname: "Sifatul Islam",
    batch: "MERN-2307",
    topic: "Design",
    time: "3.57pm - 4.05pm",
    date: "March 13, 2024",
  },
  {
    uname: "Himu",
    batch: "ES MERN-2201",
    topic: "Backend",
    time: "10.55am - 11.23am",
    date: "March 14, 2024",
  },
  {
    uname: "Munjarin",
    batch: "FDR-2314",
    topic: "Design",
    time: "9.10am - 9.30am",
    date: "March 19, 2024",
  },
  {
    uname: "Sabbir",
    batch: "MERN-2309",
    topic: "Design",
    time: "11.40am - 11.55am",
    date: "March 19, 2024",
  },
  {
    uname: "Md.Sahed Rahman",
    batch: "FDR-2314",
    topic: "React",
    time: "2.42pm - 2.52pm",
    date: "March 22, 2024",
  },
  {
    uname: "MD.ARMAN HOSSAIN",
    batch: "FDR-2403",
    topic: "Design",
    time: "1.46pm - 1.54pm",
    date: "March 23, 2024",
  },
  {
    uname: "Md.Shamim Hossen",
    batch: "FDR-2304",
    topic: "Backend",
    time: "1.26pm - 1.44pm",
    date: "March 25, 2024",
  },
];

let supportListData = "";

supportListArr.map((element, index) => {
  supportListData += `
    <tr>
        <th scope="row">#${index + 1}</th>
        <td>${element.uname}</td>
        <td>${element.batch}</td>
        <td>${element.topic}</td>
        <td>${element.time}</td>
        <td>${element.date}</td>
        <td>✔</td>
    </tr>
    `;
});

supportListData += `
<tr>
    <th scope="row">#${supportListArr.length + 1}</th>
    <td colspan="5" align="end"><span>Total Support</span></td>
    <td><span>= ${supportListArr.length}</span></td>
</tr>
`;

addSupportList.innerHTML = supportListData;

// January, February, March, April, May, June, July, August, September, October, November, December
