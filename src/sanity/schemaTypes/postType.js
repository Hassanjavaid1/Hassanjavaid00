import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Project",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "previewImages",
      title: "Preview Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      options: { layout: "grid" },
    }),

    defineField({ name: "overview", title: "Overview", type: "text", rows: 3 }),
    defineField({
      name: "problem",
      title: "Problem Faced",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "solution",
      title: "Solution Provided",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "techHighlight",
      title: "Technical Highlights",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.unique().min(0),
      description: "Short bullet points describing major technical highlights.",
    }),
    defineField({
      name: "keyFeatures",
      title: "Key Features",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.unique().min(0),
      description: "Short bullet points describing major features.",
    }),
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.unique().min(1),
    }),
    defineField({ name: "demo", title: "Demo URL", type: "url" }),
    defineField({
      name: "github",
      title: "Source Code",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "title", media: "thumbnail" },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: "Project",
        media: selection.media,
      };
    },
  },
});
