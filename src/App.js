import React from 'react';

function App() {
  return (
    <main className="app-shell">
      <header>
        <h1>OM Kirana Store</h1>
        <p>Welcome to your simple React app.</p>
      </header>

      <section className="product-list">
        <article className="product-card">
          <h2>Fresh Fruits</h2>
          <p>Apples, bananas, and seasonal produce delivered daily.</p>
        </article>
        <article className="product-card">
          <h2>Daily Essentials</h2>
          <p>Milk, spices, rice, and pantry staples for every home.</p>
        </article>
        <article className="product-card">
          <h2>Fast Checkout</h2>
          <p>Easy shopping experience with a minimal React UI.</p>
        </article>
      </section>
    </main>
  );
}

export default App;
