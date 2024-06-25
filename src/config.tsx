

if (typeof window === 'undefined') {
    const dotenv  = require('dotenv');
    dotenv.config()
}

export const ACCESS_TOKEN = process.env.KEY;
