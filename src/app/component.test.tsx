import { render } from "@testing-library/react";
import { MyComponent } from "./component";

it("renders okayish", () => {
  const rendered = render(<MyComponent />);
  expect(rendered).not.toBe(null);
});
