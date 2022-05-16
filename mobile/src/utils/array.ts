export const createShimmerArray = (length = 8) => new Array(length).fill(null).map((_, i) => ({ key: i }));
