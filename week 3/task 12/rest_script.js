{
    // i. Creating and Merging Lists
    const collegeFriends = ["Sarah", "Mike", "John"];
    const workFriends = ["Alice", "Bob", "David"];

    // Spread operator used to merge arrays and add "Me" at the start
    const partyList = ["Mithra", ...collegeFriends, ...workFriends];

    console.log("Full Party List:", partyList);

    // ii. Function using a normal parameter and a REST operator
    window.announceGuest = (specialGuest, ...otherGuests) => {
        // Template literal to print the message
        console.log(`The special guest of honor is: ${specialGuest}!`);
        console.log(`The rest of the party includes: ${otherGuests.join(", ")}`);
        
        // Displaying on HTML
        document.getElementById('welcome-msg').innerText = `Welcome ${specialGuest}!`;
        document.getElementById('list-msg').innerText = `Joining us: ${otherGuests.join(" and ")}`;
    };

    // "Mithra" goes to specialGuest, all others go into the otherGuests array
    announceGuest(...partyList);
}