const { db } = require('../util/admin');

exports.getAllMyCollections = (request, response) => {
	db
        .collection('mycollections')
        .where('username', '==', request.user.username)
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let mycollections = [];
			data.forEach((doc) => {
				mycollections.push({
                    myCollectionId: doc.id,
                    sneakerName: doc.data().sneakerName,
                    dateOfPurchase: doc.data().dateOfPurchase,
                    purchasePrice: doc.data().purchasePrice,
                    size: doc.data().size,
                    sellingPrice: doc.data().sellingPrice,
                    image: doc.data().image,
                    soldPrice: doc.data().soldPrice,
					createdAt: doc.data().createdAt,
				});
			});
			return response.json(mycollections);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

exports.postOneMyCollection = (request, response) => {
	if (request.body.sneakerName.trim() === '') {
		return response.status(400).json({ sneakerName: 'Must not be empty' });
    }
    
    if(request.body.dateOfPurchase.trim() === '') {
        return response.status(400).json({ dateOfPurchase: 'Must not be empty' });
    }
	
	if (request.body.purchasePrice.trim() === '') {
		return response.status(400).json({ purchasePrice: 'Must not be empty' });
	}
	
	if (request.body.size.trim() === '') {
		return response.status(400).json({ size: 'Must not be empty' });
	}
	
	if (request.body.sellingPrice.trim() === '') {
		return response.status(400).json({ sellingPrice: 'Must not be empty' });
    }
    const newMyCollectionItem = {
		sneakerName: request.body.sneakerName,
		dateOfPurchase: request.body.dateOfPurchase,
		purchasePrice: request.body.purchasePrice,
		size: request.body.size,
		sellingPrice: request.body.sellingPrice,
		image: request.body.image,
        soldPrice: request.body.soldPrice,
        username: request.user.username,
        createdAt: new Date().toISOString()
    }
    db
        .collection('mycollections')
        .add(newMyCollectionItem)
        .then((doc)=>{
            const responseMyCollectionItem = newMyCollectionItem;
            responseMyCollectionItem.id = doc.id;
            return response.json(responseMyCollectionItem);
        })
        .catch((err) => {
			response.status(500).json({ error: 'Something went wrong' });
			console.error(err);
		});
};

exports.deleteMyCollection = (request, response) => {
    const document = db.doc(`/mycollections/${request.params.myCollectionId}`);
    document
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return response.status(404).json({ error: 'My Collection not found' })
            }
            if(doc.data().username !== request.user.username){
                return response.status(403).json({error:"UnAuthorized"})
           }
            return document.delete();
        })
        .then(() => {
            response.json({ message: 'Delete successfull' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

exports.editMyCollection = ( request, response ) => { 
    if(request.body.myCollectionId || request.body.createdAt){
        response.status(403).json({message: 'Not allowed to edit'});
    }
    let document = db.collection('mycollections').doc(`${request.params.myCollectionId}`);
    document.update(request.body)
    .then(()=> {
        response.json({message: 'Updated successfully'});
    })
    .catch((err) => {
        console.error(err);
        return response.status(500).json({ 
                error: err.code 
        });
    });
};