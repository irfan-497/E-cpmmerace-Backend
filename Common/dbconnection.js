const {Sequelize}=require('sequelize')
const config=require('../Config')

const database=new Sequelize(config.db)
database.authenticate().then(()=>{
    console.log(
        "db connect"
    );
}
).catch((error)=>{
    console.log(error);
})

module.exports=database