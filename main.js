const processOrder = (warehouse, ids, amounts) => {
    const list = [];

    for(let i = 0; i < ids.length; i++)
    {
        const id = ids[i];
        const amount = amounts[i];

        warehouseService.getAvailableAmount(warehouse, id).then((availableItemAmount) => {
            if (availableItemAmount >= amount) {

                warehouseService.reserve(warehouse, id, amount).then(()=>{
                    list.push("Item " + id + " (amount: " + amount + ") reserved");
                })

            }
        });
    }
    return list;
}

const adapter = (warehouse, ids, amounts) => {
    return [warehouse, ids, amounts];
}


