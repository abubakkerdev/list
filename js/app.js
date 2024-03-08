let addClassList = document.querySelector(".addClassList");
let classListArr = [
  {
    uname: "sdfdsf",
    batch: "MERN-2201",
    topic: "Backend",
    time: "6.00pm - 8.00pm",
    date: "March 3, 2024",
  },
  {
    uname: "sdfdsf",
    batch: "MERN-2201",
    topic: "Backend",
    time: "6.00pm - 8.00pm",
    date: "March 3, 2024",
  },
  {
    uname: "sdfdsf",
    batch: "MERN-2201",
    topic: "Backend",
    time: "6.00pm - 8.00pm",
    date: "March 3, 2024",
  },
  {
    uname: "sdfdsf",
    batch: "MERN-2201",
    topic: "Backend",
    time: "6.00pm - 8.00pm",
    date: "March 3, 2024",
  },
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
    uname: "sdfdsf",
    batch: "MERN-2201",
    topic: "Backend",
    time: "6.00pm - 8.00pm",
    date: "March 3, 2024",
  },
  {
    uname: "sdfdsf",
    batch: "MERN-2201",
    topic: "Backend",
    time: "6.00pm - 8.00pm",
    date: "March 3, 2024",
  },
  {
    uname: "sdfdsf",
    batch: "MERN-2201",
    topic: "Backend",
    time: "6.00pm - 8.00pm",
    date: "March 3, 2024",
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
    <td colspan="5" align="end"><span>Total Class</span></td>
    <td><span>= ${supportListArr.length}</span></td>
</tr>
`;

addSupportList.innerHTML = supportListData;

// January, February, March, April, May, June, July, August, September, October, November, December
