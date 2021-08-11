import Sequelize from "sequelize";
import { sequelize } from "../database/database"

const Person = sequelize.define('person', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fullname: {
        type: Sequelize.TEXT
    },
    birth: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

export default Person;