import ProductCard from "../../components/shared/product-card"
import { collectionGroups, collectionIntro } from "../../data/collection"

const Collection = () => {
  return (
    <section id="collection" className="scroll-mt-24 bg-ink px-4 py-16 sm:px-8 sm:py-20 lg:scroll-mt-28 lg:px-12 lg:py-24">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-10">
        <h2 className="font-display text-[2.75rem] leading-none font-medium tracking-[-0.02em] text-cream sm:text-6xl lg:text-[4.5rem]">
          {collectionIntro.title}
        </h2>
        <div className="flex items-center gap-6 md:max-w-md lg:max-w-lg">
          <span className="hidden h-16 w-px shrink-0 bg-gold md:block" aria-hidden="true" />
          <p className="text-[15px] leading-relaxed font-light text-cream sm:text-base">
            {collectionIntro.body}
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-14 sm:mt-16 lg:gap-16">
        {collectionGroups.map((group) => (
          <div key={group.accent}>
            <div className="mb-5 flex items-center gap-4 sm:mb-6">
              <h3 className="shrink-0 font-display text-[1.7rem] tracking-[0.04em] text-cream sm:text-4xl">
                {group.lead} <span className="text-gold italic">{group.accent}</span>
              </h3>
              <span className="h-px min-w-8 flex-1 bg-gold/45" aria-hidden="true" />
            </div>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {group.products.map((product) => (
                <li key={product.name}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Collection
