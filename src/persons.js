import { h } from "snabbdom";
const personsData = [
  {
    icon: "./src/assets/1.png",
    title: "1st person",
    text: "Some very long and abstract description for cute avatar. And some lines more."
  },
  {
    icon: "./src/assets/2.png",
    title: "2nd person",
    text: "Some description2"
  },
  {
    icon: "./src/assets/3.png",
    title: "3rd person",
    text: "Some description3"
  },
  { icon: "./src/assets/4.png", title: "4th person", text: "Some description4" }
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
