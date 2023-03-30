export const calcTotalCount = orderGoods => orderGoods.reduce((acc, item) => acc + item.count, 0);

export const calcTotalPrice = orderGoods => orderGoods.reduce((acc, item) => acc + item.count * item.price, 0);

