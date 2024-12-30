"use client";
import { WeeButton } from "@/components";
import { About, Banner } from "@/features/main/home/components";
import { sendGTMEvent } from "@next/third-parties/google";

const page = () => {
  const handleEvent = (
    eventName: string,
    additionalData: Record<string, unknown> = {}
  ) => {
    const baseEvent = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...additionalData,
    };
    sendGTMEvent(baseEvent);
  };

  return (
    <>
      <Banner />
      <About />
      <div>
        {/* Add to Cart Event */}
        <WeeButton
          onClick={() =>
            handleEvent("add_to_cart", {
              product_id: "12345",
              product_name: "Awesome Product",
              value: 49.99,
              currency: "USD",
            })
          }
        >
          Add to Cart
        </WeeButton>

        {/* Purchase Event */}
        <WeeButton
          onClick={() =>
            handleEvent("purchase", {
              transaction_id: "TXN123456",
              value: 149.99,
              currency: "USD",
              items: [
                { product_id: "12345", quantity: 1, price: 49.99 },
                { product_id: "12346", quantity: 2, price: 50 },
              ],
            })
          }
        >
          Purchase
        </WeeButton>

        {/* View Content Event */}
        <WeeButton
          onClick={() =>
            handleEvent("view_content", {
              product_id: "12345",
              product_name: "Awesome Product",
              category: "Electronics",
              value: 49.99,
              currency: "USD",
            })
          }
        >
          View Product
        </WeeButton>

        {/* Initiate Checkout Event */}
        <WeeButton
          onClick={() =>
            handleEvent("initiate_checkout", {
              value: 149.99,
              currency: "USD",
              items: [
                { product_id: "12345", quantity: 1, price: 49.99 },
                { product_id: "12346", quantity: 2, price: 50 },
              ],
            })
          }
        >
          Initiate Checkout
        </WeeButton>

        {/* Remove from Cart Event */}
        <WeeButton
          onClick={() =>
            handleEvent("remove_from_cart", {
              product_id: "12345",
              product_name: "Awesome Product",
              value: 49.99,
              currency: "USD",
            })
          }
        >
          Remove from Cart
        </WeeButton>
      </div>
    </>
  );
};

export default page;
