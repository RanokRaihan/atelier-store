"use client";

import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: persist the subscription once a newsletter backend exists.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-surface" aria-labelledby="newsletter-title">
      <div className="container-prose section text-center">
        <h2 id="newsletter-title" className="type-headline">
          The Atelier letter
        </h2>
        <p className="type-body mt-3 text-muted">
          New collections, private previews and stories from the workshop, sent once a month.
        </p>

        {submitted ? (
          <p className="type-body mt-8" role="status">
            Thank you. Your first letter arrives with the next collection.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row sm:items-end">
            <label className="flex-1 text-left">
              <span className="type-label text-muted">Email address</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="name@example.com"
                className="type-body mt-2 block w-full border-b border-border-strong bg-transparent py-2.5 focus-visible:outline-offset-4"
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
