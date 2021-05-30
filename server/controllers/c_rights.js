const Rights = require('../models').Rights;


module.exports = {
    create: async (req, res) => {
        return Rights
            .create({
                libelle: req.body.libelle,
            }).then(rights => res.status(201).send({ rights: rights }))
            .catch(error => res.status(400).send(error));

    },
    listAll(req, res) {
        return Rights
            .findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
            })
            .then((rights) => res.status(200).send({ list: rights }))
            .catch((error) => res.status(400).send({ error: error }));
    },
    list(req, res) {
        return Rights
            .findByPk(req.params.id, {
            })
            .then(rights => {
                if (!rights) {
                    return res.status(404).send({
                        message: 'Rights Not Found',
                    });
                }
                return res.status(200).send({ rights: rights });
            })
            .catch(error => res.status(400).send({ error: error }));
    },
    update(req, res) {
        return Rights
            .findByPk(req.params.id, {
            })
            .then(rights => {
                if (!rights) {
                    return res.status(404).send({
                        message: 'Rights Not Found',
                    });
                }
                return rights
                    .update({
                        libelle: req.body.libelle,
                    })
                    .then(() => res.status(200).send({ rights: rights }))
                    .catch((error) => res.status(400).send({ error: error }));
            })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return Rights
            .findByPk(req.params.id)
            .then(rights => {
                if (!rights) {
                    return res.status(400).send({
                        message: 'Rights Not Found',
                    });
                }
                return rights
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Rights deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};