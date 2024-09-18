
import { routes } from "@/routes";
import { render } from "@testing-library/react";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router-dom";

export const navigateTo = (path: string) => {
const entries = [
  path
]

  render(<MemoryRouter initialEntries={entries} />);
}