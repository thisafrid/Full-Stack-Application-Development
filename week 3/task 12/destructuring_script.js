{
    // 1. Complex Object
    const user = {
        id: 101,
        profile: {
            firstName: "Mohammad",
            lastName: "Afrid"
        },
        email: "afridmd46@gmail.com",
        role: "Student"
    };

    // Object Destructuring
    const { role, profile: { firstName } } = user;

    // 2. Array
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF"];

    // Array Destructuring
    const [primary, secondary] = colors;

    // --- Displaying on the Webpage ---
    
    // User Display
    document.getElementById('user-display').innerText = 
        `Name: ${firstName} | Role: ${role}`;
    
    // Color Display logic
    const colorDisplay = document.getElementById('color-display');

    // We use innerHTML so we can wrap the hex codes in <span> tags with styles
    colorDisplay.innerHTML = `
        Main: <span style="color: ${primary}; ">${primary}</span>, 
        Support: <span style="color: ${secondary}; ">${secondary}</span>
    `;
}