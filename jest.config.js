module.exports = {
    collectCoverage: true,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    preset: 'react-native',
    setupFiles: ['<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js'],
    moduleNameMapper: {
        '.+\\.(png)$': 'jest-transform-stub',
    },
};
