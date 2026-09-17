import { render } from "@testing-library/react";
import {
  IconPencil,
  IconSchool,
  IconTrash,
  IconPlus,
  IconRefresh,
  IconClose,
} from ".";

describe("Icons", () => {
  describe("IconSchool", () => {
    test("Deve renderizar o componente corretamente", () => {
      const { getByRole } = render(<IconSchool />);

      expect(getByRole("svg")).toBeInTheDocument();
      expect(getByRole("path")).toBeInTheDocument();
    });
  });
  describe("IconPencil", () => {
    test("Deve renderizar o componente corretamente", () => {
      const { getByRole } = render(<IconPencil />);

      expect(getByRole("svg")).toBeInTheDocument();
      expect(getByRole("path")).toBeInTheDocument();
    });
  });
  describe("IconTrash", () => {
    test("Deve renderizar o componente corretamente", () => {
      const { getByRole } = render(<IconTrash />);

      expect(getByRole("svg")).toBeInTheDocument();
      expect(getByRole("path")).toBeInTheDocument();
    });
  });
  describe("IconPlus", () => {
    test("Deve renderizar o componente corretamente", () => {
      const { getByRole } = render(<IconPlus />);

      expect(getByRole("svg")).toBeInTheDocument();
      expect(getByRole("path")).toBeInTheDocument();
    });
  });
  describe("IconClose", () => {
    test("Deve renderizar o componente corretamente", () => {
      const { getByRole } = render(<IconClose />);

      expect(getByRole("svg")).toBeInTheDocument();
      expect(getByRole("path")).toBeInTheDocument();
    });
  });
  describe("IconRefresh", () => {
    test("Deve renderizar o componente corretamente", () => {
      const { getByRole } = render(<IconRefresh />);

      expect(getByRole("svg")).toBeInTheDocument();
      expect(getByRole("path")).toBeInTheDocument();
    });
  });
});
