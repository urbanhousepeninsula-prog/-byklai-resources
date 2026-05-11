import { defineType, defineField } from "sanity";

export const recurso = defineType({
  name: "recurso",
  title: "Recurso descargable",
  type: "document",
  fields: [
    defineField({ name: "titulo", title: "Título", type: "string" }),
    defineField({ name: "descripcion", title: "Descripción", type: "text", rows: 2 }),
    defineField({
      name: "imagen",
      title: "Imagen / Asset",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "categoria",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Promoción", value: "promo" },
          { title: "Programa", value: "programa" },
          { title: "Branding", value: "branding" },
        ],
      },
    }),
    defineField({
      name: "orden",
      title: "Orden de aparición",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "titulo", subtitle: "categoria", media: "imagen" },
  },
});
