
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries 
      return knex('users').insert([
        { id: 1, name: 'Some Guy', email: 'test1@test.com'},
        { id: 2, name: 'Some Guy2', email: 'test2@test.com'}
      ]);
    });
};
