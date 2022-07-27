import formatCurrency from '.';
it.each([
    { raw: 0, currencyFormat: '£0.00' },
    { raw: 10.2, currencyFormat: '£10.20' },
    { raw: 302.05, currencyFormat: '£302.05' },
    { raw: 2100.4, currencyFormat: '£2,100.40' },
    { raw: 1000000, currencyFormat: '£1,000,000.00' },
])('should format the value with £, commas and 2 d.p. %s', ({ raw, currencyFormat }) => {
    const formatted = formatCurrency(raw);
    expect(formatted).toBe(currencyFormat);
});
