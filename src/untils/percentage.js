export const calcPercentage = (actualPrice, offerPrice) => {
    return ((parseInt(actualPrice)) * (100 - parseInt(offerPrice)))/100;
}