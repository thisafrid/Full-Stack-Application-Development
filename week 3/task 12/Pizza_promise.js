{
    // The Promise function
    const orderPizza = (flavor) => {
        return new Promise((resolve, reject) => {
            console.log(`Order placed for: ${flavor}. Please wait...`);

            const prepTime = 2000; // 2 seconds simulation

            setTimeout(() => {
                const isKitchenOpen = true; 

                if (isKitchenOpen) {
                    // Success state
                    resolve(`Success:  ${flavor} pizza is ready! 🍕`);
                } else {
                    // Error state
                    reject(`Error: The kitchen is currently closed.`);
                }
            }, prepTime);
        });
    };

    // Consuming the Promise
    orderPizza("Mithra")
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.log("Process finished.");
        });
}