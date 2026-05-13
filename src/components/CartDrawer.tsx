import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBag, Minus, Plus, X, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore();
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + parseFloat(i.price.amount) * i.quantity, 0);
  const currency = items[0]?.price.currencyCode || "USD";

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, "_blank");
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open cart"
          className="relative inline-flex items-center justify-center size-10 border border-foreground rounded-sm hover:bg-foreground hover:text-background transition-colors"
        >
          <ShoppingBag className="h-4 w-4" />
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-1.5 size-4 bg-foreground text-background text-[9px] font-mono font-bold rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-background border-l border-border">
        <SheetHeader className="flex-shrink-0 text-left">
          <SheetTitle className="font-display text-3xl uppercase tracking-tighter">Your Cart</SheetTitle>
          <SheetDescription className="font-mono text-[10px] uppercase tracking-widest">
            {totalItems === 0 ? "Empty for now" : `${totalItems} item${totalItems !== 1 ? "s" : ""}`}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                No items yet
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-1 min-h-0">
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.variantId} className="flex gap-4 border-b border-border pb-4">
                      <div className="w-16 h-16 bg-card border border-border rounded-sm overflow-hidden flex-shrink-0">
                        {item.product.node.images?.edges?.[0]?.node && (
                          <img
                            src={item.product.node.images.edges[0].node.url}
                            alt={item.product.node.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold uppercase text-sm tracking-wide truncate">
                          {item.product.node.title}
                        </h4>
                        {item.selectedOptions.length > 0 && item.variantTitle !== "Default Title" && (
                          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
                            {item.selectedOptions.map((o) => o.value).join(" · ")}
                          </p>
                        )}
                        <p className="font-mono text-sm mt-1">
                          ${parseFloat(item.price.amount).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between gap-2">
                        <button
                          onClick={() => removeItem(item.variantId)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                        <div className="flex items-center border border-border rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                            className="size-6 grid place-items-center hover:bg-foreground hover:text-background transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-7 text-center font-mono text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                            className="size-6 grid place-items-center hover:bg-foreground hover:text-background transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 pt-6 border-t border-border space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-[10px] uppercase tracking-widest">Subtotal</span>
                  <span className="font-display text-2xl uppercase tracking-tighter">
                    {currency} ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={isLoading || isSyncing}
                  className="w-full bg-foreground text-background py-4 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-[0.99] transition-all rounded-sm disabled:opacity-60 inline-flex items-center justify-center gap-2"
                >
                  {isLoading || isSyncing ? <Loader2 className="w-4 h-4 animate-spin" /> : "Checkout"}
                </button>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-center">
                  Shipping & taxes at checkout
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
