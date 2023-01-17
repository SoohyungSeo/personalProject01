import {
    DataTypes,
    Model,
} from 'sequelize';
import sequelize from './index';

export class Users extends Model{
    public readonly userId!: number;
    public id! : string;
    public password! : string;
    public nickname! : string;
    public email!: string;
    public naverId! : string;
    public kakaoId! : string;
    public googleId! : string;
    public provider! : string;
    public phone! : string;
    public admin! : boolean;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public static associations:{        
    };
}

Users.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        naverId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        kakaoId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        googleId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        provider: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName:'Users',
        tableName:'Users',
    }
);

export default Users