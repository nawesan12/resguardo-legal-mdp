export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Resguardo Legal",
    description:
      "Estudio jurídico en Mar del Plata especializado en Derecho Laboral, Familia, Civil y Amparos de Salud.",
    url: "https://resguardolegal.com.ar",
    telephone: "(0223) 456-7890",
    email: "resguardolegalmdp@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rivadavia 3174, Piso 5",
      addressLocality: "Mar del Plata",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -38.0044529797184,
      longitude: -57.54982268467576,
    },
    areaServed: {
      "@type": "City",
      name: "Mar del Plata",
    },
    serviceType: [
      "Derecho Laboral",
      "Derecho de Familia",
      "Derecho Civil",
      "Amparos de Salud",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "Consulta inicial gratuita",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
