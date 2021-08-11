import Sequelize from "sequelize";
import { sequelize } from "../database/database"

const Person = sequelize.define('personas', {
    fullname: {
        type: Sequelize.STRING
    },
    birth: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

export default Person;