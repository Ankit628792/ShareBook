const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
    purge: {
        enabled: true,
        content: [
            '*.html',
            '*.js',
            '*.jsx'
        ]
    }
};
