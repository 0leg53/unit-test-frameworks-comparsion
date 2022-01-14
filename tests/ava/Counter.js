import React from "react";
import test from "ava";

import * as ENV from "../../setup/env";
import { render, fireEvent } from "@testing-library/react";

import App from "../../src/App";

test.before(ENV.setup);
test.beforeEach(ENV.reset);

test("should increment count after button click", async (t) => {
  const { container } = render(<App />);

  const counter = container.querySelector("#counter");
  const button = container.querySelector("#button");

  t.is(counter.innerHTML, "0");
  fireEvent.click(button);
  t.is(counter.innerHTML, "1");
});
