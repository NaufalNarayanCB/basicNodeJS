const decimalToBinary = (decimal) => decimal.toString(2);
const binaryToDecimal = (binary) => parseInt(binary, 2);
const decimalToOctal = (decimal) => decimal.toString(8);
const octalToDecimal = (octal) => parseInt(octal, 8);
const decimalToHexadecimal = (decimal) => decimal.toString(16).toUpperCase();
const hexadecimalToDecimal = (hexadecimal) => parseInt(hexadecimal, 16);

// Controller Functions
const convertDecimalToBinary = (req, res) => {
    const { number } = req.body;
    if (typeof number !== 'number') {
        return res.status(400).json({ error: 'Invalid input. Expected a number.' });
    }
    const binary = decimalToBinary(number);
    res.json({ decimal: number, binary });
};

const convertBinaryToDecimal = (req, res) => {
    const { number } = req.body;
    if (typeof number !== 'string') {
        return res.status(400).json({ error: 'Invalid input. Expected a string.' });
    }
    const decimal = binaryToDecimal(number);
    res.json({ binary: number, decimal });
};

const convertDecimalToOctal = (req, res) => {
    const { number } = req.body;
    if (typeof number !== 'number') {
        return res.status(400).json({ error: 'Invalid input. Expected a number.' });
    }
    const octal = decimalToOctal(number);
    res.json({ decimal: number, octal });
};

const convertOctalToDecimal = (req, res) => {
    const { number } = req.body;
    if (typeof number !== 'string') {
        return res.status(400).json({ error: 'Invalid input. Expected a string.' });
    }
    const decimal = octalToDecimal(number);
    res.json({ octal: number, decimal });
};

const convertDecimalToHexadecimal = (req, res) => {
    const { number } = req.body;
    if (typeof number !== 'number') {
        return res.status(400).json({ error: 'Invalid input. Expected a number.' });
    }
    const hexadecimal = decimalToHexadecimal(number);
    res.json({ decimal: number, hexadecimal });
};

const convertHexadecimalToDecimal = (req, res) => {
    const { number } = req.body;
    if (typeof number !== 'string') {
        return res.status(400).json({ error: 'Invalid input. Expected a string.' });
    }
    const decimal = hexadecimalToDecimal(number);
    res.json({ hexadecimal: number, decimal });
};

const convertBinaryToOctal = (req, res) => {
    const { number } = req.body;
    if (typeof number !== 'string') {
        return res.status(400).json({ error: 'Invalid input. Expected a string.' });
    }
    const decimal = binaryToDecimal(number);
    const octal = decimalToOctal(decimal);
    res.json({ binary: number, octal });
};

const convertOctalToBinary = (req, res) => {
    const { number } = req.body;
    if (typeof number !== 'string') {
        return res.status(400).json({ error: 'Invalid input. Expected a string.' });
    }
    const decimal = octalToDecimal(number);
    const binary = decimalToBinary(decimal);
    res.json({ octal: number, binary });
};

const convertHexadecimalToOctal = (req, res) => {
    const { number } = req.body;
    if (typeof number !== 'string') {
        return res.status(400).json({ error: 'Invalid input. Expected a string.' });
    }
    const decimal = hexadecimalToDecimal(number);
    const octal = decimalToOctal(decimal);
    res.json({ hexadecimal: number, octal });
};

const convertOctalToHexadecimal = (req, res) => {
    const { number } = req.body;
    if (typeof number !== 'string') {
        return res.status(400).json({ error: 'Invalid input. Expected a string.' });
    }
    const decimal = octalToDecimal(number);
    const hexadecimal = decimalToHexadecimal(decimal);
    res.json({ octal: number, hexadecimal });
};

module.exports = {
    convertDecimalToBinary,
    convertBinaryToDecimal,
    convertDecimalToOctal,
    convertOctalToDecimal,
    convertDecimalToHexadecimal,
    convertHexadecimalToDecimal,
    convertBinaryToOctal,
    convertOctalToBinary,
    convertHexadecimalToOctal,
    convertOctalToHexadecimal
};