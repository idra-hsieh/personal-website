import { describe, it, expect } from "vitest";
import { formatCurrency } from "./formatCurrency";

describe("formatCurrency", () => {
  it("formats a number", () => {
    expect(formatCurrency(1234)).toContain("1,234");
  });
});
