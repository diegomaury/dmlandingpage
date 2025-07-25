const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('footer contains "mucha pasión"', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  const dom = new JSDOM(html);
  const footerText = dom.window.document.querySelector('footer').textContent;
  expect(footerText).toMatch(/mucha pasión/i);
});
