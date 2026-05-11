import { defineType, defineField } from "sanity";

export const promocion = defineType({
  name: "promocion",
  title: "Promoción",
  type: "document",
  fields: [
    defineField({ name: "titulo", title: "Título", type: "string" }),
    defineField({ name: "mes", title: "Mes activo (ej. Mayo 2026)", type: "string" }),
    defineField({ name: "precio", title: "Precio (ej. MX$8,000 MXN)", type: "string" }),
    defineField({ name: "descripcion", title: "Descripción breve", type: "text", rows: 3 }),
    defineField({
      name: "incluye",
      title: "Incluye",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "noIncluye",
      title: "No incluye",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "imagen",
      title: "Imagen promocional",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "ctaUrl", title: "URL del CTA (ej. discovery.byklai.com)", type: "url" }),
    defineField({
      name: "activa",
      title: "¿Activa?",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "titulo", subtitle: "mes", media: "imagen" },
  },
});
