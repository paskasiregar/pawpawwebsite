describe("Script Loading Test", () => {
  it("should load and execute the external script", (done) => {
    // Create a script tag and set the src to the external JS
    const script = document.createElement("script");
    script.src =
      "https://pl24310112.cpmrevenuegate.com/cc/a3/1e/cca31e5e9811b252527560f4431eff54.js";

    // Set the onload callback to confirm the script loaded
    script.onload = () => {
      console.log("External script loaded successfully");
      done(); // Test will complete when done() is called
    };

    // Set onerror callback to detect if the script failed to load
    script.onerror = () => {
      done(new Error("Script failed to load"));
    };

    // Append the script to the document head
    document.head.appendChild(script);
  });
});
