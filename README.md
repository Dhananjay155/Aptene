# Counter App (MVVM Architecture)

## Overview
This project is a *Counter App* built using *React, RxJS, and Material UI. It follows the **MVVM (Model-View-ViewModel) architecture* to ensure clean separation of concerns and reactive state management.

## Features
✅ *Increment & Decrement Buttons* - Adjusts counter between 0 and 98
✅ *Reset Button* - Resets counter to 0
✅ *Auto Increment Toggle* - Automatically increments counter every 1.1 seconds when enabled
✅ *RxJS State Management* - Implements reactivity for handling user actions
✅ *Material UI Toggle Switch* - Styled switch for Auto Increment
✅ *Fully Responsive UI* - Optimized for both desktop and mobile screens

## Tech Stack
- *Frontend:* React, Material UI
- *State Management:* RxJS (ReactiveX for JavaScript)
- *Styling:* CSS, Material UI

## Folder Structure
```
src/
│── intent/
│   ├── CounterIntent.jsx  // User actions (button clicks, toggles)
│
│── model/
│   ├── CounterModel.jsx  // Handles counter logic
│
│── view/
│   ├── CounterView.jsx  // UI and event handling
│   ├── CounterView.css  // UI styling
│
│── App.jsx  // Main entry point
```


## Installation & Setup
### Prerequisites
Ensure you have *Node.js* installed.

### Steps to Run the Project
1. Clone the repository:
   sh
   git clone https://github.com/Dhananjay155/Aptene.git
   
2. Install dependencies:
   sh
   npm install
   
3. Start the development server:
   sh
   npm run dev
   
4. Open the app in your browser:
   
   http://localhost:5173
   

## Usage
- Click the *+ button* to increment the counter.
- Click the *- button* to decrement the counter.
- Click the *Reset button* to reset the counter to *0*.
- Toggle *Auto Increment* to start automatic incrementing every 1.1 seconds.

## Screenshots

![image](https://github.com/Dhananjay155/Aptene/blob/main/src/assets/Screenshot%202025-01-30%20155604.png)



## Future Enhancements
- Add *dark mode support*
- Implement *persistent storage (localStorage)*
- Introduce *test cases using Jest & React Testing Library*

## Contributing
Feel free to fork this repository and submit pull requests with improvements! 🚀

## License
This project is open-source and available under the *MIT License*.