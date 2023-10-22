import React from "react";
import {
  validateItemCount,
  validateItemName,
  validateItemPrice,
} from "../functions/createInvoiceValidator";
import { BsTrash } from "react-icons/bs";

function AddItem({
  itemDetails,
  setItem,
  isValidatorActive,
  onDelete,
  handelOnChange,
}) {
  return (
    <div>
      <div className=" flex dark:text-white justify-between items-center">
        <div className=" flex flex-wrap ">
          <div className="flex px-2 py-2 flex-col items-start">
            <h1 className="text-customblack mb-1 font-medium text-base">
              Item Name
            </h1>
            <input
              name="name"
              onChange={(e) => {
                handelOnChange(itemDetails.id, e);
              }}
              value={itemDetails.name}
              type="text"
              className={` dark:bg-[#1e2139] py-1 px-2 rounded text-base font-normal border focus:outline-btnpurple hover:border-btnpurple ${
                isValidatorActive &&
                !validateItemName(itemDetails.name) &&
                "border-red-500 dark:border-red-500 outline-red-500 border-2"
              }   dark:border-gray-800`}
            />
          </div>

          <div className=" flex px-2 py-2  flex-col items-start">
            <h1 className="text-customblack mb-1 font-medium text-base">
              Qty.
            </h1>
            <input
              name="quantity"
              type="number"
              onChange={(e) => {
                handelOnChange(itemDetails.id, e);
              }}
              value={itemDetails.quantity}
              min={0}
              className={` dark:bg-[#1e2139] py-1 px-2 rounded text-base font-normal border focus:outline-btnpurple hover:border-btnpurple ${
                isValidatorActive &&
                !validateItemCount(itemDetails.quantity) &&
                "border-red-500 dark:border-red-500 outline-red-500 border-2"
              }   dark:border-gray-800`}
            />
          </div>

          <div className=" flex px-2 py-2  flex-col items-start">
            <h1 className="text-customblack mb-1 font-medium text-base">
              Price
            </h1>
            <input
              name="price"
              type="number"
              onChange={(e) => {
                handelOnChange(itemDetails.id, e);
              }}
              value={itemDetails.price}
              min={0}
              className={` dark:bg-[#1e2139] py-1 px-2 rounded text-base font-normal border focus:outline-btnpurple hover:border-btnpurple max-w-[100px] ${
                isValidatorActive &&
                !validateItemPrice(itemDetails.price) &&
                "border-red-500 dark:border-red-500 outline-red-500 border-2"
              }   dark:border-gray-800`}
            />
          </div>

          <div className=" flex px-2 py-2  flex-col items-start">
            <h1 className="text-customblack mb-1 font-medium text-base">
              Total
            </h1>
            <div className=" max-w-max dark:bg-[#1e2139] py-1 px-2 rounded text-base font-normal border focus:outline-btnpurple hover:border-btnpurple dark:border-gray-800 dark:text-white">
              {itemDetails.total}
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            onDelete(itemDetails.id);
          }}
        >
          <BsTrash className=" text-gray-500 hover:text-red-500 cursor-pointer mt-4 h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default AddItem;
