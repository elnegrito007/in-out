/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import SideBar from "./sideBar";

describe('Home', () => {
  it('renders a heading', () => {
    render(<SideBar/>)
  })
})