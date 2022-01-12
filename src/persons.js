import { h } from "snabbdom";
import pic1 from "@/assets/1.png";
import pic2 from "@/assets/2.png";
import pic3 from "@/assets/3.png";
import pic4 from "@/assets/4.png";
const personsData = [
  {
    icon: pic1,
    title: "1st person",
    text: "Some very long and abstract description for cute avatar. And some lines more."
  },
  {
    icon: pic2,
    title: "2nd person",
    text: "Some description2"
  },
  {
    icon: pic3,
    title: "3rd person",
    text: "Some description3"
  },
  { icon: pic4, title: "4th person", text: "Some description4" }
];

const personBlock = (data) =>
  h("div.person", [
    h("img.avatar", { props: { src: data.icon } }),
    h("div.text-container", [h("h4.title", data.title), h("p.text", data.text)])
  ]);

const persons = personsData
  .map((elData, index, arr) =>
    h(
      "div.persons",
      index < arr.length - 1
        ? [personBlock(elData), h("hr")]
        : personBlock(elData)
    )
  )
export default persons;
