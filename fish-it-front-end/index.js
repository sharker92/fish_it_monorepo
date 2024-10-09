window.onload = () => {
  const rootElement = document.getElementById('root');
  const root = ReactDOMClient.createRoot(rootElement);

  const ints = [1, 2, 3];
  const childrenElements = [];
  ints.forEach((i) => {
    childrenElements.push(
      React.createElement('li', { key: ints[i-1] }, ints[i-1]),
    );
  });
  root.render(childrenElements);
};
