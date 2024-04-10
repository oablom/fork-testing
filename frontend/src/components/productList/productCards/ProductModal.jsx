import * as shad from "@/components/ui/shadBarrel";

function DetailSection({ title, info }) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="font-bold">{title}</span>
      <span>{info}</span>
    </div>
  );
}

export default function ProductModal({ product }) {
  return (
    <>
      {product.discountRate > 0 && <div className="absolute top-1 left-1 rounded p-1.5 bg-red-500 text-white text-sm italic font-bold">-{product.discountRate}%</div>}
      <div className="flex items-center justify-center size-96 pr-10 row-span-2">
        <img className="max-w-full max-h-96 object-contain" src={product.image.url} alt="productImage" />
      </div>
      <div className="grid grid-rows-4">
        <h2 className="text-3xl">{product.title}</h2>
        <shad.CardDescription>{product.description}</shad.CardDescription>
        <shad.CardTitle className="text-red-500 text-4xl">{product.discountedPrice}:-</shad.CardTitle>
        <shad.Button className="row-start-4 row-end-4">Köp</shad.Button>
      </div>
      <div className="w-full">
        <DetailSection title="Varumärke:" info={`${product.brand}`} />
        <DetailSection title="Normalpris:" info={`${product.price} kr/st`} />
        <DetailSection title="Du sparar:" info={`${product.savings} kr/st`} />
        <DetailSection title="Jämförpris:" info={`${product.comparePrice}kr/${product.unit}`} />
        <DetailSection title="Antal kvar:" info={`${product.stock}+`} />
      </div>
    </>
  );
}
