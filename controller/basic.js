const service = require("../service/basic");

exports.basicData = (req, res) => {
    var host = req.get('host');
    service
      .basicDataDetails()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.send(err);
      });
};