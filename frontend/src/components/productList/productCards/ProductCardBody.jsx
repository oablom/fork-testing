import * as shad from "@/components/ui/shadBarrel";
import ProductModal from "./ProductModal";
export default function ProductCardBody({ product, editMode }) {
  return (
    <>
      <shad.Dialog>
        <shad.DialogTrigger asChild>
          <shad.CardContent className="flex row-span-2 items-center justify-center p-5">
            <img
              type="button"
              style={{ height: "150px" }}
              src={product.image.url}
              alt="HakimLogo"
            />
          </shad.CardContent>
        </shad.DialogTrigger>
        <shad.DialogContent className="sm:max-w-[800px] grid grid-cols-2 grid-rows-2">
          <ProductModal product={product} />
        </shad.DialogContent>
      </shad.Dialog>
      <div className="p-10">
        <shad.CardTitle className="flex justify-center content-end pb-2 text-red-500">
          {product.discountedPrice.toFixed(2)} kr
        </shad.CardTitle>
        <p className="flex justify-center content-end">{product.title}</p>
        <shad.CardDescription className="flex justify-center content-end">
          {product.brand}
        </shad.CardDescription>
      </div>
    </>
  );
}
