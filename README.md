# saucedemo-playwright-tests
  End‑to‑end UI automation suite for Sauce Demo using Playwright and TypeScript, covering core user journeys including login, cart interactions, and the full checkout flow.

Tests Included:
  Login
    Valid login (standard_user)
    Invalid login (locked_out_user)
  
  Cart
    Add item to cart
    Remove item from cart
  
  Checkout
    Full end‑to‑end checkout flow


Documentation:
  Set-up instructions.
    1. Install dependencies
      npm install
    2. Install Playwright browsers
      npx playwright install
  
  How to run the tests.
    Run all the tests - npx playwright test
    Run a specific test file - npx playwright test login.spec.ts
    Opening the report - npx playwright show-report

What I would automate with additional time:
  
  Authentication & Access Control
  If users can’t log in, the business stops. If access control fails, it becomes a security issue. Highest risk area.
    Multi-user login matrix (standard, problem, performance, error users) – verify correct access and error behaviour
    Session persistence & logout – ensure authentication state is correctly maintained and invalidated
    Lockout / rate limiting – ensure repeated failures trigger protection mechanisms
    Checkout Validation (Revenue Critical)
  
  Checkout failures directly impact revenue and order completion.
    Required field validation
    Error handling for invalid or missing data
    Order summary accuracy (items, totals, tax)
    Navigation behaviour during checkout (back/forward handling)
    Cart Integrity (Data and Pricing Accuracy)
  
  Incorrect cart behaviour leads to incorrect orders and trust issues.
    Price calculation accuracy
    Tax and total validation
    Cart persistence across navigation and refresh
    Multi-item add and remove consistency
    Inventory and Product Display (Conversion Critical)
  
  Broken product display directly impacts purchasing ability.
    Sorting (A–Z, Z–A, price low to high and high to low)
    Product detail accuracy
