import data from "../assets/shopping_list.json";

function ListItem({ itemName, isBought, isPriority = false }) {
    return isBought ? (
        <li style={isPriority ? { color: "red" } : null}>
            <del>{itemName}</del>
        </li>
    ) : (
        <li style={isPriority ? { color: "red" } : null}>{itemName}</li>
    );
}

function ShoppingList() {
    const items = data;

    return (
        <ul>
            {items
                //.filter((item) => item.isPriority) // Filtrando items que tienen prioridad
                .map((item) => {
                    return <ListItem {...item} key={item.itemName} />;
                })}
        </ul>
    );
}

export { ShoppingList };
