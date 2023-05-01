db.createUser(
        {
            user: "turkeydb",
            pwd: "turkey123",
            roles: [
                {
                    role: "readWrite",
                    db: "turkeydb"
                }
            ]
        }
);