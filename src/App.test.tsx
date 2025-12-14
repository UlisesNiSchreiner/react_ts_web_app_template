import { render, screen } from "@testing-library/react";

import { App } from "./App";

describe("App", () => {
  it("renderiza el título del template", () => {
    render(<App />);
    expect(screen.getByText(/Production-ready SPA/i)).toBeInTheDocument();
  });
});