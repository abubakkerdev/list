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
