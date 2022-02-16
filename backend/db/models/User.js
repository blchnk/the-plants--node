const User = db.define("user", {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: db.STRING,
        allowNull: false
    },
    age: {
        type: db.INTEGER,
        allowNull: false
    }
});

// db.sync().then(result=>console.log(result))
//     .catch(err=> console.log(err));

db.sync({force: true}).then(result=>{
    console.log(result);
})
    .catch(err=> console.log(err));
