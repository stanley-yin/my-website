import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "table",
  title: "Table",
  type: "object",
  fields: [
    defineField({
      name: "rows",
      title: "Rows",
      type: "array",
      of: [
        defineArrayMember({
          name: "tableRow",
          title: "Row",
          type: "object",
          fields: [
            defineField({
              name: "cells",
              title: "Cells",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
          preview: {
            select: { cells: "cells" },
            prepare({ cells }) {
              return { title: (cells as string[])?.join(" | ") ?? "Row" };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { rows: "rows" },
    prepare({ rows }) {
      const count = (rows as unknown[])?.length ?? 0;
      return { title: `Table (${count} row${count !== 1 ? "s" : ""})` };
    },
  },
});
