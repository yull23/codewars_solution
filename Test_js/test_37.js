function pathFinder(maze) {
  let data = maze.split("\n").map((e) => e.split(""));
  console.log(data);
  return true;
}

function isValid(index, matrix) {
  // index = [i,j]
  let result = [
    [i - 1, j],
    [i, j - 1],
    [i + 1, j],
    [i, j + 1],
  ];
}

let data = `......
......
......
......
.....W
....W.`;

console.log(pathFinder(data));

let dataArray = [
  {
    id: 5,
    name: "Tahiti",
    country: "French Polynesia",
    rating: 5.0,
    category: "adventure",
    verified_stays: 60,
    start_date: "2023-01-09",
    end_date: "2023-06-09",
    price: "200.0",
    created_at: "2023-03-07T22:50:33.164Z",
    updated_at: "2023-03-07T22:50:33.386Z",
    image_url: "https://picsum.photos/id/1003/640",
  },
  {
    id: 3,
    name: "Bora Bora",
    country: "French Polynesia",
    rating: 5.0,
    category: "adventure",
    verified_stays: 190,
    start_date: "2023-01-12",
    end_date: "2023-06-12",
    price: "250.0",
    created_at: "2023-03-07T22:50:33.151Z",
    updated_at: "2023-03-07T22:50:33.374Z",
    image_url: "https://picsum.photos/id/1000/640",
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    rating: 5.0,
    category: "city",
    verified_stays: 330,
    start_date: "2023-01-31",
    end_date: "2023-06-30",
    price: "60.0",
    created_at: "2023-03-07T22:50:33.146Z",
    updated_at: "2023-03-07T22:50:33.369Z",
    image_url: "https://picsum.photos/id/100/640",
  },
  {
    id: 1,
    name: "South Island",
    country: "New Zealand",
    rating: 5.0,
    category: "adventure",
    verified_stays: 340,
    start_date: "2023-01-30",
    end_date: "2023-06-30",
    price: "70.0",
    created_at: "2023-03-07T22:50:33.141Z",
    updated_at: "2023-03-07T22:50:33.363Z",
    image_url: "https://picsum.photos/id/10/640",
  },
  {
    id: 6,
    name: "London",
    country: "England",
    rating: 5.0,
    category: "city",
    verified_stays: 90,
    start_date: "2023-02-23",
    end_date: "2023-07-23",
    price: "150.0",
    created_at: "2023-03-07T22:50:33.169Z",
    updated_at: "2023-03-07T22:50:33.390Z",
    image_url: "https://picsum.photos/id/101/640",
  },
  {
    id: 7,
    name: "Rome",
    country: "Italy",
    rating: 5.0,
    category: "city",
    verified_stays: 170,
    start_date: "2023-01-04",
    end_date: "2023-06-04",
    price: "250.0",
    created_at: "2023-03-07T22:50:33.173Z",
    updated_at: "2023-03-07T22:50:33.397Z",
    image_url: "https://picsum.photos/id/1015/640",
  },
  {
    id: 8,
    name: "Phuket",
    country: "Thailand",
    rating: 5.0,
    category: "adventure",
    verified_stays: 0,
    start_date: "2023-02-28",
    end_date: "2023-07-28",
    price: "150.0",
    created_at: "2023-03-07T22:50:33.178Z",
    updated_at: "2023-03-07T22:50:33.402Z",
    image_url: "https://picsum.photos/id/1016/640",
  },
  {
    id: 4,
    name: "Maui",
    country: "United States",
    rating: 5.0,
    category: "adventure",
    verified_stays: 480,
    start_date: "2023-01-07",
    end_date: "2023-06-07",
    price: "80.0",
    created_at: "2023-03-07T22:50:33.159Z",
    updated_at: "2023-03-07T22:50:33.380Z",
    image_url: "https://picsum.photos/id/1002/640",
  },
  {
    id: 10,
    name: "Glacier National Park",
    country: "United States",
    rating: 4.9,
    category: "adventure",
    verified_stays: 360,
    start_date: "2023-02-10",
    end_date: "2023-07-10",
    price: "90.0",
    created_at: "2023-03-07T22:50:33.188Z",
    updated_at: "2023-03-07T22:50:33.412Z",
    image_url: "https://picsum.photos/id/1019/640",
  },
  {
    id: 9,
    name: "Tokyo",
    country: "Japan",
    rating: 4.9,
    category: "city",
    verified_stays: 300,
    start_date: "2023-01-29",
    end_date: "2023-06-29",
    price: "50.0",
    created_at: "2023-03-07T22:50:33.183Z",
    updated_at: "2023-03-07T22:50:33.406Z",
    image_url: "https://picsum.photos/id/1018/640",
  },
];

console.log(dataArray.slice(0, 3).length);
console.log([...dataArray, ...dataArray].length);
console.log(dataArray.slice(1, 9).length);
