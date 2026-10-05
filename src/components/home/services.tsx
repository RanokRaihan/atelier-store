import { services } from "@/lib/catalog";

export function Services() {
  return (
    <section aria-label="Our services" className="container-page section">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <li key={service.title} className="divider-strong pt-5">
            <h3 className="type-label">{service.title}</h3>
            <p className="type-small mt-2 text-muted">{service.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
