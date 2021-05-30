const User = require('../models').Users;
const UsersRights = require('../models').UsersRights;
const Right = require('../models').Right;

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    signUp: async (req, res) => {

        const alreadyExist = await User.findOne({ where: { mail: req['body'].mail } });
        if (alreadyExist) {
            return res.status(400).send({ error: "An user is already registered with this email !" });
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req['body'].password, salt);
            return User
                .create({
                    mail: req.body.mail,
                    password: hashedPassword,
                    first_name: req.body.first_name,
                    family_name: req.body.family_name,
                    society: req.body.society
                }).then((user) => {
                    req['body'].usersrights.forEach(element => {
                        element.user_id = user.id;
                    });
                    console.log(req['body'].usersrights);
                    return UsersRights.bulkCreate(req['body'].usersrights, { returning: true }).then((rights) => {
                        res.status(201).send({ user: user, rights: rights });
                    }).catch(error => res.status(400).send({ error: error }));
                }
                ).catch(error => res.status(400).send({ error: error }));
        }
    },
    signIn: async (req, res) => {
        console.log(req['body'])
        const user = await User.findOne({
            include: [
                'rights'
            ],
            where: { mail: req['body'].mail }
        });
        console.log(user);
        if (!user) {
            return res.status(400).send({ error: "Invalid e-mail or password !" });
        }
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) {
            return res.status(400).send({ error: "Invalid e-mail or password !" });
        } else {
            const token = jwt.sign({ id: user.id }, config.token_secret);
            res.setHeader('Authorization', token);
            console.log(user);
            return res.status(200).send({ user: { id: user.id, family_name: user.family_name, first_name: user.first_name }, rights: user.rights, token: token });
        }
    },
    listAll(req, res) {
        return User
            .findAll({
                include: [
                    'rights'
                ],
                order: [
                    ['createdAt', 'DESC']
                ],
            })
            .then((user) => res.status(200).send({ list: user }))
            .catch((error) => res.status(400).send({ error: error }));
    },
    list(req, res) {
        return User
            .findByPk(req.params.id, {
                include: [
                    'rights'
                ]
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                return res.status(200).send({ user: user });
            })
            .catch(error => res.status(400).send({ error: error }));
    },
    update(req, res) {
        return User
            .findByPk(req.params.id, {
                include: [
                    'rights'
                ]
            })
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: 'User Not Found',
                    });
                }
                return user
                    .update({
                        society: req.body.scoiety || user.scoiety,
                        first_name: req.body.first_name || user.fisrt_name,
                        last_name: req.body.last_name || user.last_name,
                    })
                    .then(() => res.status(200).send({ user: user }))
                    .catch((error) => res.status(400).send({ error: error }));
            })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return User
            .findByPk(req.params.id)
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: 'User Not Found',
                    });
                }
                return user
                    .destroy()
                    .then(() => res.status(200).send({ message: 'User deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};