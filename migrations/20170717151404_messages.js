
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages',(table)=>{
    table.increments();
    table.string('name').notNullable();
    table.string('message').notNullable();
    table.timestamps(true, true);
    // table.timestamp('created_at').notNullable().defaultTo('now()');
    // table.timestamp('updated_at').notNullable().defaultTo('now()');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
