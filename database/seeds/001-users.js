
exports.seed = function(knex, Promise) {

      return knex('users').insert([
        {id: 1, username: 'James', password: 'pass', department: 'Sales'},
        {id: 2, username: 'Jimmy', password: 'pass', department: 'Accounting'},
        {id: 3, username: 'Jimbo', password: 'pass', department: 'IT'},
      ]);
};
