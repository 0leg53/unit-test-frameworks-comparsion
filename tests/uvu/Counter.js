import React from "react";
import { fireEvent } from "@testing-library/react";
import { test } from "uvu";
import * as assert from "uvu/assert";
import * as ENV from "../../setup/env";

import App from "../../src/App";

test.before(ENV.setup);
test.before.each(ENV.reset);

test("should increment count after button click", async () => {
  const { container } = ENV.render(App);

  const counter = container.querySelector("#counter");
  const button = container.querySelector("#button");

  assert.snapshot(counter.innerHTML, "0");

  fireEvent.click(button);

  assert.is(counter.innerHTML, "1");

  assert.equal(counter.innerHTML, "1");
});

test.run();
