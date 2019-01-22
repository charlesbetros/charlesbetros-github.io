//Console.table()
//    Displays tabular data as a table.

const people = [
    { "Name": "Charles B", "Title": "Professional", "Skills": ["All the things"] },
    { "Name": "Chuck D", "Title": "Public Enemy", "Skills": ["Musician"] }
];

function doTable() {
    console.table(people);
}

function doTableSpecificColumns() {
    console.table(people, ["Name"]);
}

doTable();
doTableSpecificColumns();