import { JSDOM } from "jsdom";
import * as React from "react";
import ReactDOM from "react-dom";

const { window } = new JSDOM("<main></main>");

export function setup() {
  // @ts-ignore
  global.window = window;
  global.document = window.document;
  global.navigator = window.navigator;
  global.getComputedStyle = window.getComputedStyle;
  global.requestAnimationFrame = null;
}

export function reset() {
  window.document.title = "";
  window.document.head.innerHTML = "";
  window.document.body.innerHTML = "<main></main>";
}

/**
 * @typedef RenderOutput
 * @property container {HTMLElement}
 * @property component {React.ReactElement}
 */

/**
 * @return {RenderOutput}
 */
export function render(Tag, props = []) {
  const container = window.document.querySelector("main");
  const component = React.createElement(Tag, props);
  ReactDOM.render(component, container);
  return { container, component };
}
