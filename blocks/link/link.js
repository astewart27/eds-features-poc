export default function decorate(block) {
  [...block.children].forEach((row, index) => {
    if (index === 1) {
      const anchor = block.querySelector('a');
      const newTabEl = row.querySelector('p');
      if (newTabEl) {
        const target = newTabEl.innerText === 'false' ? '_self' : '_blank';
        anchor?.setAttribute('target', target);
      } else {
        anchor?.setAttribute('target', '_self');
      }
      row.remove();
    }
  });
}
