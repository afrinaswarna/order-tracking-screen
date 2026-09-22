# 📦 Mobile Order Tracking & Issue Management Screen

A modern, responsive, and clear Order Tracking interface built for e-commerce applications. Designed to solve common user pain points by providing transparent order status updates and handling edge-case scenarios effortlessly.

---

## 🔗 Live Demo & Repository

- **Live URL (Netlify):** [https://your-app-name.netlify.app](https://your-app-name.netlify.app)
- **GitHub Repository:** [https://github.com/your-username/order-tracking-app](https://github.com/your-username/order-tracking-app)

---

## ✨ Features & Requirements Handled

### 1. Clear Visual Timeline & Progress Tracking
- Displays step-by-step progress: **Order Placed ➔ Shipped ➔ Out for Delivery ➔ Delivered**.
- Visual indicators (active colors, checkmarks) to show completed vs. pending stages clearly.

### 2. Adaptation to Edge-Case Scenarios
The UI adapts dynamically to handle three critical delivery situations:
1. **Delayed Order State:** Clearly communicates delivery delays caused by external factors (e.g., weather/transit) and offers quick access to support.
2. **Delivered but Not Received State:** Provides an immediate call-to-action ("Report Issue") for customers whose order is marked delivered but wasn't received.
3. **Tracking Not Available Yet State:** Displays a graceful placeholder state for newly confirmed orders where carrier tracking has not begun, avoiding empty/broken screens.

### 3. Evaluator State Switcher
- Includes an interactive state control bar at the top of the app, allowing reviewers/evaluators to instantly test all 3 delivery situations with a single click.

### 4. Responsive & Modern Design
- Pixel-perfect layout tailored for mobile screen widths (**360px – 430px**).
- Clean spacing, clear typography hierarchy, and accessible action buttons.

---

## 🛠️ Tech Stack

- **Framework:** React.js
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Icons:** Lucide React (`lucide-react`)
- **Deployment:** Netlify

---

## 🚀 Local Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/order-tracking-app.git](https://github.com/your-username/order-tracking-app.git)
   cd order-tracking-app