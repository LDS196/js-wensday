class Categories {
    constructor() {
        this.categoryData = categoryData
    }

    getChildren(categoryId) {
        return this.categoryData
            .filter(category => category.parent === categoryId)
            .map(c => c.id)
            .sort((a, b) => a - b)
    }

    getParent(categoryChildId) {
        const category = this.categoryData.find(c => c.id === categoryChildId)
        return category ? category.parent : undefined
    }

    getPath(categoryChildId) {

        let path = []
        for (let i = 0; i < this.categoryData.length; i++) {
            if (this.categoryData[i].id <= categoryChildId) {
                path.push(this.categoryData[i].id)
            } else {
                break
            }
        }
        return path
    }
}

const categoryData = [
    {id: 1},
    {id: 2, parent: 1},
    {id: 3, parent: 2},
    {id: 4, parent: 3},
    {id: 5, parent: 3}
];

const categoryTree = new Categories(categoryData);

console.log("Children of category 3:", categoryTree.getChildren(3)); // [4, 5]
console.log("Parent of category 2:", categoryTree.getParent(2)); // 1
console.log("Path to category 4:", categoryTree.getPath(4)); // [1, 2, 3, 4]

