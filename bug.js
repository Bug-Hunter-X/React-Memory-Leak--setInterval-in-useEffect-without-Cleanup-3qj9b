```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. Missing return statement to clear interval
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```