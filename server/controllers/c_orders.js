const Orders = require('../models').Orders;
const DrugsOrders = require('../models').DrugsOrders;
const dogstats = require('./c_hot_shots');

module.exports = {
    create: (req, res) => {
        return Orders
            .create({
                user_id: req.body.user_id,
                amount: req.body.amount,
                libelle: req.body.libelle,
                address: req.body.address,
            }).then((orders) => {
                req['body'].drugsorders.forEach(element => {
                    element.order_id = orders.id;
                });
                console.log(req['body'].drugsorders);
                return DrugsOrders.bulkCreate(req['body'].drugsorders, { returning: true }).then((drugsorders) => {
                    dogstats.get().increment('node.page.views', ['method:POST', 'route:orders']);
                    res.status(201).send({ orders: orders, drugsorders: drugsorders });
                }).catch(error => res.status(400).send({ error: error }));
            }
            ).catch(error => res.status(400).send({ error: error }));
    },
    listAll(req, res) {
        console.log('ici');
        return Orders
            .findAll({
                include: ['drugs', 'user'],
                order: [
                    ['createdAt', 'ASC']
                ],
            })
            .then((orders) => res.status(200).send({ list: orders }))
            .catch((error) => res.status(400).send({ error: error }));
    },
    list(req, res) {
        return Orders
            .findByPk(req.params.id, {
                include: ['drugs', 'user'],
                order: [
                    ['createdAt', 'ASC']
                ],
            })
            .then(orders => {
                if (!orders) {
                    return res.status(404).send({
                        message: 'Orders Not Found',
                    });
                }
                return res.status(200).send({ orders: orders });
            })
            .catch(error => res.status(400).send({ error: error }));
    },
    update(req, res) {
        return Orders
            .findByPk(req.params.id, {
            })
            .then(orders => {
                if (!orders) {
                    return res.status(400).send({
                        message: 'Orders Not Found',
                    });
                }
                return orders
                    .update({
                        user_id: req.body.user_id || orders.user_id,
                        amount: req.body.amount || orders.amount,
                        libelle: req.body.libelle || orders.libelle,
                        address: req.body.address || orders.address,
                    })
                    .then((order) => {
                        req['body'].drugsorders.forEach(element => {
                            element.order_id = orders.id;
                        });
                        console.log(req['body'].drugsorders);
                        return DrugsOrders
                            .destroy({ where: { order_id: order.id } }).then(() => {
                                return DrugsOrders.bulkCreate(req['body'].drugsorders, { returning: true }).then((drugsorders) => {
                                    res.status(201).send({ orders: orders, drugsorders: drugsorders });
                                }).catch(error => res.status(400).send({ error: error }));
                            });
                    }).catch((error) => res.status(400).send({ error: error }));
            })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return Orders
            .findByPk(req.params.id)
            .then(orders => {
                if (!orders) {
                    return res.status(400).send({
                        message: 'Orders Not Found',
                    });
                }
                return orders
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Orders deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};