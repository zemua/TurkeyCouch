db.createUser(
        {
            user: "turkeyuser",
            pwd: "turkeypass",
            roles: [
                {
                    role: "readWrite",
                    db: "turkeydb"
                }
            ]
        }
);