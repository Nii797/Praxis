const ascending_test = data => {
    return data.sort();
};

const descending_test = data => {
    return sorting.reverse(); 
};

const array_susun = data => {
    let susunan = array_susunan();
    return susunan.susun();
};

module.exports = {
    ascending_test,
    descending_test,
    array_susun
}

