### Tables - Specify Columns

```javascript
    // Magic to get data from some place.
    const people = [
        { "Name": "Charles B", "Title": "Professional", "Skills": ["All the things"] },
        { "Name": "Flavor Flav", "Title": "Hype Man", "Skills": ["Musician", "Television"] },
        { "Name": "Chuck D", "Title": "Public Enemy", "Skills": ["Musician"] }
    ];

    console.table(people, "Title");
```

![Console table](./images/tables-3.png "Tables")

Notes:
Tables are sortable by column.
Console.table() can only handle 1000 rows.