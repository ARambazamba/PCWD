module.exports = function(app) {
  require('./vouchers-list.js')(app);
  require('./vouchersFactory.js')(app);
}