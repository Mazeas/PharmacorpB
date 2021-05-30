const Drugs = require('../models').Drugs;


module.exports = {
    create: async (req, res) => {
        return Drugs
            .create({
                dosage: req.body.dosage,
                pathology: req.body.pathology,
                side_effects: req.body.side_effects,
                contraindication: req.body.contradiction,
                description: req.body.description,
                libelle: req.body.libelle,
                quantity: req.body.quantity,
                price: req.body.price

            }).then(drugs => {

                res.status(201).send({ drugs: drugs })
            })
            .catch(error => res.status(400).send(error));

    },
    listAll(req, res) {
        return Drugs
            .findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
            })
            .then((drugs) => res.status(200).send({ list: drugs }))
            .catch((error) => res.status(400).send({ error: error }));
    },
    list(req, res) {
        return Drugs
            .findByPk(req.params.id, {
            })
            .then(drugs => {
                if (!drugs) {
                    return res.status(404).send({
                        message: 'Drugs Not Found',
                    });
                }
                return res.status(200).send({ drugs: drugs });
            })
            .catch(error => res.status(400).send({ error: error }));
    },
    update(req, res) {
        return Drugs
            .findByPk(req.params.id, {
            })
            .then(drugs => {
                if (!drugs) {
                    return res.status(404).send({
                        message: 'Drugs Not Found',
                    });
                }
                return drugs
                    .update({
                        dosage: req.body.dosage,
                        pathology: req.body.pathology,
                        side_effects: req.body.side_effects,
                        contraindication: req.body.contradiction,
                        description: req.body.description,
                        libelle: req.body.libelle,
                        quantity: req.body.quantity,
                        price: req.body.price
                    })
                    .then(() => res.status(200).send({ drugs: drugs }))
                    .catch((error) => res.status(400).send({ error: error }));
            })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return Drugs
            .findByPk(req.params.id)
            .then(drugs => {
                if (!drugs) {
                    return res.status(400).send({
                        message: 'Drugs Not Found',
                    });
                }
                return drugs
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Drugs deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};