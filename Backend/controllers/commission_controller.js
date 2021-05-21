const CommissionService = require('../services/commission_service.js');

exports.createCommission = async (req, res) => {
  const params = Object.keys(req.body);
  const allowParams = ['typeCommission', 'beginDate', 'endDate'];
  const isValid = params.every((update) => allowParams.includes(update));
  if (!isValid) {
    return res.status(400).send({error: 'Invalid params'});
  }
  try {
    const commission = await CommissionService.createCommission(
        req.body,
        req.employee,
    );
    res.status(200).json({commission: commission});
  } catch (e) {
    console.log(e);
    res.status(400).json({error: e.message});
  }
};