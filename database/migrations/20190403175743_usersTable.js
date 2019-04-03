
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {

    users.increments();//ID primary key

    users.string('username', 128) //unique username
        .notNullable()
        .unique();

    users.string('password', 128)//password
        .notNullable();

    users.string('department', 128)//department, foreign key eventually?
        .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
