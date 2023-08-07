import { describe, expect, it } from "vitest";
import {
  escapeHtml,
  type Period,
  renderPeriodYearString,
  shuffleArray,
} from "@shared/utils.ts";

describe("renderPeriodYearString()", () => {
  it("Should only return the year if same year", () => {
    const period: Period = {
      from: new Date("2020-01-01"),
      to: new Date("2020-12-31"),
    };
    expect(renderPeriodYearString(period, "foo")).eq(2020);
  });

  it("Should  correct year span", () => {
    const period: Period = {
      from: new Date("2020-01-01"),
      to: new Date("2023-12-31"),
    };
    expect(renderPeriodYearString(period, "foo")).eq("2020 - 2023");
  });

  it("Should fallback if 'to' is empty", () => {
    const period: Period = {
      from: new Date("2020-01-01"),
    };
    expect(renderPeriodYearString(period, "foo")).eq("2020 - foo");
  });
});

describe("escapeHtml()", () => {
  it("Should return empty when empty strings", () => {
    expect(escapeHtml("")).eq("");
  });

  it("Should return normal strings as-is", () => {
    expect(escapeHtml("foo bar")).eq("foo bar");
  });

  it("Should return escaped string", () => {
    expect(escapeHtml('foo "bar"')).eq("foo &quot;bar&quot;");
    expect(escapeHtml("foo & bar")).eq("foo &amp; bar");
    expect(escapeHtml("foo 'bar'")).eq("foo &#39;bar&#39;");
    expect(escapeHtml("foo < bar")).eq("foo &lt; bar");
    expect(escapeHtml("foo > bar")).eq("foo &gt; bar");
  });
});

describe("shuffleArray()", () => {
  it("Should return empty array", () => {
    const emptyArray: number[] = [];
    expect(shuffleArray(emptyArray)).to.be.an("array").that.is.empty;
  });

  it("Should always return shuffled array", () => {
    interface testObject {
      k: number;
      v: string;
    }

    const testArray: testObject[] = [
      { k: 1, v: "one" },
      { k: 2, v: "two" },
      { k: 3, v: "three" },
    ];
    const shuffled = shuffleArray(testArray);
    expect(shuffled.length).eq(testArray.length);
    // Don't use stringify in anything else then a simple test!
    expect(JSON.stringify(testArray)).not.eq(JSON.stringify(shuffled));
  });

  it("Should return shuffled array even when it is short", () => {
    const shortArray = ["one", "two"];
    const shuffled = shuffleArray(shortArray);
    expect(JSON.stringify(shortArray)).not.eq(JSON.stringify(shuffled));
    expect(shuffled.length).eq(shortArray.length);
  });
});
