import type { CollectionProduct } from "../../data/collection"

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"

type ProductCardProps = {
  product: CollectionProduct
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="group overflow-hidden rounded-[10px] border border-gold/35 bg-[#12100e] transition-colors hover:border-gold">
      <img
        src={product.image}
        alt={product.alt}
        className="aspect-[2/1] w-full object-cover"
      />
      <div className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-5 sm:py-4">
        <div className="min-w-0">
          <p className="font-display text-xl leading-tight text-cream sm:text-[1.35rem]">
            {product.name}
          </p>
          <p className="mt-1 text-[11px] tracking-[0.16em] text-gold">{product.colorway}</p>
        </div>
        <a
          href="#collection"
          aria-label={`View ${product.name}`}
          className={`grid size-11 shrink-0 place-items-center rounded-full border border-gold/55 text-gold transition-colors group-hover:border-gold group-hover:text-gold-light ${focusRing}`}
        >
          <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
            <path
              d="M3.5 8h9M8.5 4.5 12.5 8l-4 3.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </article>
  )
}

export default ProductCard
