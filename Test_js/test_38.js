function days(data) {
  function newDate(date) {
    let a = date.split("-");
    return new Date(a[0], a[2], a[1]);
  }
  console.log(newDate(data.end_date));
  console.log(newDate(data.start_date));
  return (
    Math.abs(newDate(data.end_date) - newDate(data.start_date)) /
    (1000 * 60 * 60 * 24)
  );
}
let data2 = {
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
};

let data = {
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
};
console.log(days(data));
