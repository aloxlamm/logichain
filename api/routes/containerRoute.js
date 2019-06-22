'use strict';
module.exports = function(app) {
  var containers = require('../controllers/containerController');

  // todoList Routes
  app.route('/eth-container')
  //  .get(containers.get_all_containers)
  //  .post(containers.create_a_task);


  app.route('/eth-container/:hash')
    .get(containers.get_container_by_hash)
  //  .put(containers.update_a_task)
  //  .delete(containers.delete_a_task); */
};
