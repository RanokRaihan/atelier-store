"use client";

import Link from "next/link";
import { useState } from "react";

export function AddToBag({ soldOut }: { soldOut: boolean }) {
  const [added, setAdded] = useState(false);

  if (soldOut) {
    return (
      <div className="flex flex-col gap-3">
        <button type="button" className="btn btn-primary btn-block" disabled>
          Sold out
        </button>
        <Link href="/contact" className="btn btn-outline btn-block">
          Ask a client advisor
        </Link>
      </div>
    );
  }

  // TODO: add the product to the bag once a cart backend exists.
  return (
    <div className="flex flex-col gap-3">
      <button type="button" className="btn btn-primary btn-block" onClick={() => setAdded(true)}>
        Add to bag
      </button>
      <p className="type-small min-h-4 text-center" role="status">
        {added && (
          <>
            Added to your bag.{" "}
            <Link href="/cart" className="link">
              View bag
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
