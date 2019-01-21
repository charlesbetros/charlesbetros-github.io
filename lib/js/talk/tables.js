//Console.table()
//    Displays tabular data as a table.

const people = [
    { "Name": "Charles B", "Title": "Professional" },
    { "Name": "Chuck D", "Title": "Public Enemy" }
];

function doTable() {
    console.table(people);
}

function doTableSpecificColumns() {
    console.table(people, ["Name"]);
}

doTable();
doTableSpecificColumns();