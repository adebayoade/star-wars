describe('group', () => {
  it('should', async () => {
    const res = await fetch('/products');
    const data = await res.json();
    console.log(data);
    expect(1).toBeTruthy();
  });
});
