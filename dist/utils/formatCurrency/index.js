const formatCurrency = (value) => {
    const withTwoDecimalPlaces = value.toFixed(2);
    const withCommas = formatWithCommas(withTwoDecimalPlaces);
    return `£${withCommas}`;
};
const formatWithCommas = (value) => {
    let [leftSide, rightSide] = value.split('.');
    if (leftSide) {
        leftSide = leftSide.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return `${leftSide}.${rightSide}`;
};
export default formatCurrency;
