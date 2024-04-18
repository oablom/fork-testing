import React from "react";
const CardSheetTrigger = ({}) => {
  return (
    <>
      {" "}
      <shad.Sheet>
        <shad.SheetTrigger asChild>
          <shad.Button
            variant="outline"
            className={
              cart.length > 0
                ? "bg-yellow-400 hover:bg-green-500"
                : "bg-slate-100 hover:bg-green-300"
            }
          >
            <img
              src={"../../../public/shoppingcart.svg"}
              style={{ width: "20px" }}
            ></img>
            Varukorg
          </shad.Button>
        </shad.SheetTrigger>
      </shad.Sheet>
    </>
  );
};

export default CardSheetTrigger;
