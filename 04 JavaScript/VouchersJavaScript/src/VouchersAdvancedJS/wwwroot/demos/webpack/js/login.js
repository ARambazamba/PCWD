

let login = function login(usrname, password) {
    if (usrname !== 'admin' || password !== 'pwd') {
        console.log('incorrect login');
    } else {
        console.log(`logged in using ${username} and ${password}`);
    }
}

export {login }
