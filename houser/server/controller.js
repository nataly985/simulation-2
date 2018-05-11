var houses = []

module.exports = {
    read: (req, res) => {
        const db = req.app.get('db');

        db.read_house([req.params.id, req.query.desc])
            .then(() => res.status(200).send('all good'))
            .catch(() => res.status(500).send("couldn't updated"))
    },
    create: (req, res) => {
        const db = req.app.get('db');
        const { id, name, address, city, state, zipcode } = req.body;

        db.create_house([req.params.id, req.query.desc])
            .then(() => res.status(200).send('all good'))
            .catch(() => res.status(500).send("couldn't updated"))

    },
    delete: (req, res) => {
        const db = req.app.get('db');
        const { params } = req;

        db.houses([params.id])
            .then(() => res.status(200).send('all good'))
            .catch(() => res.status(500).send("could't update"));
    }
}


