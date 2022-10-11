import React from "react";
import { createNotice } from "./";
describe("createNotice", () => {
  const status = "status";
  const content = <p>element</p>;
  it("should return CREATE_NOTICE action when options is empty", () => {
    const result = createNotice(status, content, { aa: 5 });
    expect(result).toEqual({
      type: "CREATE_NOTICE",
      notice: {
        status,
        content,
        isDismissible: true,
        id: "string",
      },
    });
  });
});
