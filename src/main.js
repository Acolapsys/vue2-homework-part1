import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h
} from "snabbdom";
import persons from './persons'

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule
]);

const app = document.getElementById("app");
const vnode = h("div.wrapper", h("div.container", persons));

patch(app, vnode);
