# pharmacorpB

Lien our consulter la documentation :
http://localhost:8000/doc/


Pour lancer le projet en local executer la commande
npm install
npm run start:dev

La base de donnée utilsé est postgre sql. Pour utiliser le projet modifier les champs renseigné dans le fichier config du dossier config.json en fonction de votre sgbd.

Pour lancer le script de creation de la base de donnée:

sequelize db:migrate

Pour lancer les tests unitaire executer la commande

npm test

Pour effectuer des test fonctionnel depuis postman voici les code json a rentrer dans le body pour faire des insertion et modification dans les differentes tables ci dessous : (pour les requetes get se référer a la documentation)

Creation d'un Utilisateur :
route {post}: 
http://localhost:8000/pharmacorp/user/signUp

code json :

{
	"mail":"test@admin.com",
	"password":"admin",
	"society":"piman",
	"family_name":"admin",
	"first_name":"admin",
	"usersrights":[
		{"right_id":1},
		{"right_id":2}
		
	]
}

Connexion d'un Utilisateur :
route {post}: 
http://localhost:8000/pharmacorp/user/signIn
code json :

{
	"mail":"test@admin.com",
	"password":"admin",
	"society":"piman",
	"family_name":"admin",
	"first_name":"admin",
	"usersrights":[
		{"right_id":1},
		{"right_id":2}
		
	]
}


Update d'un Utilisateur :
route {put}: 
http://localhost:8000/pharmacorp/user/1/update
code json :

{
	"mail":"charlie@gas.com",
	"password":"admin",
	"society":"sncf",
	"family_name":"gas",
	"first_name":"charlie"
}


Creation d'un medicament :
route {post}: 
http://localhost:8000/pharmacorp/drugs/create
code json :

{
	"ufdtr":2357087,
    "pathology": "Douleur légère à modérée",
    "side_effects":"Réaction d'hypersensibilité Choc anaphylactique Oedème de Quincke Erythème cutané",
    "contraindication":"Hypersensibilité paracétamol Insuffisance hépatocellulaire sévère Enfant avant 6 ans Consommation d'alcool",
    "description": "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
    "libelle": "Test 45",
    "quantity":34,
    "price":6.8
	
}

Creation d'un medicament :
route {post}: 
http://localhost:8000/pharmacorp/drugs/create
code json :

{
	"ufdtr":2357087,
    "pathology": "Douleur légère à modérée",
    "side_effects":"Réaction d'hypersensibilité Choc anaphylactique Oedème de Quincke Erythème cutané",
    "contraindication":"Hypersensibilité paracétamol Insuffisance hépatocellulaire sévère Enfant avant 6 ans Consommation d'alcool",
    "description": "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
    "libelle": "Test 45",
    "quantity":34,
    "price":6.8
	
}



Modification d'un medicament :
route {put}: 
http://localhost:8000/pharmacorp/drugs/2/update
code json :

{
	"dosage": "Chez l'enfant, elles doivent être régulièrement espacées, y compris la nuit, de préférence de 6 heures, et d'au moins 4 heures.Chez l 'adulte, elles doivent être espacées d'au moins 4 heures.",
    "pathology": "Douleur légère à modérée",
    "side_effects":"Réaction d'hypersensibilité Choc anaphylactique Oedème de Quincke Erythème cutané",
    "contraindication":"Hypersensibilité paracétamol Insuffisance hépatocellulaire sévère Enfant avant 6 ans Consommation d'alcool",
    "description": "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
    "libelle": "efferalgan",
	"quantity":4

}




Creation d'un droit :
route {post}: 
http://localhost:8000/pharmacorp/right/create
code json :

{
	"libelle":"create_drugs"
}


Modification d'un droit :
route {put}: 
http://localhost:8000/pharmacorp/right/1/update
code json :

{
	"libelle":"view_drugs"
}


Creation d'une commande :
route {post}: 
http://localhost:8000/pharmacorp/orders/create
code json :

{
	"user_id": 1,
    "amount":"123",
    "libelle":"Test (-è') tt",
    "address": "oui ouii freee oui mace 68907 Lyon",
    "drugsorders":[{
    	"drug_id":1,
    	"quantity":3
    },
    {
    	"drug_id":2,
    	"quantity":2
    },
    {
    	"drug_id":3,
    	"quantity":4
    }]
}

Modification d'une commande :
route {put}: 
http://localhost:8000/pharmacorp/orders/1/update
code json :

{
	"user_id": 1,
    "amount":"123",
    "libelle":"modif",
    "address": "modif",
    "drugsorders":[{
    	"drug_id":1,
    	"quantity":5
    },
    {
    	"drug_id":2,
    	"quantity":6
    },
    {
    	"drug_id":3,
    	"quantity":9
    }]
}
