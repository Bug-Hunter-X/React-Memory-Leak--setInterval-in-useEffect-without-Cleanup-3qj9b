# React Memory Leak: setInterval in useEffect without Cleanup

This repository demonstrates a common React bug involving memory leaks caused by the improper use of `setInterval` within the `useEffect` hook.  The provided `bug.js` file shows the erroneous implementation, while `bugSolution.js` offers the correct solution. 

## Problem
The issue arises when `setInterval` is used without properly clearing the interval in the cleanup function of `useEffect`.  This results in the interval continuing to run even after the component is unmounted or updated, leading to memory leaks and potentially impacting performance. 

## Solution
The solution involves returning a cleanup function from the `useEffect` hook that uses `clearInterval` to stop the interval when the component is unmounted or when the effect is re-run due to changes in dependencies.

## How to run:
1. Clone the repository
2. Navigate to the repository in your terminal
3. Run `npm install`
4. Run `npm start`

The example illustrates both the flawed and corrected versions.  Review both files carefully to understand the best practices for handling asynchronous operations in React components.