define({ "api": [
  {
    "type": "post",
    "url": "/pharmacorp/drugs/create",
    "title": "Request Drugs create",
    "name": "CreateDrugs",
    "group": "Drugs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "dosage",
            "description": "<p>Dosage of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "pathology",
            "description": "<p>Pathology of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "side_effects",
            "description": "<p>Side effects of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "contraindication",
            "description": "<p>Contraindication of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of create medication.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "quantity",
            "description": "<p>Storage quantity of the drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "price",
            "description": "<p>price of the Drug.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"drugs\": {\n        \"id\": 5,\n        \"dosage\": null,\n        \"pathology\": \"Douleur l??g??re ?? mod??r??e\",\n        \"side_effects\": \"R??action d'hypersensibilit?? Choc anaphylactique Oed??me de Quincke Eryth??me cutan??\",\n        \"contraindication\": null,\n        \"description\": \"Traitement symptomatique des douleurs d'intensit?? l??g??re ?? mod??r??e et/ou des ??tats f??briles.\",\n        \"libelle\": \"Test 45\",\n        \"quantity\": 34,\n        \"price\": 6.8,\n        \"updatedAt\": \"2019-12-20T10:25:51.441Z\",\n        \"createdAt\": \"2019-12-20T10:25:51.441Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "Drugs"
  },
  {
    "type": "get",
    "url": "/pharmacorp/drugs/{id}/listAll",
    "title": "Request all Drugs",
    "name": "List_All_Drugs",
    "group": "Drugs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "dosage",
            "description": "<p>Dosage of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "pathology",
            "description": "<p>Pathology of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "side_effects",
            "description": "<p>Side effects of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "contraindication",
            "description": "<p>Contraindication of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of create medication.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "quantity",
            "description": "<p>Storage quantity of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Drug.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"list\": [\n        {\n            \"id\": 4,\n            \"dosage\": null,\n            \"pathology\": null,\n            \"side_effects\": null,\n            \"contraindication\": null,\n            \"description\": null,\n            \"libelle\": \"Test commande\",\n            \"quantity\": null,\n            \"price\": null,\n            \"createdAt\": \"2019-12-13T09:21:18.696Z\",\n            \"updatedAt\": \"2019-12-13T09:21:18.696Z\"\n        },\n        {\n            \"id\": 3,\n            \"dosage\": \"Chez l'enfant, elles doivent ??tre r??guli??rement espac??es, y compris la nuit, de pr??f??rence de 6 heures, et d'au moins 4 heures.Chez l 'adulte, elles doivent ??tre espac??es d'au moins 4 heures.\",\n            \"pathology\": \"Douleur l??g??re ?? mod??r??e\",\n            \"side_effects\": \"R??action d'hypersensibilit?? Choc anaphylactique Oed??me de Quincke Eryth??me cutan??\",\n            \"contraindication\": null,\n            \"description\": \"Traitement symptomatique des douleurs d'intensit?? l??g??re ?? mod??r??e et/ou des ??tats f??briles.\",\n            \"libelle\": \"efferalgan\",\n            \"quantity\": 4,\n            \"price\": 6.8,\n            \"createdAt\": \"2019-12-13T09:12:06.445Z\",\n            \"updatedAt\": \"2019-12-20T10:26:00.046Z\"\n        },\n        {\n            \"id\": 2,\n            \"dosage\": null,\n            \"pathology\": \"Douleur l??g??re ?? mod??r??e\",\n            \"side_effects\": \"R??action d'hypersensibilit?? Choc anaphylactique Oed??me de Quincke Eryth??me cutan??\",\n            \"contraindication\": null,\n            \"description\": \"Traitement symptomatique des douleurs d'intensit?? l??g??re ?? mod??r??e et/ou des ??tats f??briles.\",\n            \"libelle\": \"Test\",\n            \"quantity\": 10,\n            \"price\": 2.3,\n            \"createdAt\": \"2019-12-13T09:11:40.961Z\",\n            \"updatedAt\": \"2019-12-13T09:11:40.961Z\"\n        },\n        {\n            \"id\": 1,\n            \"dosage\": null,\n            \"pathology\": \"Douleur l??g??re ?? mod??r??e\",\n            \"side_effects\": \"R??action d'hypersensibilit?? Choc anaphylactique Oed??me de Quincke Eryth??me cutan??\",\n            \"contraindication\": null,\n            \"description\": \"Traitement symptomatique des douleurs d'intensit?? l??g??re ?? mod??r??e et/ou des ??tats f??briles.\",\n            \"libelle\": \"Test\",\n            \"quantity\": 6,\n            \"price\": 2.3,\n            \"createdAt\": \"2019-12-13T09:11:26.516Z\",\n            \"updatedAt\": \"2019-12-13T09:11:26.516Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "Drugs"
  },
  {
    "type": "get",
    "url": "/pharmacorp/drugs/{id}/list",
    "title": "Request a specific Drugs",
    "name": "List_Drugs",
    "group": "Drugs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Drug unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "dosage",
            "description": "<p>Dosage of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "pathology",
            "description": "<p>Pathology of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "side_effects",
            "description": "<p>Side effects of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "contraindication",
            "description": "<p>Contraindication of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of create medication.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "quantity",
            "description": "<p>Storage quantity of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Drug.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"drugs\": {\n        \"id\": 2,\n        \"dosage\": \"Chez l'enfant, elles doivent ??tre r??guli??rement espac??es, y compris la nuit, de pr??f??rence de 6 heures, et d'au moins 4 heures.Chez l 'adulte, elles doivent ??tre espac??es d'au moins 4 heures.\",\n        \"pathology\": \"Douleur l??g??re ?? mod??r??e\",\n        \"side_effects\": \"R??action d'hypersensibilit?? Choc anaphylactique Oed??me de Quincke Eryth??me cutan??\",\n        \"contraindication\": null,\n        \"description\": \"Traitement symptomatique des douleurs d'intensit?? l??g??re ?? mod??r??e et/ou des ??tats f??briles.\",\n        \"libelle\": \"efferalgan\",\n        \"quantity\": 4,\n        \"price\": 2.3,\n        \"createdAt\": \"2019-12-13T09:11:40.961Z\",\n        \"updatedAt\": \"2019-12-20T10:30:14.850Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n    \"message\": \"Drug Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "Drugs"
  },
  {
    "type": "put",
    "url": "/pharmacorp/drugs/{id}/update",
    "title": "Request Drugs update",
    "name": "Update_Drugs",
    "group": "Drugs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "dosage",
            "description": "<p>Dosage of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "pathology",
            "description": "<p>Pathology of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "side_effects",
            "description": "<p>Side effects of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "contraindication",
            "description": "<p>Contraindication of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of create medication.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "quantity",
            "description": "<p>Storage quantity of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Drug.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"drugs\": {\n        \"id\": 2,\n        \"dosage\": \"Chez l'enfant, elles doivent ??tre r??guli??rement espac??es, y compris la nuit, de pr??f??rence de 6 heures, et d'au moins 4 heures.Chez l 'adulte, elles doivent ??tre espac??es d'au moins 4 heures.\",\n        \"pathology\": \"Douleur l??g??re ?? mod??r??e\",\n        \"side_effects\": \"R??action d'hypersensibilit?? Choc anaphylactique Oed??me de Quincke Eryth??me cutan??\",\n        \"contraindication\": null,\n        \"description\": \"Traitement symptomatique des douleurs d'intensit?? l??g??re ?? mod??r??e et/ou des ??tats f??briles.\",\n        \"libelle\": \"efferalgan\",\n        \"quantity\": 4,\n        \"price\": 2.3,\n        \"createdAt\": \"2019-12-13T09:11:40.961Z\",\n        \"updatedAt\": \"2019-12-20T10:30:14.850Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n    \"message\": \"Drugs Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "Drugs"
  },
  {
    "type": "post",
    "url": "/pharmacorp/orders/create",
    "title": "Request Orders create",
    "name": "Create_Orders",
    "group": "Orders",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of create Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "amount",
            "description": "<p>Total of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Adrdress of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "DrugsOrders",
            "optional": false,
            "field": "drugsorders",
            "description": "<p>List of drugs with the quantity for the Orders.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"orders\": {\n        \"id\": 2,\n        \"user_id\": 1,\n        \"amount\": 123,\n        \"libelle\": \"Test commande\",\n        \"address\": \"23 avenue jean mace 68908 Lyon\",\n        \"updatedAt\": \"2019-12-20T10:38:24.635Z\",\n        \"createdAt\": \"2019-12-20T10:38:24.635Z\"\n    },\n    \"drugsorders\": [\n        {\n            \"id\": 4,\n            \"drug_id\": 1,\n            \"quantity\": 3,\n            \"order_id\": 2,\n            \"createdAt\": \"2019-12-20T10:38:24.674Z\",\n            \"updatedAt\": \"2019-12-20T10:38:24.674Z\"\n        },\n        {\n            \"id\": 5,\n            \"drug_id\": 2,\n            \"quantity\": 2,\n            \"order_id\": 2,\n            \"createdAt\": \"2019-12-20T10:38:24.674Z\",\n            \"updatedAt\": \"2019-12-20T10:38:24.674Z\"\n        },\n        {\n            \"id\": 6,\n            \"drug_id\": 3,\n            \"quantity\": 4,\n            \"order_id\": 2,\n            \"createdAt\": \"2019-12-20T10:38:24.674Z\",\n            \"updatedAt\": \"2019-12-20T10:38:24.674Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/pharmacorp/orders/listAll",
    "title": "Request Orders list All",
    "name": "List_All_Orders",
    "group": "Orders",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of create Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "amount",
            "description": "<p>Total of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Drugs",
            "optional": false,
            "field": "Drugs",
            "description": "<p>List of drugs with the quantity for the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "Users",
            "description": "<p>The user who make the order</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n      \"list\": [\n          {\n              \"id\": 3,\n              \"user_id\": 1,\n              \"amount\": 123,\n              \"libelle\": \"Test (-??') tt\",\n              \"address\": \"23 avenu eeeefreee oui mace 68907 Lyon\",\n              \"createdAt\": \"2020-01-09T08:59:30.426Z\",\n              \"updatedAt\": \"2020-01-09T08:59:30.426Z\",\n              \"drugs\": [],\n              \"user\": {\n                  \"id\": 1,\n                  \"mail\": \"tezezstrreight@admin.com\",\n                  \"password\": \"$2a$10$.BlD1xTX3mKAMjYUoOs8WupwncziiwG22.yfRBgi/UJ771h5npW/y\",\n                  \"society\": \"piman\",\n                  \"first_name\": \"admin\",\n                  \"family_name\": \"admin\",\n                  \"createdAt\": \"2019-12-19T15:54:26.879Z\",\n                  \"updatedAt\": \"2019-12-19T15:54:26.879Z\"\n              }\n          },\n          {\n              \"id\": 2,\n              \"user_id\": 1,\n              \"amount\": 123,\n              \"libelle\": \"Test (-??') tt\",\n              \"address\": \"23 avenu eee oui mace 68907 Lyon\",\n              \"createdAt\": \"2020-01-09T08:29:57.386Z\",\n              \"updatedAt\": \"2020-01-09T08:29:57.386Z\",\n              \"drugs\": [\n                  {\n                      \"id\": 4,\n                      \"dosage\": \"test\",\n                      \"pathology\": \"test\",\n                      \"side_effects\": \"test\",\n                      \"contraindication\": null,\n                      \"description\": null,\n                      \"libelle\": null,\n                      \"quantity\": null,\n                      \"price\": null,\n                      \"createdAt\": \"2019-12-19T16:38:19.706Z\",\n                      \"updatedAt\": \"2019-12-19T16:38:19.706Z\",\n                      \"DrugsOrders\": {\n                          \"id\": 4,\n                          \"drug_id\": 1,\n                          \"quantity\": 3,\n                          \"order_id\": 2,\n                          \"createdAt\": \"2020-01-09T08:29:57.392Z\",\n                          \"updatedAt\": \"2020-01-09T08:29:57.392Z\"\n                      }\n                  },\n                  {\n                      \"id\": 5,\n                      \"dosage\": null,\n                      \"pathology\": \"Douleur l??g??re ?? mod??r??e\",\n                      \"side_effects\": \"R??action d'hypersensibilit?? Choc anaphylactique Oed??me de Quincke Eryth??me cutan??\",\n                      \"contraindication\": null,\n                      \"description\": \"Traitement symptomatique des douleurs d'intensit?? l??g??re ?? mod??r??e et/ou des ??tats f??briles.\",\n                      \"libelle\": \"Test 45\",\n                      \"quantity\": 34,\n                      \"price\": 6.8,\n                      \"createdAt\": \"2019-12-20T10:25:51.441Z\",\n                      \"updatedAt\": \"2019-12-20T10:25:51.441Z\",\n                      \"DrugsOrders\": {\n                          \"id\": 5,\n                          \"drug_id\": 2,\n                          \"quantity\": 2,\n                          \"order_id\": 2,\n                          \"createdAt\": \"2020-01-09T08:29:57.392Z\",\n                          \"updatedAt\": \"2020-01-09T08:29:57.392Z\"\n                      }\n                  }\n              ],\n              \"user\": {\n                  \"id\": 1,\n                  \"mail\": \"tezezstrreight@admin.com\",\n                  \"password\": \"$2a$10$.BlD1xTX3mKAMjYUoOs8WupwncziiwG22.yfRBgi/UJ771h5npW/y\",\n                  \"society\": \"piman\",\n                  \"first_name\": \"admin\",\n                  \"family_name\": \"admin\",\n                  \"createdAt\": \"2019-12-19T15:54:26.879Z\",\n                  \"updatedAt\": \"2019-12-19T15:54:26.879Z\"\n              }\n          },\n          {\n              \"id\": 1,\n              \"user_id\": 1,\n              \"amount\": 123,\n              \"libelle\": \"Test commande\",\n              \"address\": \"23 avenue jean mace 68908 Lyon\",\n              \"createdAt\": \"2020-01-09T08:28:31.106Z\",\n              \"updatedAt\": \"2020-01-09T08:28:31.106Z\",\n              \"drugs\": [\n                  {\n                      \"id\": 1,\n                      \"dosage\": null,\n                      \"pathology\": \"Douleur l??g??re ?? mod??r??e\",\n                      \"side_effects\": \"R??action d'hypersensibilit?? Choc anaphylactique Oed??me de Quincke Eryth??me cutan??\",\n                      \"contraindication\": null,\n                      \"description\": \"Traitement symptomatique des douleurs d'intensit?? l??g??re ?? mod??r??e et/ou des ??tats f??briles.\",\n                      \"libelle\": \"Test 45\",\n                      \"quantity\": 34,\n                      \"price\": 6.8,\n                      \"createdAt\": \"2019-12-19T15:52:26.117Z\",\n                      \"updatedAt\": \"2019-12-19T15:52:26.117Z\",\n                      \"DrugsOrders\": {\n                          \"id\": 1,\n                          \"drug_id\": 1,\n                          \"quantity\": 3,\n                          \"order_id\": 1,\n                          \"createdAt\": \"2020-01-09T08:28:31.165Z\",\n                          \"updatedAt\": \"2020-01-09T08:28:31.165Z\"\n                      }\n                  },\n                  {\n                      \"id\": 2,\n                      \"dosage\": null,\n                      \"pathology\": \"Douleur l??g??re ?? mod??r??e\",\n                      \"side_effects\": \"R??action d'hypersensibilit?? Choc anaphylactique Oed??me de Quincke Eryth??me cutan??\",\n                      \"contraindication\": null,\n                      \"description\": \"Traitement symptomatique des douleurs d'intensit?? l??g??re ?? mod??r??e et/ou des ??tats f??briles.\",\n                      \"libelle\": \"Test 45\",\n                      \"quantity\": 34,\n                      \"price\": 6.8,\n                      \"createdAt\": \"2019-12-19T15:52:37.091Z\",\n                      \"updatedAt\": \"2019-12-19T15:52:37.091Z\",\n                      \"DrugsOrders\": {\n                          \"id\": 2,\n                          \"drug_id\": 2,\n                          \"quantity\": 2,\n                          \"order_id\": 1,\n                          \"createdAt\": \"2020-01-09T08:28:31.165Z\",\n                          \"updatedAt\": \"2020-01-09T08:28:31.165Z\"\n                      }\n                  },\n                  {\n                      \"id\": 3,\n                      \"dosage\": \"test\",\n                      \"pathology\": \"test\",\n                      \"side_effects\": \"test\",\n                      \"contraindication\": null,\n                      \"description\": null,\n                      \"libelle\": null,\n                      \"quantity\": null,\n                      \"price\": null,\n                      \"createdAt\": \"2019-12-19T16:36:55.912Z\",\n                      \"updatedAt\": \"2019-12-19T16:36:55.912Z\",\n                      \"DrugsOrders\": {\n                          \"id\": 3,\n                          \"drug_id\": 3,\n                          \"quantity\": 4,\n                          \"order_id\": 1,\n                          \"createdAt\": \"2020-01-09T08:28:31.165Z\",\n                          \"updatedAt\": \"2020-01-09T08:28:31.165Z\"\n                      }\n                  }\n              ],\n              \"user\": {\n                  \"id\": 1,\n                  \"mail\": \"tezezstrreight@admin.com\",\n                  \"password\": \"$2a$10$.BlD1xTX3mKAMjYUoOs8WupwncziiwG22.yfRBgi/UJ771h5npW/y\",\n                  \"society\": \"piman\",\n                  \"first_name\": \"admin\",\n                  \"family_name\": \"admin\",\n                  \"createdAt\": \"2019-12-19T15:54:26.879Z\",\n                  \"updatedAt\": \"2019-12-19T15:54:26.879Z\"\n              }\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/pharmacorp/orders/:id/update",
    "title": "Request Orders list",
    "name": "List_Order",
    "group": "Orders",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of create Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "amount",
            "description": "<p>Total of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Drugs",
            "optional": false,
            "field": "Drugs",
            "description": "<p>List of drugs with the quantity for the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "Users",
            "description": "<p>The user who make the order</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"orders\": {\n        \"id\": 1,\n        \"user_id\": 1,\n        \"amount\": 123,\n        \"libelle\": \"modif\",\n        \"address\": \"modif\",\n        \"createdAt\": \"2019-12-13T09:23:08.524Z\",\n        \"updatedAt\": \"2020-01-09T11:46:04.620Z\",\n        \"drugs\": [],\n        \"user\": {\n            \"id\": 1,\n            \"mail\": \"tezezstrreight@admin.com\",\n            \"password\": \"$2a$10$bni6mBCHW05pCh26bBMe8unqRNwvLeMJejTyEMIdaKM4fJe84xQFm\",\n            \"society\": \"piman\",\n            \"first_name\": \"charlie\",\n            \"family_name\": \"admin\",\n            \"createdAt\": \"2019-12-13T09:10:44.592Z\",\n            \"updatedAt\": \"2019-12-20T10:21:07.968Z\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/pharmacorp/orders/listAll",
    "title": "Request Orders create",
    "name": "List_all_Orders",
    "group": "Orders",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of create Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "amount",
            "description": "<p>Total of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Adrdress of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Drugs",
            "optional": false,
            "field": "Drugs",
            "description": "<p>List of drugs with the quantity for the Orders.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"list\": [\n        {\n            \"id\": 2,\n            \"user_id\": 1,\n            \"amount\": 123,\n            \"libelle\": \"Test commande\",\n            \"address\": \"23 avenue jean mace 68908 Lyon\",\n            \"createdAt\": \"2019-12-20T10:38:24.635Z\",\n            \"updatedAt\": \"2019-12-20T10:38:24.635Z\",\n            \"drugs\": [\n                {\n                    \"id\": 4,\n                    \"dosage\": null,\n                    \"pathology\": null,\n                    \"side_effects\": null,\n                    \"contraindication\": null,\n                    \"description\": null,\n                    \"libelle\": \"Test commande\",\n                    \"quantity\": null,\n                    \"price\": null,\n                    \"createdAt\": \"2019-12-13T09:21:18.696Z\",\n                    \"updatedAt\": \"2019-12-13T09:21:18.696Z\",\n                    \"DrugsOrders\": {\n                        \"id\": 4,\n                        \"drug_id\": 1,\n                        \"quantity\": 3,\n                        \"order_id\": 2,\n                        \"createdAt\": \"2019-12-20T10:38:24.674Z\",\n                        \"updatedAt\": \"2019-12-20T10:38:24.674Z\"\n                    }\n                }\n            ]\n        },\n        {\n            \"id\": 1,\n            \"user_id\": 1,\n            \"amount\": 123,\n            \"libelle\": \"Test commande\",\n            \"address\": \"23 avenue jean mace 68908 Lyon\",\n            \"createdAt\": \"2019-12-13T09:23:08.524Z\",\n            \"updatedAt\": \"2019-12-13T09:23:08.524Z\",\n            \"drugs\": [\n                {\n                    \"id\": 1,\n                    \"dosage\": null,\n                    \"pathology\": \"Douleur l??g??re ?? mod??r??e\",\n                    \"side_effects\": \"R??action d'hypersensibilit?? Choc anaphylactique Oed??me de Quincke Eryth??me cutan??\",\n                    \"contraindication\": null,\n                    \"description\": \"Traitement symptomatique des douleurs d'intensit?? l??g??re ?? mod??r??e et/ou des ??tats f??briles.\",\n                    \"libelle\": \"Test\",\n                    \"quantity\": 6,\n                    \"price\": 2.3,\n                    \"createdAt\": \"2019-12-13T09:11:26.516Z\",\n                    \"updatedAt\": \"2019-12-13T09:11:26.516Z\",\n                    \"DrugsOrders\": {\n                        \"id\": 1,\n                        \"drug_id\": 1,\n                        \"quantity\": 3,\n                        \"order_id\": 1,\n                        \"createdAt\": \"2019-12-13T09:23:08.563Z\",\n                        \"updatedAt\": \"2019-12-13T09:23:08.563Z\"\n                    }\n                },\n                {\n                    \"id\": 2,\n                    \"dosage\": \"Chez l'enfant, elles doivent ??tre r??guli??rement espac??es, y compris la nuit, de pr??f??rence de 6 heures, et d'au moins 4 heures.Chez l 'adulte, elles doivent ??tre espac??es d'au moins 4 heures.\",\n                    \"pathology\": \"Douleur l??g??re ?? mod??r??e\",\n                    \"side_effects\": \"R??action d'hypersensibilit?? Choc anaphylactique Oed??me de Quincke Eryth??me cutan??\",\n                    \"contraindication\": null,\n                    \"description\": \"Traitement symptomatique des douleurs d'intensit?? l??g??re ?? mod??r??e et/ou des ??tats f??briles.\",\n                    \"libelle\": \"efferalgan\",\n                    \"quantity\": 4,\n                    \"price\": 2.3,\n                    \"createdAt\": \"2019-12-13T09:11:40.961Z\",\n                    \"updatedAt\": \"2019-12-20T10:30:14.850Z\",\n                    \"DrugsOrders\": {\n                        \"id\": 2,\n                        \"drug_id\": 2,\n                        \"quantity\": 2,\n                        \"order_id\": 1,\n                        \"createdAt\": \"2019-12-13T09:23:08.563Z\",\n                        \"updatedAt\": \"2019-12-13T09:23:08.563Z\"\n                    }\n                },\n                {\n                    \"id\": 3,\n                    \"dosage\": \"Chez l'enfant, elles doivent ??tre r??guli??rement espac??es, y compris la nuit, de pr??f??rence de 6 heures, et d'au moins 4 heures.Chez l 'adulte, elles doivent ??tre espac??es d'au moins 4 heures.\",\n                    \"pathology\": \"Douleur l??g??re ?? mod??r??e\",\n                    \"side_effects\": \"R??action d'hypersensibilit?? Choc anaphylactique Oed??me de Quincke Eryth??me cutan??\",\n                    \"contraindication\": null,\n                    \"description\": \"Traitement symptomatique des douleurs d'intensit?? l??g??re ?? mod??r??e et/ou des ??tats f??briles.\",\n                    \"libelle\": \"efferalgan\",\n                    \"quantity\": 4,\n                    \"price\": 6.8,\n                    \"createdAt\": \"2019-12-13T09:12:06.445Z\",\n                    \"updatedAt\": \"2019-12-20T10:26:00.046Z\",\n                    \"DrugsOrders\": {\n                        \"id\": 3,\n                        \"drug_id\": 3,\n                        \"quantity\": 4,\n                        \"order_id\": 1,\n                        \"createdAt\": \"2019-12-13T09:23:08.563Z\",\n                        \"updatedAt\": \"2019-12-13T09:23:08.563Z\"\n                    }\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "Orders"
  },
  {
    "type": "put",
    "url": "/pharmacorp/orders/:id/update",
    "title": "Request Orders update",
    "name": "Update_Orders",
    "group": "Orders",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of create Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "amount",
            "description": "<p>Total of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Adrdress of the Orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "DrugsOrders",
            "optional": false,
            "field": "drugsorders",
            "description": "<p>List of drugs with the quantity for the Orders.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"orders\": {\n        \"id\": 1,\n        \"user_id\": 1,\n        \"amount\": \"123\",\n        \"libelle\": \"modif\",\n        \"address\": \"modif\",\n        \"createdAt\": \"2019-12-13T09:23:08.524Z\",\n        \"updatedAt\": \"2020-01-09T11:46:04.620Z\"\n    },\n    \"drugsorders\": [\n        {\n            \"id\": 10,\n            \"drug_id\": 1,\n            \"quantity\": 5,\n            \"order_id\": 1,\n            \"createdAt\": \"2020-01-09T11:46:04.635Z\",\n            \"updatedAt\": \"2020-01-09T11:46:04.635Z\"\n        },\n        {\n            \"id\": 11,\n            \"drug_id\": 2,\n            \"quantity\": 6,\n            \"order_id\": 1,\n            \"createdAt\": \"2020-01-09T11:46:04.635Z\",\n            \"updatedAt\": \"2020-01-09T11:46:04.635Z\"\n        },\n        {\n            \"id\": 12,\n            \"drug_id\": 3,\n            \"quantity\": 9,\n            \"order_id\": 1,\n            \"createdAt\": \"2020-01-09T11:46:04.635Z\",\n            \"updatedAt\": \"2020-01-09T11:46:04.635Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "Orders"
  },
  {
    "type": "post",
    "url": "/pharmacorp/drugs/create",
    "title": "Request Right create",
    "name": "Create_Right",
    "group": "Rights",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle of the Right.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of create Right.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the Right.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"rights\": {\n        \"id\": 1,\n        \"libelle\": \"update_drugs\",\n        \"updatedAt\": \"2019-12-12T10:58:32.301Z\",\n        \"createdAt\": \"2019-12-12T10:58:32.301Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "Rights"
  },
  {
    "type": "get",
    "url": "/pharmacorp/rightd/{id}/listAll",
    "title": "Request all Rights",
    "name": "List_All_Rights",
    "group": "Rights",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle of the Right.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of create Right.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the Right.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"list\": [\n        {\n            \"id\": 2,\n            \"libelle\": \"create_drugs\",\n            \"createdAt\": \"2019-12-13T09:11:05.783Z\",\n            \"updatedAt\": \"2019-12-13T09:11:05.783Z\"\n        },\n        {\n            \"id\": 1,\n            \"libelle\": \"update_drugs\",\n            \"createdAt\": \"2019-12-13T09:10:59.919Z\",\n            \"updatedAt\": \"2019-12-13T09:10:59.919Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "Rights"
  },
  {
    "type": "get",
    "url": "/pharmacorp/right/{id}/list",
    "title": "Request a specific Right",
    "name": "List_Rights",
    "group": "Rights",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Right unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle of the Right.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of create Right.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the Right.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"rights\": {\n        \"id\": 1,\n        \"libelle\": \"update_drugs\",\n        \"createdAt\": \"2019-12-12T10:58:32.301Z\",\n        \"updatedAt\": \"2019-12-12T10:58:32.301Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n    \"message\": \"Right Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "Rights"
  },
  {
    "type": "put",
    "url": "/pharmacorp/right/{id}/update",
    "title": "Request Right update",
    "name": "Update_Rights",
    "group": "Rights",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Right unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle of the Drug.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of create medication.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the Drug.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"rights\": {\n        \"id\": 1,\n        \"libelle\": \"view_drugs\",\n        \"createdAt\": \"2019-12-12T10:58:32.301Z\",\n        \"updatedAt\": \"2019-12-12T11:16:26.904Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n    \"message\": \"Right Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "Rights"
  },
  {
    "type": "get",
    "url": "/pharmacorp/user/listAll",
    "title": "Request get All User information",
    "name": "List_All_User",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Mail of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "society",
            "description": "<p>Society of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family_name",
            "description": "<p>Family Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fisrt_name",
            "description": "<p>First Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Registered Date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Rights",
            "optional": false,
            "field": "rights",
            "description": "<p>List of rights of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"list\": [\n        {\n            \"id\": 2,\n            \"mail\": \"admin@admin.com\",\n            \"password\": \"$2a$10$oXSTQj9n/4RvTLJmWqfifen7aEVIHssf2NMBS8vJh/ZdK2yJqgm3W\",\n            \"society\": \"piman\",\n            \"first_name\": \"admin\",\n            \"family_name\": \"admin\",\n            \"createdAt\": \"2019-12-20T08:59:50.387Z\",\n            \"updatedAt\": \"2019-12-20T08:59:50.387Z\",\n            \"rights\": []\n        },\n        {\n            \"id\": 1,\n            \"mail\": \"tezezstrreight@admin.com\",\n            \"password\": \"$2a$10$bni6mBCHW05pCh26bBMe8unqRNwvLeMJejTyEMIdaKM4fJe84xQFm\",\n            \"society\": \"piman\",\n            \"first_name\": \"admin\",\n            \"family_name\": \"admin\",\n            \"createdAt\": \"2019-12-13T09:10:44.592Z\",\n            \"updatedAt\": \"2019-12-13T09:10:44.592Z\",\n            \"rights\": [\n                {\n                    \"id\": 1,\n                    \"libelle\": \"update_drugs\",\n                    \"createdAt\": \"2019-12-13T09:10:59.919Z\",\n                    \"updatedAt\": \"2019-12-13T09:10:59.919Z\",\n                    \"UsersRights\": {\n                        \"id\": 1,\n                        \"user_id\": 1,\n                        \"right_id\": 1,\n                        \"createdAt\": \"2019-12-13T09:10:44.604Z\",\n                        \"updatedAt\": \"2019-12-13T09:10:44.604Z\"\n                    }\n                },\n                {\n                    \"id\": 2,\n                    \"libelle\": \"create_drugs\",\n                    \"createdAt\": \"2019-12-13T09:11:05.783Z\",\n                    \"updatedAt\": \"2019-12-13T09:11:05.783Z\",\n                    \"UsersRights\": {\n                        \"id\": 2,\n                        \"user_id\": 1,\n                        \"right_id\": 2,\n                        \"createdAt\": \"2019-12-13T09:10:44.604Z\",\n                        \"updatedAt\": \"2019-12-13T09:10:44.604Z\"\n                    }\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/pharmacorp/user/{id}/list",
    "title": "Request get a specific a User",
    "name": "List_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Mail of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "society",
            "description": "<p>Society of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family_name",
            "description": "<p>Family Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fisrt_name",
            "description": "<p>First Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Registered Date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Rights",
            "optional": false,
            "field": "rights",
            "description": "<p>List of rights of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n \"user\": {\n        \"id\": 1,\n        \"mail\": \"tezezstrreight@admin.com\",\n        \"password\": \"$2a$10$bni6mBCHW05pCh26bBMe8unqRNwvLeMJejTyEMIdaKM4fJe84xQFm\",\n        \"society\": \"piman\",\n        \"first_name\": \"admin\",\n        \"family_name\": \"admin\",\n        \"createdAt\": \"2019-12-13T09:10:44.592Z\",\n        \"updatedAt\": \"2019-12-13T09:10:44.592Z\",\n        \"rights\": [\n            {\n                \"id\": 1,\n                \"libelle\": \"update_drugs\",\n                \"createdAt\": \"2019-12-13T09:10:59.919Z\",\n                \"updatedAt\": \"2019-12-13T09:10:59.919Z\",\n                \"UsersRights\": {\n                    \"id\": 1,\n                    \"user_id\": 1,\n                    \"right_id\": 1,\n                    \"createdAt\": \"2019-12-13T09:10:44.604Z\",\n                    \"updatedAt\": \"2019-12-13T09:10:44.604Z\"\n                }\n            },\n            {\n                \"id\": 2,\n                \"libelle\": \"create_drugs\",\n                \"createdAt\": \"2019-12-13T09:11:05.783Z\",\n                \"updatedAt\": \"2019-12-13T09:11:05.783Z\",\n                \"UsersRights\": {\n                    \"id\": 2,\n                    \"user_id\": 1,\n                    \"right_id\": 2,\n                    \"createdAt\": \"2019-12-13T09:10:44.604Z\",\n                    \"updatedAt\": \"2019-12-13T09:10:44.604Z\"\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n    \"message\": \"User Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/pharmacorp/user/signIn",
    "title": "Request User connexion",
    "name": "SignIn",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Mail of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Rights",
            "optional": false,
            "field": "rights",
            "description": "<p>List of rights of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 OK\n  {\n    \"user\": {\n        \"id\": 3,\n        \"mail\": \"test@admin.com\",\n        \"password\": \"$2a$10$0MqY1LEzsEEBP0YgXlq9/uPNpSbVSxKsXRnAy16951rjci9xL7Wwq\",\n        \"first_name\": \"admin\",\n        \"family_name\": \"admin\",\n        \"society\": \"piman\",\n        \"updatedAt\": \"2019-12-20T10:17:10.408Z\",\n        \"createdAt\": \"2019-12-20T10:17:10.408Z\"\n    },\n    \"rights\": [\n        {\n            \"id\": 5,\n            \"right_id\": 1,\n            \"user_id\": 3,\n            \"createdAt\": \"2019-12-20T10:17:10.421Z\",\n            \"updatedAt\": \"2019-12-20T10:17:10.421Z\"\n        },\n        {\n            \"id\": 6,\n            \"right_id\": 2,\n            \"user_id\": 3,\n            \"createdAt\": \"2019-12-20T10:17:10.421Z\",\n            \"updatedAt\": \"2019-12-20T10:17:10.421Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n    \"error\": \"Invalid e-mail or password !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/pharmacorp/user/signUp",
    "title": "Request User create",
    "name": "SignUp",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Mail of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "society",
            "description": "<p>Society of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family_name",
            "description": "<p>Family Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fisrt_name",
            "description": "<p>First Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Registered Date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Rights",
            "optional": false,
            "field": "rights",
            "description": "<p>List of rights of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"user\": {\n        \"id\": 1,\n        \"family_name\": \"admin\",\n        \"first_name\": \"admin\"\n    },\n    \"rights\": [\n        {\n            \"id\": 1,\n            \"libelle\": \"update_drugs\",\n            \"createdAt\": \"2019-12-13T09:10:59.919Z\",\n            \"updatedAt\": \"2019-12-13T09:10:59.919Z\",\n            \"UsersRights\": {\n                \"id\": 1,\n                \"user_id\": 1,\n                \"right_id\": 1,\n                \"createdAt\": \"2019-12-13T09:10:44.604Z\",\n                \"updatedAt\": \"2019-12-13T09:10:44.604Z\"\n            }\n        },\n        {\n            \"id\": 2,\n            \"libelle\": \"create_drugs\",\n            \"createdAt\": \"2019-12-13T09:11:05.783Z\",\n            \"updatedAt\": \"2019-12-13T09:11:05.783Z\",\n            \"UsersRights\": {\n                \"id\": 2,\n                \"user_id\": 1,\n                \"right_id\": 2,\n                \"createdAt\": \"2019-12-13T09:10:44.604Z\",\n                \"updatedAt\": \"2019-12-13T09:10:44.604Z\"\n            }\n        }\n    ],\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc2ODM2NzU2fQ.f9ppZvdThzhqEEQoWkdGqeFWcR7YJjIR8RFyL6L41y0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n    \"error\": \"An user is already registered with this email !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/pharmacorp/user/{id}/update",
    "title": "Request User update",
    "name": "Update_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Mail of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "society",
            "description": "<p>Society of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family_name",
            "description": "<p>Family Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fisrt_name",
            "description": "<p>First Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Registered Date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last update Date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Rights",
            "optional": false,
            "field": "rights",
            "description": "<p>List of rights of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"user\": {\n        \"id\": 1,\n        \"mail\": \"tezezstrreight@admin.com\",\n        \"password\": \"$2a$10$bni6mBCHW05pCh26bBMe8unqRNwvLeMJejTyEMIdaKM4fJe84xQFm\",\n        \"society\": \"piman\",\n        \"first_name\": \"charlie\",\n        \"family_name\": \"admin\",\n        \"createdAt\": \"2019-12-13T09:10:44.592Z\",\n        \"updatedAt\": \"2019-12-20T10:21:07.968Z\",\n        \"rights\": [\n            {\n                \"id\": 1,\n                \"libelle\": \"update_drugs\",\n                \"createdAt\": \"2019-12-13T09:10:59.919Z\",\n                \"updatedAt\": \"2019-12-13T09:10:59.919Z\",\n                \"UsersRights\": {\n                    \"id\": 1,\n                    \"user_id\": 1,\n                    \"right_id\": 1,\n                    \"createdAt\": \"2019-12-13T09:10:44.604Z\",\n                    \"updatedAt\": \"2019-12-13T09:10:44.604Z\"\n                }\n            },\n            {\n                \"id\": 2,\n                \"libelle\": \"create_drugs\",\n                \"createdAt\": \"2019-12-13T09:11:05.783Z\",\n                \"updatedAt\": \"2019-12-13T09:11:05.783Z\",\n                \"UsersRights\": {\n                    \"id\": 2,\n                    \"user_id\": 1,\n                    \"right_id\": 2,\n                    \"createdAt\": \"2019-12-13T09:10:44.604Z\",\n                    \"updatedAt\": \"2019-12-13T09:10:44.604Z\"\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n    \"message\": \"User Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/index.js",
    "groupTitle": "User"
  }
] });
