# Myntra_
 React-Redux E-Commerce App

This project is a small e-commerce shopping bag system built with **React** and **Redux**. Users can browse products, add or remove them from their shopping bag, and view item details.

---

## 📋 Overview

The application allows users to:
✅ Browse items  
✅ Add or remove items from the shopping bag  
✅ View product details and ratings  
✅ Check the total number of items in the bag  

---

## 🚀 Features

- **HomeItems**: Shows each product with an image, rating, company name, item name, and price details. Users can add or remove items from their shopping bag.
- **Header**: Displays the logo, navigation bar, search bar, and icons for Profile, Wishlist, and Bag (with real-time item count).
- **BagItem**: Represents individual items in the shopping bag with remove functionality.
- **FetchItems**: Fetches product data from a backend server and updates the Redux store.

---

## 🗂️ Project Structure
src/<br>
├── components/<br>
│ ├── HomeItems.js<br>
│ ├── Header.js<br>
│ ├── BagItem.js<br>
│ └── FetchItems.js<br>
├── store/<br>
│ ├── bagSlice.js<br>
│ ├── ItemSlice.js<br>
│ └── FetchStatusSlice.js<br>
├── App.js<br>
└── index.js





