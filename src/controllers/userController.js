const getUser = (req, res) => {
	res.send("get user");
};

const createUser = (req, res) => {
	res.send("create user");
};

const updateUser = (req, res) => {
	res.send("update user");
};

const removeUser = (req, res) => {
	res.send("remove user");
};

export { getUser, createUser, updateUser, removeUser };
