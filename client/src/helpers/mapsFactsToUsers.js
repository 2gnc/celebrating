export default (facts, users) => {
    const updatedUsers = {...users};
    Object.entries(facts).forEach((entry) => {
        updatedUsers[entry[0]].fact = entry[1];
        updatedUsers[entry[0]].username = undefined;

    });
    return updatedUsers
}
