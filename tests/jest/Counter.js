import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../../src/App";

it("should increment count after button click", () => {
  const { container } = render(<App />);

  const counter = container.querySelector("#counter");
  const button = container.querySelector("#button");

  expect(counter.innerHTML).toBe("0");

  fireEvent.click(button);

  expect(counter.innerHTML).toBe("1");
});
