import React from 'react';

/**
 * BUTTON USAGE EXAMPLES
 * 
 * This file shows how to use the new button styles throughout your app
 */

// ===== EXAMPLE 1: PRIMARY BUTTON (Most Common) =====
export const PrimaryButtonExample = () => {
  return (
    <>
      {/* Standard primary button */}
      <button className="btn-primary">Add to Cart</button>

      {/* Full width version */}
      <button className="btn-primary btn-full">Proceed to Checkout</button>

      {/* Large size */}
      <button className="btn-primary btn-lg">Large Action Button</button>

      {/* Small size */}
      <button className="btn-primary btn-sm">Small Action</button>

      {/* With disabled state */}
      <button className="btn-primary" disabled>Disabled Button</button>

      {/* With icon (using symbol or emoji) */}
      <button className="btn-primary">
        <span>🛒</span>
        <span>Add to Cart</span>
      </button>
    </>
  );
};

// ===== EXAMPLE 2: SECONDARY BUTTON =====
export const SecondaryButtonExample = () => {
  return (
    <>
      <button className="btn-secondary">Secondary Action</button>
      <button className="btn-secondary btn-full">Full Width Secondary</button>
      <button className="btn-secondary btn-sm">Small Secondary</button>
    </>
  );
};

// ===== EXAMPLE 3: OUTLINE BUTTON =====
export const OutlineButtonExample = () => {
  return (
    <>
      <button className="btn-outline">Continue Shopping</button>
      <button className="btn-outline btn-full">Go Back</button>
    </>
  );
};

// ===== EXAMPLE 4: GHOST BUTTON (Minimal) =====
export const GhostButtonExample = () => {
  return (
    <>
      <button className="btn-ghost">Remove from Cart</button>
      <button className="btn-ghost">Forgot Password?</button>
    </>
  );
};

// ===== EXAMPLE 5: ICON BUTTON =====
export const IconButtonExample = () => {
  return (
    <>
      <button className="btn-icon" title="Add to Wishlist">♡</button>
      <button className="btn-icon" title="Close">✕</button>
      <button className="btn-icon" title="Menu">☰</button>
    </>
  );
};

// ===== EXAMPLE 6: SUCCESS & DANGER BUTTONS =====
export const SuccessDangerButtonExample = () => {
  return (
    <>
      <button className="btn-primary btn-success">Success Action</button>
      <button className="btn-primary btn-danger">Delete</button>
      <button className="btn-primary btn-danger btn-sm">Remove</button>
    </>
  );
};

// ===== EXAMPLE 7: BUTTON GROUP =====
export const ButtonGroupExample = () => {
  return (
    <>
      {/* Horizontal group */}
      <div className="btn-group">
        <button className="btn-secondary">Cancel</button>
        <button className="btn-primary">Save</button>
      </div>

      {/* Vertical group */}
      <div className="btn-group vertical">
        <button className="btn-primary btn-full">Option 1</button>
        <button className="btn-primary btn-full">Option 2</button>
        <button className="btn-secondary btn-full">Cancel</button>
      </div>
    </>
  );
};

// ===== REAL-WORLD EXAMPLE: PRODUCT DETAIL PAGE =====
export const ProductDetailButtonExample = () => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsAdded(true);

    // Reset after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div style={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
      {/* Add to Cart button with loading and success states */}
      <button
        className={`btn-primary btn-full ${isAdded ? 'btn-success' : ''} ${isLoading ? 'btn-loading' : ''}`}
        onClick={handleAddToCart}
        disabled={isLoading}
      >
        {isAdded ? '✓ Added to Cart' : 'ADD TO CART'}
      </button>

      {/* Wishlist button */}
      <button className="btn-secondary btn-full">
        ♡ Add to Wish List
      </button>

      {/* Continue shopping */}
      <button className="btn-ghost">← Continue Shopping</button>
    </div>
  );
};

// ===== REAL-WORLD EXAMPLE: CART PAGE =====
export const CartPageButtonExample = () => {
  return (
    <>
      {/* Checkout button - primary, full width */}
      <button className="btn-primary btn-full btn-lg">
        PROCEED TO CHECKOUT
      </button>

      {/* Remove button - ghost style */}
      <button className="btn-ghost">Remove</button>

      {/* Remove all - danger style */}
      <button className="btn-primary btn-danger btn-sm">
        Clear Cart
      </button>
    </>
  );
};

// ===== REAL-WORLD EXAMPLE: SHOP PAGE =====
export const ShopPageButtonExample = () => {
  return (
    <button className="ms-add-to-cart">
      Check
    </button>
    /* This button is already styled in Shop.css */
    /* No need to add btn-* classes here */
  );
};

// ===== EXAMPLE 8: RESPONSIVE BUTTON GROUP =====
export const ResponsiveButtonGroupExample = () => {
  return (
    <div className="btn-group" style={{
      flexWrap: 'wrap',
      gap: '12px'
    }}>
      <button className="btn-primary" style={{ flex: '1 1 auto', minWidth: '150px' }}>
        Save Changes
      </button>
      <button className="btn-secondary" style={{ flex: '1 1 auto', minWidth: '150px' }}>
        Cancel
      </button>
    </div>
  );
};

// ===== EXAMPLE 9: CONDITIONAL BUTTON STATE =====
export const ConditionalButtonExample = () => {
  const [itemsInCart, setItemsInCart] = React.useState(0);
  const [sizeSelected, setSizeSelected] = React.useState(false);

  return (
    <>
      {/* Button disabled until size is selected */}
      <button
        className="btn-primary btn-full"
        disabled={!sizeSelected}
      >
        {sizeSelected ? 'ADD TO CART' : 'SELECT A SIZE FIRST'}
      </button>

      {/* Button with counter badge */}
      <button className="btn-primary">
        <span>View Cart ({itemsInCart})</span>
      </button>
    </>
  );
};

// ===== ACCESSIBILITY BEST PRACTICES =====
export const AccessibilityExample = () => {
  return (
    <>
      {/* Always include descriptive text in buttons */}
      <button className="btn-primary" aria-label="Add product to shopping cart">
        Add to Cart
      </button>

      {/* Use proper disabled state for interactive elements */}
      <button className="btn-primary" disabled aria-disabled="true">
        Out of Stock
      </button>

      {/* For icon-only buttons, provide aria-label */}
      <button className="btn-icon" aria-label="Close dialog" title="Close">
        ✕
      </button>

      {/* Loading state with live region */}
      <button className="btn-loading" aria-busy="true" disabled>
        Processing...
      </button>
    </>
  );
};

export default PrimaryButtonExample;
