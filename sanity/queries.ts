import { groq } from "next-sanity";

export const promocionActivaQuery = groq`
  *[_type == "promocion" && activa == true][0] {
    titulo,
    precio,
    descripcion,
    incluye,
    noIncluye,
    imagen,
    ctaUrl,
    mes
  }
`;

export const recursosQuery = groq`
  *[_type == "recurso"] | order(orden asc) {
    titulo,
    descripcion,
    imagen,
    categoria,
    orden
  }
`;
