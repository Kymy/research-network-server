module.exports = (sequelize, type) => {
    const Area = sequelize.define('Area', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        image_url: {
            type: type.STRING
        },
        description: {
            type: type.STRING
        }
    }, {
        underscored: true
    }
    );

    Area.associate = models => {
        models.Area.hasMany(models.Publication, {as: 'Publications'});
        models.Area.belongsToMany(models.Publication, {through: 'Publications_Areas'});
    };

    Area.prototype.basicFormat = function basicFormat() {
        return {
          name: this.name,
          image_url: this.image_url,
          description: this.description
        };
    };

    return Area;
};
