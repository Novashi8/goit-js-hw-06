const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgList = document.querySelector(".gallery");

const imgListItem = images
  .map((image) => {
    return `<li style="margin-right: 10px;"><img src="${image.url}" height = 200px; alt="${image.alt}" /></li>`;
  })
  .join("");

imgList.insertAdjacentHTML("afterbegin", imgListItem);
imgList.setAttribute("style", "display: flex; list-style: none;");
