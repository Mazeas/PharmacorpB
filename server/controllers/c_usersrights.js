const UsersRights = require('../models').UsersRights;


module.exports = {
    create: async (req, res) => {
        return UsersRights
            .create({
                right_id: req.body.right_id,
                user_id: req.body.user_id
            }).then(rights => res.status(201).send({ rights: rights }))
            .catch(error => res.status(400).send(error));

    },
    destroy(req, res) {
        return UsersRights
            .find({ where: { user_id: req.params.id, right_id: req.params.rightId } })
            .then(rights => {
                if (!rights) {
                    return res.status(400).send({
                        message: 'UsersRights Not Found',
                    });
                }
                return rights
                    .destroy()
                    .then(() => res.status(200).send({ message: 'UsersRights deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};