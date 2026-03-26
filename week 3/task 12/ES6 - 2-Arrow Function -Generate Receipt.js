const generateReceipt = (price, tip) => {
    const total = price + tip;

    // Using Template Literals for the message
    console.log(`Receipt Summary:
------------------
Subtotal: $${price}
Tip:      $${tip}
Total:    $${total}
------------------
Thank you for your visit!`);
};

// Example usage:
generateReceipt(50, 10);// JavaScript source code
