export const html = ({ counter, sample }: { counter: string, sample: string }) => `
  <!DOCTYPE html>
  <html>
    <head></head>
    <body style="margin: 0;">
      <div id="counter">${counter}</div>
      <div id="sample">${sample}</div>
    </body>
    <script src="/js/counter.js" defer></script>
    <script src="/js/sample.js" defer></script>
  </html>
`;
