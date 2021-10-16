import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

export const withAuth: boolean = !!argv['with-auth'];