const User = require('../controllers').user;
const Drugs = require('../controllers').drugs;
const Rights = require('../controllers').rights;
const Orders = require('../controllers').orders;

module.exports = (app) => {
    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });
    app.get('/pharmacorp', (req, res) => res.status(200).send({
        message: 'Welcome to the Pharmacorp API!',
    }));

    //User

    /**
    * @api {post} /pharmacorp/user/signUp Request User create
    * @apiName SignUp
    * @apiGroup User
    *
    *
    * @apiSuccess {String} mail Mail of the User.
    * @apiSuccess {String} password Password of the User.
    * @apiSuccess {String} society Society of the User.
    * @apiSuccess {String} family_name Family Name of the User.
    * @apiSuccess {String} fisrt_name First Name of the User.
    * @apiSuccess {Date} created_at Registered Date of the User.
    * @apiSuccess {Date} updated_at Last update Date of the User.
    * @apiSuccess {Rights} rights List of rights of the User.

    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *  {
    "user": {
        "id": 1,
        "family_name": "admin",
        "first_name": "admin"
    },
    "rights": [
        {
            "id": 1,
            "libelle": "update_drugs",
            "createdAt": "2019-12-13T09:10:59.919Z",
            "updatedAt": "2019-12-13T09:10:59.919Z",
            "UsersRights": {
                "id": 1,
                "user_id": 1,
                "right_id": 1,
                "createdAt": "2019-12-13T09:10:44.604Z",
                "updatedAt": "2019-12-13T09:10:44.604Z"
            }
        },
        {
            "id": 2,
            "libelle": "create_drugs",
            "createdAt": "2019-12-13T09:11:05.783Z",
            "updatedAt": "2019-12-13T09:11:05.783Z",
            "UsersRights": {
                "id": 2,
                "user_id": 1,
                "right_id": 2,
                "createdAt": "2019-12-13T09:10:44.604Z",
                "updatedAt": "2019-12-13T09:10:44.604Z"
            }
        }
    ],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc2ODM2NzU2fQ.f9ppZvdThzhqEEQoWkdGqeFWcR7YJjIR8RFyL6L41y0"
}
    *
    * @apiErrorAn User is already registered with this email !.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 400 Bad Request
    *     {
    "error": "An user is already registered with this email !"
}
    */
    app.post('/pharmacorp/user/signIn', User.signIn);
    /**
    * @api {post} /pharmacorp/user/signIn Request User connexion
    * @apiName SignIn
    * @apiGroup User
    *
    *
    * @apiSuccess {String} mail Mail of the User.
    * @apiSuccess {String} password Password of the User.
    * @apiSuccess {Rights} rights List of rights of the User.
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 201 OK
    *   {
    "user": {
        "id": 3,
        "mail": "test@admin.com",
        "password": "$2a$10$0MqY1LEzsEEBP0YgXlq9/uPNpSbVSxKsXRnAy16951rjci9xL7Wwq",
        "first_name": "admin",
        "family_name": "admin",
        "society": "piman",
        "updatedAt": "2019-12-20T10:17:10.408Z",
        "createdAt": "2019-12-20T10:17:10.408Z"
    },
    "rights": [
        {
            "id": 5,
            "right_id": 1,
            "user_id": 3,
            "createdAt": "2019-12-20T10:17:10.421Z",
            "updatedAt": "2019-12-20T10:17:10.421Z"
        },
        {
            "id": 6,
            "right_id": 2,
            "user_id": 3,
            "createdAt": "2019-12-20T10:17:10.421Z",
            "updatedAt": "2019-12-20T10:17:10.421Z"
        }
    ]
}
    *
    * @apiErrorAn User wrong password or e-mail !.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 400 Bad Request
    *     {
    "error": "Invalid e-mail or password !"
}
    */
    app.post('/pharmacorp/user/signUp', User.signUp);
    /**
    * @api {get} /pharmacorp/user/{id}/list Request get a specific a User 
    * @apiName List User
    * @apiGroup User
    *
    * @apiParam {Int} id User unique ID.
     * @apiSuccess {String} mail Mail of the User.
        * @apiSuccess {String} password Password of the User.
        * @apiSuccess {String} society Society of the User.
        * @apiSuccess {String} family_name Family Name of the User.
        * @apiSuccess {String} fisrt_name First Name of the User.
        * @apiSuccess {Date} created_at Registered Date of the User.
        * @apiSuccess {Date} updated_at Last update Date of the User.
        * @apiSuccess {Rights} rights  List of rights of the User.

    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *  "user": {
        "id": 1,
        "mail": "tezezstrreight@admin.com",
        "password": "$2a$10$bni6mBCHW05pCh26bBMe8unqRNwvLeMJejTyEMIdaKM4fJe84xQFm",
        "society": "piman",
        "first_name": "admin",
        "family_name": "admin",
        "createdAt": "2019-12-13T09:10:44.592Z",
        "updatedAt": "2019-12-13T09:10:44.592Z",
        "rights": [
            {
                "id": 1,
                "libelle": "update_drugs",
                "createdAt": "2019-12-13T09:10:59.919Z",
                "updatedAt": "2019-12-13T09:10:59.919Z",
                "UsersRights": {
                    "id": 1,
                    "user_id": 1,
                    "right_id": 1,
                    "createdAt": "2019-12-13T09:10:44.604Z",
                    "updatedAt": "2019-12-13T09:10:44.604Z"
                }
            },
            {
                "id": 2,
                "libelle": "create_drugs",
                "createdAt": "2019-12-13T09:11:05.783Z",
                "updatedAt": "2019-12-13T09:11:05.783Z",
                "UsersRights": {
                    "id": 2,
                    "user_id": 1,
                    "right_id": 2,
                    "createdAt": "2019-12-13T09:10:44.604Z",
                    "updatedAt": "2019-12-13T09:10:44.604Z"
                }
            }
        ]
    }
}
    *
    * @apiErrorAn User not found !.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 400 Bad Request
    *     {
    "message": "User Not Found"
}
    */
    app.get('/pharmacorp/user/:id/list', User.list);
    /**
    * @api {get} /pharmacorp/user/listAll Request get All User information
    * @apiName List All User
    * @apiGroup User
    *
     * @apiSuccess {String} mail Mail of the User.
        * @apiSuccess {String} password Password of the User.
        * @apiSuccess {String} society Society of the User.
        * @apiSuccess {String} family_name Family Name of the User.
        * @apiSuccess {String} fisrt_name First Name of the User.
        * @apiSuccess {Date} created_at Registered Date of the User.
        * @apiSuccess {Date} updated_at Last update Date of the User.
        * @apiSuccess {Rights} rights  List of rights of the User.

    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *   {
    "list": [
        {
            "id": 2,
            "mail": "admin@admin.com",
            "password": "$2a$10$oXSTQj9n/4RvTLJmWqfifen7aEVIHssf2NMBS8vJh/ZdK2yJqgm3W",
            "society": "piman",
            "first_name": "admin",
            "family_name": "admin",
            "createdAt": "2019-12-20T08:59:50.387Z",
            "updatedAt": "2019-12-20T08:59:50.387Z",
            "rights": []
        },
        {
            "id": 1,
            "mail": "tezezstrreight@admin.com",
            "password": "$2a$10$bni6mBCHW05pCh26bBMe8unqRNwvLeMJejTyEMIdaKM4fJe84xQFm",
            "society": "piman",
            "first_name": "admin",
            "family_name": "admin",
            "createdAt": "2019-12-13T09:10:44.592Z",
            "updatedAt": "2019-12-13T09:10:44.592Z",
            "rights": [
                {
                    "id": 1,
                    "libelle": "update_drugs",
                    "createdAt": "2019-12-13T09:10:59.919Z",
                    "updatedAt": "2019-12-13T09:10:59.919Z",
                    "UsersRights": {
                        "id": 1,
                        "user_id": 1,
                        "right_id": 1,
                        "createdAt": "2019-12-13T09:10:44.604Z",
                        "updatedAt": "2019-12-13T09:10:44.604Z"
                    }
                },
                {
                    "id": 2,
                    "libelle": "create_drugs",
                    "createdAt": "2019-12-13T09:11:05.783Z",
                    "updatedAt": "2019-12-13T09:11:05.783Z",
                    "UsersRights": {
                        "id": 2,
                        "user_id": 1,
                        "right_id": 2,
                        "createdAt": "2019-12-13T09:10:44.604Z",
                        "updatedAt": "2019-12-13T09:10:44.604Z"
                    }
                }
            ]
        }
    ]
}
    */
    app.get('/pharmacorp/user/listAll', User.listAll);
    /**
    * @api {put} /pharmacorp/user/{id}/update Request User update
    * @apiName Update User
    * @apiGroup User
    *
    * @apiParam {Int} id User unique ID.
    * @apiSuccess {String} mail Mail of the User.
    * @apiSuccess {String} password Password of the User.
    * @apiSuccess {String} society Society of the User.
    * @apiSuccess {String} family_name Family Name of the User.
    * @apiSuccess {String} fisrt_name First Name of the User.
    * @apiSuccess {Date} created_at Registered Date of the User.
    * @apiSuccess {Date} updated_at Last update Date of the User.
    * @apiSuccess {Rights} rights  List of rights of the User.

    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *  {
    "user": {
        "id": 1,
        "mail": "tezezstrreight@admin.com",
        "password": "$2a$10$bni6mBCHW05pCh26bBMe8unqRNwvLeMJejTyEMIdaKM4fJe84xQFm",
        "society": "piman",
        "first_name": "charlie",
        "family_name": "admin",
        "createdAt": "2019-12-13T09:10:44.592Z",
        "updatedAt": "2019-12-20T10:21:07.968Z",
        "rights": [
            {
                "id": 1,
                "libelle": "update_drugs",
                "createdAt": "2019-12-13T09:10:59.919Z",
                "updatedAt": "2019-12-13T09:10:59.919Z",
                "UsersRights": {
                    "id": 1,
                    "user_id": 1,
                    "right_id": 1,
                    "createdAt": "2019-12-13T09:10:44.604Z",
                    "updatedAt": "2019-12-13T09:10:44.604Z"
                }
            },
            {
                "id": 2,
                "libelle": "create_drugs",
                "createdAt": "2019-12-13T09:11:05.783Z",
                "updatedAt": "2019-12-13T09:11:05.783Z",
                "UsersRights": {
                    "id": 2,
                    "user_id": 1,
                    "right_id": 2,
                    "createdAt": "2019-12-13T09:10:44.604Z",
                    "updatedAt": "2019-12-13T09:10:44.604Z"
                }
            }
        ]
    }
}
    *
    * @apiErrorAn User not found !.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 400 Bad Request
    *     {
    "message": "User Not Found"
}
    */
    app.put('/pharmacorp/user/:id/update', User.update);


    //Drugs
    /**
       * @api {post} /pharmacorp/drugs/create Request Drugs create
       * @apiName CreateDrugs
       * @apiGroup Drugs
       *
       *
       * @apiSuccess {Text} dosage Dosage of the Drug.
       * @apiSuccess {Text} pathology Pathology of the Drug.
       * @apiSuccess {Text} side_effects Side effects of the Drug.
       * @apiSuccess {Text} contraindication Contraindication of the Drug.
       * @apiSuccess {Text} description Description of the Drug.
       * @apiSuccess {Text} libelle Libelle of the Drug.
       * @apiSuccess {Date} created_at Date of create medication.
       * @apiSuccess {Date} updated_at Last update Date of the Drug.
       * @apiSuccess {Integer} quantity Storage quantity of the drug.
       * @apiSuccess {Double} price price of the Drug.

       *
       * @apiSuccessExample Success-Response:
       *     HTTP/1.1 200 OK
       *   {
    "drugs": {
        "id": 5,
        "dosage": null,
        "pathology": "Douleur légère à modérée",
        "side_effects": "Réaction d'hypersensibilité Choc anaphylactique Oedème de Quincke Erythème cutané",
        "contraindication": null,
        "description": "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
        "libelle": "Test 45",
        "quantity": 34,
        "price": 6.8,
        "updatedAt": "2019-12-20T10:25:51.441Z",
        "createdAt": "2019-12-20T10:25:51.441Z"
    }
}
       *
       */
    app.post('/pharmacorp/drugs/create', Drugs.create);
    /**
       * @api {get} /pharmacorp/drugs/{id}/list Request a specific Drugs
       * @apiName List Drugs
       * @apiGroup Drugs
       * 
       * @apiParam {Int} id Drug unique ID.
       * 
       * @apiSuccess {Text} dosage Dosage of the Drug.
       * @apiSuccess {Text} pathology Pathology of the Drug.
       * @apiSuccess {Text} side_effects Side effects of the Drug.
       * @apiSuccess {Text} contraindication Contraindication of the Drug.
       * @apiSuccess {Text} description Description of the Drug.
       * @apiSuccess {Text} libelle Libelle of the Drug.
       * @apiSuccess {Date} created_at Date of create medication.
       * @apiSuccess {Date} updated_at Last update Date of the Drug.
       * @apiSuccess {Integer} quantity Storage quantity of the Drug.
       * @apiSuccess {Double} price Price of the Drug.

       *
       * @apiSuccessExample Success-Response:
       *     HTTP/1.1 200 OK
       *   {
    "drugs": {
        "id": 2,
        "dosage": "Chez l'enfant, elles doivent être régulièrement espacées, y compris la nuit, de préférence de 6 heures, et d'au moins 4 heures.Chez l 'adulte, elles doivent être espacées d'au moins 4 heures.",
        "pathology": "Douleur légère à modérée",
        "side_effects": "Réaction d'hypersensibilité Choc anaphylactique Oedème de Quincke Erythème cutané",
        "contraindication": null,
        "description": "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
        "libelle": "efferalgan",
        "quantity": 4,
        "price": 2.3,
        "createdAt": "2019-12-13T09:11:40.961Z",
        "updatedAt": "2019-12-20T10:30:14.850Z"
    }
}
       *
       * @apiErrorAn Drug not found !.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 400 Bad Request
    *     {
    "message": "Drug Not Found"
}
       */
    app.get('/pharmacorp/drugs/:id/list', Drugs.list);
    /**
    * @api {get} /pharmacorp/drugs/{id}/listAll Request all Drugs
    * @apiName List All Drugs
    * @apiGroup Drugs
    * 
    * 
    * @apiSuccess {Text} dosage Dosage of the Drug.
    * @apiSuccess {Text} pathology Pathology of the Drug.
    * @apiSuccess {Text} side_effects Side effects of the Drug.
    * @apiSuccess {Text} contraindication Contraindication of the Drug.
    * @apiSuccess {Text} description Description of the Drug.
    * @apiSuccess {Text} libelle Libelle of the Drug.
    * @apiSuccess {Date} created_at Date of create medication.
    * @apiSuccess {Date} updated_at Last update Date of the Drug.
    * @apiSuccess {Integer} quantity Storage quantity of the Drug.
    * @apiSuccess {Double} price Price of the Drug.

    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *  {
    "list": [
        {
            "id": 4,
            "dosage": null,
            "pathology": null,
            "side_effects": null,
            "contraindication": null,
            "description": null,
            "libelle": "Test commande",
            "quantity": null,
            "price": null,
            "createdAt": "2019-12-13T09:21:18.696Z",
            "updatedAt": "2019-12-13T09:21:18.696Z"
        },
        {
            "id": 3,
            "dosage": "Chez l'enfant, elles doivent être régulièrement espacées, y compris la nuit, de préférence de 6 heures, et d'au moins 4 heures.Chez l 'adulte, elles doivent être espacées d'au moins 4 heures.",
            "pathology": "Douleur légère à modérée",
            "side_effects": "Réaction d'hypersensibilité Choc anaphylactique Oedème de Quincke Erythème cutané",
            "contraindication": null,
            "description": "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
            "libelle": "efferalgan",
            "quantity": 4,
            "price": 6.8,
            "createdAt": "2019-12-13T09:12:06.445Z",
            "updatedAt": "2019-12-20T10:26:00.046Z"
        },
        {
            "id": 2,
            "dosage": null,
            "pathology": "Douleur légère à modérée",
            "side_effects": "Réaction d'hypersensibilité Choc anaphylactique Oedème de Quincke Erythème cutané",
            "contraindication": null,
            "description": "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
            "libelle": "Test",
            "quantity": 10,
            "price": 2.3,
            "createdAt": "2019-12-13T09:11:40.961Z",
            "updatedAt": "2019-12-13T09:11:40.961Z"
        },
        {
            "id": 1,
            "dosage": null,
            "pathology": "Douleur légère à modérée",
            "side_effects": "Réaction d'hypersensibilité Choc anaphylactique Oedème de Quincke Erythème cutané",
            "contraindication": null,
            "description": "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
            "libelle": "Test",
            "quantity": 6,
            "price": 2.3,
            "createdAt": "2019-12-13T09:11:26.516Z",
            "updatedAt": "2019-12-13T09:11:26.516Z"
        }
    ]
}
    *
    */
    app.get('/pharmacorp/drugs/listAll', Drugs.listAll);
    /**
       * @api {put} /pharmacorp/drugs/{id}/update Request Drugs update
       * @apiName Update Drugs
       * @apiGroup Drugs
       * @apiParam {Int} id User unique ID.
       * @apiSuccess {Text} dosage Dosage of the Drug.
       * @apiSuccess {Text} pathology Pathology of the Drug.
       * @apiSuccess {Text} side_effects Side effects of the Drug.
       * @apiSuccess {Text} contraindication Contraindication of the Drug.
       * @apiSuccess {Text} description Description of the Drug.
       * @apiSuccess {Text} libelle Libelle of the Drug.
       * @apiSuccess {Date} created_at Date of create medication.
       * @apiSuccess {Date} updated_at Last update Date of the Drug.
       * @apiSuccess {Integer} quantity Storage quantity of the Drug.
       * @apiSuccess {Double} price Price of the Drug.

       *
       * @apiSuccessExample Success-Response:
       *     HTTP/1.1 200 OK
       *   {
    "drugs": {
        "id": 2,
        "dosage": "Chez l'enfant, elles doivent être régulièrement espacées, y compris la nuit, de préférence de 6 heures, et d'au moins 4 heures.Chez l 'adulte, elles doivent être espacées d'au moins 4 heures.",
        "pathology": "Douleur légère à modérée",
        "side_effects": "Réaction d'hypersensibilité Choc anaphylactique Oedème de Quincke Erythème cutané",
        "contraindication": null,
        "description": "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
        "libelle": "efferalgan",
        "quantity": 4,
        "price": 2.3,
        "createdAt": "2019-12-13T09:11:40.961Z",
        "updatedAt": "2019-12-20T10:30:14.850Z"
    }
}
       *
       * @apiErrorAn Drugs not found !.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 400 Bad Request
    *     {
    "message": "Drugs Not Found"
}
       */
    app.put('/pharmacorp/drugs/:id/update', Drugs.update);

    //Rights
    /**
       * @api {post} /pharmacorp/drugs/create Request Right create
       * @apiName Create Right
       * @apiGroup Rights
       *
       *
       * @apiSuccess {Text} libelle Libelle of the Right.
       * @apiSuccess {Date} created_at Date of create Right.
       * @apiSuccess {Date} updated_at Last update Date of the Right.
    
       *
       * @apiSuccessExample Success-Response:
       *     HTTP/1.1 200 OK
       *   {
    "rights": {
        "id": 1,
        "libelle": "update_drugs",
        "updatedAt": "2019-12-12T10:58:32.301Z",
        "createdAt": "2019-12-12T10:58:32.301Z"
    }
}
       *
      
       */
    app.post('/pharmacorp/right/create', Rights.create);
    /**
       * @api {get} /pharmacorp/right/{id}/list Request a specific Right
       * @apiName List Rights
       * @apiGroup Rights
       * 
       * @apiParam {Int} id Right unique ID.
       * 
       * @apiSuccess {Text} libelle Libelle of the Right.
       * @apiSuccess {Date} created_at Date of create Right.
       * @apiSuccess {Date} updated_at Last update Date of the Right.
    
       *
       * @apiSuccessExample Success-Response:
       *     HTTP/1.1 200 OK
       *   {
    "rights": {
        "id": 1,
        "libelle": "update_drugs",
        "createdAt": "2019-12-12T10:58:32.301Z",
        "updatedAt": "2019-12-12T10:58:32.301Z"
    }
}
       *
       * @apiErrorAn Rights not found !.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 400 Bad Request
    *     {
    "message": "Right Not Found"
}
       */
    app.get('/pharmacorp/right/:id/list', Rights.list);
    /**
    * @api {get} /pharmacorp/rightd/{id}/listAll Request all Rights
    * @apiName List All Rights
    * @apiGroup Rights
    * 
    * 
    * @apiSuccess {Text} libelle Libelle of the Right.
    * @apiSuccess {Date} created_at Date of create Right.
    * @apiSuccess {Date} updated_at Last update Date of the Right.
 
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *   {
    "list": [
        {
            "id": 2,
            "libelle": "create_drugs",
            "createdAt": "2019-12-13T09:11:05.783Z",
            "updatedAt": "2019-12-13T09:11:05.783Z"
        },
        {
            "id": 1,
            "libelle": "update_drugs",
            "createdAt": "2019-12-13T09:10:59.919Z",
            "updatedAt": "2019-12-13T09:10:59.919Z"
        }
    ]
}
    *
    */
    app.get('/pharmacorp/right/listAll', Rights.listAll);
    /**
       * @api {put} /pharmacorp/right/{id}/update Request Right update
       * @apiName Update Rights
       * @apiGroup Rights
       * @apiParam {Int} id Right unique ID.
       * @apiSuccess {Text} libelle Libelle of the Drug.
       * @apiSuccess {Date} created_at Date of create medication.
       * @apiSuccess {Date} updated_at Last update Date of the Drug.

       *
       * @apiSuccessExample Success-Response:
       *     HTTP/1.1 200 OK
       *   {
    "rights": {
        "id": 1,
        "libelle": "view_drugs",
        "createdAt": "2019-12-12T10:58:32.301Z",
        "updatedAt": "2019-12-12T11:16:26.904Z"
    }
}
       *
       * @apiErrorAn Rights not found !.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 400 Bad Request
    *     {
    "message": "Right Not Found"
}
       */
    app.put('/pharmacorp/right/:id/update', Rights.update);


    //Orders
    /**
       * @api {post} /pharmacorp/orders/create Request Orders create
       * @apiName Create Orders
       * @apiGroup Orders
       *
       *
       * @apiSuccess {Text} libelle Libelle of the Orders.
       * @apiSuccess {Date} created_at Date of create Orders.
       * @apiSuccess {Date} updated_at Last update Date of the Orders.
       * @apiSuccess {Integer} amount Total of the Orders.
       * @apiSuccess {String} address Adrdress of the Orders.
       * @apiSuccess {DrugsOrders} drugsorders List of drugs with the quantity for the Orders.
       *
       * @apiSuccessExample Success-Response:
       *     HTTP/1.1 200 OK
       *   {
    "orders": {
        "id": 2,
        "user_id": 1,
        "amount": 123,
        "libelle": "Test commande",
        "address": "23 avenue jean mace 68908 Lyon",
        "updatedAt": "2019-12-20T10:38:24.635Z",
        "createdAt": "2019-12-20T10:38:24.635Z"
    },
    "drugsorders": [
        {
            "id": 4,
            "drug_id": 1,
            "quantity": 3,
            "order_id": 2,
            "createdAt": "2019-12-20T10:38:24.674Z",
            "updatedAt": "2019-12-20T10:38:24.674Z"
        },
        {
            "id": 5,
            "drug_id": 2,
            "quantity": 2,
            "order_id": 2,
            "createdAt": "2019-12-20T10:38:24.674Z",
            "updatedAt": "2019-12-20T10:38:24.674Z"
        },
        {
            "id": 6,
            "drug_id": 3,
            "quantity": 4,
            "order_id": 2,
            "createdAt": "2019-12-20T10:38:24.674Z",
            "updatedAt": "2019-12-20T10:38:24.674Z"
        }
    ]
}
       */
    app.post('/pharmacorp/orders/create', Orders.create);

    //Orders
    /**
       * @api {put} /pharmacorp/orders/:id/update Request Orders update
       * @apiName Update Orders
       * @apiGroup Orders
       *
       *
       * @apiSuccess {Text} libelle Libelle of the Orders.
       * @apiSuccess {Date} created_at Date of create Orders.
       * @apiSuccess {Date} updated_at Last update Date of the Orders.
       * @apiSuccess {Integer} amount Total of the Orders.
       * @apiSuccess {String} address Adrdress of the Orders.
       * @apiSuccess {DrugsOrders} drugsorders List of drugs with the quantity for the Orders.
       *
       * @apiSuccessExample Success-Response:
       *     HTTP/1.1 200 OK
       *   {
    "orders": {
        "id": 1,
        "user_id": 1,
        "amount": "123",
        "libelle": "modif",
        "address": "modif",
        "createdAt": "2019-12-13T09:23:08.524Z",
        "updatedAt": "2020-01-09T11:46:04.620Z"
    },
    "drugsorders": [
        {
            "id": 10,
            "drug_id": 1,
            "quantity": 5,
            "order_id": 1,
            "createdAt": "2020-01-09T11:46:04.635Z",
            "updatedAt": "2020-01-09T11:46:04.635Z"
        },
        {
            "id": 11,
            "drug_id": 2,
            "quantity": 6,
            "order_id": 1,
            "createdAt": "2020-01-09T11:46:04.635Z",
            "updatedAt": "2020-01-09T11:46:04.635Z"
        },
        {
            "id": 12,
            "drug_id": 3,
            "quantity": 9,
            "order_id": 1,
            "createdAt": "2020-01-09T11:46:04.635Z",
            "updatedAt": "2020-01-09T11:46:04.635Z"
        }
    ]
}
       */
    app.put('/pharmacorp/orders/:id/update', Orders.update);
    /**
           * @api {get} /pharmacorp/orders/listAll Request Orders list All
           * @apiName List All Orders
           * @apiGroup Orders
           *
           *
           * @apiSuccess {Text} libelle Libelle of the Orders.
           * @apiSuccess {Date} created_at Date of create Orders.
           * @apiSuccess {Date} updated_at Last update Date of the Orders.
           * @apiSuccess {Integer} amount Total of the Orders.
           * @apiSuccess {String} address Address of the Orders.
           * @apiSuccess {Drugs} Drugs List of drugs with the quantity for the Orders.
           * @apiSuccess {User} Users The user who make the order
           * @apiSuccessExample Success-Response:
           *     HTTP/1.1 200 OK
           *   {
        "list": [
            {
                "id": 3,
                "user_id": 1,
                "amount": 123,
                "libelle": "Test (-è') tt",
                "address": "23 avenu eeeefreee oui mace 68907 Lyon",
                "createdAt": "2020-01-09T08:59:30.426Z",
                "updatedAt": "2020-01-09T08:59:30.426Z",
                "drugs": [],
                "user": {
                    "id": 1,
                    "mail": "tezezstrreight@admin.com",
                    "password": "$2a$10$.BlD1xTX3mKAMjYUoOs8WupwncziiwG22.yfRBgi/UJ771h5npW/y",
                    "society": "piman",
                    "first_name": "admin",
                    "family_name": "admin",
                    "createdAt": "2019-12-19T15:54:26.879Z",
                    "updatedAt": "2019-12-19T15:54:26.879Z"
                }
            },
            {
                "id": 2,
                "user_id": 1,
                "amount": 123,
                "libelle": "Test (-è') tt",
                "address": "23 avenu eee oui mace 68907 Lyon",
                "createdAt": "2020-01-09T08:29:57.386Z",
                "updatedAt": "2020-01-09T08:29:57.386Z",
                "drugs": [
                    {
                        "id": 4,
                        "dosage": "test",
                        "pathology": "test",
                        "side_effects": "test",
                        "contraindication": null,
                        "description": null,
                        "libelle": null,
                        "quantity": null,
                        "price": null,
                        "createdAt": "2019-12-19T16:38:19.706Z",
                        "updatedAt": "2019-12-19T16:38:19.706Z",
                        "DrugsOrders": {
                            "id": 4,
                            "drug_id": 1,
                            "quantity": 3,
                            "order_id": 2,
                            "createdAt": "2020-01-09T08:29:57.392Z",
                            "updatedAt": "2020-01-09T08:29:57.392Z"
                        }
                    },
                    {
                        "id": 5,
                        "dosage": null,
                        "pathology": "Douleur légère à modérée",
                        "side_effects": "Réaction d'hypersensibilité Choc anaphylactique Oedème de Quincke Erythème cutané",
                        "contraindication": null,
                        "description": "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
                        "libelle": "Test 45",
                        "quantity": 34,
                        "price": 6.8,
                        "createdAt": "2019-12-20T10:25:51.441Z",
                        "updatedAt": "2019-12-20T10:25:51.441Z",
                        "DrugsOrders": {
                            "id": 5,
                            "drug_id": 2,
                            "quantity": 2,
                            "order_id": 2,
                            "createdAt": "2020-01-09T08:29:57.392Z",
                            "updatedAt": "2020-01-09T08:29:57.392Z"
                        }
                    }
                ],
                "user": {
                    "id": 1,
                    "mail": "tezezstrreight@admin.com",
                    "password": "$2a$10$.BlD1xTX3mKAMjYUoOs8WupwncziiwG22.yfRBgi/UJ771h5npW/y",
                    "society": "piman",
                    "first_name": "admin",
                    "family_name": "admin",
                    "createdAt": "2019-12-19T15:54:26.879Z",
                    "updatedAt": "2019-12-19T15:54:26.879Z"
                }
            },
            {
                "id": 1,
                "user_id": 1,
                "amount": 123,
                "libelle": "Test commande",
                "address": "23 avenue jean mace 68908 Lyon",
                "createdAt": "2020-01-09T08:28:31.106Z",
                "updatedAt": "2020-01-09T08:28:31.106Z",
                "drugs": [
                    {
                        "id": 1,
                        "dosage": null,
                        "pathology": "Douleur légère à modérée",
                        "side_effects": "Réaction d'hypersensibilité Choc anaphylactique Oedème de Quincke Erythème cutané",
                        "contraindication": null,
                        "description": "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
                        "libelle": "Test 45",
                        "quantity": 34,
                        "price": 6.8,
                        "createdAt": "2019-12-19T15:52:26.117Z",
                        "updatedAt": "2019-12-19T15:52:26.117Z",
                        "DrugsOrders": {
                            "id": 1,
                            "drug_id": 1,
                            "quantity": 3,
                            "order_id": 1,
                            "createdAt": "2020-01-09T08:28:31.165Z",
                            "updatedAt": "2020-01-09T08:28:31.165Z"
                        }
                    },
                    {
                        "id": 2,
                        "dosage": null,
                        "pathology": "Douleur légère à modérée",
                        "side_effects": "Réaction d'hypersensibilité Choc anaphylactique Oedème de Quincke Erythème cutané",
                        "contraindication": null,
                        "description": "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
                        "libelle": "Test 45",
                        "quantity": 34,
                        "price": 6.8,
                        "createdAt": "2019-12-19T15:52:37.091Z",
                        "updatedAt": "2019-12-19T15:52:37.091Z",
                        "DrugsOrders": {
                            "id": 2,
                            "drug_id": 2,
                            "quantity": 2,
                            "order_id": 1,
                            "createdAt": "2020-01-09T08:28:31.165Z",
                            "updatedAt": "2020-01-09T08:28:31.165Z"
                        }
                    },
                    {
                        "id": 3,
                        "dosage": "test",
                        "pathology": "test",
                        "side_effects": "test",
                        "contraindication": null,
                        "description": null,
                        "libelle": null,
                        "quantity": null,
                        "price": null,
                        "createdAt": "2019-12-19T16:36:55.912Z",
                        "updatedAt": "2019-12-19T16:36:55.912Z",
                        "DrugsOrders": {
                            "id": 3,
                            "drug_id": 3,
                            "quantity": 4,
                            "order_id": 1,
                            "createdAt": "2020-01-09T08:28:31.165Z",
                            "updatedAt": "2020-01-09T08:28:31.165Z"
                        }
                    }
                ],
                "user": {
                    "id": 1,
                    "mail": "tezezstrreight@admin.com",
                    "password": "$2a$10$.BlD1xTX3mKAMjYUoOs8WupwncziiwG22.yfRBgi/UJ771h5npW/y",
                    "society": "piman",
                    "first_name": "admin",
                    "family_name": "admin",
                    "createdAt": "2019-12-19T15:54:26.879Z",
                    "updatedAt": "2019-12-19T15:54:26.879Z"
                }
            }
        ]
    }
           */
    app.get('/pharmacorp/orders/listAll', Orders.listAll);

    /**
       * @api {get} /pharmacorp/orders/:id/update Request Orders list
       * @apiName List Order
       * @apiGroup Orders
       *
       *
       * @apiSuccess {Text} libelle Libelle of the Orders.
       * @apiSuccess {Date} created_at Date of create Orders.
       * @apiSuccess {Date} updated_at Last update Date of the Orders.
       * @apiSuccess {Integer} amount Total of the Orders.
       * @apiSuccess {String} address Address of the Orders.
       * @apiSuccess {Drugs} Drugs List of drugs with the quantity for the Orders.
       * @apiSuccess {User} Users The user who make the order
       * @apiSuccessExample Success-Response:
       *     HTTP/1.1 200 OK
       *   {
    "orders": {
        "id": 1,
        "user_id": 1,
        "amount": 123,
        "libelle": "modif",
        "address": "modif",
        "createdAt": "2019-12-13T09:23:08.524Z",
        "updatedAt": "2020-01-09T11:46:04.620Z",
        "drugs": [],
        "user": {
            "id": 1,
            "mail": "tezezstrreight@admin.com",
            "password": "$2a$10$bni6mBCHW05pCh26bBMe8unqRNwvLeMJejTyEMIdaKM4fJe84xQFm",
            "society": "piman",
            "first_name": "charlie",
            "family_name": "admin",
            "createdAt": "2019-12-13T09:10:44.592Z",
            "updatedAt": "2019-12-20T10:21:07.968Z"
        }
    }
}
       */
    app.get('/pharmacorp/orders/:id/list', Orders.list);

};